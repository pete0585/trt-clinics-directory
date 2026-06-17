import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Long Does TRT Take to Work? A Realistic Timeline | FindTRTClinic',
  description:
    'TRT results come in stages — some effects appear within weeks, others take 6-12 months. Here is a realistic, evidence-based timeline for what to expect from testosterone replacement therapy.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does TRT take to work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT effects develop in stages over months. Libido and energy often improve within 3-6 weeks. Mood improvements tend to come at 3-6 weeks as well. Body composition changes (muscle, fat) begin at 3 months and continue improving through 12+ months. Bone density improvements take 2-3 years. Full stabilization of blood levels depends on the delivery method: injections stabilize faster (weeks), pellets take longer to reach steady state (2-3 months).",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I feel at 6 weeks on TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "By 6 weeks, most men on TRT report at least some improvement in energy and libido — these are the fastest-responding symptoms. Some men feel a significant shift; others notice only mild improvement. If you feel nothing at 6 weeks, discuss your lab results with your provider — your dose may be too low, your injection frequency may not be maintaining stable levels, or the delivery method may not be working as expected. Don't stop before your first follow-up labs.",
      },
    },
    {
      '@type': 'Question',
      name: 'When does TRT start building muscle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Meaningful muscle mass changes from TRT typically require 3-6 months of consistent treatment combined with resistance training. Testosterone increases protein synthesis and satellite cell activation — but without the training stimulus, it has a limited anabolic effect. Men who add progressive resistance training to TRT see significantly better body composition outcomes than those who rely on TRT alone. Don't expect dramatic physique changes from TRT without lifting.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is it normal to feel worse before better on TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, for some men. In the first 2-4 weeks, estradiol can rise faster than expected as testosterone aromatizes, causing water retention, mood fluctuations, and even low mood or irritability. This usually stabilizes once the body adapts. If symptoms are significant, your provider may adjust dose or timing, or add a low-dose aromatase inhibitor. Feeling worse initially does not mean TRT isn't right for you — it usually means dose optimization is needed.",
      },
    },
  ],
}

const timeline = [
  { week: 'Weeks 1-3', changes: ['Blood levels rising', 'Possible early libido improvement', 'Some men notice slightly more energy'], note: 'Give it time' },
  { week: 'Weeks 3-6', changes: ['Libido often noticeably improved', 'Energy and mood beginning to stabilize', 'Sleep may improve'], note: 'First results for most' },
  { week: 'Months 2-3', changes: ['Labs checked and dose adjusted if needed', 'Mental clarity improving', 'Body beginning to recompose', 'Estradiol stabilizing'], note: 'First major checkpoint' },
  { week: 'Months 3-6', changes: ['Lean mass increasing (with training)', 'Fat loss accelerating', 'Erectile function improving', 'Blood markers stabilizing'], note: 'Visible changes begin' },
  { week: 'Months 6-12', changes: ['Body composition continues improving', 'Maximum benefits for many symptoms', 'Bone density beginning to respond', 'Labs confirm long-term stability'], note: 'Full benefit range' },
  { week: 'Year 2+', changes: ['Bone density measurably improved', 'Long-term metabolic benefits established', 'Maintenance labs every 6-12 months'], note: 'Long-term maintenance' },
]

export default function TRTTimelinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue">Guides</Link>
          <span>/</span>
          <span>How Long Does TRT Take to Work?</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl leading-tight">
            How Long Does TRT Take to Work? A Realistic Timeline
          </h1>
          <p className="mt-4 text-brand-steel text-lg leading-relaxed">
            TRT doesn&apos;t work on one timeline — different effects emerge at different rates,
            from weeks to over a year. Here is what the evidence says about when to expect each
            change, and what to do if you&apos;re not seeing results.
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">The TRT Timeline</h2>
            <div className="space-y-3">
              {timeline.map(({ week, changes, note }) => (
                <div key={week} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-brand-blue/5 px-5 py-3 flex items-center justify-between">
                    <span className="font-semibold text-brand-dark">{week}</span>
                    <span className="text-xs text-brand-steel bg-white border border-gray-200 rounded-full px-3 py-0.5">{note}</span>
                  </div>
                  <ul className="px-5 py-3 space-y-1">
                    {changes.map((c) => (
                      <li key={c} className="text-sm text-brand-steel flex items-start gap-2">
                        <span className="text-brand-blue mt-0.5">•</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">Why Results Vary</h2>
            <p className="text-brand-steel mb-4">
              Two men starting TRT on the same day with identical labs can have meaningfully
              different experiences in the first few months. The main variables:
            </p>
            <div className="space-y-3">
              {[
                { factor: 'Starting testosterone level', detail: 'Men with very low baseline testosterone typically feel effects faster and more dramatically than men starting in the low-normal range.' },
                { factor: 'Delivery method and dosing', detail: 'Weekly cypionate injections stabilize faster than pellets (which take 2-3 months to plateau). Cream absorption varies significantly person to person. Getting the dose and delivery right is iterative.' },
                { factor: 'Estradiol management', detail: "If testosterone aromatizes aggressively to estradiol, early benefits can be blunted. This is often corrected with dose adjustments or timing changes, not aromatase inhibitors." },
                { factor: 'Lifestyle factors', detail: 'Exercise — especially resistance training — amplifies almost every TRT benefit. Sleep quality, stress, and nutrition all affect how the hormonal changes translate into felt results.' },
              ].map(({ factor, detail }) => (
                <div key={factor} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-brand-dark text-sm mb-1">{factor}</p>
                  <p className="text-sm text-brand-steel">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">Common Questions</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq) => (
                <div key={faq.name} className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-semibold text-brand-dark mb-2 text-sm">{faq.name}</h3>
                  <p className="text-sm text-brand-steel leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-brand-dark mb-3">Find a TRT Clinic Near You</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="btn-primary text-sm">Find a TRT Clinic</Link>
            <Link href="/guides/trt-side-effects" className="text-brand-blue hover:underline font-medium">TRT Side Effects: What&apos;s Normal →</Link>
            <Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline font-medium">How to Find a TRT Doctor →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
