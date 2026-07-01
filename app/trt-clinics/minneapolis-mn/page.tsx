import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Minneapolis, MN | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Minneapolis and the Twin Cities metro — Saint Paul, Bloomington, Edina, and Maple Grove. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/minneapolis-mn' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Minneapolis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Minneapolis has a growing men's health clinic market alongside its major hospital systems. M Health Fairview (University of Minnesota) and Hennepin Healthcare have urology and endocrinology departments that evaluate and treat hypogonadism. HealthPartners (Park Nicollet) offers men's health services across the Twin Cities. Mayo Clinic's men's health and endocrinology program — 85 miles south in Rochester — also draws Minneapolis-area patients for complex cases.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover TRT in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Minnesota has strong insurance coverage requirements. Blue Cross Blue Shield of Minnesota, HealthPartners, Medica, and UCare — the major Minnesota plans — typically cover TRT when medically indicated with documented low testosterone on lab testing. Minnesota's large employer base (Target, Best Buy, 3M, healthcare systems) means many Twin Cities men have ACA-compliant employer-sponsored plans with good prescription coverage. Testosterone cypionate injectable is on most formularies; pellets and newer oral formulations may require prior authorization.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get telehealth TRT in Minnesota?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Minnesota has telehealth-friendly prescribing regulations, and several national telehealth TRT providers operate in the state. For telehealth TRT in Minnesota, the prescribing physician must be licensed in Minnesota, and post-2025 DEA rules require at least one in-person visit per year for controlled substance prescriptions in most circumstances. Confirm your telehealth provider's Minnesota-specific compliance before enrolling. Local labs (Quest, LabCorp, or your primary care provider) can handle blood draws for monitoring.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of TRT in Minneapolis without insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cash-pay TRT in Minneapolis typically runs $100–275/month depending on protocol and provider type. Injectable testosterone cypionate is the most cost-effective option. The Twin Cities has a mix of hospital-affiliated programs (higher cost, more comprehensive) and direct-pay men's health clinics that offer competitive pricing for stable patients. Some concierge-style practices in Edina and Wayzata charge premium pricing for a more personalized experience.",
      },
    },
  ],
}

export default async function MinneapolisTRTPage() {
  const { listings } = await getListings({ state: 'MN' })
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
          <Link href="/trt-clinics/mn" className="hover:text-brand-blue">Minnesota</Link>
          <span>/</span>
          <span>Minneapolis</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Minneapolis, MN
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Minneapolis is served by M Health Fairview (University of Minnesota) and Hennepin Healthcare
            for academic men&apos;s health care, and by HealthPartners across its Twin Cities clinic network.
            Mayo Clinic&apos;s renowned men&apos;s health and endocrinology program is 85 miles south in
            Rochester — drawing complex cases from across the upper Midwest. The Twin Cities also has
            a growing cluster of direct-pay men&apos;s health and concierge practices emerging outside
            the hospital system, with Minnesota&apos;s strong insurance market providing good coverage
            options for most patients.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Twin Cities metro</span>
            <span>·</span>
            <span>Academic &amp; private options</span>
            <span>·</span>
            <span>Insurance accepted</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Minneapolis, MN</h2>
              <Link href="/listings?state=MN" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all MN clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in Minnesota.</p>
            <Link href="/listings?state=MN" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Minnesota Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Minneapolis TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in Minnesota</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare physician-supervised testosterone clinics across the Twin Cities metro,
            Rochester, and statewide. Filter by insurance, delivery method, and telehealth.
          </p>
          <Link
            href="/listings?state=MN"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All Minnesota Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
            <Link href="/guides/trt-timeline-how-long-to-work" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Timeline →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
