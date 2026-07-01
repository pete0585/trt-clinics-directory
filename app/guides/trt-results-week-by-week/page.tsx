import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TRT Results Week by Week: What to Expect at Every Stage | Find TRT Clinic',
  description:
    'A detailed week-by-week breakdown of what to expect from testosterone replacement therapy — from the first injection through 12 months of treatment. Evidence-based, no hype.',
  alternates: { canonical: 'https://findtrtclinic.com/guides/trt-results-week-by-week' },
}

export const revalidate = 86400

const FAQ = [
  {
    q: 'How soon does TRT start working?',
    a: 'Most men notice some effects within 2–4 weeks of starting TRT — typically increased libido and subtle energy improvements. Full physiological effects across all symptom domains take 6–12 months. Body composition changes (muscle gain, fat loss) require at least 3–6 months of consistent treatment and resistance training.',
  },
  {
    q: 'When do you feel the energy boost from TRT?',
    a: 'Energy improvements typically appear between weeks 3 and 6 for most men. The energy boost is often one of the earlier effects alongside libido improvement. Men who start with very low testosterone levels often notice energy changes faster and more dramatically than those who start in the low-normal range.',
  },
  {
    q: 'How often do you need labs on TRT?',
    a: 'Standard TRT monitoring includes labs at 6 weeks (to check initial levels and response), then at 3 months, and then every 6 months once you are stable on a consistent protocol. Labs typically include total testosterone, free testosterone, estradiol, hematocrit, and PSA for men over 40. Some providers check more frequently in the first year.',
  },
  {
    q: "What if TRT isn't working after 3 months?",
    a: "If you have not noticed meaningful improvement after 3 months, consult your provider before stopping. Common reasons for slow response include sub-optimal dosing, delivery method that doesn't suit your metabolism (e.g. poor cream absorption), high estradiol blunting effects, or an underlying issue like thyroid dysfunction or sleep apnea that hasn't been addressed. A dose or protocol adjustment often resolves this.",
  },
]

const stages = [
  {
    period: 'Weeks 1–4',
    headline: 'Rising levels, first signs of change',
    details: [
      'Blood testosterone levels begin rising within days of first injection or application.',
      'Some men notice early libido improvement in week 2–3.',
      'Water retention is possible as estradiol rises alongside testosterone.',
      'Energy changes are subtle — do not expect dramatic effects this early.',
      'Sleep quality may improve or feel disrupted as hormones shift.',
    ],
    callout: 'Give it time. Week 4 is too early to judge results.',
  },
  {
    period: 'Months 2–3',
    headline: 'Energy and mood improvements arrive',
    details: [
      'Most men report meaningful energy improvement by weeks 6–10.',
      'Brain fog often begins to clear — mental sharpness and focus improve.',
      'Mood stabilizes; many men report reduced irritability and improved motivation.',
      'Libido typically fully improved by the end of month 2.',
      'Your 6-week labs come back — provider checks levels and adjusts dose if needed.',
      'Workout recovery begins to improve noticeably.',
    ],
    callout: 'First major checkpoint. Labs help confirm your protocol is dialed in.',
  },
  {
    period: 'Months 4–6',
    headline: 'Body composition changes begin',
    details: [
      'Lean muscle starts to develop when combined with progressive resistance training.',
      'Fat redistribution begins — particularly visceral fat.',
      'Sexual function typically fully improved by this stage.',
      'Hematocrit may be rising — provider monitors and adjusts if needed.',
      'Estradiol is usually stable; symptoms from early estradiol spikes have resolved.',
    ],
    callout: 'Visible changes begin. Resistance training amplifies results significantly.',
  },
  {
    period: '6–12 Months',
    headline: 'Full physiological effects establish',
    details: [
      'Bone density is improving (not visible, but measurable by DEXA scan at 2 years).',
      'Full muscle and fat recomposition effects are now apparent with consistent training.',
      'Libido and sexual function are stable — no longer variable.',
      'Labs every 6 months to confirm hematocrit, PSA, and hormone levels are optimal.',
      'Most men feel significantly better than their pre-TRT baseline.',
    ],
    callout: 'Full benefit range. This is what TRT is supposed to feel like.',
  },
]

export default function TRTResultsWeekByWeekPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue">Guides</Link>
          <span>/</span>
          <span>TRT Results Week by Week</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            TRT Results Week by Week: What to Expect at Every Stage
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            TRT is not a fast fix — but the changes are real, progressive, and well-documented.
            Here&apos;s an honest breakdown of what to expect at each stage of testosterone replacement
            therapy, based on the clinical evidence and what most men actually report.
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Stage-by-Stage TRT Timeline
            </h2>
            <div className="space-y-5">
              {stages.map(({ period, headline, details, callout }) => (
                <div key={period} className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-brand-blue/10 to-indigo-50 px-6 py-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-xs font-semibold text-brand-blue uppercase tracking-wide">{period}</span>
                        <h3 className="font-semibold text-gray-800 mt-0.5">{headline}</h3>
                      </div>
                      <span className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-500">{callout}</span>
                    </div>
                  </div>
                  <ul className="px-6 py-4 space-y-2">
                    {details.map((d) => (
                      <li key={d} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-brand-blue mt-0.5 flex-shrink-0">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              What determines how fast TRT works?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Two men starting TRT on the same day, with similar lab values, can have meaningfully
              different timelines. The main factors that affect your results:
            </p>
            <div className="space-y-3">
              {[
                { factor: 'Baseline testosterone level', detail: 'Men starting with very low T (below 150 ng/dL) typically feel effects faster and more dramatically than men starting in the low-normal range (200–300 ng/dL).' },
                { factor: 'Protocol and delivery method', detail: 'Cypionate injections stabilize blood levels faster than pellets (which take 2–3 months to reach steady state). Cream absorption varies significantly by individual, which can make results feel unpredictable.' },
                { factor: 'Estradiol management', detail: 'Testosterone converts to estradiol (estrogen). If estradiol rises too fast early on, it can blunt the benefits. This is usually corrected with protocol timing, not aromatase inhibitors.' },
                { factor: 'Training and lifestyle', detail: 'Resistance training dramatically amplifies TRT\'s body composition benefits. Sleep quality, alcohol intake, and stress management all affect how well the hormonal changes translate into felt results.' },
              ].map(({ factor, detail }) => (
                <div key={factor} className="bg-gray-50 rounded-xl p-4">
                  <p className="font-semibold text-gray-800 text-sm mb-1">{factor}</p>
                  <p className="text-sm text-gray-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Common Questions</h2>
            {FAQ.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </section>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Ready to find a TRT clinic near you?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              FindTRTClinic.com lists physician-supervised testosterone replacement clinics across the US.
              Filter by location, insurance, and telehealth availability.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Browse TRT Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects: What&apos;s Normal →</Link>
              <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT →</Link>
              <Link href="/guides/low-testosterone-symptoms" className="text-sm text-brand-blue hover:opacity-80 font-medium">Low Testosterone Symptoms →</Link>
              <Link href="/categories/trt-for-veterans" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT for Veterans →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
