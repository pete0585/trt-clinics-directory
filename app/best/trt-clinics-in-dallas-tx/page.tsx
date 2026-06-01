import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Dallas, TX | FindTRTClinic',
  description: 'Find the best testosterone replacement therapy clinics in Dallas-Fort Worth. Compare physician-supervised TRT clinics by insurance, treatment type, and telehealth availability.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I find a TRT clinic in Dallas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dallas has a large and growing number of dedicated men\'s health clinics, urology practices, and telehealth-affiliated TRT providers. Use the FindTRTClinic directory to filter by insurance acceptance, treatment type (injections, pellets, cream), and physician supervision. Many Dallas-area clinics offer same-week appointments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do TRT clinics in Dallas accept Tricare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some Dallas-area clinics and urology practices accept Tricare for documented hypogonadism treatment. NAS Fort Worth JRB and Dyess AFB (Abilene) are in the DFW region. Use the insurance filter on this page to find Tricare-accepting providers in the Dallas metro.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TRT cost in Dallas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TRT costs in Dallas range from $75-200/month for cash-pay injectable testosterone to $300-500 per pellet procedure. With insurance coverage for documented hypogonadism, generic injectable testosterone typically costs $10-30/month. Most Dallas-area urology practices and some men\'s health clinics bill insurance.',
      },
    },
  ],
}

export default async function BestDallasTRTPage() {
  const { listings } = await getListings({ state: 'TX', city: 'Dallas' })
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
          <span className="text-brand-navy font-medium">Dallas</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          TRT Clinics in Dallas, TX
        </h1>
        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          The Dallas-Fort Worth metroplex has one of the most active men&apos;s health clinic markets in the country. From independent physician-owned practices to large men&apos;s health chains, DFW men have access to a wide range of TRT options — including insurance-accepting clinics for those with coverage.
        </p>

        {/* Dallas TRT context */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-3">TRT in Dallas-Fort Worth: What to Know</h2>
          <p className="text-brand-steel text-sm mb-3 leading-relaxed">
            The DFW metroplex is home to multiple Gameday Men&apos;s Health and Low T Center locations alongside dozens of independent men&apos;s health clinics. For men who want insurance-accepted TRT, Baylor Scott &amp; White, UT Southwestern, and Parkland-affiliated urology practices offer physician-supervised hormone therapy that bills major plans.
          </p>
          <p className="text-brand-steel text-sm leading-relaxed">
            NAS Fort Worth JRB and the large veteran population in the DFW area make Tricare and VA-covered TRT options especially relevant for Dallas-area men. Veterans should look specifically for urology practices affiliated with VA Community Care Network providers, which can be covered under VA benefits.
          </p>
        </div>

        {/* Listings */}
        {featuredListings.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-brand-navy">TRT Clinics in Dallas</h2>
              <p className="text-sm text-brand-steel mt-1">{listings.length} clinic{listings.length !== 1 ? 's' : ''} listed in Dallas, TX</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {listings.length > 9 && (
              <div className="text-center mb-10">
                <Link
                  href="/listings?city=Dallas&state=TX"
                  className="inline-block px-6 py-2.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  View all {listings.length} Dallas TRT clinics →
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Dallas clinic listings are being added. Check back soon.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics →</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">TRT in Dallas — Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Do TRT clinics in Dallas accept Tricare?</h3>
              <p className="text-brand-steel mt-1">Some do. Urology and endocrinology practices in DFW that participate in the VA Community Care Network or Tricare network can treat hypogonadism under those benefits. Use the insurance filter to narrow your search.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How much does TRT cost in Dallas?</h3>
              <p className="text-brand-steel mt-1">Cash-pay TRT in Dallas typically runs $75-200/month for injectables or $300-500 per pellet procedure. With insurance for documented hypogonadism, injectable testosterone is often $10-30/month at generic drug rates.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Are there physician-supervised TRT clinics in Dallas?</h3>
              <p className="text-brand-steel mt-1">Yes. UT Southwestern-affiliated urology practices, Baylor Scott &amp; White, and several independent men&apos;s health clinics in DFW provide physician (MD/DO) supervised testosterone therapy. Use our physician supervision filter to find them.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Own a TRT Clinic in Dallas?</h2>
          <p className="text-blue-200 text-sm mb-4">Get listed and reach the thousands of men in DFW searching for TRT providers each month.</p>
          <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Add Free Listing →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/trt-clinics/tx" className="text-brand-blue hover:underline">All TRT Clinics in Texas</Link></li>
            <li><Link href="/best/trt-clinics-in-houston-tx" className="text-brand-blue hover:underline">Best TRT Clinics in Houston, TX</Link></li>
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover TRT?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
