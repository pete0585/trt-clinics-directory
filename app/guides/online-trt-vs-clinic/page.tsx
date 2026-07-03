import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Online TRT vs In-Person Clinic: Which Is Right for You? | FindTRTClinic',
  description:
    'Online TRT programs offer convenience and lower cost. In-person clinics offer hands-on monitoring and a wider treatment menu. Here is how to decide which model fits your situation.',
  alternates: { canonical: 'https://findtrtclinic.com/guides/online-trt-vs-clinic' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is online TRT as safe as in-person TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Online TRT can be safe when managed by a licensed physician with appropriate lab monitoring — but safety depends entirely on the provider's protocols. Reputable telehealth TRT programs (Defy Medical, Fountain TRT, Evolve Telemedicine, etc.) require baseline labs and regular follow-up testing and are staffed by physicians with real TRT experience. Fly-by-night operations that ship testosterone without labs or follow-up are not safe. Vet any online TRT provider by asking: What labs do you require before starting? How often do you monitor labs? What happens if my hematocrit gets too high?",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get pellet TRT through a telehealth program?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Testosterone pellet insertion is a minor in-office procedure — it requires a clinician to physically implant subcutaneous pellets in your flank or buttocks. This cannot be done remotely. If you want pellet therapy, you need an in-person clinic. Most telehealth programs offer injectable testosterone cypionate/enanthate, topical gels, and occasionally compounded subcutaneous injections — but not pellets.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do online TRT programs accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most telehealth TRT programs are cash-pay. They are structured as direct-pay subscription services to keep costs predictable and avoid insurance administrative overhead. Some will provide documentation you can submit to your insurance for partial reimbursement, but do not count on it. In contrast, in-person TRT managed through a primary care physician or urologist who accepts insurance may have the medication and visits covered if you have documented hypogonadism — though prior authorization may be required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do I need to go in for appointments with online TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a reputable telehealth TRT program, you generally never need to go in. Consultations are video calls. Labs are ordered at a local lab draw site or through an at-home phlebotomy service. Medications are shipped to your door. Some programs do a video check-in monthly; others require quarterly labs with an annual video visit. The entire workflow is designed to be remote.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the main disadvantage of online TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The main disadvantages of online TRT: (1) No physical examination — your provider cannot perform a testicular exam, assess for physical signs of hypogonadism, or palpate a prostate. (2) Limited treatment options — most telehealth programs offer injectable testosterone and topical gels; pellets and some other protocols require in-person care. (3) Some platforms have high physician turnover or use nurse practitioners with limited TRT experience. (4) If you develop a complication (hematocrit spike, painful injection site, erythrocytosis symptoms), in-person care is more responsive.",
      },
    },
  ],
}

const comparisonData = [
  { factor: 'Cost', online: '$100–$300/month all-in', inperson: '$150–$400/month (varies more)' },
  { factor: 'Insurance', online: 'Cash-pay only (most)', inperson: 'Sometimes covered (if MD manages)' },
  { factor: 'Convenience', online: 'High — no travel, ship to door', inperson: 'Lower — regular office visits' },
  { factor: 'Physical exam', online: 'No', inperson: 'Yes' },
  { factor: 'Treatment options', online: 'Injectables, topicals mostly', inperson: 'Full menu including pellets' },
  { factor: 'Lab monitoring', online: 'Required by reputable programs', inperson: 'Required' },
  { factor: 'Best for', online: 'Simple, stable cases; busy schedules', inperson: 'Complex cases, pellet preference, or those wanting hands-on MD care' },
]

export default function OnlineTrtVsClinicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6">
        <nav className="text-sm text-brand-steel mb-6">
          <Link href="/" className="hover:text-brand-navy">Home</Link>
          {' / '}
          <Link href="/listings" className="hover:text-brand-navy">Find a TRT Clinic</Link>
          {' / '}
          <span className="text-brand-navy">Online TRT vs In-Person Clinic</span>
        </nav>

        <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-4 leading-tight">
          Online TRT vs In-Person TRT Clinic: Which Is Right for You?
        </h1>
        <p className="text-brand-steel text-lg mb-8 leading-relaxed">
          Telehealth TRT programs are cheaper and more convenient. In-person clinics offer physical
          exams and a broader treatment menu. The right choice depends on your situation and what
          you need from your provider.
        </p>

        {/* Comparison table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border border-brand-light-2 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left px-4 py-3 font-semibold">Factor</th>
                <th className="text-left px-4 py-3 font-semibold">Online TRT</th>
                <th className="text-left px-4 py-3 font-semibold">In-Person Clinic</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-brand-light-1'}>
                  <td className="px-4 py-3 font-medium text-brand-navy">{row.factor}</td>
                  <td className="px-4 py-3 text-brand-steel">{row.online}</td>
                  <td className="px-4 py-3 text-brand-steel">{row.inperson}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">When online TRT makes sense</h2>
        <ul className="list-disc list-inside space-y-3 text-brand-steel mb-8 leading-relaxed">
          <li><strong className="text-brand-slate">You have a confirmed low T diagnosis</strong> and want to start treatment without the friction of in-office visits.</li>
          <li><strong className="text-brand-slate">Your schedule does not accommodate regular office visits</strong> — telehealth eliminates travel and waiting room time.</li>
          <li><strong className="text-brand-slate">You are comfortable with self-injection</strong> and want to self-administer at home rather than visiting a clinic weekly.</li>
          <li><strong className="text-brand-slate">Cost is a priority</strong> — telehealth programs typically run $100-200/month all-in vs. $200-400/month at men's health clinics.</li>
          <li><strong className="text-brand-slate">You live in a rural area</strong> without convenient access to a TRT clinic.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">When in-person is the better choice</h2>
        <ul className="list-disc list-inside space-y-3 text-brand-steel mb-8 leading-relaxed">
          <li><strong className="text-brand-slate">You want pellet therapy</strong> — pellet insertion is a physical procedure that cannot be done remotely.</li>
          <li><strong className="text-brand-slate">Your case is complex</strong> — prior health conditions, fertility preservation needs, or complicated hormonal picture benefit from hands-on physician evaluation.</li>
          <li><strong className="text-brand-slate">You have had complications</strong> on TRT before (hematocrit spikes, injection site issues, cardiovascular concerns) and want a physician who can physically examine you.</li>
          <li><strong className="text-brand-slate">You want insurance coverage</strong> — insurance-covered TRT is more accessible through in-person physicians (urologists, endocrinologists, or PCPs) who bill your insurance for the visits and prescribe generic testosterone.</li>
          <li><strong className="text-brand-slate">You want ongoing testicular exams and prostate monitoring</strong> as part of your protocol — physical examination is a meaningful part of responsible long-term TRT management.</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Red flags in online TRT programs</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Telehealth TRT is safe when done right — but shortcuts that cut costs can cut corners on your safety:
        </p>
        <ul className="list-disc list-inside space-y-2 text-brand-steel mb-8 leading-relaxed">
          <li>No baseline bloodwork required before prescribing</li>
          <li>No follow-up labs required at any interval</li>
          <li>No licensed physician involved — NP-only with no MD supervision</li>
          <li>Ships testosterone across state lines without a valid provider-patient relationship</li>
          <li>No discussion of hematocrit monitoring, estrogen management, or fertility impact</li>
        </ul>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name}>
                <h3 className="font-semibold text-brand-slate">{item.name}</h3>
                <p className="text-brand-steel mt-1 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center mb-8">
          <h2 className="font-bold text-lg mb-2">Find a TRT Clinic Near You</h2>
          <p className="text-blue-200 text-sm mb-4">Browse in-person TRT clinics and telehealth providers. Filter by delivery method, insurance, and location.</p>
          <Link
            href="/listings"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse TRT Clinics →
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Cost?</Link></li>
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover TRT?</Link></li>
            <li><Link href="/guides/trt-clinic-vs-urologist" className="text-brand-blue hover:underline">TRT Clinic vs Urologist: Which Should You See?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
