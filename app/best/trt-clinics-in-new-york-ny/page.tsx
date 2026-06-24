import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in New York, NY | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in New York City. Compare physician-supervised TRT providers in Manhattan, Brooklyn, Queens, and the NYC metro.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does TRT cost in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT costs in NYC run $150-600/month depending on the delivery method and the clinic's pricing model. Concierge men's health clinics in Midtown Manhattan and Tribeca are at the top of that range — you're paying for the experience and convenience. Urology practices and endocrinologists who bill insurance are significantly cheaper if your insurance covers TRT (it does if you have a documented low testosterone diagnosis). Telehealth TRT platforms also serve NYC patients at lower price points.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover TRT in New York State?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Major insurers operating in New York — Empire BlueCross BlueShield, UnitedHealthcare, Aetna, Cigna, and NY Medicaid — cover testosterone replacement therapy when medically necessary. Medical necessity requires a documented diagnosis of hypogonadism based on at least two morning testosterone tests below the lab reference range. New York-based urology and endocrinology practices are more likely to bill insurance than dedicated TRT clinics.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in Brooklyn or Queens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Brooklyn and Queens have independent men's health practices and urology offices that provide TRT — you don't need to go into Manhattan. Williamsburg, Park Slope, and Astoria all have providers. Telehealth TRT platforms serve all NYC boroughs without the commute, though if you want in-person injections or pellet procedures you'll want a local clinic.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can New York State patients get TRT via telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. New York has maintained expanded telehealth rules post-COVID, allowing licensed providers to prescribe testosterone via telehealth after an appropriate evaluation (video consultation + lab review). Telehealth TRT works well for NYC patients on oral testosterone or receiving injectable testosterone that they self-administer at home.",
      },
    },
  ],
}

export default async function BestNewYorkTRTPage() {
  const { listings } = await getListings({ state: 'NY', city: 'New York' })
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
          <Link href="/trt-clinics/ny" className="hover:text-brand-blue">New York</Link>
          <span>/</span>
          <span>New York City</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Best TRT Clinics in New York City
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            New York City has a full spectrum of TRT options — from concierge men&apos;s health clinics
            in Midtown Manhattan to insurance-billing urology practices in the outer boroughs. With
            some of the top endocrinologists and urologists in the country at NYU Langone, Mount Sinai,
            and Columbia, NYC patients also have access to world-class specialist care for complex
            hormone cases. Whether you want a premium in-clinic experience or a cost-effective
            telehealth protocol, New York has you covered.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{featuredListings.length > 0 ? `${featuredListings.length}+` : '30+'} clinics listed</span>
            <span>·</span>
            <span>All five boroughs</span>
            <span>·</span>
            <span>Insurance accepted</span>
            <span>·</span>
            <span>Telehealth available</span>
          </div>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in New York City</h2>
              <Link href="/listings?city=New York&state=NY" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
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
            <p className="text-gray-500 mb-4">Search TRT clinics in New York City.</p>
            <Link href="/listings?city=New York&state=NY" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search NYC Clinics
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">NYC TRT: What to Know</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">New York TRT Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/trt-clinics/ny" className="text-sm text-brand-blue hover:opacity-80 font-medium">All New York TRT Clinics →</Link>
            <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT: What's the Difference →</Link>
            <Link href="/guides/how-much-does-trt-cost" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Cost Guide →</Link>
            <Link href="/categories/telehealth-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Telehealth TRT →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
