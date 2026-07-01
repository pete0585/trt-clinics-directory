import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Boston, MA | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Boston and the greater Massachusetts metro — Cambridge, Quincy, Newton, and Worcester. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/boston-ma' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Boston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Boston has a dense healthcare ecosystem — Partners HealthCare (Mass General and Brigham & Women's), Beth Israel Deaconess, and Tufts Medical Center all have endocrinology and urology programs that evaluate and treat low testosterone. The Boston metro also has a growing market of men's health and concierge practices serving professionals throughout Greater Boston, the North Shore, and MetroWest.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Massachusetts have any specific rules about testosterone prescriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Massachusetts has specific requirements for testosterone prescriptions — they must be filled through licensed pharmacies, and compounded testosterone from unlicensed compounders is not permitted. Massachusetts also has strict controlled substance prescribing requirements for Schedule III medications like testosterone. Telehealth TRT providers operating in Massachusetts must comply with state-specific DEA and prescribing regulations. Always confirm your telehealth TRT provider is licensed in Massachusetts before enrolling.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Boston TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some Boston-area TRT providers accept Blue Cross Blue Shield of Massachusetts (the dominant insurer), Harvard Pilgrim Health Care, Tufts Health Plan, and Aetna. Academic medical center programs at MGH and Brigham & Women's typically accept most major Massachusetts plans. The Boston metro also has a well-developed cash-pay men's health clinic market, particularly in the financial district, Back Bay, and South End neighborhoods. Confirm your specific plan before scheduling.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can veterans get testosterone therapy through the VA in Boston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The VA Boston Healthcare System — with facilities in Jamaica Plain, West Roxbury, and Brockton — provides men's health and endocrinology services to eligible veterans. The Boston VA's Primary Care and Specialty Care departments can evaluate low testosterone and manage TRT for qualified veterans. Private TRT clinics in the Boston area offer faster access and more delivery options than the VA, including testosterone pellets, topical gels, and nasal formulations not commonly stocked by VA pharmacies.",
      },
    },
  ],
}

export default async function BostonTRTPage() {
  const { listings } = await getListings({ state: 'MA' })
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
          <Link href="/trt-clinics/ma" className="hover:text-brand-blue">Massachusetts</Link>
          <span>/</span>
          <span>Boston</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Boston, MA
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Boston is one of the world&apos;s leading medical cities — home to Mass General Hospital,
            Brigham &amp; Women&apos;s, and Beth Israel Deaconess, all of which have endocrinology and
            urology programs treating hypogonadism. The metro also has a dense population of aging
            male professionals with high health literacy, driving strong demand for concierge and
            private men&apos;s health practices outside the hospital system. Massachusetts&apos; strict pharmacy
            licensing laws mean TRT here is well-regulated — a feature, not a bug, for patients
            seeking physician-supervised care.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Greater Boston metro</span>
            <span>·</span>
            <span>Academic &amp; private options</span>
            <span>·</span>
            <span>Insurance accepted</span>
            <span>·</span>
            <span>Veteran-friendly providers</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Boston, MA</h2>
              <Link href="/listings?state=MA" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all MA clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in Massachusetts.</p>
            <Link href="/listings?state=MA" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Massachusetts Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Boston TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in Massachusetts</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare physician-supervised testosterone clinics across the Boston metro,
            Worcester, Springfield, and statewide. Filter by insurance, delivery method, and telehealth.
          </p>
          <Link
            href="/listings?state=MA"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All Massachusetts Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects →</Link>
            <Link href="/categories/trt-for-veterans" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT for Veterans →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
