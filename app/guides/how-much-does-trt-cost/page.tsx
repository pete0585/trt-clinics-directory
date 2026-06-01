import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does TRT Really Cost? A Transparent Breakdown | FindTRTClinic',
  description: 'Actual TRT costs by delivery method — injections, pellets, cream, and telehealth. What insurance covers, what it does not, and how to get the best value for your budget.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does TRT cost per month?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monthly TRT costs range widely by delivery method: testosterone injections cost $75-$200/month out-of-pocket (or as low as $15-30/month with insurance for generic cypionate), pellets cost $300-$500 per procedure every 3-6 months, topical creams cost $100-$250/month, and telehealth programs typically run $100-$300/month all-in including medication. Labs add $50-$150 every few months.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest TRT option?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generic testosterone cypionate injections are by far the most affordable option. With insurance coverage for documented hypogonadism, the medication itself may cost as little as $10-30/month. Without insurance, testosterone cypionate from a compounding pharmacy typically runs $30-60/month for the vial. You also need syringes (pennies each) and the cost of office visits or a telehealth subscription.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the VA cover TRT for veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The VA covers TRT for enrolled veterans with a documented hypogonadism diagnosis. Medication is provided through VA pharmacies at VA copay rates (often $0-$15/month depending on the veteran\'s service-connected disability rating). Veterans with service-connected conditions that affect testosterone production may qualify more easily.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do TRT costs vary so much between clinics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TRT costs vary because clinics have different business models, overhead structures, and revenue drivers. Men\'s health chains make significant margins on pellets and compounded medications — hence why they often push these options. Independent physician practices may offer generic injectables at much lower cost. Always ask for an itemized breakdown of what you\'re paying for.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there hidden costs with TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most clinics advertise medication cost but not the full picture. Hidden or overlooked costs include: baseline blood work ($100-300 out-of-pocket if uninsured), follow-up labs every 3-6 months, office visit fees, estrogen management (anastrozole or aromasin if estrogen rises), hCG for fertility preservation if desired, and supplies (syringes, alcohol wipes, sharps container for injections).',
      },
    },
  ],
}

export default function TRTCostPage() {
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
          <span className="text-brand-navy font-medium">How Much Does TRT Cost?</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          How Much Does TRT Really Cost? A Transparent Breakdown
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Most TRT clinics are not transparent about what you will actually spend. Here is a real breakdown by delivery method — medication cost, labs, follow-ups, and what insurance covers — so you can make an informed decision before booking an appointment.
        </p>

        {/* Cost table */}
        <div className="overflow-x-auto mb-10 rounded-xl border border-brand-light-2">
          <table className="w-full text-sm">
            <thead className="bg-brand-navy text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Method</th>
                <th className="text-left px-4 py-3 font-semibold">Monthly Cost (Cash)</th>
                <th className="text-left px-4 py-3 font-semibold">With Insurance</th>
                <th className="text-left px-4 py-3 font-semibold">Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-light-2 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Injections (cypionate)</td>
                <td className="px-4 py-3 text-brand-steel">$75–$200</td>
                <td className="px-4 py-3 text-green-700 font-medium">$10–$30</td>
                <td className="px-4 py-3 text-brand-steel">Every 1–2 weeks</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Pellets</td>
                <td className="px-4 py-3 text-brand-steel">$300–$500/procedure</td>
                <td className="px-4 py-3 text-red-600 font-medium">Rarely covered</td>
                <td className="px-4 py-3 text-brand-steel">Every 3–6 months</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Cream / Gel</td>
                <td className="px-4 py-3 text-brand-steel">$100–$250</td>
                <td className="px-4 py-3 text-yellow-700 font-medium">Brand: sometimes; Compounded: no</td>
                <td className="px-4 py-3 text-brand-steel">Daily</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Oral (Jatenzo)</td>
                <td className="px-4 py-3 text-brand-steel">$300–$600+</td>
                <td className="px-4 py-3 text-yellow-700 font-medium">Sometimes with PA</td>
                <td className="px-4 py-3 text-brand-steel">Twice daily</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-brand-navy">Telehealth program</td>
                <td className="px-4 py-3 text-brand-steel">$100–$300 all-in</td>
                <td className="px-4 py-3 text-red-600 font-medium">Most are cash-pay only</td>
                <td className="px-4 py-3 text-brand-steel">Monthly subscription</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">The Costs Clinics Don&apos;t Advertise</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          The medication is only part of the total cost. Here is what gets left off the marketing page:
        </p>
        <ul className="list-disc list-inside space-y-3 text-brand-steel mb-8 leading-relaxed">
          <li><strong className="text-brand-slate">Baseline labs:</strong> $100-300 if uninsured. Includes total T, free T, LH, FSH, estradiol, CBC, CMP, PSA. Most clinics require these before the first prescription.</li>
          <li><strong className="text-brand-slate">Follow-up labs:</strong> $50-150 every 3-6 months ongoing to monitor levels, hematocrit, PSA, and liver markers. This is not optional — it is part of responsible TRT management.</li>
          <li><strong className="text-brand-slate">Office visits:</strong> $75-200 per visit for consultation, lab review, and prescription renewal at most cash-pay clinics.</li>
          <li><strong className="text-brand-slate">Estrogen management:</strong> TRT raises estrogen in many men. If yours goes too high, you will need anastrozole or similar — typically $15-50/month.</li>
          <li><strong className="text-brand-slate">Fertility preservation:</strong> Exogenous testosterone suppresses sperm production. hCG to maintain testicular function and fertility runs $75-200/month extra at most clinics.</li>
          <li><strong className="text-brand-slate">Injection supplies:</strong> Syringes, needles, alcohol wipes — negligible cost ($5-10/month) but never mentioned upfront.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">The Cheapest Legitimate TRT Option</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          If cost is your primary concern, the most affordable route is generic injectable testosterone cypionate through a physician who accepts insurance or offers low-cost self-pay. Generic testosterone cypionate has been off-patent for decades — without insurance, a 10ml vial (lasting 10-20 weeks for most men) costs $30-60 at a compounding pharmacy or around $100 at a retail pharmacy (Goodrx discounts help).
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          The total monthly cost with injections (medication + occasional office visits + quarterly labs) runs $100-200/month for most men without insurance. With insurance coverage for documented hypogonadism, the medication itself may cost $10-30/month.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Is TRT Worth the Cost?</h2>
        <p className="text-brand-steel mb-8 leading-relaxed">
          For men who clinically qualify and experience meaningful symptom relief, TRT is almost universally considered worth the cost. The economic case is simple: if TRT restores your energy, productivity, ability to exercise effectively, and quality of life — the return on $150/month is difficult to overstate. The comparison is not just the dollar cost; it is the productivity and wellbeing cost of leaving the underlying problem unaddressed for years.
        </p>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What is the cheapest TRT option?</h3>
              <p className="text-brand-steel mt-1">Generic testosterone cypionate injections, managed by a physician who accepts insurance. With coverage, the medication itself can cost as little as $10-30/month. Without insurance, compounding pharmacy prices run $30-60 for a vial lasting several months.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Are there hidden costs with TRT?</h3>
              <p className="text-brand-steel mt-1">Yes. Baseline and follow-up labs, office visits, estrogen management if needed, and fertility preservation (hCG) if desired are all costs that most clinics do not include in their advertised price. Ask for an all-in estimate before starting.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does the VA cover TRT for veterans?</h3>
              <p className="text-brand-steel mt-1">Yes. The VA covers TRT for enrolled veterans with documented hypogonadism at VA copay rates — often $0-15/month depending on service-connected disability rating.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find an Affordable TRT Clinic Near You</h2>
          <p className="text-blue-200 text-sm mb-4">Filter TRT clinics by insurance acceptance, telehealth availability, and treatment type to find the right fit for your budget.</p>
          <Link
            href="/listings"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse TRT Clinics →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover Testosterone Replacement Therapy?</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream</Link></li>
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
