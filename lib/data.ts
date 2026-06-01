import { createClient } from '@/lib/supabase/server'
import type { TrtListing, ListingFilters } from '@/types'

const PAGE_SIZE = 24

export async function getListing(slug: string): Promise<TrtListing | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .eq('is_approved', true)
    .single()
  return data as TrtListing | null
}

export async function getListingById(id: string): Promise<TrtListing | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('*')
    .eq('id', id)
    .single()
  return data as TrtListing | null
}

export async function getListings(filters: ListingFilters = {}): Promise<{
  listings: TrtListing[]
  total: number
  page: number
  totalPages: number
}> {
  const supabase = await createClient()
  const page = filters.page ?? 1
  const offset = (page - 1) * PAGE_SIZE

  let query = supabase
    .from('trt_listings')
    .select('*', { count: 'exact' })
    .eq('is_active', true)
    .eq('is_approved', true)

  if (filters.city) {
    query = query.ilike('city', filters.city)
  }
  if (filters.state) {
    query = query.eq('state', filters.state.toUpperCase())
  }
  if (filters.clinicType) {
    query = query.eq('clinic_type', filters.clinicType)
  }
  if (filters.insurance === true) {
    query = query.eq('insurance_accepted', true)
  }
  if (filters.physicianSupervised === true) {
    query = query.eq('physician_supervised', true)
  }
  if (filters.telehealth === true) {
    query = query.eq('telehealth_available', true)
  }
  if (filters.treatmentOption) {
    query = query.contains('treatment_options', [filters.treatmentOption])
  }
  if (filters.search) {
    query = query.textSearch('search_vector', filters.search, { type: 'websearch' })
  }

  const { data, count } = await query
    .order('listing_tier_rank', { ascending: false })
    .order('created_at', { ascending: false })
    .range(offset, offset + PAGE_SIZE - 1)

  const total = count ?? 0
  return {
    listings: (data ?? []) as TrtListing[],
    total,
    page,
    totalPages: Math.ceil(total / PAGE_SIZE),
  }
}

export async function getFeaturedListings(limit = 6): Promise<TrtListing[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('*')
    .eq('is_active', true)
    .eq('is_approved', true)
    .in('listing_tier', ['featured', 'verified'])
    .order('listing_tier_rank', { ascending: false })
    .limit(limit)
  return (data ?? []) as TrtListing[]
}

export async function getCityListings(state: string, city: string): Promise<TrtListing[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('*')
    .eq('is_active', true)
    .eq('is_approved', true)
    .eq('state', state.toUpperCase())
    .ilike('city', city.replace(/-/g, ' '))
    .order('listing_tier_rank', { ascending: false })
  return (data ?? []) as TrtListing[]
}

export async function getStateListings(state: string): Promise<TrtListing[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('*')
    .eq('is_active', true)
    .eq('is_approved', true)
    .eq('state', state.toUpperCase())
    .order('listing_tier_rank', { ascending: false })
    .order('city', { ascending: true })
  return (data ?? []) as TrtListing[]
}

export async function getTotalListingCount(): Promise<number> {
  const supabase = await createClient()
  const { count } = await supabase
    .from('trt_listings')
    .select('*', { count: 'exact', head: true })
    .eq('is_active', true)
    .eq('is_approved', true)
  return count ?? 0
}

export async function getActiveCities(): Promise<{ city: string; state: string; count: number }[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('city, state')
    .eq('is_active', true)
    .eq('is_approved', true)

  if (!data) return []

  const cityMap = new Map<string, number>()
  for (const row of data) {
    const key = `${row.city}__${row.state}`
    cityMap.set(key, (cityMap.get(key) ?? 0) + 1)
  }

  return Array.from(cityMap.entries())
    .map(([key, count]) => {
      const [city, state] = key.split('__')
      return { city, state, count }
    })
    .filter(({ count }) => count >= 1)
    .sort((a, b) => b.count - a.count)
}

export async function getActiveStates(): Promise<{ state: string; count: number }[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('trt_listings')
    .select('state')
    .eq('is_active', true)
    .eq('is_approved', true)

  if (!data) return []

  const stateMap = new Map<string, number>()
  for (const row of data) {
    stateMap.set(row.state, (stateMap.get(row.state) ?? 0) + 1)
  }

  return Array.from(stateMap.entries())
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
}

export async function getAdminListings(page = 1, status: 'pending' | 'all' = 'pending'): Promise<{
  listings: TrtListing[]
  total: number
}> {
  const supabase = await createClient()
  const offset = (page - 1) * 50

  let query = supabase
    .from('trt_listings')
    .select('*', { count: 'exact' })

  if (status === 'pending') {
    query = query.eq('is_approved', false)
  }

  const { data, count } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + 49)

  return {
    listings: (data ?? []) as TrtListing[],
    total: count ?? 0,
  }
}
