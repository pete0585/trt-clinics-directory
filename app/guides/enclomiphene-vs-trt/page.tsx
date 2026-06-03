import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Enclomiphene vs. TRT: Which Is Right for You? | FindTRTClinic',
  description:
    'Enclomiphene raises testosterone by stimulating your own production. TRT replaces it from outside. Here is a clear comparison of both approaches — who each works for and how to decide.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is enclomiphene FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As of 2024, enclomiphene is not FDA-approved for testosterone deficiency. It was undergoing FDA review but the approval process has stalled. It is widely prescribed off-label. Clomiphene citrate (Clomid) — a related compound that includes both the enclomiphene and zuclomiphene isomers — is FDA-approved for female infertility and prescribed off-label for male hypogonadism. Both are legally prescribable by a licensed physician.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does enclomiphene work as well as TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Enclomiphene raises serum testosterone levels in most men with secondary hypogonadism (where the problem is in the hypothalamus or pituitary, not the testes). For men whose testes can still produce testosterone when properly stimulated, enclomiphene can achieve levels comparable to TRT. For men with primary testicular failure, enclomiphene will not work — their testes cannot respond to stimulation.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is enclomiphene covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Enclomiphene is rarely covered by insurance because it is not FDA-approved for testosterone deficiency. Clomiphene citrate (generic Clomid) is sometimes covered when prescribed for male hypogonadism, but coverage depends on your insurer and how the claim is coded. Out-of-pocket costs for enclomiphene typically run $80-200/month through compounding pharmacies.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I switch from TRT to enclomiphene?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, but the transition requires patience. When you stop TRT, your hypothalamic-pituitary axis (HPA) needs time to recover — typically 3-6 months or more. Starting enclomiphene during TRT cessation can accelerate HPA recovery and help maintain acceptable testosterone levels during the transition period. Work with a knowledgeable provider who has managed this transition before.",
      },
    },
  ],
}

export default function EnclomipheneVsTRTPage() {
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
          <span className="text-brand-navy font-medium">Enclomiphene vs. TRT</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          Enclomiphene vs. TRT: Which Is Right for You?
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          There are two fundamentally different approaches to treating low testosterone: replace it from outside (TRT) or stimulate your body to make more of its own (enclomiphene and similar compounds). Both can raise your testosterone levels. They work through completely different mechanisms — and the right choice depends on your goals, your biology, and what matters most to you.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What Is Enclomiphene?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Enclomiphene is a selective estrogen receptor modulator (SERM). It works by blocking estrogen receptors in the hypothalamus — the part of your brain that monitors hormone levels and regulates testosterone production. When those receptors are blocked, the hypothalamus perceives a hormone deficit and sends signals (via GnRH) to the pituitary to release more LH and FSH. LH tells your testes to produce testosterone; FSH drives sperm production.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          The result: your body makes more of its own testosterone, through its own pathways, with its own feedback regulation still intact. Unlike TRT, you are not shutting down your hypothalamic-pituitary-gonadal (HPG) axis — you are stimulating it.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">How Enclomiphene Differs from TRT</h2>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-10 rounded-xl border border-brand-light-2">
          <table className="w-full text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Factor</th>
                <th className="text-left px-4 py-3 font-semibold">Enclomiphene</th>
                <th className="text-left px-4 py-3 font-semibold">TRT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light-2 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Mechanism</td>
                <td className="px-4 py-3 text-brand-steel">Stimulates own testosterone production</td>
                <td className="px-4 py-3 text-brand-steel">Replaces testosterone from outside</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Fertility impact</td>
                <td className="px-4 py-3 text-brand-steel">Preserves or improves sperm count</td>
                <td className="px-4 py-3 text-brand-steel">Suppresses sperm production (often to zero)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Monthly cost</td>
                <td className="px-4 py-3 text-brand-steel">$80–$200 (compounding pharmacy)</td>
                <td className="px-4 py-3 text-brand-steel">$75–$400+ depending on method</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">FDA approval</td>
                <td className="px-4 py-3 text-brand-steel">Not FDA-approved for low T (used off-label)</td>
                <td className="px-4 py-3 text-brand-steel">FDA-approved for hypogonadism</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">How it feels</td>
                <td className="px-4 py-3 text-brand-steel">Gradual, natural-feeling improvement</td>
                <td className="px-4 py-3 text-brand-steel">Often faster, more pronounced changes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Who Should Consider Enclomiphene Instead of TRT?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Enclomiphene is the better first-line option for a specific type of patient:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-brand-steel mb-6 text-sm leading-relaxed">
          <li><strong>Men who want to have biological children</strong> — enclomiphene preserves and often improves fertility while raising testosterone</li>
          <li><strong>Younger men (under 40) with secondary hypogonadism</strong> — where the problem is in the brain&apos;s signaling, not the testes themselves</li>
          <li><strong>Men with mildly to moderately low testosterone</strong> who may not need the full suppression of TRT</li>
          <li><strong>Men who want to preserve testicular function and size</strong> — TRT causes testicular atrophy over time; enclomiphene does not</li>
          <li><strong>Men who are uncertain about long-term TRT commitment</strong> and want a reversible option first</li>
        </ul>
        <p className="text-brand-steel mb-8 leading-relaxed">
          The key limitation: enclomiphene only works if your testes can still respond to LH stimulation. If you have primary testicular failure (the testes themselves are damaged or unable to produce testosterone), enclomiphene will not raise your levels and TRT is necessary.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Who Is TRT Still the Better Choice For?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          TRT is the right choice when:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-brand-steel mb-8 text-sm leading-relaxed">
          <li>You have primary hypogonadism (Klinefelter syndrome, undescended testicles, testicular injury or removal) — enclomiphene cannot stimulate testes that cannot respond</li>
          <li>Your testosterone is severely deficient and enclomiphene trials have not produced adequate response</li>
          <li>You do not plan to have biological children, or fertility is not a concern</li>
          <li>You want the most direct, proven, and clinically established approach to testosterone replacement</li>
          <li>You need more precise, adjustable dosing than enclomiphene provides</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Can You Use Both?</h2>
        <p className="text-brand-steel mb-8 leading-relaxed">
          Yes — and some clinics combine them strategically. When stopping TRT, enclomiphene can be used to help restart the HPG axis and maintain testosterone levels during the transition. Some protocols use low-dose TRT alongside enclomiphene to get the benefits of exogenous testosterone while partially preserving the hypothalamic-pituitary-testicular axis. This is specialist territory — it requires a provider who understands both approaches and knows how to monitor the combination appropriately.
        </p>

        {/* FAQ section */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Is enclomiphene FDA-approved?</h3>
              <p className="text-brand-steel mt-1">No, not for testosterone deficiency. It is prescribed off-label by licensed physicians. Clomiphene (a related compound) has a longer clinical history in men and is widely used off-label for hypogonadism. Both are legal to prescribe and manage.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does enclomiphene work as well as TRT?</h3>
              <p className="text-brand-steel mt-1">For men with secondary hypogonadism (normal testes, signaling problem in the brain), enclomiphene can achieve testosterone levels comparable to TRT. For men with primary testicular failure, it will not work. The only way to know which category you are in is through proper lab testing and evaluation.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How much does enclomiphene cost?</h3>
              <p className="text-brand-steel mt-1">Enclomiphene is available through compounding pharmacies and typically costs $80-$200/month depending on dose and source. Insurance rarely covers it. Compare this to generic injectable testosterone (TRT), which can cost as little as $30-$50/month when covered by insurance. See our full <Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">TRT cost guide</Link>.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can I switch from TRT to enclomiphene?</h3>
              <p className="text-brand-steel mt-1">Yes, but the transition takes time. Stopping TRT allows your HPG axis to recover — a process that typically takes 3-6 months, sometimes longer for men on TRT for many years. Starting enclomiphene during the transition can support recovery. This is best managed by a physician experienced in hormonal transitions. Read our guide on <Link href="/guides/trt-and-fertility" className="text-brand-blue hover:underline">TRT and fertility</Link> for more context on what recovery looks like.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find a Clinic That Offers Both TRT and Enclomiphene</h2>
          <p className="text-blue-200 text-sm mb-4">Not every men&apos;s health clinic is familiar with enclomiphene. Look for physician-supervised practices that discuss all options before prescribing.</p>
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
            <li><Link href="/guides/trt-and-fertility" className="text-brand-blue hover:underline">TRT and Fertility: What to Know Before You Start</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
