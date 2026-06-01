import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Physician-Supervised TRT Clinics | FindTRTClinic',
  description: 'Find TRT clinics with active MD or DO physician oversight. Physician-supervised testosterone therapy includes comprehensive blood work, proper dosing protocols, and ongoing medical monitoring.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does physician-supervised TRT mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physician-supervised TRT means that a licensed MD or DO is actively involved in your care — reviewing your labs, making prescribing decisions, and managing side effects. This is different from NP-only or PA-only clinics where a mid-level provider manages your case without physician oversight. Physician supervision is the standard of care for hormone replacement therapy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is physician-supervised TRT safer than NP-led TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Physician-supervised TRT is not necessarily safer by default — it depends on the specific physician and their TRT experience. However, an MD or DO can diagnose underlying conditions (pituitary tumors, secondary hypogonadism causes) that an NP may miss, and can manage complex comorbidities more effectively. For men with cardiovascular disease, cancer history, or fertility concerns, physician oversight is especially important.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does physician-supervised TRT cost more?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Physician-supervised clinics that accept insurance may actually cost less than telehealth or NP-only cash-pay platforms once insurance is applied. Hospital-affiliated urology and endocrinology practices treating hypogonadism are physician-supervised and often covered by standard insurance.',
      },
    },
  ],
}

export default async function PhysicianSupervisedPage() {
  const { listings } = await getListings({ physicianSupervised: true })

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
          <span className="text-brand-navy font-medium">Physician-Supervised</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" aria-label="" />
            </div>
            <h1 className="text-3xl font-bold text-brand-navy">Physician-Supervised TRT Clinics</h1>
          </div>
          <p className="text-brand-steel max-w-2xl leading-relaxed">
            Every clinic below has an MD or DO actively involved in patient care — reviewing labs, directing treatment, and managing side effects. Physician supervision is the clinical standard for testosterone replacement therapy.
          </p>
        </div>

        {/* What physician supervision means */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
          <h2 className="font-bold text-green-900 mb-3">What Physician Supervision Means</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold text-green-800 mb-1">Comprehensive Diagnosis</div>
              <p className="text-green-700">An MD or DO can diagnose the underlying cause of low testosterone — not just treat the symptom. This matters if there is a pituitary issue, secondary hypogonadism, or an underlying condition driving the low T.</p>
            </div>
            <div>
              <div className="font-semibold text-green-800 mb-1">Medically Appropriate Dosing</div>
              <p className="text-green-700">Physician-supervised protocols are based on symptom resolution and lab values — not &quot;optimization&quot; of arbitrary target numbers. This reduces the risk of supraphysiological dosing.</p>
            </div>
            <div>
              <div className="font-semibold text-green-800 mb-1">Complex Case Management</div>
              <p className="text-green-700">Men with cardiovascular disease, prostate history, or diabetes need physician-level oversight when managing TRT. An MD can coordinate with other specialists in your care team.</p>
            </div>
          </div>
        </div>

        {/* Listings */}
        {listings.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-brand-navy">
                {listings.length} Physician-Supervised TRT Clinic{listings.length !== 1 ? 's' : ''}
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
            <p className="text-brand-steel mb-4">Physician-supervised clinic listings coming soon as we verify clinic credentials.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics →</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What does physician-supervised TRT mean?</h3>
              <p className="text-brand-steel mt-1">A licensed MD or DO is actively involved in your care — reviewing labs, making prescribing decisions, and managing side effects. This is different from NP-only or PA-only clinics.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Is physician-supervised TRT safer?</h3>
              <p className="text-brand-steel mt-1">Physician oversight allows for diagnosis of underlying causes and management of complex comorbidities. For men with cardiovascular history, prostate concerns, or fertility questions, physician supervision is especially important.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does physician-supervised TRT cost more?</h3>
              <p className="text-brand-steel mt-1">Not necessarily. Physician-supervised clinics that accept insurance may cost less than cash-pay telehealth platforms once insurance is applied. Use our <Link href="/categories/trt-with-insurance" className="text-brand-blue hover:underline">insurance filter</Link> to find covered options.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Own a Physician-Supervised TRT Clinic?</h2>
          <p className="text-blue-200 text-sm mb-4">Get listed and show men the physician credentials that distinguish your practice.</p>
          <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Add Your Clinic →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2">
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor (And What to Ask)</Link></li>
            <li><Link href="/guides/low-testosterone-symptoms" className="text-brand-blue hover:underline">7 Signs of Low Testosterone Men Dismiss as Aging</Link></li>
            <li><Link href="/categories/trt-with-insurance" className="text-brand-blue hover:underline">TRT Clinics That Accept Insurance</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
