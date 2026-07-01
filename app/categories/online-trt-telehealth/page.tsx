import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Online TRT: Telehealth Testosterone Therapy Options | Find TRT Clinic',
  description:
    'Online TRT lets you consult with a physician via video, get labs locally, and have testosterone shipped to your door. What to look for — and what to watch out for — in telehealth TRT.',
  alternates: { canonical: 'https://findtrtclinic.com/categories/online-trt-telehealth' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is telehealth TRT legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, with important caveats. Testosterone is a Schedule III controlled substance, and the DEA sets federal rules for its prescribing. Post-2025 DEA regulations generally require at least one in-person visit per year for Schedule III controlled substance prescriptions via telehealth in most states — check your state's specific rules. The prescribing physician must be licensed in your state. Legal telehealth TRT providers will confirm these requirements upfront. Red flags: providers who will prescribe testosterone with no labs, no in-person requirement in any year, or who are not transparent about the prescribing physician's license.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does telehealth TRT work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Typically: (1) you order a lab panel (testosterone, free testosterone, LH, FSH, CBC, PSA, estradiol) at a local Quest or LabCorp; (2) you consult with a physician via video based on your labs and symptoms; (3) if prescribed, testosterone is shipped to your door by a licensed pharmacy; (4) follow-up labs and video visits continue on a schedule (typically every 3-6 months). Some platforms include lab costs in their subscription; others require you to order and pay for labs separately.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are the advantages of telehealth TRT over in-person clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Convenience is the primary advantage — no clinic visits for routine ongoing care, medication shipped to your door, and access to TRT in states with limited in-person provider options. Telehealth TRT is well-suited for stable patients on a consistent protocol who just need ongoing monitoring. It is less ideal for new diagnoses (where in-person evaluation adds value) and for complex cases with multiple comorbidities. Cost varies — some telehealth platforms are cost-competitive; others charge premium subscription fees.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I look for in a telehealth TRT provider?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Key criteria: physician oversight (not NP-only — a licensed MD or DO must authorize the controlled substance prescription); lab monitoring included or clearly explained (at minimum testosterone, CBC for hematocrit, and estradiol); controlled substance compliance (DEA registration, state licensing); real follow-up care beyond just prescription refills; and transparency about their pharmacy partner (ideally an FDA-registered pharmacy, not an offshore or unlicensed compounder). Avoid platforms that skip any of these steps.",
      },
    },
  ],
}

export default async function OnlineTRTTelehealthPage() {
  const { listings } = await getListings({})
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
          <span>Online TRT / Telehealth</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Online TRT: Telehealth Testosterone Therapy Options
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Telehealth testosterone replacement therapy expanded significantly after COVID-19 relaxed
            telemedicine restrictions, and for stable patients on a consistent protocol, online TRT
            offers real convenience — labs done locally, physician consultation via video, testosterone
            shipped to your door. But not all telehealth TRT platforms are built the same. Here is
            what to look for, what to watch out for, and how to evaluate your options.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>Available in most states</span>
            <span>·</span>
            <span>Physician-supervised</span>
            <span>·</span>
            <span>All delivery methods</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                How telehealth TRT works
              </h2>
              <div className="space-y-3">
                {[
                  {
                    step: '1. Order your lab panel',
                    detail: 'Most platforms direct you to Quest Diagnostics or LabCorp for a baseline panel: total testosterone, free testosterone, LH, FSH, estradiol, CBC (for hematocrit), and PSA. Some platforms include lab costs; others require you to order separately.',
                  },
                  {
                    step: '2. Consult with a physician',
                    detail: 'A licensed physician reviews your labs and symptoms via video consult. Expect 15-30 minutes. A good provider will review not just your testosterone level but your symptoms, health history, and relevant labs.',
                  },
                  {
                    step: '3. Receive your prescription',
                    detail: 'If prescribed, testosterone is shipped from a licensed pharmacy to your door. Injectable testosterone cypionate is most common; pellets, gels, and nasal formulations are available through some platforms.',
                  },
                  {
                    step: '4. Ongoing monitoring',
                    detail: 'Follow-up labs (at minimum hematocrit and testosterone levels) every 3-6 months, with video check-ins. Protocol adjustments happen remotely based on labs and symptom response.',
                  },
                ].map(({ step, detail }) => (
                  <div key={step} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="font-semibold text-gray-800 mb-1">{step}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                When telehealth TRT makes sense — and when it doesn&apos;t
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-3">Good fit for telehealth TRT</p>
                  <ul className="space-y-2">
                    {[
                      'Stable patients on a consistent protocol',
                      'Rural patients without local clinic access',
                      'Patients who prefer the convenience of at-home care',
                      'Follow-up monitoring and refills for established patients',
                    ].map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 rounded-xl p-5">
                  <p className="font-semibold text-gray-800 mb-3">Better in-person first</p>
                  <ul className="space-y-2">
                    {[
                      'New TRT diagnosis — in-person evaluation adds clinical value',
                      'Complex cases with multiple comorbidities or prior cardiovascular issues',
                      'Patients interested in pellets (requires in-person insertion procedure)',
                      'Suspected secondary hypogonadism requiring pituitary imaging',
                    ].map((item) => (
                      <li key={item} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-orange-500 mt-0.5">!</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Regulatory requirements (2025+)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                The DEA&apos;s post-pandemic telehealth rules (effective 2025) significantly tightened
                remote prescribing of controlled substances including testosterone. The key requirement
                in most states: <strong>at least one in-person visit per year</strong> to maintain
                a telehealth controlled substance prescription. Rules vary by state — check your
                state&apos;s medical board and the DEA&apos;s current guidance before enrolling with a
                telehealth TRT provider.
              </p>
              <div className="bg-yellow-50 rounded-xl border border-yellow-100 p-5">
                <p className="font-semibold text-gray-800 mb-2">Verify before enrolling</p>
                <ul className="space-y-2">
                  {[
                    "Is the prescribing physician licensed in your state?",
                    "Does the platform comply with your state's in-person visit requirements?",
                    "Is the pharmacy a licensed, FDA-registered facility?",
                    "What is the protocol for controlled substance renewal per your state's rules?",
                  ].map((q) => (
                    <li key={q} className="text-sm text-gray-700 flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">→</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-blue-100 p-5 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">What to look for in a telehealth TRT provider</h3>
              <ul className="space-y-2">
                {[
                  { item: 'Physician oversight', note: 'MD or DO must authorize the prescription — not NP-only' },
                  { item: 'Lab monitoring included', note: 'CBC, testosterone, estradiol at minimum' },
                  { item: 'DEA compliance', note: 'Registered, licensed, follows Schedule III rules' },
                  { item: 'Real follow-up', note: 'Protocol adjustments, not just refills' },
                  { item: 'Licensed pharmacy', note: 'FDA-registered, not offshore or unlicensed' },
                ].map(({ item, note }) => (
                  <li key={item} className="text-sm">
                    <span className="font-medium text-gray-800">{item}</span>
                    <span className="text-gray-500"> — {note}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/listings"
              className="inline-flex w-full items-center justify-center gap-2 bg-brand-blue text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90"
            >
              Browse All Providers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {featuredListings.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Providers Near You</h2>
              <Link href="/listings" className="text-sm text-brand-blue font-semibold hover:opacity-80 flex items-center gap-1">
                See all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Telehealth TRT: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects →</Link>
            <Link href="/categories/physician-supervised" className="text-sm text-brand-blue hover:opacity-80 font-medium">Physician-Supervised TRT →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
