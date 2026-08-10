import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'TRT for Veterans: TRICARE and VA Coverage | FindTRTClinic',
  description:
    'Find TRT clinics that understand TRICARE, VA coverage, and the unique hormone health needs of veterans and active duty military. Compare insurance-friendly options.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does the VA cover testosterone replacement therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. The VA covers testosterone replacement therapy for eligible veterans with a documented diagnosis of hypogonadism — confirmed by at least two morning testosterone lab values below the reference range plus symptoms. The VA uses injectable testosterone cypionate as the preferred TRT delivery method due to cost-effectiveness. Some veterans are also prescribed testosterone gel (Androgel) through VA pharmacies. The VA process involves lab testing through your primary care provider or endocrinology.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRICARE cover TRT for active duty and retired military?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRICARE covers testosterone replacement therapy when medically necessary — meaning lab-confirmed hypogonadism with symptoms. Active duty members typically access TRT through Military Treatment Facilities (MTFs). Retired military can use TRICARE Select or TRICARE For Life to see civilian TRT providers who participate in TRICARE. Use the insurance filter in this directory to find TRICARE-accepting TRT clinics in your area.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why are veterans more likely to have low testosterone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Veterans face multiple hormonal stressors that are not present in the civilian population. Deployment-related sleep deprivation, chronic stress (combat and operational), physical injuries (especially TBI), PTSD, and exposure to environmental toxins (burn pits, Agent Orange, depleted uranium) are all associated with hypothalamic-pituitary dysfunction and secondary hypogonadism. Veterans and active duty personnel should be evaluated for low testosterone if experiencing symptoms — and should advocate for lab testing if their primary care provider has not ordered it.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can veterans use the VA for TRT while also seeing a private TRT clinic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Veterans can receive TRT both through the VA and through private providers, but it's important to be transparent with both providers about all medications. Receiving testosterone from two sources simultaneously is dangerous and not appropriate. Some veterans use private TRT clinics because VA wait times are long or because they want a delivery method the VA doesn't stock (like pellets or newer oral formulations) — this is a personal decision that should be coordinated with both providers.",
      },
    },
  ],
}

export default async function TRTForVeteransPage() {
  const { listings } = await getListings({ insurance: true })
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
          <span>TRT for Veterans</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            TRT for Veterans and Active Duty Military
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Veterans and active duty service members face hormonal stressors that civilian men
            typically don&apos;t — deployment-related sleep deprivation, chronic operational stress,
            TBI, PTSD, and environmental exposures that affect the hypothalamic-pituitary axis.
            Low testosterone is significantly more prevalent in the veteran population than in age-matched
            civilians. Whether you&apos;re seeking TRT through the VA, TRICARE, or a private clinic,
            this guide covers your options.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>VA coverage available</span>
            <span>·</span>
            <span>TRICARE-accepting clinics</span>
            <span>·</span>
            <span>Physician supervised</span>
            <span>·</span>
            <span>Telehealth options</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your TRT Options as a Veteran</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Through the VA',
                    desc: 'Covered for eligible veterans with documented hypogonadism. Requires lab work through your VA primary care provider. Injectable testosterone cypionate is the VA standard. Process can take several weeks due to wait times.',
                    badge: 'No cost for eligible veterans',
                  },
                  {
                    title: 'Through TRICARE (active duty / retired)',
                    desc: 'Covers TRT when medically necessary. Active duty access through MTFs. Retired military use TRICARE Select or TFL at TRICARE-participating civilian clinics. Requires pre-authorization in some cases.',
                    badge: 'Low cost-share for most plans',
                  },
                  {
                    title: 'Private TRT clinic',
                    desc: "Faster access than VA, more delivery options (pellets, patches, newer oral formulations). Some private clinics accept TRICARE. Cash-pay options available if insurance won't cover. Good choice if VA wait times are prohibitive.",
                    badge: '$100-400/month cash pay',
                  },
                ].map((opt) => (
                  <div key={opt.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-semibold text-gray-800">{opt.title}</p>
                      <span className="flex-shrink-0 text-xs bg-blue-50 text-blue-700 rounded-full px-2 py-0.5 font-medium">{opt.badge}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Signs you should ask about TRT</h3>
              <ul className="space-y-2">
                {[
                  'Persistent fatigue even with adequate sleep',
                  'Low libido or erectile dysfunction',
                  'Significant muscle loss despite training',
                  'Brain fog or concentration issues',
                  'Depression or mood swings not responding to treatment',
                  'History of TBI, PTSD, or burn pit exposure',
                ].map((s) => (
                  <li key={s} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">→</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/listings?insurance_accepted=true" className="inline-flex w-full items-center justify-center gap-2 bg-brand-blue text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90">
              Find Insurance-Accepting Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {featuredListings.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Insurance-Accepting TRT Clinics</h2>
              <Link href="/listings?insurance_accepted=true" className="text-sm text-brand-blue font-semibold hover:opacity-80">See all →</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Veteran TRT Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/categories/trt-with-insurance" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT with Insurance →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
            <Link href="/best/trt-clinics-in-san-antonio-tx" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Clinics in San Antonio →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
