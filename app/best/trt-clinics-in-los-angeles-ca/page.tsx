import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Los Angeles, CA | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Los Angeles, California. Serving Beverly Hills, Santa Monica, Westside, the Valley, and greater LA County.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Los Angeles has one of the most competitive men's health clinic markets in the country — driven by the entertainment industry, fitness culture, and a dense, health-aware population. You'll find dedicated testosterone therapy clinics in Beverly Hills, Santa Monica, Brentwood, West Hollywood, Sherman Oaks, and across LA County. UCLA Health and Cedars-Sinai also have urology practices that manage TRT within larger integrated care frameworks.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there concierge TRT clinics in Beverly Hills or Santa Monica?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Westside — Beverly Hills, Santa Monica, Boca Park, Pacific Palisades — has a number of concierge men's health practices that include TRT as part of comprehensive men's wellness programs alongside peptide therapy, IV therapy, and hormone optimization. These clinics typically operate on a direct-pay or membership model and have longer appointment times than standard practices.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRT work for LA men in their 30s with low testosterone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT is medically appropriate for men of any age with confirmed hypogonadism — the diagnosis is based on blood work, not age. California has clear guidelines around TRT prescribing, and LA providers are generally knowledgeable about both standard TRT and alternatives like enclomiphene for younger men who want to preserve fertility. Two blood draws confirming low testosterone plus symptoms are the standard before starting.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do TRT by telehealth in California?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. California has several telehealth-licensed TRT providers, and the state's telehealth rules allow for remote prescribing of testosterone once appropriate labs have been completed. Telehealth TRT works well for follow-up management and medication delivery, though an initial in-person evaluation is often recommended for the diagnostic workup.",
      },
    },
  ],
}

export default async function BestLAsTRTPage() {
  const { listings } = await getListings({ state: 'CA', city: 'Los Angeles' })
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
          <Link href="/trt-clinics/ca" className="hover:text-brand-blue">California</Link>
          <span>/</span>
          <span>Los Angeles</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Best TRT Clinics in Los Angeles, CA
          </h1>
          <p className="mt-3 text-brand-steel max-w-2xl">
            Los Angeles has one of the most developed testosterone therapy markets in the country.
            From Beverly Hills concierge practices to integrated men&apos;s health clinics across the
            Valley and South Bay, LA men have strong access to experienced TRT providers. The city&apos;s
            fitness and wellness culture means providers here are often more current on emerging protocols
            — testosterone + HCG combinations, peptide co-therapy, and detailed hormone optimization
            beyond just a testosterone number.
          </p>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">TRT Clinics in Los Angeles</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            <div className="mt-6">
              <Link href="/listings?city=Los+Angeles&state=CA" className="text-brand-blue hover:underline text-sm font-medium">
                See all Los Angeles TRT clinics →
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
            <p className="text-brand-steel mb-4">Search for TRT clinics in Los Angeles below.</p>
            <Link href="/listings?city=Los+Angeles&state=CA" className="btn-primary text-sm">Search LA Clinics</Link>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-brand-dark">LA TRT: Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-brand-dark mb-2">{faq.name}</h3>
              <p className="text-sm text-brand-steel leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings?state=CA" className="text-brand-blue hover:underline font-medium">All California TRT Clinics →</Link>
            <Link href="/best/trt-clinics-in-phoenix-az" className="text-brand-blue hover:underline font-medium">TRT Clinics in Phoenix →</Link>
            <Link href="/guides/enclomiphene-vs-trt" className="text-brand-blue hover:underline font-medium">Enclomiphene vs. TRT →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
