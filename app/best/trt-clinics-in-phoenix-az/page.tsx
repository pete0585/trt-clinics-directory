import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Phoenix, AZ | FindTRTClinic',
  description:
    'Find the best testosterone replacement therapy clinics in Phoenix, Arizona. Serving Scottsdale, Tempe, Mesa, and Chandler — including Tricare-accepting clinics near Luke Air Force Base.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Phoenix?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Phoenix and the surrounding metro (Scottsdale, Tempe, Mesa, Chandler, Peoria) has a robust men's health clinic market. The area's health-conscious population and large veteran community have driven significant growth in dedicated hormone therapy clinics over the past several years.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Phoenix TRT clinics accept Tricare?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some do. Luke Air Force Base is located in Glendale, and the Phoenix metro has a large active duty and veteran population. Several men\'s health practices in the area accept Tricare or work with VA-affiliated providers. Use the insurance filter to find clinics that accept Tricare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a TRT clinic near Scottsdale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Scottsdale has a strong concentration of men's health and wellness clinics. The area's affluent, health-focused demographic supports a range of physician-supervised TRT options, from concierge practices in North Scottsdale to more affordable clinics near the Old Town and Tempe corridors.",
      },
    },
  ],
}

export default async function BestPhoenixTRTPage() {
  const { listings } = await getListings({ state: 'AZ', city: 'Phoenix' })
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
          <Link href="/trt-clinics/az" className="hover:text-brand-blue">Arizona</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Phoenix</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          Find TRT Clinics in Phoenix, AZ
        </h1>
        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Phoenix and the surrounding metro — Scottsdale, Tempe, Mesa, Chandler — has developed one of the Southwest&apos;s strongest men&apos;s health clinic markets. Arizona&apos;s warm climate and outdoor lifestyle attract health-conscious men who take hormone health seriously, and the area&apos;s large military community means Tricare-accepting clinics are more common here than in many other markets.
        </p>

        {/* What to know about Phoenix TRT */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-3">TRT in Phoenix: What to Know</h2>
          <p className="text-brand-steel text-sm mb-3 leading-relaxed">
            Luke Air Force Base in Glendale makes the Phoenix West Valley one of the most veteran-dense metro areas in the country. Dozens of men&apos;s health clinics in Phoenix, Glendale, and Peoria have built their practices around serving active duty and retired military men, many of whom use Tricare or are VA beneficiaries. If military insurance coverage matters to you, Phoenix gives you options.
          </p>
          <p className="text-brand-steel text-sm leading-relaxed">
            Scottsdale&apos;s concentration of concierge wellness and longevity practices also means Phoenix-area men have access to more premium, comprehensive hormone optimization programs — including advanced labs, peptide therapy, and integrated men&apos;s health — than most comparable cities. If you want more than a basic TRT prescription, there are providers here who specialize in it.
          </p>
        </div>

        {/* Listings */}
        {featuredListings.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-brand-navy">TRT Clinics in Phoenix</h2>
              <p className="text-sm text-brand-steel mt-1">{listings.length} clinic{listings.length !== 1 ? 's' : ''} listed in Phoenix, AZ</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {listings.length > 10 && (
              <div className="text-center mb-10">
                <Link
                  href="/listings?city=Phoenix&state=AZ"
                  className="inline-block px-6 py-2.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  View all {listings.length} Phoenix TRT clinics &rarr;
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Phoenix clinic listings are being added. Check back soon.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics &rarr;</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">TRT in Phoenix — Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Do Phoenix TRT clinics accept Tricare?</h3>
              <p className="text-brand-steel mt-1">Some do — the Phoenix metro has a large military community served by Luke Air Force Base and multiple VA facilities. Several men&apos;s health practices accept Tricare or work alongside VA providers. Use the insurance filter to narrow your search.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Are there TRT clinics in Scottsdale?</h3>
              <p className="text-brand-steel mt-1">Yes. Scottsdale has a strong concentration of wellness-focused men&apos;s health clinics, ranging from affordable cash-pay practices near Old Town to concierge hormone optimization programs in North Scottsdale. Many Scottsdale clinics include advanced labs, peptide therapy, and cardiovascular monitoring as part of their TRT programs.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How much does TRT cost in Phoenix?</h3>
              <p className="text-brand-steel mt-1">Phoenix-area TRT costs vary significantly. Cash-pay men&apos;s health clinics typically charge $150-$400/month. Urology practices that bill insurance can be much less — often just a copay and the cost of generic injectable testosterone. See our full <Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">TRT cost guide</Link> for a breakdown.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Browse All Arizona TRT Clinics</h2>
          <p className="text-blue-200 text-sm mb-4">Compare physician-supervised clinics across Phoenix, Scottsdale, Tempe, Mesa, Tucson, and the rest of Arizona.</p>
          <Link href="/trt-clinics/az" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Arizona Clinics &rarr;
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/trt-clinics/az" className="text-brand-blue hover:underline">All TRT Clinics in Arizona</Link></li>
            <li><Link href="/categories/physician-supervised" className="text-brand-blue hover:underline">Physician-Supervised TRT Clinics</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover TRT?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
