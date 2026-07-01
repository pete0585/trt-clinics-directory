import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: "TRT and Weight Loss: Does Testosterone Help You Lose Fat? | FindTRTClinic",
  description:
    "Low testosterone and excess body fat have a bidirectional relationship. Here is what the research says about TRT and fat loss — and what it doesn't do.",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does testosterone replacement therapy cause weight loss?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT does not directly cause weight loss in the way a caloric deficit does — but it does change body composition in ways that support fat loss. Clinical trials show that men on TRT consistently experience reductions in fat mass (particularly visceral abdominal fat) and increases in lean muscle mass, even without changes in diet or exercise. The net effect on scale weight varies — some men lose weight, some stay the same (as muscle mass offsets fat loss), and a few gain weight from increased muscle. If the goal is fat loss specifically, TRT creates a more favorable hormonal environment, but diet and exercise remain the primary drivers.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for TRT to improve body composition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most men begin noticing changes in body composition at 3-6 months into TRT. The TRAVERSE trial and other large studies show that fat mass reduction becomes statistically significant by 12 months. The rate of change depends on baseline testosterone level (more deficient = more room for improvement), dose optimization, concurrent exercise (resistance training amplifies the effect), diet, and sleep quality. TRT is not a quick fix — it is a hormonal correction that improves the underlying environment for body composition change.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why do men with low testosterone struggle to lose weight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Low testosterone creates a hormonal environment that strongly favors fat storage and muscle loss — making weight management significantly harder regardless of diet and exercise effort. Mechanisms include: reduced muscle protein synthesis (less lean mass = lower metabolic rate); increased aromatase activity in fat tissue (fat converts testosterone to estrogen, driving further fat accumulation); reduced insulin sensitivity; lower energy levels and motivation for physical activity; and sleep disruption (which independently drives cortisol and appetite dysregulation). Correcting testosterone deficiency addresses multiple pathways simultaneously.",
      },
    },
    {
      '@type': 'Question',
      name: 'Will I lose more weight combining TRT with GLP-1 medications (Ozempic/Wegovy)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "This combination is increasingly common and appears to be synergistic for some men. GLP-1 agonists (semaglutide, tirzepatide) drive significant caloric reduction and fat loss, but they also cause muscle loss — particularly without resistance training. TRT's muscle-preserving and muscle-building effects may partially offset the muscle loss seen with aggressive GLP-1-driven weight loss. Whether to combine TRT with GLP-1 therapy is a clinical decision that should involve your prescribing physician — monitoring labs (testosterone, estradiol, CBC) and tracking body composition changes are important in this combination.",
      },
    },
  ],
}

export default function TRTAndWeightLossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue">Guides</Link>
          <span>/</span>
          <span>TRT and Weight Loss</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-brand-dark sm:text-4xl leading-tight">
            TRT and Weight Loss: Does Testosterone Help You Lose Fat?
          </h1>
          <p className="mt-4 text-brand-steel text-lg leading-relaxed">
            Low testosterone and excess body fat are locked in a bidirectional cycle — each makes
            the other worse. Here is what the research says about whether TRT can break that cycle,
            how much fat loss to expect, and how testosterone interacts with newer weight loss
            medications.
          </p>
        </header>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              The testosterone-fat cycle
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              Body fat — particularly visceral abdominal fat — contains high concentrations of
              aromatase, the enzyme that converts testosterone into estrogen. The more visceral fat
              you carry, the more testosterone gets converted to estrogen, leaving less testosterone
              available. Lower testosterone then makes it harder to build or maintain muscle, reduces
              insulin sensitivity, and promotes further fat storage — which further increases aromatase
              activity.
            </p>
            <p className="text-brand-steel leading-relaxed">
              This is why obese men often have low testosterone without any primary testicular problem.
              The fat itself is suppressing testosterone. TRT can help break this cycle — but it works
              best in combination with diet and exercise that addresses the fat accumulation directly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              What research says about TRT and body composition
            </h2>
            <div className="space-y-4">
              {[
                {
                  finding: 'Fat mass decreases — particularly visceral fat',
                  detail: "Multiple randomized controlled trials and meta-analyses consistently show that TRT reduces fat mass. The effect is most pronounced in visceral (abdominal) fat — the metabolically harmful fat that drives insulin resistance and cardiovascular risk. A 12-month study in hypogonadal men showed average fat mass reduction of 1.6 kg vs placebo, with visceral fat reductions on imaging.",
                  strength: 'STRONG evidence',
                },
                {
                  finding: 'Lean muscle mass increases',
                  detail: "TRT consistently increases lean mass — the aggregate of muscle, bone, and organ tissue. Average increases of 1.5-2 kg lean mass are seen in TRT trials. This is driven by testosterone's direct anabolic effects on muscle protein synthesis. The combination of fat loss and muscle gain improves body composition even when scale weight changes little.",
                  strength: 'STRONG evidence',
                },
                {
                  finding: 'Metabolic rate improves',
                  detail: "Muscle is metabolically active — more lean mass means higher resting energy expenditure. As TRT increases lean mass, it modestly raises basal metabolic rate, creating a more favorable environment for ongoing fat loss. This effect compounds over time as lean mass accumulates.",
                  strength: 'MODERATE evidence',
                },
                {
                  finding: 'Insulin sensitivity improves',
                  detail: "TRT has been shown to improve insulin sensitivity and reduce HbA1c in hypogonadal men with type 2 diabetes or metabolic syndrome. This is clinically meaningful: better insulin sensitivity means less fat storage in response to carbohydrate intake and better fuel partitioning toward muscle.",
                  strength: 'MODERATE evidence',
                },
              ].map(({ finding, detail, strength }) => (
                <div key={finding} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-5 py-3 flex items-center justify-between">
                    <span className="font-semibold text-brand-dark">{finding}</span>
                    <span className="text-xs bg-white border border-gray-200 text-brand-steel rounded-full px-3 py-0.5">{strength}</span>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-brand-steel leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              Why TRT alone isn&apos;t enough for significant fat loss
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              TRT creates a better hormonal environment for body composition change — but it does not
              override a caloric surplus. Men who start TRT expecting to lose substantial weight without
              dietary changes are typically disappointed. What TRT does is:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                'Remove the hormonal drag that made fat loss disproportionately difficult',
                'Increase lean mass (which raises metabolic rate)',
                'Improve energy and motivation for exercise',
                'Reduce visceral fat preferentially',
                'Improve insulin sensitivity',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-steel">
                  <span className="text-brand-blue mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-steel leading-relaxed">
              The men who see the most dramatic body composition changes on TRT are those who pair
              it with progressive resistance training (2-4x/week), adequate protein intake
              (0.7-1g/lb bodyweight), and a modest caloric deficit. TRT amplifies the results of
              a well-designed training and diet program — it doesn&apos;t replace one.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-brand-dark mb-4">
              TRT and GLP-1 medications
            </h2>
            <p className="text-brand-steel leading-relaxed mb-4">
              As GLP-1 agonists like semaglutide (Ozempic/Wegovy) and tirzepatide (Mounjaro/Zepbound)
              have become widespread, many men take them alongside TRT. This combination is increasingly
              common and presents both opportunities and considerations:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-xl p-5">
                <p className="font-semibold text-brand-dark mb-3">Potential synergies</p>
                <ul className="space-y-2">
                  {[
                    "GLP-1s drive significant caloric reduction — TRT helps preserve muscle during aggressive weight loss",
                    "Both improve insulin sensitivity through different mechanisms",
                    "TRT's energy effects may partially offset GLP-1's common fatigue side effects",
                  ].map((item) => (
                    <li key={item} className="text-sm text-brand-steel flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-5">
                <p className="font-semibold text-brand-dark mb-3">Watch points</p>
                <ul className="space-y-2">
                  {[
                    "Rapid weight loss may increase testosterone levels (less aromatase activity) — dose may need adjustment",
                    "Monitor estradiol — rapid fat loss changes the aromatization rate",
                    "Maintain resistance training to preserve lean mass on GLP-1",
                  ].map((item) => (
                    <li key={item} className="text-sm text-brand-steel flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
          <h3 className="font-semibold text-brand-dark mb-3">Find a TRT Provider Who Addresses Body Composition</h3>
          <div className="flex flex-wrap gap-3 text-sm">
            <Link href="/listings" className="btn-primary text-sm">Find a TRT Clinic</Link>
            <Link href="/guides/trt-results-week-by-week" className="text-brand-blue hover:underline font-medium">TRT Results: Week by Week →</Link>
            <Link href="/guides/trt-side-effects" className="text-brand-blue hover:underline font-medium">TRT Side Effects →</Link>
            <Link href="/guides/trt-timeline-how-long-to-work" className="text-brand-blue hover:underline font-medium">TRT Timeline →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
