import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in San Diego, CA | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in San Diego — serving Chula Vista, El Cajon, Escondido, Carlsbad, Oceanside, and the greater military community at Camp Pendleton and Naval Station San Diego.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/san-diego-ca' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there TRT clinics near Camp Pendleton or Naval Station San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multiple TRT clinics in North County San Diego serve active duty and veteran populations near Camp Pendleton. Central San Diego has strong provider coverage near Naval Station San Diego and MCRD San Diego. MCAS Miramar is served by clinics in Miramar, Kearny Mesa, and Mission Valley.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRICARE cover TRT in San Diego?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TRICARE Prime and Select cover testosterone therapy when medically indicated — meaning lab-confirmed low T with documented symptoms. Active duty members at San Diego installations access TRT through Military Treatment Facilities (MTFs). Retired military use TRICARE Select to see TRICARE-participating civilian TRT clinics. TRT clinics in San Diego experienced with TRICARE can provide the required documentation for prior authorization.',
      },
    },
    {
      '@type': 'Question',
      name: 'What TRT protocols are common in San Diego clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'San Diego TRT clinics offer the full range: weekly or twice-weekly testosterone cypionate injections, daily testosterone cream or gel, and pellet therapy (inserted every 3-5 months). Most clinics offer multiple options and help patients choose based on lifestyle, cost, and desired stability of blood levels. Injectable cypionate remains the most cost-effective and precisely dosed option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a prior low testosterone test required to start TRT in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. California TRT clinics are required to confirm low testosterone with blood work before prescribing. Most require at least two morning total testosterone readings below the lab reference range (typically below 300 ng/dL) plus documented symptoms. Clinics typically order a comprehensive panel including total T, free T, LH, FSH, estradiol, hematocrit, and PSA (for men over 40).',
      },
    },
  ],
}

export default async function SanDiegoTRTPage() {
  const { listings } = await getListings({ state: 'CA', city: 'San Diego' })
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
          <Link href="/trt-clinics/ca" className="hover:text-brand-blue">California</Link>
          <span>/</span>
          <span>San Diego</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in San Diego, CA
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            San Diego has one of the highest concentrations of active duty and retired military in the
            United States — Camp Pendleton, Naval Station San Diego, MCAS Miramar, and MCRD San Diego
            together bring hundreds of thousands of service members and veterans to the region.
            UC San Diego Health has men&apos;s health programs, and the city&apos;s fitness-forward
            culture drives strong demand for TRT among the general population as well.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Military &amp; veteran expertise</span>
            <span>·</span>
            <span>TRICARE-accepting options</span>
            <span>·</span>
            <span>North County to Chula Vista</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in San Diego, CA</h2>
              <Link href="/listings?state=CA" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all CA clinics →
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
            <p className="text-gray-500 mb-4">Browse TRT clinics in the San Diego area.</p>
            <Link href="/listings?state=CA" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search California Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">San Diego TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center mb-10">
          <h2 className="text-xl font-bold text-white mb-2">Browse All TRT Clinics in California</h2>
          <p className="text-blue-100 text-sm mb-5 max-w-lg mx-auto">
            Compare TRT providers across San Diego, Los Angeles, the Bay Area, and statewide.
            Filter by TRICARE acceptance, telehealth, and physician supervision.
          </p>
          <Link
            href="/listings?state=CA"
            className="inline-flex items-center gap-2 bg-white text-brand-blue px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            View All California Clinics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/categories/trt-for-veterans" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT for Veterans &amp; Military →</Link>
            <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-sm text-brand-blue hover:opacity-80 font-medium">Injections vs. Pellets vs. Cream →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
