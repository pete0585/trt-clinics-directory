import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Seattle, WA | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Seattle, Bellevue, Kirkland, Redmond, Tacoma, and the greater Puget Sound region. Compare physician-supervised TRT providers by insurance and delivery method.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/seattle-wa' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Bellevue and the Eastside?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The Bellevue/Kirkland/Redmond tech corridor has multiple men\'s health and TRT clinics serving Amazon, Microsoft, and Boeing employees who prioritize health optimization. Eastside clinics typically offer evening and early-morning appointments to accommodate demanding schedules. Telehealth options are widely available for the Eastside and can ship medications anywhere in Washington.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Washington state insurance cover TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kaiser Permanente Washington, Premera Blue Cross, and Regence BlueShield — the three dominant Washington state insurers — commonly cover testosterone therapy when medically indicated with lab-confirmed low T and documented symptoms. Providence and Molina Healthcare Washington also cover TRT in most cases. Coverage typically requires a referral from your primary care provider and may need prior authorization for extended treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the typical TRT cost in Seattle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cash-pay TRT in Seattle typically runs $150–350/month depending on the delivery method (injections are lowest cost; pellets are highest) and whether the clinic includes lab monitoring in the fee. Using insurance through Kaiser Permanente WA, Premera, or Regence can reduce out-of-pocket costs to $30–100 per visit after deductible. Seattle-area concierge men\'s health clinics charge premium rates for a more comprehensive service model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is testosterone available via telehealth in Washington state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several telehealth TRT platforms serve Washington state and ship testosterone directly to your home. Washington state law allows controlled substance prescribing via telehealth when the provider has established a valid patient-provider relationship including a medical history and appropriate laboratory work. Local in-person clinics in Seattle and the Eastside are also available for those who prefer face-to-face care.',
      },
    },
  ],
}

export default async function SeattleTRTPage() {
  const { listings } = await getListings({ state: 'WA', city: 'Seattle' })
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
          <Link href="/trt-clinics/wa" className="hover:text-brand-blue">Washington</Link>
          <span>/</span>
          <span>Seattle</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Seattle, WA
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Seattle&apos;s tech industry — Amazon, Microsoft, Boeing — has created a health-optimized
            demographic that actively seeks performance medicine including TRT. UW Medicine and Swedish
            Medical Group both have men&apos;s health programs, and Kaiser Permanente Washington is one
            of the region&apos;s largest insurers. Eastside communities in Bellevue, Kirkland, and
            Redmond have strong clinic coverage, and telehealth is widely used for patients across
            the greater Puget Sound region.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Seattle &amp; Eastside coverage</span>
            <span>·</span>
            <span>Kaiser, Premera &amp; Regence options</span>
            <span>·</span>
            <span>Tacoma &amp; Bremerton area</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Seattle, WA</h2>
              <Link href="/listings?state=WA" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all WA clinics →
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
            <p className="text-gray-500 mb-4">Browse TRT clinics across Washington state.</p>
            <Link href="/listings?state=WA" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search Washington Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Seattle TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in Washington</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare physician-supervised TRT providers across Seattle, Tacoma, Spokane, and statewide.
            Filter by insurance, telehealth, and delivery method.
          </p>
          <Link
            href="/listings?state=WA"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All Washington Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/categories/telehealth-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Telehealth TRT Clinics →</Link>
            <Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Delivery Methods Compared →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
