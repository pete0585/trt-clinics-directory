-- TRT Clinics Directory — Initial Schema
-- Supabase project: fbuqrnzofktepkzyfmhy (Directories project)
-- Table prefix: trt_

-- Main listings table
CREATE TABLE IF NOT EXISTS trt_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  clinic_name TEXT NOT NULL,
  address_line1 TEXT,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zip TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  phone TEXT,
  website TEXT,
  email TEXT,
  booking_url TEXT,
  clinic_type TEXT DEFAULT 'in_person',
  treatment_options TEXT[] NOT NULL DEFAULT '{}',
  insurance_accepted BOOLEAN NOT NULL DEFAULT false,
  insurance_list TEXT[] NOT NULL DEFAULT '{}',
  physician_supervised BOOLEAN NOT NULL DEFAULT false,
  physician_credentials TEXT,
  telehealth_available BOOLEAN NOT NULL DEFAULT false,
  telehealth_states TEXT[] NOT NULL DEFAULT '{}',
  accepts_new_patients BOOLEAN NOT NULL DEFAULT true,
  hours_notes TEXT,
  bio TEXT,
  price_range TEXT,
  listing_tier TEXT NOT NULL DEFAULT 'free',
  listing_tier_rank INTEGER NOT NULL DEFAULT 0,
  claimed BOOLEAN NOT NULL DEFAULT false,
  claimed_at TIMESTAMPTZ,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_expires_at TIMESTAMPTZ,
  source TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  is_approved BOOLEAN NOT NULL DEFAULT true,
  do_not_email BOOLEAN NOT NULL DEFAULT false,
  email_source TEXT,
  search_vector TSVECTOR,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS trt_listings_city_state_idx ON trt_listings(city, state);
CREATE INDEX IF NOT EXISTS trt_listings_state_idx ON trt_listings(state);
CREATE INDEX IF NOT EXISTS trt_listings_tier_rank_idx ON trt_listings(listing_tier_rank DESC);
CREATE INDEX IF NOT EXISTS trt_listings_search_idx ON trt_listings USING gin(search_vector);
CREATE INDEX IF NOT EXISTS trt_listings_geo_idx ON trt_listings(latitude, longitude);
CREATE INDEX IF NOT EXISTS trt_listings_active_idx ON trt_listings(is_active, is_approved);

-- Search vector trigger
CREATE OR REPLACE FUNCTION trt_listings_search_vector_trigger()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector := to_tsvector('english',
    coalesce(NEW.clinic_name, '') || ' ' ||
    coalesce(NEW.city, '') || ' ' ||
    coalesce(NEW.state, '') || ' ' ||
    coalesce(NEW.bio, '') || ' ' ||
    coalesce(NEW.physician_credentials, '') || ' ' ||
    coalesce(array_to_string(NEW.treatment_options, ' '), '')
  );
  NEW.listing_tier_rank := CASE
    WHEN NEW.listing_tier = 'featured' THEN 2
    WHEN NEW.listing_tier = 'verified' THEN 1
    ELSE 0
  END;
  NEW.updated_at := now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trt_listings_search_vector
  BEFORE INSERT OR UPDATE ON trt_listings
  FOR EACH ROW EXECUTE FUNCTION trt_listings_search_vector_trigger();

-- Claims table (custom token flow, not Supabase Auth)
CREATE TABLE IF NOT EXISTS trt_claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id UUID NOT NULL REFERENCES trt_listings(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  token TEXT UNIQUE NOT NULL,
  verified BOOLEAN NOT NULL DEFAULT false,
  verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  expires_at TIMESTAMPTZ NOT NULL,
  nudge_sent_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS trt_claims_listing_id_idx ON trt_claims(listing_id);
CREATE INDEX IF NOT EXISTS trt_claims_token_idx ON trt_claims(token);

-- Payments table
CREATE TABLE IF NOT EXISTS trt_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id UUID NOT NULL REFERENCES trt_listings(id) ON DELETE CASCADE,
  stripe_session_id TEXT,
  stripe_customer_id TEXT,
  amount INTEGER,
  status TEXT NOT NULL DEFAULT 'pending',
  tier TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS trt_payments_listing_id_idx ON trt_payments(listing_id);
CREATE INDEX IF NOT EXISTS trt_payments_stripe_session_idx ON trt_payments(stripe_session_id);

-- Leads table (Month 6+ lead routing)
CREATE TABLE IF NOT EXISTS trt_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  listing_id UUID NOT NULL REFERENCES trt_listings(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  routed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS trt_leads_listing_id_idx ON trt_leads(listing_id);
CREATE INDEX IF NOT EXISTS trt_leads_status_idx ON trt_leads(status);

-- Proximity search RPC
-- Uses search_lat/search_lng to avoid collision with listing lat/lng columns
CREATE OR REPLACE FUNCTION find_trt_near(
  search_lat DOUBLE PRECISION,
  search_lng DOUBLE PRECISION,
  radius_miles DOUBLE PRECISION DEFAULT 25
)
RETURNS TABLE (
  id UUID,
  slug TEXT,
  clinic_name TEXT,
  city TEXT,
  state TEXT,
  phone TEXT,
  website TEXT,
  clinic_type TEXT,
  treatment_options TEXT[],
  insurance_accepted BOOLEAN,
  physician_supervised BOOLEAN,
  physician_credentials TEXT,
  telehealth_available BOOLEAN,
  listing_tier TEXT,
  listing_tier_rank INTEGER,
  distance_miles DOUBLE PRECISION
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    l.id,
    l.slug,
    l.clinic_name,
    l.city,
    l.state,
    l.phone,
    l.website,
    l.clinic_type,
    l.treatment_options,
    l.insurance_accepted,
    l.physician_supervised,
    l.physician_credentials,
    l.telehealth_available,
    l.listing_tier,
    l.listing_tier_rank,
    (
      3959 * acos(
        cos(radians(search_lat)) * cos(radians(l.latitude)) *
        cos(radians(l.longitude) - radians(search_lng)) +
        sin(radians(search_lat)) * sin(radians(l.latitude))
      )
    ) AS distance_miles
  FROM trt_listings l
  WHERE
    l.latitude IS NOT NULL AND
    l.longitude IS NOT NULL AND
    l.is_active = true AND
    l.is_approved = true AND
    (
      3959 * acos(
        cos(radians(search_lat)) * cos(radians(l.latitude)) *
        cos(radians(l.longitude) - radians(search_lng)) +
        sin(radians(search_lat)) * sin(radians(l.latitude))
      )
    ) <= radius_miles
  ORDER BY l.listing_tier_rank DESC, distance_miles ASC;
END;
$$ LANGUAGE plpgsql;

-- Grant access
GRANT ALL ON trt_listings TO service_role, anon, authenticated;
GRANT ALL ON trt_claims TO service_role, anon, authenticated;
GRANT ALL ON trt_payments TO service_role, anon, authenticated;
GRANT ALL ON trt_leads TO service_role, anon, authenticated;
GRANT EXECUTE ON FUNCTION find_trt_near TO service_role, anon, authenticated;
GRANT EXECUTE ON FUNCTION trt_listings_search_vector_trigger TO service_role;
