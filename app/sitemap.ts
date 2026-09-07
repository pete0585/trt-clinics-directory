import { existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'
import { cityToSlug } from '@/lib/utils'
import { SITE_URL } from '@/lib/site'

const CITIES_DIR = join(process.cwd(), 'app', 'trt-clinics')

function getStaticCitySitemapEntries(): MetadataRoute.Sitemap {
  if (!existsSync(CITIES_DIR)) return []

  return readdirSync(CITIES_DIR, { withFileTypes: true })
    .filter((entry) => {
      if (!entry.isDirectory()) return false
      if (entry.name.startsWith('[') || entry.name.startsWith('(')) return false
      return existsSync(join(CITIES_DIR, entry.name, 'page.tsx'))
    })
    .map((entry) => {
      const pagePath = join(CITIES_DIR, entry.name, 'page.tsx')
      return {
        url: `${SITE_URL}/trt-clinics/${entry.name}`,
        lastModified: statSync(pagePath).mtime,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }
    })
}

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

  const staticCityUrls = getStaticCitySitemapEntries()

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
    ...staticCityUrls,
    ...cityUrls,
    ...listingUrls,
  ]
}
