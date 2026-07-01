import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Philadelphia, PA | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Philadelphia and the surrounding metro — Camden, Wilmington, Cherry Hill, and King of Prussia. Compare physician-supervised TRT providers by insurance, delivery method, and telehealth availability.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/philadelphia-pa' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics near Philadelphia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Philadelphia metro has multiple TRT options across Pennsylvania, New Jersey, and Delaware — including suburban clinics in Cherry Hill, King of Prussia, Wilmington, and Camden County. Both in-person and telehealth providers serve the region.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Philadelphia TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some do. UnitedHealthcare, Aetna, and BCBS of Pennsylvania are commonly accepted by Philadelphia-area TRT providers. Many cash-pay clinics also operate in the region, particularly in the Rittenhouse and Center City neighborhoods. Call ahead to confirm your plan is accepted before booking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can veterans get testosterone therapy through the Philadelphia VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Philadelphia VA Medical Center — one of the oldest VA hospitals in the country — offers men\'s health and testosterone evaluation through its primary care and endocrinology programs. Wait times at the VA can be significant; private TRT clinics in the Philadelphia area offer faster access and more delivery options (including pellets and newer oral formulations not stocked by the VA).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of TRT in Philadelphia without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash-pay TRT in Philadelphia typically runs $100–300/month for clinic fees plus medication cost. Injectable testosterone cypionate is the lowest-cost protocol. Pellets run higher due to the insertion procedure. Concierge and men\'s health-focused clinics in the Philadelphia suburbs may charge premium pricing for a higher-touch experience.',
      },
    },
  ],
}

export default async function PhiladelphiaTRTPage() {
  const { listings } = await getListings({ state: 'PA' })
  const featuredListings = listings.slice(0, 9)

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
          <Link href="/trt-clinics/pa" className="hover:text-brand-blue">Pennsylvania</Link>
          <span>/</span>
          <span>Philadelphia</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Philadelphia, PA
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Philadelphia is home to Penn Medicine and Jefferson Health, both of which have established
            men&apos;s health programs. The city also has one of the largest VA medical centers on the
            East Coast — serving a significant veteran and active-duty military community — and a
            competitive private TRT clinic market across the metro including South Jersey and Delaware.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Philadelphia metro</span>
            <span>·</span>
            <span>PA, NJ &amp; DE clinics</span>
            <span>·</span>
            <span>Insurance options</span>
            <span>·</span>
            <span>Veteran-friendly providers</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Philadelphia, PA</h2>
              <Link href="/listings?state=PA" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all PA clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in Pennsylvania.</p>
            <Link href="/listings?state=PA" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Pennsylvania Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Philadelphia TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in Pennsylvania</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare physician-supervised testosterone clinics across the Philadelphia metro,
            Pittsburgh, Harrisburg, and statewide. Filter by insurance, delivery method, and telehealth.
          </p>
          <Link
            href="/listings?state=PA"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All Pennsylvania Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT: What&apos;s the Difference? →</Link>
            <Link href="/categories/trt-for-veterans" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT for Veterans →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
