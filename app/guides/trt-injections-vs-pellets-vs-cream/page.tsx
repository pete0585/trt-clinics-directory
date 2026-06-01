import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TRT Injections vs Pellets vs Cream: What Men Actually Need to Know | FindTRTClinic',
  description: 'Breaking down the real differences between testosterone injection, pellet, cream, and oral delivery methods — side effects, costs, convenience, and which works best for most men.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which TRT method is most effective — injections, pellets, or cream?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testosterone injections (cypionate or enanthate) are the gold standard for achieving consistent hormone levels. They have the largest body of clinical evidence, the lowest cost per dose, and are available at virtually every TRT clinic. Pellets and creams work but come with more variability and higher costs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do testosterone injections need to be administered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most men inject testosterone cypionate once every 1-2 weeks. Some clinics recommend more frequent smaller doses (twice weekly or daily subcutaneous microdoses) to keep levels more stable and avoid the mid-cycle energy crash.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do testosterone pellets last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testosterone pellets are inserted under the skin (typically in the upper buttocks) and slowly dissolve over 3-6 months. Most men get re-pelletted 2 times per year. The procedure is done in-office in about 15 minutes under local anesthetic.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can testosterone cream transfer to my partner or children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — transference is a real risk with testosterone gels and creams. Contact with treated skin can elevate testosterone in women (causing virilization) and in children (causing premature puberty). Always let the cream fully absorb and cover the application site before contact. Some clinics use scrotal cream application, which has higher absorption and lower transference risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is enclomiphene and how is it different from TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Enclomiphene is not TRT — it stimulates your body to produce more of its own testosterone by blocking estrogen receptors in the hypothalamus. Unlike exogenous testosterone, enclomiphene preserves testicular function and fertility. It is often used as an alternative for younger men who want to optimize testosterone without shutting down natural production.',
      },
    },
  ],
}

export default function InjectionsPelletsPage() {
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
          <span className="text-brand-navy font-medium">TRT Injections vs Pellets vs Cream</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          TRT Injections vs Pellets vs Cream: What Men Actually Need to Know
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Most TRT clinics offer multiple delivery methods but don&apos;t explain the tradeoffs clearly. Here&apos;s a direct breakdown of how testosterone injections, pellets, cream, and oral options differ — so you can walk into your first appointment knowing what to ask for.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-10 rounded-xl border border-brand-light-2">
          <table className="w-full text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Method</th>
                <th className="text-left px-4 py-3 font-semibold">Frequency</th>
                <th className="text-left px-4 py-3 font-semibold">Avg. Monthly Cost</th>
                <th className="text-left px-4 py-3 font-semibold">Biggest Drawback</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light-2 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Injections (cypionate)</td>
                <td className="px-4 py-3 text-brand-steel">Every 1–2 weeks</td>
                <td className="px-4 py-3 text-brand-steel">$75–$150</td>
                <td className="px-4 py-3 text-brand-steel">Energy dip near end of cycle</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Pellets</td>
                <td className="px-4 py-3 text-brand-steel">Every 3–6 months</td>
                <td className="px-4 py-3 text-brand-steel">$200–$500</td>
                <td className="px-4 py-3 text-brand-steel">Dose can&apos;t be adjusted mid-cycle</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Cream / Gel</td>
                <td className="px-4 py-3 text-brand-steel">Daily</td>
                <td className="px-4 py-3 text-brand-steel">$100–$250</td>
                <td className="px-4 py-3 text-brand-steel">Transference risk; variable absorption</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Oral (jatenzo/tlando)</td>
                <td className="px-4 py-3 text-brand-steel">Twice daily</td>
                <td className="px-4 py-3 text-brand-steel">$300–$600+</td>
                <td className="px-4 py-3 text-brand-steel">New; expensive; must take with food</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Enclomiphene</td>
                <td className="px-4 py-3 text-brand-steel">Daily pill</td>
                <td className="px-4 py-3 text-brand-steel">$80–$200</td>
                <td className="px-4 py-3 text-brand-steel">Not exogenous T; works by stimulating production</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Testosterone Injections</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Injections are the most studied and most cost-effective method. Testosterone cypionate and enanthate are the two standard forms — both are oil-based, injected intramuscularly (usually into the thigh or glute), and metabolized over 7-14 days. The downside: levels peak a few days after injection and taper toward the end of the cycle, which some men describe as a mid-cycle energy or libido dip.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          Many experienced TRT patients switch to smaller, more frequent doses — injecting twice weekly or daily via subcutaneous needle — to flatten the peak-and-trough curve. This approach produces remarkably stable levels and is preferred by most men once they&apos;re comfortable self-injecting.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Testosterone Pellets</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Pellets are small cylinders (about the size of a grain of rice) inserted under the skin in an in-office procedure. They dissolve slowly over 3-6 months, releasing a steady stream of testosterone. The appeal: no weekly injections, no daily creams, no peaks and troughs. The catch: once the pellets are in, the dose is set. If your testosterone comes in too high — which sometimes happens in the first cycle while the clinic is dialing in your dose — you ride it out.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          Pellets cost more per cycle than injections and aren&apos;t usually covered by insurance. They&apos;re popular among men who value simplicity and hate needles. Cost runs $600-1,500 per procedure at most clinics.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Testosterone Cream and Gel</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Topical testosterone is applied daily, either to the shoulders, upper arms, inner thighs, or — in the case of some compounded formulations — the scrotum. Scrotal application has 4-8x higher absorption than other skin sites and is gaining favor at men&apos;s health clinics because it produces more DHT (an androgen many men report feeling better on) and reduces the systemic cream load.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          The biggest risk with cream and gel is skin-to-skin transfer. Women exposed to testosterone through contact with treated skin can experience deepening voice, clitoral enlargement, or abnormal facial hair. Children exposed can undergo precocious puberty. This is not theoretical — the FDA has issued multiple warnings about it. If you have young children or a female partner, discuss transfer protocols carefully before starting topical testosterone.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Which Method Is Right for You?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          There is no universally &quot;best&quot; method — it depends on your lifestyle, risk tolerance, and budget. That said, most experienced TRT physicians start new patients on injections because they&apos;re easily adjustable, inexpensive, and allow for precise dose titration during the first few months when you&apos;re still finding your optimal level.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          If you hate needles and can afford the cost, pellets are a legitimate option. If you travel constantly and can&apos;t keep a cold chain for injectables, creams may work better. The right clinic will present all options, explain the tradeoffs, and let you choose — not steer you toward whatever they&apos;ve decided is standard.
        </p>

        {/* FAQ section */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">Which TRT method is most effective?</h3>
              <p className="text-brand-steel mt-1">Testosterone injections have the most clinical evidence behind them and produce reliable levels at the lowest cost. They&apos;re the standard starting point at most physician-supervised clinics.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can testosterone cream transfer to my partner?</h3>
              <p className="text-brand-steel mt-1">Yes. Skin-to-skin contact before the cream absorbs fully can expose partners and children to testosterone. Always let cream dry completely and cover the site. Scrotal application reduces (but doesn&apos;t eliminate) this risk.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">What is enclomiphene and how is it different from TRT?</h3>
              <p className="text-brand-steel mt-1">Enclomiphene stimulates your body to produce more of its own testosterone rather than supplying it exogenously. It preserves testicular function and fertility — making it an option for younger men who aren&apos;t ready to commit to exogenous testosterone.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does insurance cover testosterone pellets?</h3>
              <p className="text-brand-steel mt-1">Rarely. Most insurance plans cover injectable testosterone (generic versions cost very little) but do not cover pellets or compounded creams. Use our <Link href="/categories/trt-with-insurance" className="text-brand-blue hover:underline">insurance filter</Link> to find clinics that bill your plan for covered methods.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Ready to Find a TRT Clinic?</h2>
          <p className="text-blue-200 text-sm mb-4">Browse physician-supervised clinics that offer the treatment method you want — filter by injections, pellets, cream, or enclomiphene.</p>
          <Link
            href="/listings"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Find a TRT Clinic Near You →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover Testosterone Replacement Therapy?</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor (And What to Ask)</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
