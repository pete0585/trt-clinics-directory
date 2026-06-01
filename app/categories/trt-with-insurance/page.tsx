import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'TRT Clinics That Accept Insurance | FindTRTClinic',
  description: 'Find testosterone replacement therapy clinics that bill insurance directly. Filter by state to find in-network TRT providers that accept Aetna, BCBS, Cigna, UHC, Medicare, and Tricare.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Insurance-accepting TRT clinics are typically urologists, endocrinologists, men\'s health-focused primary care physicians, and some independent men\'s health practices. Most dedicated men\'s health chains and telehealth TRT platforms operate cash-pay only. To find insurance-accepting clinics in your area, use the insurance filter on this directory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tricare cover TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tricare covers FDA-approved testosterone medications (injections, FDA-approved gels) for active-duty service members, retirees, and their families when prescribed for documented hypogonadism. The VA also provides TRT for enrolled veterans through VA pharmacies, often at minimal or no cost depending on service-connected disability rating.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I need for insurance to cover TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most insurers require: two morning fasting blood tests showing total testosterone below 300 ng/dL (taken at least one week apart), documented symptoms of hypogonadism in your medical record, and a prescription for an FDA-approved testosterone formulation. Pellets and compounded creams are almost never covered.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does TRT cost with insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With insurance coverage for documented hypogonadism, generic testosterone cypionate injections typically cost $10-30/month at your plan\'s generic drug copay. Office visits are billed at your standard primary care or specialist rate. Labs are covered at your plan\'s lab benefit rate. Total out-of-pocket is usually under $100/month with good coverage.',
      },
    },
  ],
}

export default async function TRTWithInsurancePage() {
  const { listings } = await getListings({ insurance: true })

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
          <span className="text-brand-navy font-medium">Accepts Insurance</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-brand-blue" aria-label="" />
            </div>
            <h1 className="text-3xl font-bold text-brand-navy">TRT Clinics That Accept Insurance</h1>
          </div>
          <p className="text-brand-steel max-w-2xl leading-relaxed">
            TRT can cost $150-400/month out-of-pocket. With insurance coverage for documented hypogonadism, generic testosterone injections typically cost $10-30/month. These clinics bill insurance directly.
          </p>
        </div>

        {/* Veterans callout */}
        <div className="bg-brand-navy text-white rounded-xl p-5 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-2xl flex-shrink-0">🎖</div>
            <div>
              <h2 className="font-bold mb-1">Veterans: Tricare and VA Coverage Available</h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                Tricare covers TRT for eligible service members and retirees with documented hypogonadism. The VA provides TRT through VA pharmacies for enrolled veterans — often at $0-15/month depending on your disability rating. Combat deployments, TBI, and chronic stress are documented causes of secondary hypogonadism that may strengthen your coverage case. Ask your VA provider or Tricare-accepting clinic about your options.
              </p>
            </div>
          </div>
        </div>

        {/* What insurance covers */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">What Insurance Covers (and What It Does Not)</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-green-700 mb-2">✓ Typically Covered</h3>
              <ul className="space-y-1 text-brand-steel leading-relaxed">
                <li>Generic testosterone cypionate injections</li>
                <li>Generic testosterone enanthate injections</li>
                <li>FDA-approved brand gels (Androgel, Testim) — with prior authorization</li>
                <li>Baseline and follow-up lab work</li>
                <li>Office visits with in-network providers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-2">✗ Rarely or Never Covered</h3>
              <ul className="space-y-1 text-brand-steel leading-relaxed">
                <li>Testosterone pellets</li>
                <li>Compounded testosterone creams or gels</li>
                <li>Oral testosterone (Jatenzo) — expensive, sometimes covered</li>
                <li>Ancillaries (hCG, anastrozole) — plan-dependent</li>
                <li>Cash-pay telehealth TRT subscriptions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Listings */}
        {listings.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-brand-navy">
                {listings.length} Insurance-Accepting TRT Clinic{listings.length !== 1 ? 's' : ''}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {listings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white rounded-xl border border-brand-light-2 p-10 text-center mb-10">
            <p className="text-brand-steel mb-4">Insurance-accepting clinic listings are being verified and added.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics →</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What do I need for insurance to cover TRT?</h3>
              <p className="text-brand-steel mt-1">Two morning fasting blood tests below 300 ng/dL (at least one week apart), documented symptoms in your medical record, and a prescription for an FDA-approved testosterone formulation. Pellets and compounded creams are almost never covered.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How much does TRT cost with insurance?</h3>
              <p className="text-brand-steel mt-1">With coverage, generic testosterone cypionate typically costs $10-30/month at your generic drug copay. Total out-of-pocket (medication + labs + visits) is usually under $100/month with good coverage.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does Tricare cover TRT?</h3>
              <p className="text-brand-steel mt-1">Yes. Tricare covers FDA-approved testosterone for service members and retirees with documented hypogonadism. The VA provides TRT through VA pharmacies for enrolled veterans.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Run a Clinic That Bills Insurance?</h2>
          <p className="text-blue-200 text-sm mb-4">Insurance coverage is one of the top factors men use to choose a TRT clinic. Get listed and stand out.</p>
          <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Add Your Clinic →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2">
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover Testosterone Replacement Therapy? Full Guide</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
            <li><Link href="/categories/physician-supervised" className="text-brand-blue hover:underline">Physician-Supervised TRT Clinics</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
