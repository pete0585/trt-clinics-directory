import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Phoenix, AZ | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Phoenix, AZ. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/phoenix-az' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Are there TRT clinics in Phoenix, AZ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Phoenix and the broader Maricopa County metro — Scottsdale, Tempe, Mesa, Gilbert, Chandler, and Glendale — have a large TRT clinic market. Mayo Clinic Arizona (Scottsdale campus) has an endocrinology department for complex hormone evaluations. Banner Health\'s men\'s health programs are distributed throughout the valley. The private cash-pay men\'s health clinic market has expanded rapidly with Phoenix\'s demographic growth and strong inbound migration of working-age males.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Arizona have specific TRT prescribing rules?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Arizona follows federal DEA Schedule III rules for testosterone. Arizona Medical Board regulations require a valid patient-physician relationship for testosterone prescribing, which for online platforms typically means a telemedicine visit before any controlled substance can be prescribed. Arizona has been relatively favorable to telehealth prescribing generally. Arizona compounding pharmacies are licensed through the Arizona State Board of Pharmacy and can prepare testosterone cream, gel, and pellet formulations.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Phoenix TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mayo Clinic Arizona, Banner Health, and Dignity Health accept most major Arizona insurance plans including BlueCross BlueShield of Arizona, United, Aetna, and AHCCCS (Arizona Medicaid) for medically documented hypogonadism. The private men\'s health clinic market in Scottsdale and North Phoenix typically runs direct-pay monthly programs. Phoenix\'s competitive market has some of the more affordable private TRT options in the West, with monthly programs starting around $100-$150.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Phoenix heat a factor for testosterone therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Phoenix\'s extreme summer heat can complicate some testosterone delivery methods. Topical testosterone gels and creams require proper application and transfer prevention — especially important in a household with children, and harder to manage when sweating is constant. Testosterone cypionate or enanthate injections or pellets are often preferred by Phoenix men for this reason. Your TRT provider should discuss delivery method options in the context of your lifestyle and climate.",
      },
    }
  ],
}

export default async function PhoenixTRTPage() {
  const { listings } = await getListings({ state: 'AZ' })
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
          <span>Phoenix, AZ</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Phoenix, AZ
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Phoenix has one of the fastest-growing men's health and TRT markets in the Sun Belt, fueled by strong population growth and Arizona's business-friendly regulatory environment. Mayo Clinic Arizona, Banner Health, and Dignity Health all have endocrinology and men's health programs, alongside a large and growing private clinic market serving the greater Maricopa County area.
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
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Phoenix, AZ</h2>
              <Link href="/listings?state=AZ" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all AZ clinics →
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in AZ.</p>
            <Link href="/listings?state=AZ" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search AZ Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Phoenix TRT: Common Questions</h2>
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
            <Link href="/listings?state=AZ" className="text-sm text-brand-blue hover:opacity-80 font-medium">All AZ TRT Clinics →</Link>
            <Link href="/guides/online-trt-vs-clinic" className="text-sm text-brand-blue hover:opacity-80 font-medium">Online TRT vs. In-Person Clinic →</Link>
            <Link href="/guides/trt-clinic-vs-urologist" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinic vs. Urologist →</Link>
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">Browse All Clinics →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
