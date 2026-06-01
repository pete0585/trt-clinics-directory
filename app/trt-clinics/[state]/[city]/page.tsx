import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getCityListings } from '@/lib/data'
import { getStateName, US_STATES } from '@/lib/utils'

interface PageProps {
  params: Promise<{ state: string; city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city } = await params
  const stateAbbr = state.toUpperCase()
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  const stateName = getStateName(stateAbbr)

  return {
    title: `TRT Clinics in ${cityName}, ${stateName} — Find Testosterone Replacement Therapy Providers`,
    description: `Find testosterone replacement therapy clinics in ${cityName}, ${stateName}. Compare clinics by insurance, treatment type, physician supervision, and telehealth availability.`,
    openGraph: {
      url: `https://findtrtclinic.com/trt-clinics/${state}/${city}`,
    },
  }
}

export default async function CityPage({ params }: PageProps) {
  const { state, city } = await params
  const stateAbbr = state.toUpperCase()

  if (!US_STATES[stateAbbr]) notFound()

  const listings = await getCityListings(stateAbbr, city)
  const stateName = getStateName(stateAbbr)
  const cityName = city.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm text-brand-steel mb-6 flex-wrap" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-brand-blue">Home</Link>
        <ChevronRight className="w-4 h-4" aria-label="" />
        <Link href="/listings" className="hover:text-brand-blue">TRT Clinics</Link>
        <ChevronRight className="w-4 h-4" aria-label="" />
        <Link href={`/trt-clinics/${state.toLowerCase()}`} className="hover:text-brand-blue">{stateName}</Link>
        <ChevronRight className="w-4 h-4" aria-label="" />
        <span className="text-brand-navy font-medium">{cityName}</span>
      </nav>

      <h1 className="text-3xl font-bold text-brand-navy mb-2">TRT Clinics in {cityName}, {stateName}</h1>
      <p className="text-brand-steel mb-8">
        {listings.length} testosterone replacement therapy clinic{listings.length !== 1 ? 's' : ''} listed in {cityName}.
        {listings.length === 0 && ' Be the first to add yours.'}
      </p>

      {/* FAQ */}
      <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
        <h2 className="font-bold text-brand-navy mb-4">TRT in {cityName}, {stateName} — Common Questions</h2>
        <div className="space-y-4 text-sm">
          <div>
            <h3 className="font-semibold text-brand-slate">Does insurance cover TRT in {cityName}?</h3>
            <p className="text-brand-steel mt-1">
              Insurance coverage for TRT in {cityName} varies by clinic and plan. Use the &ldquo;Accepts Insurance&rdquo; filter to find clinics that bill insurance directly.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-slate">How much does TRT cost in {cityName}?</h3>
            <p className="text-brand-steel mt-1">
              Out-of-pocket TRT costs in {cityName} range from $150-400/month depending on treatment method and clinic. Injections are typically the lowest-cost option; pellets cost more but require fewer visits.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-slate">Can I get TRT via telehealth in {cityName}?</h3>
            <p className="text-brand-steel mt-1">
              Several clinics serving {cityName} offer telehealth testosterone therapy. Use the &ldquo;Telehealth Available&rdquo; filter to find them.
            </p>
          </div>
        </div>
      </div>

      {/* Listings */}
      {listings.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {listings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-brand-light-2 p-12 text-center">
          <p className="text-brand-steel mb-2">No clinics listed in {cityName} yet.</p>
          <Link href="/submit" className="inline-block mt-2 px-6 py-2.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-dark transition-colors text-sm">
            Add Your Clinic →
          </Link>
        </div>
      )}

      {/* CTA */}
      <div className="mt-10 bg-brand-navy text-white rounded-xl p-6 text-center">
        <h2 className="font-bold text-lg mb-2">Own a TRT Clinic in {cityName}?</h2>
        <p className="text-blue-200 text-sm mb-4">Get listed and start receiving patient inquiries from men in {cityName} searching for TRT.</p>
        <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
          Add Free Listing →
        </Link>
      </div>
    </div>
  )
}
