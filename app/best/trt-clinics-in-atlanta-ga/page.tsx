import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Atlanta, GA | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Atlanta, GA. Serving Buckhead, Alpharetta, Sandy Springs, Marietta, and the greater Atlanta metro.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Atlanta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Atlanta's men's health clinic market has expanded significantly over the past several years. The metro area — including Buckhead, Alpharetta, Sandy Springs, Marietta, and Decatur — has a growing number of dedicated testosterone therapy clinics alongside urology practices that manage TRT as part of broader men's health care.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Atlanta TRT clinics do in-house labs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some Atlanta-area TRT clinics have in-house phlebotomy and send blood draws to external labs, while others require you to visit LabCorp or Quest. In-house labs are more convenient but don't necessarily indicate better care. What matters most is the frequency and comprehensiveness of your monitoring — total testosterone, free testosterone, estradiol, hematocrit, and PSA at minimum.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in the Atlanta suburbs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Alpharetta, Marietta, Roswell, Dunwoody, and Smyrna all have men's health clinics or urology practices that manage TRT. If you're in the northern suburbs, you don't need to drive into Buckhead or Midtown for care — the suburban market is well-served.",
      },
    },
  ],
}

export default async function BestAtlantaTRTPage() {
  const { listings } = await getListings({ state: 'GA', city: 'Atlanta' })
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
          <Link href="/trt-clinics/ga" className="hover:text-brand-blue">Georgia</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">Atlanta</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-3">
          Find TRT Clinics in Atlanta, GA
        </h1>
        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Atlanta has one of the Southeast&apos;s fastest-growing men&apos;s health markets. The metro area — spanning Buckhead, Midtown, Alpharetta, Sandy Springs, and Marietta — gives men a wide range of physician-supervised TRT options, from high-end concierge practices to affordable standalone clinics. Georgia&apos;s military presence, with Fort Gillem and Dobbins Air Reserve Base, also means Tricare-experienced providers are available.
        </p>

        {/* What to know */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-3">TRT in Atlanta: What to Know</h2>
          <p className="text-brand-steel text-sm mb-3 leading-relaxed">
            Atlanta&apos;s corporate and professional culture has contributed to an active men&apos;s health clinic market. Executive men in their 30s and 40s dealing with fatigue, diminished motivation, and declining performance are a significant patient population in Buckhead and North Atlanta. Many Alpharetta and Sandy Springs clinics offer extended hours and same-day lab draws to accommodate busy professionals.
          </p>
          <p className="text-brand-steel text-sm leading-relaxed">
            Fort Gillem (Forest Park) and Dobbins Air Reserve Base (Marietta) bring a veteran presence to the Atlanta metro. Several clinics in Marietta and the South Atlanta corridor specifically serve or have experience with Tricare beneficiaries. If you&apos;re a veteran, ask about military insurance acceptance when you call.
          </p>
        </div>

        {/* Listings */}
        {featuredListings.length > 0 ? (
          <>
            <div className="mb-5">
              <h2 className="text-xl font-bold text-brand-navy">TRT Clinics in Atlanta</h2>
              <p className="text-sm text-brand-steel mt-1">{listings.length} clinic{listings.length !== 1 ? 's' : ''} listed in Atlanta, GA</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {featuredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            {listings.length > 10 && (
              <div className="text-center mb-10">
                <Link
                  href="/listings?city=Atlanta&state=GA"
                  className="inline-block px-6 py-2.5 border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-medium rounded-lg transition-colors text-sm"
                >
                  View all {listings.length} Atlanta TRT clinics &rarr;
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Atlanta clinic listings are being added. Check back soon.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics &rarr;</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">TRT in Atlanta — Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Do Atlanta TRT clinics do in-house labs?</h3>
              <p className="text-brand-steel mt-1">Some do. In-house phlebotomy is a convenience feature — the more important factor is that your clinic monitors you regularly. Look for clinics that check testosterone levels, estradiol, hematocrit, and PSA at a minimum every 3-6 months once you&apos;re on a stable protocol.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Are there TRT clinics in Alpharetta or Marietta?</h3>
              <p className="text-brand-steel mt-1">Yes. The northern and western Atlanta suburbs are well-served. Alpharetta and Roswell have several men&apos;s health clinics catering to the tech and professional community. Marietta has providers experienced with military patients given its proximity to Dobbins ARB.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does Georgia insurance cover TRT?</h3>
              <p className="text-brand-steel mt-1">Insurance covers TRT for documented hypogonadism in Georgia the same as in any other state. You need two blood tests below 300 ng/dL with symptoms. Generic injectable testosterone is covered at the generic copay rate. See our <Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">insurance coverage guide</Link> for what to ask your provider.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Browse All Georgia TRT Clinics</h2>
          <p className="text-blue-200 text-sm mb-4">Compare physician-supervised TRT clinics across Atlanta, Savannah, Augusta, Columbus, and the rest of Georgia.</p>
          <Link href="/trt-clinics/ga" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            View Georgia Clinics &rarr;
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/trt-clinics/ga" className="text-brand-blue hover:underline">All TRT Clinics in Georgia</Link></li>
            <li><Link href="/categories/physician-supervised" className="text-brand-blue hover:underline">Physician-Supervised TRT Clinics</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
            <li><Link href="/guides/low-testosterone-symptoms" className="text-brand-blue hover:underline">Signs of Low Testosterone</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
