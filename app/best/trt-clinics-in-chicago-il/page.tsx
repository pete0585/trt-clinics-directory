import type { Metadata } from 'next'
import Link from 'next/link'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Best TRT Clinics in Chicago, IL | FindTRTClinic',
  description:
    'Find testosterone replacement therapy clinics in Chicago, Illinois. Serving the Loop, North Shore, Oak Brook, Naperville, and the greater Chicago metro.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many TRT clinics are in Chicago?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Chicago has a well-developed men's health clinic market across the city and suburbs. You'll find dedicated TRT clinics in the Loop, River North, Wicker Park, and Lincoln Park, with a strong suburban presence in Oak Brook, Naperville, Schaumburg, and the North Shore. Northwestern Medicine, Rush University Medical Center, and NorthShore University HealthSystem also have urology programs that manage testosterone therapy.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do Chicago TRT clinics offer same-day lab results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Some Chicago men's health clinics have in-house phlebotomy with rapid lab turnaround — you can have results within hours rather than days. However, most standard clinics draw blood and send to LabCorp or Quest, with results in 24-48 hours. In-house same-day labs typically reflect a more premium model and don't necessarily indicate better clinical care.",
      },
    },
    {
      '@type': 'Question',
      name: 'Are there TRT clinics in the Chicago suburbs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The Chicago metro's suburban markets are well-served. Naperville, Oak Brook, Schaumburg, Libertyville, and the North Shore communities all have men's health practices that manage TRT. Many Chicago men prefer suburban clinics for the easier parking and shorter travel times.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does testosterone therapy help with Chicago winter fatigue and low mood?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Seasonal affective disorder (SAD) is a real phenomenon in high-latitude cities like Chicago, and its symptoms — fatigue, low mood, low libido, poor motivation — overlap substantially with low testosterone symptoms. A TRT evaluation should include a clinical interview to separate hormonal from seasonal factors. Low testosterone can worsen SAD symptoms, and treating genuine hypogonadism can improve resilience going into winter months.",
      },
    },
  ],
}

export default async function BestChicagoTRTPage() {
  const { listings } = await getListings({ state: 'IL', city: 'Chicago' })
  const featuredListings = listings.slice(0, 10)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-blue">Find a Clinic</Link>
          <span>/</span>
          <Link href="/trt-clinics/il" className="hover:text-brand-blue">Illinois</Link>
          <span>/</span>
          <span>Chicago</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl">
            Best TRT Clinics in Chicago, IL
          </h1>
          <p className="mt-3 text-brand-steel max-w-2xl">
            Chicago&apos;s men&apos;s health clinic market spans the city and its vast suburbs, with
            TRT providers available from the downtown Loop out to Naperville, Oak Brook, and the
            North Shore. The city&apos;s major academic medical centers — Northwestern, Rush, and
            UChicago — have urology programs for men with complex hormonal conditions, while
            independent men&apos;s health clinics offer faster access for straightforward TRT management.
          </p>
        </div>

        {featuredListings.length > 0 ? (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-brand-dark mb-6">TRT Clinics in Chicago</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
            <div className="mt-6">
              <Link href="/listings?city=Chicago&state=IL" className="text-brand-blue hover:underline text-sm font-medium">
                See all Chicago TRT clinics →
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-xl p-10 text-center mb-12">
            <p className="text-brand-steel mb-4">Search for TRT clinics in Chicago below.</p>
            <Link href="/listings?city=Chicago&state=IL" className="btn-primary text-sm">Search Chicago Clinics</Link>
          </div>
        )}

        <div className="space-y-5 mb-12">
          <h2 className="text-2xl font-semibold text-brand-dark">Chicago TRT: Frequently Asked Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-semibold text-brand-dark mb-2">{faq.name}</h3>
              <p className="text-sm text-brand-steel leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings?state=IL" className="text-brand-blue hover:underline font-medium">All Illinois TRT Clinics →</Link>
            <Link href="/best/trt-clinics-in-atlanta-ga" className="text-brand-blue hover:underline font-medium">TRT Clinics in Atlanta →</Link>
            <Link href="/guides/low-testosterone-symptoms" className="text-brand-blue hover:underline font-medium">Low Testosterone Symptoms →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
