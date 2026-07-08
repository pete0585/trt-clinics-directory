import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in New York, NY | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in New York, NY. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/new-york-ny' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Are there TRT clinics in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. NYC has the widest range of TRT options of any U.S. metro — from academic specialists at NYU Langone, Weill Cornell (Cornell Medicine), and Mount Sinai to private concierge men\'s health clinics in Midtown, the Upper East Side, and Tribeca. Brooklyn, Queens, and the Bronx have a growing number of accessible private TRT providers. Many NYC TRT clinics also offer telehealth for follow-up appointments, reducing the need to commute for every visit.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does New York have specific rules about TRT prescriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "New York has specific controlled substance prescribing requirements — testosterone is Schedule III under both federal and New York law. New York requires a valid prescription with specific NPI identification. Telehealth prescribing in New York requires in-state licensure and (for Schedule III substances) typically requires an initial in-person visit for new patients under New York Department of Health regulations. Online TRT platforms serving NY must comply with these requirements.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do NYC TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Academic medical center programs at NYU Langone, Weill Cornell, and Mount Sinai accept most major New York insurance plans including Empire BlueCross BlueShield, United, Aetna, Cigna, and Fidelis. The private cash-pay men\'s health clinic market in Midtown and the Upper East Side typically runs monthly programs at $200-$500. NYC\'s competitive market has also produced several mid-tier medical group options at $100-$200/month.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT options in Brooklyn or Queens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Brooklyn and Queens have seen significant growth in men\'s health and TRT clinics, particularly in Park Slope, Williamsburg, Astoria, and Jackson Heights. Many Manhattan-based practices have extended into the outer boroughs. For Brooklyn and Queens residents, telehealth follow-up care is particularly practical — initial labs and prescription from a licensed NYC provider, then mail-delivered testosterone without a commute to Manhattan.",
      },
    }
  ],
}

export default async function NewYorkTRTPage() {
  const { listings } = await getListings({ state: 'NY' })
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
          <span>New York, NY</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in New York, NY
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            New York City's dense, high-income professional population and world-class medical infrastructure make it one of the most competitive TRT markets in the country. NYU Langone Urology, Weill Cornell Urology, Mount Sinai Men's Health, and NewYork-Presbyterian all have specialist programs for hypogonadism — alongside a growing private men's health clinic sector across Manhattan, Brooklyn, and the outer boroughs.
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
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in New York, NY</h2>
              <Link href="/listings?state=NY" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all NY clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in NY.</p>
            <Link href="/listings?state=NY" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search NY Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">New York TRT: Common Questions</h2>
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
            <Link href="/listings?state=NY" className="text-sm text-brand-blue hover:opacity-80 font-medium">All NY TRT Clinics →</Link>
            <Link href="/guides/online-trt-vs-clinic" className="text-sm text-brand-blue hover:opacity-80 font-medium">Online TRT vs. In-Person Clinic →</Link>
            <Link href="/guides/trt-clinic-vs-urologist" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinic vs. Urologist →</Link>
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">Browse All Clinics →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
