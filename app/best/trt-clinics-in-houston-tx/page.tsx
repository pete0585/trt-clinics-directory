import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Houston, TX | FindTRTClinic',
  description: 'Find the best testosterone replacement therapy clinics in Houston, Texas. Compare physician-supervised TRT clinics by insurance, treatment type, and telehealth availability.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Houston, TX?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Houston has one of the highest concentrations of TRT clinics in the United States. The city has dozens of dedicated men\'s health clinics, urology practices, and telehealth-affiliated providers serving the greater Houston metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do TRT clinics in Houston accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some do. Houston-area urology groups and men\'s health practices affiliated with hospital systems (Houston Methodist, Memorial Hermann, UTHealth) typically accept major insurance plans. Dedicated men\'s health chains and standalone TRT clinics in Houston often operate cash-pay. Use the insurance filter to find clinics in Houston that bill your plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get TRT in Houston without going to a clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several telehealth TRT platforms serve Texas residents and can ship medication to Houston addresses. You still need in-person labs (LabCorp and Quest have many Houston locations), but consultations and ongoing management can be handled remotely.',
      },
    },
  ],
}

export default async function BestHoustonTRTPage() {
  const { listings } = await getListings({ state: 'TX', city: 'Houston' })
  const featuredListings = listings.slice(0, 9)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-blue">All Clinics</Link>
          <span>/</span>
          <Link href="/trt-clinics/tx" className="hover:text-brand-blue">Texas</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Houston</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          TRT Clinics in Houston, TX
        </h1>
        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Houston is one of the best cities in the country for accessing testosterone replacement therapy. The metro area has dozens of dedicated men&apos;s health clinics, urology practices, and physician-supervised hormone specialists — with options for every budget and treatment preference.
        </p>

        {/* What to know about Houston TRT */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-3">TRT in Houston: What to Know</h2>
          <p className="text-brand-steel text-sm mb-3 leading-relaxed">
            Houston&apos;s concentration of world-class medical institutions — Texas Medical Center, Houston Methodist, UTHealth, Memorial Hermann — means men in Houston have access to highly specialized hormone therapy practitioners alongside the growing men&apos;s health clinic market. The Texas climate (heat, outdoor work, veterans population) contributes to an active and growing TRT patient base.
          </p>
          <p className="text-brand-steel text-sm leading-relaxed">
            Houston is also home to a significant veteran population — Joint Reserve Base Ellington Field and proximity to Fort Cavazos make the area well-served by Tricare and VA-affiliated TRT providers. Veterans with TRICARE or VA benefits should look specifically for clinics that accept military insurance.
          </p>
        </div>

        {/* Listings */}
        {featuredListings.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-brand-navy">TRT Clinics in Houston</h2>
              <p className="text-sm text-brand-steel mt-1">{listings.length} clinic{listings.length !== 1 ? 's' : ''} listed in Houston, TX</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {listings.length > 9 && (
              <div className="text-center mb-10">
                <Link
                  href="/listings?city=Houston&state=TX"
                  className="inline-block px-6 py-2.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  View all {listings.length} Houston TRT clinics →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Houston clinic listings are being added. Check back soon.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics →</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">TRT in Houston — Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Do TRT clinics in Houston accept insurance?</h3>
              <p className="text-brand-steel mt-1">Yes — urology groups and hospital-affiliated practices in Houston typically accept major insurance. Standalone men&apos;s health clinics are often cash-pay. Use the insurance filter to find your plan in the network.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does insurance cover TRT in Texas?</h3>
              <p className="text-brand-steel mt-1">Insurance covers TRT for documented hypogonadism (two blood tests below 300 ng/dL with symptoms). Generic injectable testosterone is typically covered at the generic drug copay rate — $10-30/month for most plans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can I get TRT via telehealth in Houston?</h3>
              <p className="text-brand-steel mt-1">Yes. Multiple telehealth TRT platforms serve Texas residents. You still need labs at a local LabCorp or Quest, but consultations and prescriptions are handled remotely and medication ships to your Houston address.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Own a TRT Clinic in Houston?</h2>
          <p className="text-blue-200 text-sm mb-4">Get listed on FindTRTClinic and reach men in Houston actively searching for testosterone therapy.</p>
          <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Add Free Listing →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/trt-clinics/tx" className="text-brand-blue hover:underline">All TRT Clinics in Texas</Link></li>
            <li><Link href="/best/trt-clinics-in-dallas-tx" className="text-brand-blue hover:underline">Best TRT Clinics in Dallas, TX</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
