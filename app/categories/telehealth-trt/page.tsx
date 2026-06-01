import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Telehealth TRT Clinics — Testosterone Therapy Online | FindTRTClinic',
  description: 'Find TRT clinics that offer testosterone replacement therapy via telehealth. Remote management, home delivery, and online appointments — no waiting room required.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I get TRT via telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Telehealth TRT is legal in all 50 states for FDA-approved testosterone medications. You typically complete lab work at a local draw site (LabCorp, Quest, or a local clinic), consult with a provider online, and receive medication shipped directly to your home. Telehealth is ideal for men who are comfortable with self-injection and want flexible ongoing management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is telehealth TRT legitimate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, when provided by licensed physicians or supervised NPs/PAs through compliant telemedicine platforms. The quality varies significantly between providers — look for platforms that require blood work before prescribing, have physicians on staff, monitor you with follow-up labs, and comply with state telemedicine regulations. Platforms that prescribe testosterone without labs are the ones to avoid.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover telehealth TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most telehealth TRT platforms operate on a cash-pay subscription model and do not bill insurance. However, some telehealth platforms do work with insurance or can provide superbills for reimbursement. If insurance coverage is important to you, an in-person clinic that accepts your plan may be a better option.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is medication delivered with telehealth TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most telehealth TRT platforms ship medication directly to your home, typically through a compounding pharmacy. Injectable testosterone is usually provided as a vial (you self-inject) along with syringes and needles. Some platforms send pre-filled syringes or auto-injector pens to simplify the process for new patients.',
      },
    },
  ],
}

export default async function TelehealthTRTPage() {
  const { listings } = await getListings({ telehealth: true })

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
          <span className="text-brand-navy font-medium">Telehealth TRT</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-brand-orange" aria-label="" />
            </div>
            <h1 className="text-3xl font-bold text-brand-navy">Telehealth TRT Clinics</h1>
          </div>
          <p className="text-brand-steel max-w-2xl leading-relaxed">
            Get testosterone replacement therapy without leaving home. These clinics offer online consultations, remote lab management, and home delivery of medication — no waiting rooms, no scheduling conflicts.
          </p>
        </div>

        {/* How telehealth TRT works */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">How Telehealth TRT Works</h2>
          <div className="grid sm:grid-cols-4 gap-4 text-sm">
            {[
              { step: '1', title: 'Blood Work', desc: 'Get labs drawn at a local LabCorp, Quest, or clinic. Most telehealth platforms provide lab orders.' },
              { step: '2', title: 'Online Consultation', desc: 'Meet with a physician or NP via video or messaging to review your labs and symptoms.' },
              { step: '3', title: 'Prescription', desc: 'If you qualify, a prescription is sent to a compounding pharmacy and shipped directly to you.' },
              { step: '4', title: 'Ongoing Monitoring', desc: 'Follow-up labs every 3-6 months. Dose adjustments via message or video as needed.' },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">{item.step}</div>
                <div className="font-semibold text-brand-navy mb-1">{item.title}</div>
                <p className="text-brand-steel text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who telehealth TRT is best for */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-sm">
            <h3 className="font-bold text-green-800 mb-2">Telehealth TRT Is a Good Fit If You...</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700 leading-relaxed">
              <li>Are already comfortable with self-injection or willing to learn</li>
              <li>Have already been on TRT before and know your protocol</li>
              <li>Travel frequently or have a busy schedule that makes in-person visits difficult</li>
              <li>Live in a rural area without nearby men&apos;s health clinics</li>
              <li>Are paying cash and want the most flexible management option</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm">
            <h3 className="font-bold text-amber-800 mb-2">Consider In-Person If You...</h3>
            <ul className="list-disc list-inside space-y-1 text-amber-700 leading-relaxed">
              <li>Are starting TRT for the first time and want hands-on guidance</li>
              <li>Have a complex medical history (cardiovascular disease, cancer, fertility concerns)</li>
              <li>Want insurance to cover the cost</li>
              <li>Are interested in pellets (requires an in-office procedure)</li>
              <li>Want direct physical examination as part of your care</li>
            </ul>
          </div>
        </div>

        {/* Listings */}
        {listings.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-brand-navy">
                {listings.length} Telehealth TRT Clinic{listings.length !== 1 ? 's' : ''}
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
            <p className="text-brand-steel mb-4">Telehealth clinic listings are being verified and added.</p>
            <Link href="/listings" className="text-brand-blue hover:underline text-sm">Browse all TRT clinics →</Link>
          </div>
        )}

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-8">
          <h2 className="font-bold text-brand-navy mb-4">Common Questions</h2>
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Is telehealth TRT legitimate?</h3>
              <p className="text-brand-steel mt-1">Yes, when provided by licensed physicians through compliant telemedicine platforms. Look for platforms that require labs before prescribing and have physicians on staff — not just NPs with no physician oversight.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How is medication delivered?</h3>
              <p className="text-brand-steel mt-1">Most telehealth platforms ship medication (typically testosterone cypionate vials) directly to your home through a compounding pharmacy, along with syringes and supplies.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does insurance cover telehealth TRT?</h3>
              <p className="text-brand-steel mt-1">Most telehealth TRT platforms are cash-pay only. If insurance coverage is a priority, look for an in-person clinic in our <Link href="/categories/trt-with-insurance" className="text-brand-blue hover:underline">insurance-accepting clinic list</Link>.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Offer Telehealth TRT?</h2>
          <p className="text-blue-200 text-sm mb-4">Get listed and reach men across your state who are searching for remote TRT management.</p>
          <Link href="/submit" className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Add Your Clinic →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-brand-light-2 text-sm">
          <h3 className="font-semibold text-brand-navy mb-3">Related</h3>
          <ul className="space-y-2">
            <li><Link href="/categories/physician-supervised" className="text-brand-blue hover:underline">Physician-Supervised TRT Clinics</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
