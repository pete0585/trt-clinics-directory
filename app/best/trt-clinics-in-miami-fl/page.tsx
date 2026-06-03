import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Miami, FL | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Miami, FL. Compare physician-supervised TRT providers in Miami Beach, Brickell, Coral Gables, and greater South Florida.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Miami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Miami has a large and growing men's health clinic market, driven by the city's strong wellness culture and its significant Latin American community, which has historically placed high value on hormone health and vitality. You'll find dedicated TRT clinics across Miami-Dade, from downtown Brickell to Miami Beach, Coral Gables, and Doral.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TRT cost in Miami?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Miami TRT clinics range from $150 to $500+ per month depending on the delivery method and level of monitoring. Miami Beach and Brickell clinics serving higher-income clientele often charge premium rates for concierge-level care. Insurance-billing urology practices are available if cost is a concern — injectable testosterone covered by insurance costs very little out of pocket.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics near Fort Lauderdale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Several TRT clinics serve the Fort Lauderdale and Broward County area, which is just north of Miami-Dade. If you're in Pembroke Pines, Hollywood, or Boca Raton, you may find it more convenient to use a Broward clinic than to drive into Miami proper. Telehealth TRT platforms also serve all Florida residents without the commute.",
      },
    },
  ],
}

export default async function BestMiamiTRTPage() {
  const { listings } = await getListings({ state: 'FL', city: 'Miami' })
  const featuredListings = listings.slice(0, 10)

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
          <Link href="/trt-clinics/fl" className="hover:text-brand-blue">Florida</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Miami</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          Find TRT Clinics in Miami, FL
        </h1>
        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Miami is one of the country&apos;s most health-and-body-conscious cities — and that culture extends to men&apos;s hormone health. South Florida&apos;s large Latin American community, which places a cultural premium on vitality and physical health, has driven strong demand for testosterone therapy. You&apos;ll find physician-supervised TRT clinics throughout Miami-Dade, with high concentrations in Brickell, Miami Beach, Coral Gables, and Doral.
        </p>

        {/* What to know */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-3">TRT in Miami: What to Know</h2>
          <p className="text-brand-steel text-sm mb-3 leading-relaxed">
            Miami&apos;s TRT clinic market spans a wide range — from high-end concierge hormone optimization practices in Miami Beach that include comprehensive biomarker testing, longevity panels, and peptide protocols, to more straightforward cash-pay men&apos;s health clinics in Doral and Hialeah that focus on affordable testosterone therapy. The city&apos;s bilingual environment (Spanish and English) means many clinics are equipped to serve patients in either language.
          </p>
          <p className="text-brand-steel text-sm leading-relaxed">
            Homestead is home to Homestead Air Reserve Base, giving South Florida an active military presence. Some Miami-area TRT providers accept Tricare or have experience working with military men and veterans. If you&apos;re near Homestead or serving at the base, ask specifically about military insurance coverage.
          </p>
        </div>

        {/* Listings */}
        {featuredListings.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-brand-navy">TRT Clinics in Miami</h2>
              <p className="text-sm text-brand-steel mt-1">{listings.length} clinic{listings.length !== 1 ? 's' : ''} listed in Miami, FL</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {listings.length > 10 && (
              <div className="text-center mb-10">
                <Link
                  href="/listings?city=Miami&state=FL"
                  className="inline-block px-6 py-2.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  View all {listings.length} Miami TRT clinics &rarr;
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Miami clinic listings are being added. Check back soon.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics &rarr;</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">TRT in Miami — Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Do Miami TRT clinics offer Spanish-language care?</h3>
              <p className="text-brand-steel mt-1">Yes. Miami&apos;s bilingual healthcare environment means many men&apos;s health clinics have Spanish-speaking staff or physicians. If Spanish-language care matters to you, call ahead to confirm before booking.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can I get TRT via telehealth in Miami?</h3>
              <p className="text-brand-steel mt-1">Yes. Multiple telehealth TRT platforms serve Florida residents and can ship testosterone medication to Miami addresses. You&apos;ll need in-person labs at a LabCorp or Quest (both widely available in Miami-Dade), but consultations and prescriptions can be handled remotely.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How much does TRT cost at Miami clinics?</h3>
              <p className="text-brand-steel mt-1">Cash-pay men&apos;s health clinics in Miami typically charge $150-$500/month depending on the treatment protocol. Insurance-billing urology practices can be much less — injectable testosterone is a generic medication. See our <Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">full TRT cost breakdown</Link>.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Browse All Florida TRT Clinics</h2>
          <p className="text-blue-200 text-sm mb-4">Compare TRT clinics across Miami, Fort Lauderdale, Tampa, Orlando, Jacksonville, and the rest of Florida.</p>
          <Link href="/trt-clinics/fl" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Florida Clinics &rarr;
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/trt-clinics/fl" className="text-brand-blue hover:underline">All TRT Clinics in Florida</Link></li>
            <li><Link href="/categories/telehealth-trt" className="text-brand-blue hover:underline">Telehealth TRT Options</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
            <li><Link href="/guides/low-testosterone-symptoms" className="text-brand-blue hover:underline">Signs of Low Testosterone</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
