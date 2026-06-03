import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TRT and Fertility: What to Know Before You Start | FindTRTClinic',
  description:
    'Testosterone replacement therapy suppresses natural sperm production. Here is what you need to know about TRT and fertility — your options, how to protect fertility, and how long recovery takes.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does TRT make you infertile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT suppresses natural testosterone production and dramatically reduces sperm count — often to zero. This effect is usually reversible after stopping TRT, but it can take months to years to recover, and recovery is not guaranteed for everyone. If you want biological children, discuss your options with a TRT provider before starting.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can you have kids on TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not typically through natural conception, because TRT suppresses sperm production. However, options exist: hCG co-therapy can maintain some sperm production while on TRT, and sperm banking before starting TRT preserves fertility as a backup. Some men use enclomiphene or clomiphene instead of exogenous testosterone to raise hormone levels while preserving fertility.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is hCG therapy for TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Human chorionic gonadotropin (hCG) mimics luteinizing hormone (LH), which tells the testes to produce testosterone and sperm. When used alongside TRT, hCG can prevent testicular atrophy and maintain some sperm production. It is injected subcutaneously, often 2-3 times per week. Not all clinics offer it — ask specifically if you care about fertility.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long after stopping TRT does fertility return?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Most men begin recovering sperm production within 3-6 months of stopping TRT. Full recovery to pre-TRT sperm counts can take 12-24 months or longer. A small percentage of men — particularly those who were on TRT for many years — do not fully recover. A reproductive urologist can monitor your recovery and intervene if needed.",
      },
    },
  ],
}

export default function TRTAndFertilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides/how-to-find-a-trt-doctor" className="hover:text-brand-blue">TRT Guides</Link>
          <span>/</span>
          <span className="text-brand-navy font-medium">TRT and Fertility</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          TRT and Fertility: What to Know Before You Start
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          This is one of the most important conversations men need to have before starting testosterone replacement therapy — and one of the most often skipped. TRT suppresses natural sperm production, often dramatically. If you want biological children now or in the future, you need to understand the risks and your options before your first injection.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">How Testosterone Replacement Affects Sperm Production</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          When you take exogenous testosterone (testosterone from outside your body), your hypothalamus detects elevated blood testosterone levels and signals the pituitary to stop producing luteinizing hormone (LH) and follicle-stimulating hormone (FSH). LH is the signal that tells your testes to make testosterone; FSH is the signal that drives sperm production.
        </p>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Without LH and FSH, intratesticular testosterone drops dramatically — even though your blood testosterone is high — and sperm production follows. Studies show that most men on TRT reach azoospermia (zero sperm) within 3-4 months. Some men maintain a small sperm count, but conception through natural intercourse becomes unlikely.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          This effect is a known and expected consequence of TRT — it is how the hormonal feedback loop works. What varies is how quickly it happens, how complete the suppression is, and how well you recover when (or if) you stop.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What Are Your Options If You Want Children?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          The honest answer: if you want biological children, you should either delay TRT, modify your protocol, or prepare before starting. Here are the main pathways:
        </p>

        <div className="space-y-5 mb-8">
          <div className="bg-white rounded-xl border border-brand-light-2 p-5">
            <h3 className="font-bold text-brand-navy mb-2">Sperm Banking Before TRT</h3>
            <p className="text-brand-steel text-sm leading-relaxed">
              The safest option for preserving fertility is to bank sperm before starting TRT. A semen analysis and cryopreservation at a fertility clinic or sperm bank costs $500-$1,500 for the initial sample. Annual storage typically runs $300-$500. This guarantees you have biological options available regardless of what happens to your sperm count on TRT or after stopping.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-brand-light-2 p-5">
            <h3 className="font-bold text-brand-navy mb-2">hCG Co-Therapy</h3>
            <p className="text-brand-steel text-sm leading-relaxed">
              Human chorionic gonadotropin (hCG) mimics LH and can maintain intratesticular testosterone — keeping the testes active while you&apos;re on exogenous testosterone. Many clinics offer hCG alongside TRT specifically for fertility preservation and to prevent testicular atrophy. It is not a guarantee of maintained fertility, but it significantly reduces suppression compared to TRT alone. Typical dosing is 250-500 IU injected subcutaneously 2-3 times per week.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-brand-light-2 p-5">
            <h3 className="font-bold text-brand-navy mb-2">Enclomiphene or Clomiphene Instead of TRT</h3>
            <p className="text-brand-steel text-sm leading-relaxed">
              Enclomiphene and clomiphene citrate work by blocking estrogen receptors in the hypothalamus, which causes the pituitary to release more LH and FSH — stimulating your body to make more of its own testosterone. Because this approach works with your natural hormonal system rather than replacing it, sperm production is preserved and often improves. This is the preferred option for men with low testosterone who want to conceive. Not everyone responds adequately — some men need true TRT — but it is worth trying first if fertility matters.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-brand-light-2 p-5">
            <h3 className="font-bold text-brand-navy mb-2">Stopping TRT to Conceive</h3>
            <p className="text-brand-steel text-sm leading-relaxed">
              If you are already on TRT and want to conceive, stopping TRT and using hCG (with or without clomiphene) can restore sperm production in most men. Working with a reproductive urologist during this process improves outcomes. Plan for a recovery period of 3-12 months before attempting conception; in some cases it takes longer.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">How Long After Stopping TRT Does Fertility Return?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          The research suggests that most men who stop TRT will see sperm return, but the timeline varies widely. In clinical studies, the median time to recovery of sperm production is around 3-6 months, with most men recovering to their pre-TRT levels within 12-18 months. A minority of men — particularly those on TRT for many years, or those who had borderline fertility before starting — do not fully recover.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          Duration of use appears to matter. Men who used TRT for 1-2 years tend to recover faster and more completely than men who used it for 5-10 years. Age also matters — younger men tend to recover better. This is not a reason to avoid TRT if you need it, but it is a reason to have a plan.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Questions to Ask Your TRT Provider About Fertility</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Before starting TRT, have a direct conversation with your provider:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-brand-steel mb-8 text-sm leading-relaxed">
          <li>Do you offer hCG co-therapy for fertility preservation?</li>
          <li>Have you worked with patients who needed to restore fertility after TRT?</li>
          <li>Do you recommend sperm banking before starting?</li>
          <li>What is your protocol if I want to stop TRT to conceive?</li>
          <li>Do you work with reproductive urologists or fertility specialists for patients who need to transition off TRT?</li>
          <li>Have you managed enclomiphene or clomiphene protocols for patients who want to preserve fertility while improving testosterone?</li>
        </ul>

        <p className="text-brand-steel mb-8 leading-relaxed">
          A provider who dismisses fertility concerns or doesn&apos;t have clear answers is a warning sign. Good TRT providers discuss this proactively — it is part of informed consent.
        </p>

        {/* FAQ section */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Does TRT make you permanently infertile?</h3>
              <p className="text-brand-steel mt-1">Not usually — most men recover sperm production after stopping TRT, though it can take 6-18 months or longer. A small number of men do not fully recover, particularly after long-term use. Banking sperm before starting is the safest way to protect your fertility options.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can I stay on TRT and still have kids?</h3>
              <p className="text-brand-steel mt-1">Natural conception is unlikely on TRT because sperm production is suppressed. With sperm banking, IVF using banked sperm is possible. hCG co-therapy can maintain some sperm production, which may allow conception in some men, but it is not reliable enough to count on.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">What is hCG therapy and how does it help?</h3>
              <p className="text-brand-steel mt-1">hCG (human chorionic gonadotropin) mimics the LH signal that tells your testes to stay active. Used alongside TRT, it can prevent testicular atrophy and maintain some sperm production. Many clinics offer it — ask specifically. See our guide to <Link href="/guides/enclomiphene-vs-trt" className="text-brand-blue hover:underline">enclomiphene vs TRT</Link> for an alternative that fully preserves fertility.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How long does TRT take to affect sperm count?</h3>
              <p className="text-brand-steel mt-1">Sperm suppression typically begins within 6-8 weeks of starting TRT and most men reach near-zero sperm counts by 3-4 months. If you are planning to bank sperm, do it before your first dose or within the first few weeks of starting.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find a TRT Clinic That Addresses Fertility</h2>
          <p className="text-blue-200 text-sm mb-4">Look for physician-supervised clinics that offer hCG co-therapy and can discuss your fertility goals before prescribing testosterone.</p>
          <Link
            href="/listings"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Find a TRT Clinic Near You &rarr;
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/enclomiphene-vs-trt" className="text-brand-blue hover:underline">Enclomiphene vs. TRT: Which Is Right for You?</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
