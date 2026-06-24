import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in San Antonio, TX | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in San Antonio, Texas. Compare physician-supervised TRT providers serving active duty, veterans, and civilians in the San Antonio metro.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in San Antonio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Antonio has a well-developed TRT clinic market, shaped in part by the city's large active duty and veteran population at Fort Sam Houston, Lackland AFB, and Randolph AFB. Men's health and testosterone optimization clinics serve both military and civilian patients throughout the metro — from the North Side to Stone Oak, Medical Center, and the Medical District near BAMC/SAMC.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRICARE cover TRT in San Antonio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRICARE covers testosterone replacement therapy when medically necessary — meaning a documented diagnosis of hypogonadism (low testosterone) confirmed by lab work. Active duty and retired military in San Antonio can receive TRT through Brooke Army Medical Center (BAMC) or San Antonio Military Medical Center, and through TRICARE-participating civilian providers. Use the insurance filter in this directory to find San Antonio TRT clinics that accept TRICARE.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can veterans get TRT through the VA in San Antonio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The South Texas VA Health Care System in San Antonio covers testosterone therapy for eligible veterans with documented hypogonadism. The VA process involves lab testing (total testosterone, LH, FSH) and a diagnosis from a VA primary care or endocrinology provider. Wait times vary — some veterans use private-pay TRT clinics while awaiting VA appointments or for faster protocol adjustments.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics near Lackland AFB or Fort Sam Houston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Several private TRT clinics are located near the major military installations in San Antonio, understanding the population they serve. These clinics typically understand TRICARE billing, military health timelines, and the specific demands that affect hormone health in active duty personnel — including deployment stress, sleep deprivation, and high physical demand.",
      },
    },
  ],
}

export default async function BestSanAntonioTRTPage() {
  const { listings } = await getListings({ state: 'TX', city: 'San Antonio' })
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
          <Link href="/trt-clinics/tx" className="hover:text-brand-blue">Texas</Link>
          <span>/</span>
          <span>San Antonio</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Best TRT Clinics in San Antonio, TX
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            San Antonio is one of the most military-dense cities in America — home to Fort Sam Houston,
            Lackland AFB, Randolph AFB, and Brooke Army Medical Center. That military fabric shapes the
            TRT market here: clinics understand TRICARE, the VA, and the unique hormonal stressors that
            come with active duty service and veteran transition. Whether you&apos;re active duty,
            retired military, or a civilian, San Antonio has experienced TRT providers across the metro.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{featuredListings.length > 0 ? `${featuredListings.length}+` : '25+'} clinics listed</span>
            <span>·</span>
            <span>TRICARE-familiar providers</span>
            <span>·</span>
            <span>Physician supervised</span>
            <span>·</span>
            <span>VA-aware clinics</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in San Antonio, TX</h2>
              <Link href="/listings?city=San Antonio&state=TX" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
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
            <p className="text-gray-500 mb-4">Search TRT clinics in San Antonio below.</p>
            <Link href="/listings?city=San Antonio&state=TX" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search San Antonio Clinics
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">San Antonio TRT: Military and Civilian Options</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Texas TRT Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/trt-clinics/tx" className="text-sm text-brand-blue hover:opacity-80 font-medium">All Texas TRT Clinics →</Link>
            <Link href="/best/trt-clinics-in-houston-tx" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinics in Houston →</Link>
            <Link href="/best/trt-clinics-in-dallas-tx" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinics in Dallas →</Link>
            <Link href="/categories/trt-for-veterans" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT for Veterans →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
