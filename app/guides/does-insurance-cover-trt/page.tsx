import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Does Insurance Cover Testosterone Replacement Therapy? | FindTRTClinic',
  description: 'Whether insurance covers TRT depends on the diagnosis, the delivery method, and your plan. Here is what Medicare, Medicaid, Tricare, and private insurance actually cover.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does health insurance cover TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many insurance plans cover testosterone replacement therapy when it is prescribed for a confirmed diagnosis of hypogonadism (clinically low testosterone documented by blood work). Coverage depends on the plan, the delivery method chosen (injections are most commonly covered; pellets and compounded creams often are not), and whether your provider is in-network.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Medicare cover TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicare Part D covers FDA-approved testosterone medications (such as testosterone cypionate injections) when prescribed for hypogonadism. Compounded testosterone and pellets are generally not covered. Prior authorization is often required. Your out-of-pocket cost will depend on your Part D plan formulary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tricare cover TRT for veterans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tricare covers FDA-approved testosterone therapies for active-duty service members, retirees, and their families when prescribed for diagnosed hypogonadism. The VA also provides TRT for eligible veterans through the VA healthcare system. Veterans with documented service-connected conditions (such as TBI) that affect hormone production may have stronger coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'What testosterone levels does insurance require before covering TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most insurers require two separate morning fasting blood tests showing total testosterone below 300 ng/dL (some use 270 ng/dL as the threshold) along with symptoms of hypogonadism. The tests must typically be drawn at least one week apart. Some plans also require an LH/FSH panel to rule out secondary hypogonadism causes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do TRT clinics accept insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some do, some do not. Large men\'s health chains and telehealth-only TRT platforms typically operate cash-pay only. Independent physician-owned clinics and urology or endocrinology practices are more likely to bill insurance. Use the insurance filter on FindTRTClinic to find clinics in your area that accept your plan.',
      },
    },
  ],
}

export default function InsuranceCoversTRTPage() {
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
          <span className="text-brand-navy font-medium">Does Insurance Cover TRT?</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          Does Insurance Cover Testosterone Replacement Therapy?
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          The short answer: it depends on your diagnosis, your delivery method, and your plan. Injectable testosterone is frequently covered for documented hypogonadism. Pellets, compounded creams, and &quot;optimization&quot; protocols are almost never covered. Here is what you actually need to know before your first appointment.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">When Insurance Covers TRT</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Insurance generally requires three things before it will cover TRT:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-brand-steel mb-6 leading-relaxed">
          <li><strong className="text-brand-slate">A confirmed diagnosis of hypogonadism</strong> — two separate morning blood draws (fasting, before 10am) showing total testosterone below 300 ng/dL, taken at least one week apart</li>
          <li><strong className="text-brand-slate">Documented symptoms</strong> — fatigue, low libido, reduced muscle mass, depression, or other clinical signs listed in your chart</li>
          <li><strong className="text-brand-slate">An FDA-approved delivery method</strong> — injectable testosterone cypionate or enanthate are most commonly covered; Androgel and Testim (brand-name gels) are sometimes covered; pellets and compounded creams are rarely covered</li>
        </ol>
        <p className="text-brand-steel mb-8 leading-relaxed">
          If all three conditions are met, most major private insurers (Aetna, Cigna, UnitedHealthcare, Blue Cross) will cover the medication itself — typically at your standard generic drug copay, which is often $10-30/month for injectable testosterone. The office visits (labs, follow-ups) are billed separately and covered at your standard primary care or specialist rate.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What Insurance Does Not Cover</h2>
        <ul className="list-disc list-inside space-y-2 text-brand-steel mb-8 leading-relaxed">
          <li>Testosterone pellets — almost universally excluded from insurance formularies</li>
          <li>Compounded testosterone creams or gels — not FDA-approved, therefore not covered</li>
          <li>&quot;Hormone optimization&quot; protocols — TRT prescribed for levels in the &quot;low-normal&quot; range without a formal hypogonadism diagnosis</li>
          <li>Telehealth-only TRT platforms that operate cash-pay — most of these do not submit to insurance at all</li>
          <li>Ancillaries (hCG, estrogen blockers like anastrozole) — coverage varies widely by plan</li>
        </ul>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Tricare and Veterans: A Stronger Case</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Veterans and active-duty service members have two coverage pathways. Tricare covers FDA-approved testosterone for hypogonadism at the same standard as other prescription drugs — generic injectable testosterone is typically Tier 1 (lowest copay). The VA provides TRT directly through VA pharmacies for enrolled veterans with a hypogonadism diagnosis.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          Veterans with service-connected TBI, PTSD, or chronic stress-related conditions may have a stronger clinical case for TRT coverage. Combat deployments, chronic cortisol elevation, and traumatic brain injury are all documented causes of secondary hypogonadism (low LH/FSH → low testosterone). Discuss your service history with your VA or Tricare provider explicitly — it matters for the clinical documentation.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">How to Find an Insurance-Accepting TRT Clinic</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          The majority of cash-pay men&apos;s health chains and telehealth TRT platforms do not bill insurance. To find clinics that do, look for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-brand-steel mb-8 leading-relaxed">
          <li>Independent physician-owned men&apos;s health practices (urologists, endocrinologists, or internists who specialize in hormone therapy)</li>
          <li>Urology groups — most large urology practices treat hypogonadism and bill insurance</li>
          <li>Primary care physicians who manage TRT alongside other care</li>
          <li>Any clinic whose listing page on this site shows the &quot;Accepts Insurance&quot; badge</li>
        </ul>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What testosterone level does insurance require?</h3>
              <p className="text-brand-steel mt-1">Most insurers require two morning fasting tests below 300 ng/dL taken at least one week apart, plus documented symptoms. Some plans use 270 ng/dL as the threshold.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does Medicare cover TRT?</h3>
              <p className="text-brand-steel mt-1">Yes, Medicare Part D covers FDA-approved injectable testosterone for hypogonadism. Compounded preparations and pellets are generally excluded. Prior authorization is often required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does Tricare cover TRT?</h3>
              <p className="text-brand-steel mt-1">Yes. Tricare covers TRT for eligible service members and veterans with a documented hypogonadism diagnosis. The VA also provides TRT through VA pharmacies for enrolled veterans.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Why don&apos;t telehealth TRT companies take insurance?</h3>
              <p className="text-brand-steel mt-1">Most telehealth TRT platforms (Defy Medical, Fountain TRT, etc.) operate on a cash-pay model because insurance credentialing is expensive, prior authorizations are time-consuming, and their service model (no in-person labs, compounded creams) does not fit insurance billing requirements.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find a TRT Clinic That Accepts Your Insurance</h2>
          <p className="text-blue-200 text-sm mb-4">Use our insurance filter to find physician-supervised TRT clinics near you that bill insurance directly.</p>
          <Link
            href="/categories/trt-with-insurance"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse Insurance-Accepting Clinics →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor (And What to Ask)</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream: What Men Need to Know</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
