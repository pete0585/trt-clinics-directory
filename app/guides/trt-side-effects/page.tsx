import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "TRT Side Effects: What's Normal, What's Not | FindTRTClinic",
  description:
    "Most TRT side effects are manageable — but some are warning signs. Here is an honest breakdown of what to expect, what is dose-related, and what needs immediate attention.",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common TRT side effects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common TRT side effects are: elevated hematocrit (thickened blood — manageable with dose adjustment or periodic blood donation), testicular atrophy (from suppressed LH — reversible with HCG), acne (especially in younger men with higher androgen sensitivity), and water retention from elevated estradiol. Most of these are dose-related and manageable with protocol adjustments rather than stopping TRT.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is hair loss a side effect of TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT can accelerate androgenetic alopecia (male pattern baldness) in men who are genetically predisposed to it. If you have the gene, testosterone converts to DHT, which miniaturizes hair follicles. TRT doesn't cause hair loss in men without this genetic predisposition. Finasteride or dutasteride can mitigate this by blocking the testosterone-to-DHT conversion — your TRT provider can discuss this if it's a concern.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRT increase the risk of heart attack or stroke?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This was a concern after early studies, but the most rigorous recent evidence — the TRAVERSE trial (2023) — found no significant increase in major cardiovascular events in men receiving testosterone therapy vs placebo in a large, prospective trial. The TRAVERSE trial did find a slightly higher rate of pulmonary embolism and atrial fibrillation, which is worth noting. Men with pre-existing cardiovascular disease should discuss the risk-benefit balance with a cardiologist in addition to their TRT provider.",
      },
    },
    {
      '@type': 'Question',
      name: 'What TRT side effects should I call my doctor about immediately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Call your provider immediately if you experience: shortness of breath or chest pain (PE/DVT/cardiac event), severe leg swelling or pain (possible DVT), symptoms of polycythemia (severe headache, dizziness, vision changes — from elevated hematocrit), or signs of severe allergic reaction at an injection site. These are uncommon but serious. Do not wait for your next scheduled appointment if these occur.",
      },
    },
  ],
}

const sideEffects = [
  {
    effect: 'Elevated hematocrit (polycythemia)',
    severity: 'Monitor closely',
    cause: 'Testosterone stimulates red blood cell production',
    management: 'Dose reduction, less frequent injections, periodic phlebotomy (blood donation), switch to topical delivery',
    worrying_sign: '>54% hematocrit on labs, or symptoms of polycythemia (severe headache, dizziness)',
  },
  {
    effect: 'Testicular atrophy',
    severity: 'Common, usually reversible',
    cause: 'Exogenous testosterone suppresses LH/FSH, reducing testicular stimulation',
    management: 'HCG co-therapy maintains testicular volume and preserves some fertility',
    worrying_sign: 'Significant — discuss HCG with your provider if this matters to you',
  },
  {
    effect: 'Acne',
    severity: 'Mild to moderate',
    cause: 'Increased sebum production from androgens; more common in younger men',
    management: 'Topical retinoids, dose optimization, wash injection sites; rarely requires stopping TRT',
    worrying_sign: 'Severe cystic acne — may indicate supratherapeutic levels',
  },
  {
    effect: 'Elevated estradiol / water retention',
    severity: 'Common in early stages',
    cause: 'Testosterone aromatizes to estradiol; high E2 causes water retention, moodiness',
    management: 'Dose reduction, injection frequency adjustment, low-dose aromatase inhibitor if needed',
    worrying_sign: 'E2 above 60 pg/mL on labs, or gynecomastia (breast tissue growth)',
  },
  {
    effect: 'Sleep apnea worsening',
    severity: 'Clinically significant',
    cause: 'Testosterone can worsen central and obstructive sleep apnea',
    management: 'Screen for OSA before starting TRT; use CPAP if indicated',
    worrying_sign: 'New or worsening snoring, daytime fatigue, partner reports stopped breathing',
  },
  {
    effect: 'Injection site reactions',
    severity: 'Mild',
    cause: 'Oil-based carrier, injection technique, needle gauge',
    management: 'Warm oil before injection, rotate sites, use appropriate needle length',
    worrying_sign: 'Significant swelling, redness, or fever (possible infection)',
  },
]

export default function TRTSideEffectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue">Guides</Link>
          <span>/</span>
          <span>TRT Side Effects</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl leading-tight">
            TRT Side Effects: What&apos;s Normal, What&apos;s Not
          </h1>
          <p className="mt-4 text-brand-steel text-lg leading-relaxed">
            TRT has a real side effect profile — most of which is manageable with good clinical
            oversight. Here is an honest breakdown of what to expect, what is dose-related, and
            what requires immediate attention.
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">Side Effect Overview</h2>
            <div className="space-y-4">
              {sideEffects.map(({ effect, severity, cause, management, worrying_sign }) => (
                <div key={effect} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                    <span className="font-semibold text-brand-dark">{effect}</span>
                    <span className="text-xs bg-white border border-gray-200 text-brand-steel rounded-full px-3 py-0.5">{severity}</span>
                  </div>
                  <div className="px-5 py-4 space-y-2 text-sm">
                    <p><span className="font-medium text-brand-dark">Cause:</span> <span className="text-brand-steel">{cause}</span></p>
                    <p><span className="font-medium text-brand-dark">Management:</span> <span className="text-brand-steel">{management}</span></p>
                    <p><span className="font-medium text-brand-dark">Watch for:</span> <span className="text-brand-steel">{worrying_sign}</span></p>
                  </div>
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
          <h3 className="font-semibold text-brand-dark mb-3">Find a TRT Provider Who Monitors Properly</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="btn-primary text-sm">Find a TRT Clinic</Link>
            <Link href="/guides/trt-timeline-how-long-to-work" className="text-brand-blue hover:underline font-medium">TRT Timeline: How Long to See Results →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline font-medium">Does Insurance Cover TRT? →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
