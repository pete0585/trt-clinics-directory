import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Denver, CO | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Denver, Colorado. Compare physician-supervised TRT providers in Denver, Aurora, Englewood, and the Front Range.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Denver has a robust TRT clinic market driven by the city's strong outdoor and active lifestyle culture, high health consciousness, and above-average percentage of men in prime working ages who value peak performance. Clinics operate throughout the metro — Cherry Creek, Downtown Denver, Aurora, Englewood, and Centennial all have dedicated men's health and TRT providers.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TRT cost in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cash-pay TRT in Denver typically runs $100-400/month depending on the delivery method and the level of monitoring included. Injectable testosterone managed through a urology or primary care practice is the most cost-effective option — often covered by insurance when medically necessary. Concierge TRT clinics in Cherry Creek charge premium rates for a higher-touch experience.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Denver altitude affect testosterone levels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "High altitude living (Denver sits at 5,280 feet) causes the body to produce more red blood cells via elevated erythropoietin. TRT also increases red blood cell production (hematocrit). This combination means Denver-area TRT patients need careful monitoring of hematocrit levels — a good reason to choose a physician-supervised clinic rather than a low-oversight telehealth provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Boulder or Fort Collins near Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Boulder and Fort Collins both have men's health and TRT providers serving the university-educated, performance-oriented populations in those cities. The Front Range corridor from Fort Collins to Colorado Springs has multiple TRT options — or you can use a telehealth TRT platform and receive your medications by mail anywhere in Colorado.",
      },
    },
  ],
}

export default async function BestDenverTRTPage() {
  const { listings } = await getListings({ state: 'CO', city: 'Denver' })
  const featuredListings = listings.slice(0, 10)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-blue">All Clinics</Link>
          <span>/</span>
          <Link href="/trt-clinics/co" className="hover:text-brand-blue">Colorado</Link>
          <span>/</span>
          <span>Denver</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Best TRT Clinics in Denver, CO
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Denver&apos;s active, performance-driven culture has fueled a competitive TRT clinic market.
            At 5,280 feet above sea level, altitude already affects hormone regulation and red blood cell
            production — making physician oversight more important here than in most cities. Whether
            you&apos;re looking for injectable testosterone, pellets, or a telehealth program, Denver
            and the Front Range have experienced TRT providers.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{featuredListings.length > 0 ? `${featuredListings.length}+` : '20+'} clinics listed</span>
            <span>·</span>
            <span>Physician supervised</span>
            <span>·</span>
            <span>Insurance options</span>
            <span>·</span>
            <span>Altitude-aware protocols</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Denver, CO</h2>
              <Link href="/listings?city=Denver&state=CO" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-xl border p-12 text-center mb-12">
            <p className="text-gray-500 mb-4">Search TRT clinics in Denver below.</p>
            <Link href="/listings?city=Denver&state=CO" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Denver Clinics
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Denver TRT: What to Know</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Colorado TRT Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/trt-clinics/co" className="text-sm text-brand-blue hover:opacity-80 font-medium">All Colorado TRT Clinics →</Link>
            <Link href="/guides/how-much-does-trt-cost" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Cost Guide →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/categories/physician-supervised" className="text-sm text-brand-blue hover:opacity-80 font-medium">Physician-Supervised TRT →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
