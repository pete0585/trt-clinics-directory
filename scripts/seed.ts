/**
 * Seed script for TRT Clinics Directory
 *
 * Sources (per SPEC):
 * 1. DataForSEO Google Maps SERP — "TRT clinic" in 50 US metros
 * 2. Low T Center scrape (~110 locations)
 * 3. Ageless Men's Health (~83 locations)
 * 4. Gameday Men's Health (~325 locations)
 * 5. TRT Advisor existing listings (~500 providers)
 *
 * Run: SUPABASE_URL=... SUPABASE_SERVICE_KEY=... npx ts-node scripts/seed.ts
 */

import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://fbuqrnzofktepkzyfmhy.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

function slugify(text: string): string {
  return text.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function generateSlug(clinicName: string, city: string, state: string): string {
  return slugify(`${clinicName} ${city} ${state}`)
}

// Sample seed data — replace with real DataForSEO + Firecrawl output
const SAMPLE_CLINICS = [
  {
    clinic_name: 'Low T Center Austin',
    address_line1: '4301 W William Cannon Dr',
    city: 'Austin',
    state: 'TX',
    zip: '78749',
    phone: '(512) 555-0101',
    website: 'https://lowtcenter.com',
    clinic_type: 'in_person',
    treatment_options: ['injections', 'pellets'],
    insurance_accepted: true,
    physician_supervised: true,
    physician_credentials: 'MD',
    accepts_new_patients: true,
    source: 'lowtcenter',
  },
  {
    clinic_name: 'Gameday Men\'s Health Dallas',
    address_line1: '5601 Belt Line Rd',
    city: 'Dallas',
    state: 'TX',
    zip: '75254',
    phone: '(972) 555-0102',
    website: 'https://gamedaymenshealth.com',
    clinic_type: 'in_person',
    treatment_options: ['injections', 'enclomiphene'],
    insurance_accepted: false,
    physician_supervised: true,
    physician_credentials: 'DO',
    accepts_new_patients: true,
    source: 'gameday',
  },
  {
    clinic_name: 'Ageless Men\'s Health Phoenix',
    address_line1: '4100 N Central Ave',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85012',
    phone: '(602) 555-0103',
    website: 'https://agelessmenshealth.com',
    clinic_type: 'hybrid',
    treatment_options: ['pellets', 'cream'],
    insurance_accepted: false,
    physician_supervised: true,
    physician_credentials: 'MD',
    telehealth_available: true,
    accepts_new_patients: true,
    source: 'ageless',
  },
]

async function seedListings() {
  console.log('Starting TRT Clinics seed...')
  let inserted = 0
  let skipped = 0

  // Fetch existing slugs for dedup
  const { data: existing } = await supabase
    .from('trt_listings')
    .select('slug')
    .order('id')

  const existingSlugs = new Set<string>((existing ?? []).map((r: { slug: string }) => r.slug))
  console.log(`Found ${existingSlugs.size} existing listings`)

  for (const clinic of SAMPLE_CLINICS) {
    const slug = generateSlug(clinic.clinic_name, clinic.city, clinic.state)

    if (existingSlugs.has(slug)) {
      skipped++
      continue
    }

    const record = {
      slug,
      clinic_name: clinic.clinic_name,
      address_line1: clinic.address_line1 ?? null,
      city: clinic.city,
      state: clinic.state,
      zip: clinic.zip ?? null,
      phone: clinic.phone ?? null,
      website: clinic.website ?? null,
      email: null,
      booking_url: null,
      clinic_type: clinic.clinic_type ?? 'in_person',
      treatment_options: clinic.treatment_options ?? [],
      insurance_accepted: clinic.insurance_accepted ?? false,
      insurance_list: [],
      physician_supervised: clinic.physician_supervised ?? false,
      physician_credentials: (clinic as Record<string, unknown>).physician_credentials as string ?? null,
      telehealth_available: (clinic as Record<string, unknown>).telehealth_available as boolean ?? false,
      telehealth_states: [],
      accepts_new_patients: clinic.accepts_new_patients ?? true,
      hours_notes: null,
      bio: null,
      price_range: null,
      listing_tier: 'free',
      listing_tier_rank: 0,
      claimed: false,
      claimed_at: null,
      stripe_customer_id: null,
      stripe_subscription_id: null,
      plan_expires_at: null,
      source: clinic.source ?? 'seed',
      is_active: true,
      is_approved: true,
      do_not_email: false,
      email_source: null,
    }

    const { error } = await supabase.from('trt_listings').insert(record)
    if (error) {
      if (error.code === '23505') {
        skipped++
      } else {
        console.error(`Failed to insert ${clinic.clinic_name}:`, error.message)
      }
    } else {
      existingSlugs.add(slug)
      inserted++
      if (inserted % 25 === 0) {
        console.log(`  Inserted ${inserted} listings...`)
      }
    }
  }

  console.log(`\nSeed complete: ${inserted} inserted, ${skipped} skipped`)
  console.log('\nNext steps:')
  console.log('1. Run DataForSEO scraper for "TRT clinic" in 50 metros')
  console.log('2. Scrape lowtcenter.com/locations/ with Firecrawl')
  console.log('3. Scrape agelessmenshealth.com/locations/ with Firecrawl')
  console.log('4. Scrape gamedaymenshealth.com/locations/ with Firecrawl')
  console.log('5. Geocode all listings via Nominatim')
}

seedListings().catch(console.error)
