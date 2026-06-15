export type ListingTier = 'free' | 'verified' | 'featured' | 'unclaimed'
export type ClinicType = 'in_person' | 'telehealth' | 'hybrid'
export type TreatmentOption = 'injections' | 'pellets' | 'cream' | 'oral' | 'enclomiphene' | 'peptides'
export type PhysicianCredential = 'MD' | 'DO' | 'NP' | 'PA'
export type PriceRange = 'budget' | 'moderate' | 'premium'

export interface TrtListing {
  id: string
  slug: string
  clinic_name: string
  address_line1: string | null
  city: string
  state: string
  zip: string | null
  latitude: number | null
  longitude: number | null
  phone: string | null
  website: string | null
  email: string | null
  booking_url: string | null
  clinic_type: ClinicType | null
  treatment_options: TreatmentOption[]
  insurance_accepted: boolean
  insurance_list: string[]
  physician_supervised: boolean
  physician_credentials: PhysicianCredential | null
  telehealth_available: boolean
  telehealth_states: string[]
  accepts_new_patients: boolean
  hours_notes: string | null
  bio: string | null
  price_range: PriceRange | null
  listing_tier: ListingTier
  listing_tier_rank: number
  claimed: boolean
  claimed_at: string | null
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  plan_expires_at: string | null
  source: string | null
  is_active: boolean
  is_approved: boolean
  do_not_email: boolean
  email_source: string | null
  created_at: string
  updated_at: string
}

export interface TrtClaim {
  id: string
  listing_id: string
  email: string
  token: string
  verified: boolean
  verified_at: string | null
  created_at: string
  expires_at: string
  nudge_sent_at: string | null
}

export interface TrtPayment {
  id: string
  listing_id: string
  stripe_session_id: string | null
  stripe_customer_id: string | null
  amount: number | null
  status: string
  tier: string | null
  created_at: string
}

export interface TrtLead {
  id: string
  listing_id: string
  name: string | null
  email: string | null
  phone: string | null
  message: string | null
  status: string
  routed_at: string | null
  created_at: string
}

export interface ListingFilters {
  city?: string
  state?: string
  clinicType?: ClinicType
  treatmentOption?: TreatmentOption
  insurance?: boolean
  physicianSupervised?: boolean
  telehealth?: boolean
  tier?: ListingTier
  search?: string
  page?: number
}
