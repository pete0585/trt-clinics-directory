import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'
import { cityToSlug, US_STATES } from '@/lib/utils'

const SITE_URL = 'https://findtrtclinic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // Get all active listing slugs
  const { data: listings } = await supabase
    .from('trt_listings')
    .select('slug, updated_at')
    .eq('is_active', true)
    .eq('is_approved', true)

  // Get unique state+city combos
  const { data: locations } = await supabase
    .from('trt_listings')
    .select('city, state')
    .eq('is_active', true)
    .eq('is_approved', true)

  const listingUrls: MetadataRoute.Sitemap = (listings ?? []).map(l => ({
    url: `${SITE_URL}/listings/${l.slug}`,
    lastModified: new Date(l.updated_at),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  const cityMap = new Map<string, string>()
  for (const loc of (locations ?? [])) {
    if (loc.city && loc.state) {
      cityMap.set(`${loc.state}__${loc.city}`, `${loc.state}__${loc.city}`)
    }
  }

  const stateSet = new Set<string>()
  const cityUrls: MetadataRoute.Sitemap = []
  for (const [key] of cityMap) {
    const [state, city] = key.split('__')
    stateSet.add(state.toLowerCase())
    cityUrls.push({
      url: `${SITE_URL}/trt-clinics/${state.toLowerCase()}/${cityToSlug(city)}`,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  }

  const stateUrls: MetadataRoute.Sitemap = Array.from(stateSet).map(state => ({
    url: `${SITE_URL}/trt-clinics/${state}`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/listings`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/submit`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...stateUrls,
    ...cityUrls,
    ...listingUrls,
  ]
}
