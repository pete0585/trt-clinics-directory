import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Denver, CO | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Denver, CO. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/denver-co' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Are there TRT clinics in Denver, CO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Denver has a well-developed TRT clinic market across downtown, Cherry Creek, DTC (Denver Tech Center), and Lakewood. UCHealth (University of Colorado Health) and SCL Health (Saint Joseph\'s, Lutheran) have endocrinology and urology programs for hypogonadism. The private men\'s health clinic market in Denver has grown rapidly with the city\'s tech influx, offering concierge testosterone programs, morning appointment windows, and telehealth options.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does altitude affect testosterone in Denver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Altitude can have complex effects on testosterone. Initial high-altitude exposure can cause temporary suppression of testosterone due to hypoxic stress and cortisol elevation. Long-term altitude adaptation in healthy men generally normalizes hormone levels, but individual responses vary. Denver men experiencing fatigue, libido changes, or mood disruption should include altitude-specific context when discussing symptoms with their TRT provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Colorado have specific rules about TRT prescriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Colorado follows federal DEA Schedule III prescribing requirements for testosterone. Colorado Medical Board rules require a valid patient-physician relationship for controlled substance prescribing. Colorado\'s medical marijuana legalization has made the state relatively progressive toward personal health choices. Online TRT providers serving Colorado must be licensed in-state. Colorado pharmacies — including compounding pharmacies for testosterone cream/gel/pellet formulations — must be licensed in Colorado.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Denver TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Academic and hospital-affiliated providers (UCHealth, SCL Health) accept most major Colorado insurance plans including Anthem, Cigna, UnitedHealthcare, and Colorado Medicaid (Health First Colorado). Private men\'s health clinics in Cherry Creek and DTC typically use direct-pay monthly programs. Many Denver patients find the cash-pay model faster and more comprehensive, given longer waits for new patient endocrinology appointments at major hospital systems.",
      },
    }
  ],
}

export default async function DenverTRTPage() {
  const { listings } = await getListings({ state: 'CO' })
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
          <span>Denver, CO</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Denver, CO
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Denver's active outdoor lifestyle culture — skiing, cycling, trail running — drives high awareness of fitness optimization and hormone health. The Mile High altitude can mildly affect testosterone metabolism, giving Denver men a specific incentive to monitor and optimize hormone levels. UCHealth, SCL Health, and a dense private clinic market serve Denver's growing professional population.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Physician-supervised</span>
            <span>·</span>
            <span>Insurance options</span>
            <span>·</span>
            <span>Telehealth available</span>
            <span>·</span>
            <span>Multiple delivery methods</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Denver, CO</h2>
              <Link href="/listings?state=CO" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all CO clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in CO.</p>
            <Link href="/listings?state=CO" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search CO Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Denver TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/listings?state=CO" className="text-sm text-brand-blue hover:opacity-80 font-medium">All CO TRT Clinics →</Link>
            <Link href="/guides/online-trt-vs-clinic" className="text-sm text-brand-blue hover:opacity-80 font-medium">Online TRT vs. In-Person Clinic →</Link>
            <Link href="/guides/trt-clinic-vs-urologist" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinic vs. Urologist →</Link>
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">Browse All Clinics →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
