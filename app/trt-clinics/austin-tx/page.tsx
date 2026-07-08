import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Austin, TX | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Austin, TX. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/austin-tx' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Are there TRT clinics in Austin, TX?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Austin has a growing TRT clinic market serving downtown, South Austin, Cedar Park, Round Rock, and the 183/Mopac corridor. Seton Medical Center Austin (now Ascension Seton) and Dell Seton Medical Center have endocrinology and urology departments that evaluate and treat hypogonadism. The private cash-pay men\'s health clinic market in Austin has expanded significantly with the city\'s population boom, with clinics offering telehealth, in-person, and hybrid care models.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Texas have any special rules about testosterone prescriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Texas follows federal DEA Schedule III prescribing rules for testosterone. Texas medical board rules require physician oversight for controlled substance prescriptions, and online TRT prescribers serving Texas must be licensed in the state. Texas has no additional state law restricting testosterone for legitimate hypogonadism treatment. Many Austin-area clinics also serve patients in San Marcos, Kyle, Bastrop, and Lockhart through telehealth or satellite visits.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Austin TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some do. UT Health Austin (a UT Dell Medical School faculty practice) and major Austin hospital systems accept most commercial Texas insurance plans. The private men\'s health clinic market in Austin — like many markets — has trended toward direct-pay models that bypass insurance for faster, more comprehensive service. Expect most concierge-style Austin TRT clinics to be cash-pay at $150-$350/month.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth available for TRT in Austin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Austin\'s tech workforce is well-served by telehealth TRT platforms. Several national telehealth men\'s health providers (licensed in Texas) serve Austin, as do Austin-based practices with a telehealth option. For initial TRT consultation, telehealth works well — especially when paired with Austin-area lab draw sites for testosterone and follow-up bloodwork. Remote TRT management is practical for men with demanding downtown office or travel schedules.",
      },
    }
  ],
}

export default async function AustinTRTPage() {
  const { listings } = await getListings({ state: 'TX' })
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
          <span>Austin, TX</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Austin, TX
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Austin's tech-driven health-optimization culture and rapidly expanding male demographic have made it one of the fastest-growing TRT markets in Texas. The city has a mix of established medical groups, direct-care men's health clinics, and telehealth platforms serving Austin's young professional and remote-worker population.
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
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Austin, TX</h2>
              <Link href="/listings?state=TX" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all TX clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in TX.</p>
            <Link href="/listings?state=TX" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search TX Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Austin TRT: Common Questions</h2>
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
            <Link href="/listings?state=TX" className="text-sm text-brand-blue hover:opacity-80 font-medium">All TX TRT Clinics →</Link>
            <Link href="/guides/online-trt-vs-clinic" className="text-sm text-brand-blue hover:opacity-80 font-medium">Online TRT vs. In-Person Clinic →</Link>
            <Link href="/guides/trt-clinic-vs-urologist" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinic vs. Urologist →</Link>
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">Browse All Clinics →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
