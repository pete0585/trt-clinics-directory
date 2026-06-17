import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Las Vegas, NV | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Las Vegas, Nevada. Serving Summerlin, Henderson, North Las Vegas, and the greater Las Vegas Valley.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are there good TRT clinics in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Las Vegas has a robust men's health clinic market — the city's medical sector has expanded substantially as the metro population grew past 2 million. You'll find dedicated TRT clinics alongside urology practices across the Las Vegas Valley, in Summerlin, Henderson, and North Las Vegas. Several Las Vegas clinics also offer telehealth for Nevada patients.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Las Vegas TRT clinics accept TRICARE for Nellis AFB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some Las Vegas-area men's health clinics accept TRICARE or work with military families at Nellis AFB and the surrounding communities. TRT is not typically covered by TRICARE as a standalone service unless medically indicated (diagnosed hypogonadism), but some providers offer hybrid cash-pay models for military patients. Ask about TRICARE specifically before booking.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I expect at my first Las Vegas TRT consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your first appointment will include a detailed history, a blood draw (total testosterone, free testosterone, LH, FSH, estradiol, hematocrit, PSA, CBC), and possibly a physical exam. Most Las Vegas clinics will not start TRT at the first visit — you come back once lab results confirm low testosterone. Bring any prior lab work and a list of current medications.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there telehealth TRT options in Nevada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Several telehealth TRT providers are licensed in Nevada and can prescribe and manage testosterone remotely — including ordering labs at local draw sites (LabCorp, Quest) and shipping medications to your home. Telehealth works well for straightforward TRT management once a diagnosis has been established.",
      },
    },
  ],
}

export default async function BestLasVegasTRTPage() {
  const { listings } = await getListings({ state: 'NV', city: 'Las Vegas' })
  const featuredListings = listings.slice(0, 10)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-blue">Find a Clinic</Link>
          <span>/</span>
          <Link href="/trt-clinics/nv" className="hover:text-brand-blue">Nevada</Link>
          <span>/</span>
          <span>Las Vegas</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Best TRT Clinics in Las Vegas, NV
          </h1>
          <p className="mt-3 text-brand-steel max-w-2xl">
            Las Vegas has a growing network of testosterone replacement therapy clinics and men&apos;s
            health practices across the valley. Whether you&apos;re in Summerlin, Henderson, or North
            Las Vegas, experienced TRT providers are available in-person and via telehealth throughout
            Clark County. Nevada&apos;s large military presence at Nellis AFB also means several area
            providers have experience with military patients and the specific health challenges that come
            with service.
          </p>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">
              TRT Clinics in Las Vegas
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            <div className="mt-6">
              <Link href="/listings?city=Las+Vegas&state=NV" className="text-brand-blue hover:underline text-sm font-medium">
                See all Las Vegas TRT clinics →
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
            <p className="text-brand-steel mb-4">Search for TRT clinics in Las Vegas below.</p>
            <Link href="/listings?city=Las+Vegas&state=NV" className="btn-primary text-sm">
              Search Las Vegas Clinics
            </Link>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-brand-dark">Las Vegas TRT: Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-brand-dark mb-2">{faq.name}</h3>
              <p className="text-sm text-brand-steel leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings?state=NV" className="text-brand-blue hover:underline font-medium">All Nevada TRT Clinics →</Link>
            <Link href="/best/trt-clinics-in-phoenix-az" className="text-brand-blue hover:underline font-medium">TRT Clinics in Phoenix →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline font-medium">How to Find a TRT Doctor →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
