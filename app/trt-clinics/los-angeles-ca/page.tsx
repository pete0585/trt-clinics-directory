import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Find a TRT Clinic in Los Angeles, CA | Find TRT Clinic',
  description:
    'Find testosterone replacement therapy clinics in Los Angeles, CA. Physician-supervised TRT with insurance options and telehealth.',
  alternates: { canonical: 'https://findtrtclinic.com/trt-clinics/los-angeles-ca' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
        {
      '@type': 'Question',
      name: 'Are there TRT clinics in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Los Angeles has one of the largest concentrations of men\'s health and TRT clinics in the U.S. Premium concierge options are clustered in Beverly Hills, Santa Monica, and Brentwood. More accessible medical group options are found throughout the San Fernando Valley, Long Beach, and East LA. Academic options at Cedars-Sinai Men\'s Health, UCLA Urology, and USC Keck offer specialist-supervised TRT with full endocrinology workups.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does California have specific rules about TRT prescriptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "California requires TRT prescriptions to be dispensed through licensed California pharmacies. Compounded testosterone products require California-licensed compounding pharmacies. Online TRT platforms shipping to California must comply with California pharmacy law and DEA Schedule III prescribing requirements. California\'s MediCal does NOT typically cover elective testosterone therapy for hypogonadism unless medically documented — private insurance coverage varies significantly by plan.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Los Angeles TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some do. Cedars-Sinai endocrinology and urology departments accept most major California insurance plans (Anthem Blue Cross, Blue Shield of CA, Aetna, UnitedHealthcare, Kaiser). The growing cash-pay men\'s health clinic market in West LA, Beverly Hills, and the Valley typically offers flat-rate monthly programs outside of insurance. Many patients find it more cost-effective to pay out of pocket for streamlined access.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cost of TRT in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Cash-pay TRT programs in LA typically run $150-$400/month depending on delivery method and clinic type. Beverly Hills and Santa Monica concierge clinics are on the higher end. Valley-based and medical group clinics often offer more competitive pricing. Initial testosterone lab panels range from $50-$150 through discount labs like LabCorp/Quest. Injectable testosterone is generally the most cost-effective delivery method; pellet therapy is the most expensive.",
      },
    }
  ],
}

export default async function LosAngelesTRTPage() {
  const { listings } = await getListings({ state: 'CA' })
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
          <span>Los Angeles, CA</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Find a TRT Clinic in Los Angeles, CA
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Los Angeles is one of the largest men's health markets in the country, with a dense ecosystem of concierge medicine practices, men's wellness clinics, and endocrinology departments at Cedars-Sinai, UCLA Health, and USC Keck Medical Center. LA's health-conscious, image-driven culture drives high awareness and demand for testosterone optimization — and the market has both premium boutique clinics and more accessible medical groups.
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
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics in Los Angeles, CA</h2>
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
            <p className="text-gray-500 mb-4">Browse all TRT clinics in CA.</p>
            <Link href="/listings?state=CA" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Search CA Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Los Angeles TRT: Common Questions</h2>
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
            <Link href="/listings?state=CA" className="text-sm text-brand-blue hover:opacity-80 font-medium">All CA TRT Clinics →</Link>
            <Link href="/guides/online-trt-vs-clinic" className="text-sm text-brand-blue hover:opacity-80 font-medium">Online TRT vs. In-Person Clinic →</Link>
            <Link href="/guides/trt-clinic-vs-urologist" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinic vs. Urologist →</Link>
            <Link href="/listings" className="text-sm text-brand-blue hover:opacity-80 font-medium">Browse All Clinics →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
