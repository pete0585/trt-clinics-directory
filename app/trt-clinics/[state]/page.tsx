import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getStateListings } from '@/lib/data'
import { getStateName, US_STATES, cityToSlug } from '@/lib/utils'

interface PageProps {
  params: Promise<{ state: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state } = await params
  const stateAbbr = state.toUpperCase()
  const stateName = getStateName(stateAbbr)

  return {
    title: `TRT Clinics in ${stateName} — Testosterone Replacement Therapy Providers`,
    description: `Browse all testosterone replacement therapy clinics in ${stateName}. Filter by city, treatment type, insurance, and physician supervision.`,
    openGraph: {
      url: `https://findtrtclinic.com/trt-clinics/${state}`,
    },
  }
}

export default async function StatePage({ params }: PageProps) {
  const { state } = await params
  const stateAbbr = state.toUpperCase()

  if (!US_STATES[stateAbbr]) notFound()

  const listings = await getStateListings(stateAbbr)
  const stateName = getStateName(stateAbbr)

  // Group by city
  const cityCounts = new Map<string, number>()
  for (const l of listings) {
    cityCounts.set(l.city, (cityCounts.get(l.city) ?? 0) + 1)
  }

  const cities = Array.from(cityCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-brand-steel mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-blue">Home</Link>
        <ChevronRight className="w-4 h-4" aria-label="" />
        <Link href="/listings" className="hover:text-brand-blue">TRT Clinics</Link>
        <ChevronRight className="w-4 h-4" aria-label="" />
        <span className="text-brand-navy font-medium">{stateName}</span>
      </nav>

      <h1 className="text-3xl font-bold text-brand-navy mb-2">TRT Clinics in {stateName}</h1>
      <p className="text-brand-steel mb-8">
        {listings.length} testosterone replacement therapy clinic{listings.length !== 1 ? 's' : ''} listed in {stateName}.
      </p>

      {/* City links */}
      {cities.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-bold text-brand-navy mb-3">Browse by City</h2>
          <div className="flex flex-wrap gap-2">
            {cities.map(([city, count]) => (
              <Link
                key={city}
                href={`/trt-clinics/${state.toLowerCase()}/${cityToSlug(city)}`}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-brand-light-2 rounded-lg hover:border-brand-blue hover:text-brand-blue text-sm transition-colors"
              >
                <span className="font-medium text-brand-navy">{city}</span>
                <span className="text-brand-steel text-xs">({count})</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
        <h2 className="font-bold text-brand-navy mb-4">Common Questions About TRT in {stateName}</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-brand-slate text-sm">Does insurance cover TRT in {stateName}?</h3>
            <p className="text-brand-steel text-sm mt-1">
              Some clinics in {stateName} accept insurance for testosterone replacement therapy when there is a documented medical need (low testosterone confirmed by blood work). Use the &ldquo;Accepts Insurance&rdquo; filter to find those clinics.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-slate text-sm">How do I find a TRT doctor near me in {stateName}?</h3>
            <p className="text-brand-steel text-sm mt-1">
              Use the search bar above to filter by your city in {stateName}. You can also filter by treatment type (injections, pellets, etc.) and whether you want telehealth or in-person care.
            </p>
          </div>
        </div>
      </div>

      {/* Listings */}
      {listings.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.slice(0, 24).map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-brand-light-2 p-12 text-center">
          <p className="text-brand-steel mb-4">No clinics listed in {stateName} yet.</p>
          <Link href="/submit" className="text-brand-blue hover:underline text-sm">Add your clinic →</Link>
        </div>
      )}
    </div>
  )
}
