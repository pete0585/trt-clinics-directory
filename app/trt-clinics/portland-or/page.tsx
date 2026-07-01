import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Portland, OR | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Portland, Oregon and the metro — Beaverton, Gresham, Lake Oswego, and Vancouver, WA. Physician-supervised TRT with telehealth options.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/portland-or' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Portland, Oregon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Portland has TRT options across the spectrum — from Oregon Health & Science University (OHSU), which has urology and endocrinology programs treating hypogonadism, to a growing cluster of men's health and concierge practices serving Portland's active, health-conscious population. The Portland metro also spans the Washington state border — Vancouver, WA is part of the Portland metro, and several clinics serve patients from both states.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Oregon have telehealth-friendly rules for TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oregon has been relatively telehealth-friendly, and several national telehealth TRT providers operate in the state. Post-2025 DEA regulations require at least one in-person visit per year for Schedule III controlled substance prescriptions (including testosterone) in most circumstances — check the most current rules with your provider. Oregon Medical Board regulations require telehealth prescribers to hold an Oregon medical license. Local labs throughout Portland (Quest, LabCorp, OHSU-affiliated labs) handle blood draws for monitoring.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Portland TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some do. Providence Health Plan, Regence BlueCross BlueShield of Oregon, PacificSource, and Moda Health are the major Oregon insurers, and hospital-affiliated programs (OHSU, Legacy Health, Providence) typically accept most of them. Oregon's large tech and outdoor industry employer base provides many workers with good ACA-compliant plans. Many standalone men's health clinics in Portland operate on a cash-pay or membership model. Confirm your plan before scheduling.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Portland-Vancouver TRT market like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Portland's outdoor, active culture drives strong interest in performance optimization and preventive health — including TRT. The Portland-Vancouver bi-state metro creates some unique considerations: Oregon and Washington have different pharmacy regulations and prescribing rules. Washington-licensed providers serve the Vancouver side; Oregon-licensed providers serve Portland proper. Some concierge practices work across both states. If you live in Vancouver, WA, confirm your chosen clinic's Washington prescribing authorization.",
      },
    },
  ],
}

export default async function PortlandTRTPage() {
  const { listings } = await getListings({ state: 'OR' })
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
          <Link href="/trt-clinics/or" className="hover:text-brand-blue">Oregon</Link>
          <span>/</span>
          <span>Portland</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Portland, OR
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Portland&apos;s health-conscious, outdoor-active culture drives strong demand for performance
            and wellness optimization — including testosterone replacement therapy. OHSU (Oregon Health
            &amp; Science University) provides academic urology and endocrinology for complex cases, while
            the Portland metro also has a growing market of men&apos;s health and concierge practices.
            The Portland-Vancouver, WA metro creates a bi-state market — several clinics serve
            patients across both Oregon and Washington.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Portland-Vancouver metro</span>
            <span>·</span>
            <span>OR &amp; WA clinics</span>
            <span>·</span>
            <span>Insurance options</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Portland, OR</h2>
              <Link href="/listings?state=OR" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all OR clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in Oregon.</p>
            <Link href="/listings?state=OR" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Oregon Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Portland TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in Oregon</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare physician-supervised testosterone clinics across Portland, Eugene,
            Salem, and statewide. Filter by insurance, delivery method, and telehealth.
          </p>
          <Link
            href="/listings?state=OR"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All Oregon Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects →</Link>
            <Link href="/categories/telehealth-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Telehealth TRT →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
