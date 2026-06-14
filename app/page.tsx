import { Suspense } from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Shield, Zap, CheckCircle, ChevronRight, Users, Search } from 'lucide-react'
import SearchBar from '@/components/SearchBar'
import ListingCard from '@/components/ListingCard'
import { getFeaturedListings, getTotalListingCount, getActiveCities } from '@/lib/data'
import { getStateName } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'FindTRTClinic — Find a TRT Clinic Near You | Testosterone Replacement Therapy Directory',
  description: 'Find testosterone replacement therapy clinics near you. Filter by insurance, treatment type (injections, pellets, cream), physician supervision, and telehealth availability. 2,000+ clinics nationwide.',
  openGraph: {
    title: 'FindTRTClinic — Find a TRT Clinic Near You',
    description: 'The most comprehensive directory of TRT and hormone optimization clinics. Filter by what actually matters: insurance, treatment type, and physician supervision.',
    url: 'https://findtrtclinic.com',
  },
}

const POPULAR_CITIES = [
  { city: 'Houston', state: 'TX' },
  { city: 'Dallas', state: 'TX' },
  { city: 'Austin', state: 'TX' },
  { city: 'Phoenix', state: 'AZ' },
  { city: 'Los Angeles', state: 'CA' },
  { city: 'Miami', state: 'FL' },
  { city: 'Chicago', state: 'IL' },
  { city: 'New York', state: 'NY' },
  { city: 'Denver', state: 'CO' },
  { city: 'Nashville', state: 'TN' },
  { city: 'Atlanta', state: 'GA' },
  { city: 'Las Vegas', state: 'NV' },
]

export default async function HomePage() {
  const [featuredListings, totalCount] = await Promise.all([
    getFeaturedListings(6),
    getTotalListingCount(),
  ])

  const displayCount = totalCount > 100 ? `${Math.floor(totalCount / 50) * 50}+` : `${totalCount}+`

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Users className="w-4 h-4 text-brand-orange" aria-label="" />
            <span className="text-blue-100">{displayCount} clinics listed nationwide</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white">
            Find a TRT Clinic<br />
            <span className="text-brand-orange">That Actually Has Answers</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto mb-8 leading-relaxed">
            The only directory that filters TRT clinics by what men actually need: insurance coverage, treatment method, physician supervision, and telehealth availability.
          </p>

          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<div className="h-14 bg-white/20 rounded-lg animate-pulse" />}>
              <SearchBar />
            </Suspense>
          </div>

          {/* Quick filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link href="/listings?clinicType=telehealth" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-blue-100 text-sm px-4 py-2 rounded-full transition-colors">
              <Zap className="w-3.5 h-3.5" aria-label="" /> Telehealth TRT
            </Link>
            <Link href="/listings?insurance=true" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-blue-100 text-sm px-4 py-2 rounded-full transition-colors">
              <CheckCircle className="w-3.5 h-3.5" aria-label="" /> Takes Insurance
            </Link>
            <Link href="/listings?physicianSupervised=true" className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-blue-100 text-sm px-4 py-2 rounded-full transition-colors">
              <Shield className="w-3.5 h-3.5" aria-label="" /> Physician-Supervised
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-brand-navy text-white py-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-blue-200">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-brand-orange" aria-label="" /> Physician-supervised badges</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" aria-label="" /> Insurance filter</span>
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-brand-orange" aria-label="" /> In-person &amp; telehealth</span>
            <span className="flex items-center gap-2"><Search className="w-4 h-4 text-blue-300" aria-label="" /> Treatment type filter</span>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      {featuredListings.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-brand-navy">Featured Clinics</h2>
              <p className="text-brand-steel text-sm mt-1">Verified and featured listings</p>
            </div>
            <Link href="/listings" className="flex items-center gap-1 text-brand-blue font-medium text-sm hover:text-brand-navy transition-colors">
              View all <ChevronRight className="w-4 h-4" aria-label="" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredListings.map(listing => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </section>
      )}

      {/* Browse by City */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-brand-navy mb-6">Browse TRT Clinics by City</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {POPULAR_CITIES.map(({ city, state }) => (
            <Link
              key={`${city}-${state}`}
              href={`/listings?city=${encodeURIComponent(city)}&state=${state}`}
              className="flex flex-col items-center justify-center p-4 bg-white border border-brand-light-2 rounded-xl hover:border-brand-blue hover:shadow-md transition-all text-center group"
            >
              <span className="font-semibold text-brand-navy text-sm group-hover:text-brand-blue transition-colors">{city}</span>
              <span className="text-xs text-brand-steel mt-0.5">{getStateName(state)}</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/listings" className="text-brand-blue hover:text-brand-navy font-medium text-sm transition-colors">
            View all cities →
          </Link>
        </div>
      </section>

      {/* Why FindTRTClinic */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-navy text-center mb-3">Why Men Use FindTRTClinic</h2>
          <p className="text-center text-brand-steel mb-10 max-w-xl mx-auto">Most directories don&apos;t filter by what TRT patients actually need. We do.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                color: 'text-green-600',
                bg: 'bg-green-50',
                title: 'Physician Supervision Badge',
                desc: 'Know if your care is supervised by an MD/DO — not just an NP running a telehealth mill.',
              },
              {
                icon: CheckCircle,
                color: 'text-brand-blue',
                bg: 'bg-brand-blue/5',
                title: 'Insurance Filter',
                desc: 'TRT can cost $150-400/month out of pocket. Find clinics that bill your insurance first.',
              },
              {
                icon: Zap,
                color: 'text-brand-orange',
                bg: 'bg-brand-orange/5',
                title: 'Treatment Type Filter',
                desc: 'Injections, pellets, cream, enclomiphene — clinics vary. Find one that offers what you want.',
              },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="flex flex-col items-center text-center p-6 rounded-xl border border-brand-light-2">
                <div className={`${bg} ${color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" aria-label="" />
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{title}</h3>
                <p className="text-sm text-brand-steel leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterans CTA */}
      <section className="bg-brand-navy text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-3xl mb-3">🎖</div>
          <h2 className="text-2xl font-bold mb-3">Veteran? TRICARE May Cover Your TRT</h2>
          <p className="text-blue-200 mb-6 max-w-xl mx-auto">
            Combat deployments, TBI, and chronic stress suppress testosterone. Many veterans qualify for TRT through the VA or TRICARE. Use our insurance filter to find clinics that accept military coverage.
          </p>
          <Link
            href="/listings?insurance=true"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Find Insurance-Covered TRT Clinics
          </Link>
        </div>
      </section>

      {/* Submit CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-brand-light-2 rounded-2xl p-8 md:p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-brand-navy mb-3">Own a TRT Clinic?</h2>
          <p className="text-brand-steel mb-2 max-w-xl mx-auto">
            Get in front of men who are actively searching for TRT clinics in your city. Free listings available now.
          </p>
          <p className="text-sm text-brand-steel mb-6">
            One new patient per year covers the cost of a Verified listing <strong>15x over.</strong>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/submit"
              className="px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold rounded-xl transition-colors"
            >
              Add Free Listing →
            </Link>
            <Link
              href="/submit#pricing"
              className="px-8 py-3.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-semibold rounded-xl transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
