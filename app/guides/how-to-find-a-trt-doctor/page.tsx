import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Find a Good TRT Doctor (And What to Ask) | FindTRTClinic',
  description: 'A no-nonsense guide to finding a physician-supervised TRT clinic near you — red flags to avoid, questions to ask, and how to tell a good clinic from a testosterone mill.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What type of doctor prescribes TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testosterone replacement therapy is commonly prescribed by urologists, endocrinologists, internists, and men\'s health-focused nurse practitioners or physician assistants. Dedicated men\'s health clinics have proliferated rapidly and typically offer faster appointments and more flexible protocols than hospital-based specialists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What blood tests are required before starting TRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A responsible TRT clinic will require at minimum: total testosterone (two morning fasting tests), free testosterone, LH and FSH, estradiol, complete blood count (CBC), comprehensive metabolic panel (CMP), and PSA. Some also test SHBG, prolactin, and thyroid function. Any clinic that prescribes testosterone without baseline labs is a red flag.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if a TRT clinic is reputable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reputable TRT clinics require comprehensive baseline blood work before prescribing, include a physician (MD or DO) in the care team, monitor you with follow-up labs at 6-8 weeks after starting, discuss fertility implications, and offer multiple treatment options. Red flags include clinics that prescribe without labs, promise specific testosterone numbers, push pellets at the first visit, or have no physician on staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get TRT through a primary care doctor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but many PCPs are uncomfortable managing TRT, unfamiliar with newer protocols, and reluctant to prescribe due to outdated concerns about cardiovascular risk. If your PCP is not helpful, a urologist, endocrinologist, or dedicated men\'s health clinic is a better option. Ask specifically about their TRT patient volume — a clinic that manages hundreds of TRT patients monthly will have better protocols than one that sees one TRT patient per year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TRT available via telehealth?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Many telehealth TRT platforms (Defy Medical, Fountain TRT, Evolve, and others) offer fully remote management including shipping medication directly. You typically still need in-person or at-home blood work. Telehealth is most practical for men who are already familiar with self-injection and want to optimize without ongoing in-person visits.',
      },
    },
  ],
}

export default function FindTRTDoctorPage() {
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
          <span className="text-brand-navy font-medium">How to Find a TRT Doctor</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          How to Find a Good TRT Doctor (And What to Ask)
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          TRT is one of the most confusing healthcare markets a man can navigate. Hundreds of clinics have opened in the last five years, ranging from excellent physician-supervised practices to predatory &quot;testosterone mills&quot; that prescribe without adequate testing. Here is how to tell the difference and what to ask before you commit.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What Kind of Doctor Prescribes TRT?</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Testosterone replacement therapy falls within the scope of practice for several specialties:
        </p>
        <ul className="list-disc list-inside space-y-2 text-brand-steel mb-4 leading-relaxed">
          <li><strong className="text-brand-slate">Urologists</strong> — the most common specialists for male hypogonadism; hospital-affiliated urology groups usually accept insurance</li>
          <li><strong className="text-brand-slate">Endocrinologists</strong> — specialists in hormone disorders; typically require a referral and have longer wait times</li>
          <li><strong className="text-brand-slate">Men&apos;s health clinics</strong> — dedicated TRT practices; fastest access, widest protocol flexibility, most are cash-pay</li>
          <li><strong className="text-brand-slate">Primary care physicians</strong> — can prescribe TRT but many are under-experienced with it; best for low-complexity cases</li>
          <li><strong className="text-brand-slate">Telehealth platforms</strong> — fully remote management; best for men who are already comfortable with injections and want flexible ongoing care</li>
        </ul>
        <p className="text-brand-steel mb-8 leading-relaxed">
          For most men starting TRT for the first time, a dedicated men&apos;s health clinic or urologist is the best starting point. They see TRT patients every day and have protocols dialed in.
        </p>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What to Look for in a Clinic</h2>
        <div className="grid gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <h3 className="font-bold text-green-800 mb-2">Green Flags</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700 text-sm leading-relaxed">
              <li>Requires comprehensive baseline blood work before prescribing (total T, free T, LH, FSH, estradiol, CBC, CMP, PSA)</li>
              <li>Has an MD or DO on staff who reviews labs and is involved in treatment decisions</li>
              <li>Schedules follow-up labs at 6-8 weeks after starting or adjusting dose</li>
              <li>Discusses fertility implications upfront (exogenous T suppresses sperm production)</li>
              <li>Offers multiple delivery methods and explains tradeoffs</li>
              <li>Does not promise a specific testosterone number — only appropriate clinical outcomes</li>
            </ul>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-800 mb-2">Red Flags</h3>
            <ul className="list-disc list-inside space-y-1 text-red-700 text-sm leading-relaxed">
              <li>Prescribes without drawing labs first</li>
              <li>Pushes pellets at the first visit (pellets are a high-margin revenue stream)</li>
              <li>No physician on staff — NP-only clinics can be excellent but lack physician oversight</li>
              <li>Guarantees a testosterone level instead of symptom-based outcomes</li>
              <li>Discourages you from monitoring your own labs or getting a second opinion</li>
              <li>No follow-up protocol — prescribes and disappears</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Questions to Ask at Your First Appointment</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Bring this list. A good clinic will answer every one of them without hesitation:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-brand-steel mb-8 leading-relaxed">
          <li>What labs will you draw before starting me on TRT, and why?</li>
          <li>What is your threshold for prescribing — is it purely based on lab values or symptoms as well?</li>
          <li>Which delivery methods do you offer, and which do you recommend for a first-time patient and why?</li>
          <li>Who on your team is a physician, and will they be reviewing my case?</li>
          <li>When will we do follow-up labs after I start, and what are you looking for?</li>
          <li>What happens to my fertility on TRT, and what are my options if I want to have children?</li>
          <li>Do you bill insurance, and if not, what is the all-in monthly cost including labs and medication?</li>
          <li>What is your protocol if my estrogen goes too high or if I have side effects?</li>
        </ol>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">Telehealth vs. In-Person TRT</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          Telehealth TRT has exploded since 2020. For men who are comfortable self-injecting and understand TRT basics, a quality telehealth clinic offers real advantages: no waiting rooms, physicians who specialize exclusively in men&apos;s hormone health, and the ability to message your provider directly.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          The downside: most telehealth platforms are cash-pay only, require you to source your own labs locally (usually through LabCorp or Quest), and cannot perform in-person procedures like pellet insertion. For men with complex hormone profiles or significant comorbidities, an in-person physician who can examine you remains the safer choice.
        </p>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What blood tests are required before starting TRT?</h3>
              <p className="text-brand-steel mt-1">At minimum: total testosterone (two morning fasting draws), free testosterone, LH, FSH, estradiol, CBC, CMP, and PSA. Any clinic that skips baseline labs is a red flag.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can I get TRT through a primary care doctor?</h3>
              <p className="text-brand-steel mt-1">Yes, but many PCPs are under-experienced with TRT protocols. A dedicated men&apos;s health clinic or urologist will have better protocols and more experience managing the nuances of hormone optimization.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">How long does it take to get started on TRT?</h3>
              <p className="text-brand-steel mt-1">At most men&apos;s health clinics: 1-3 weeks from first appointment to starting. You&apos;ll need two blood draws (at least one week apart) before a clinic can prescribe. Telehealth platforms sometimes move faster if you can show recent labs.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find a Physician-Supervised TRT Clinic</h2>
          <p className="text-blue-200 text-sm mb-4">Browse TRT clinics filtered by physician supervision, insurance acceptance, and treatment method.</p>
          <Link
            href="/categories/physician-supervised"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Browse Physician-Supervised Clinics →
          </Link>
        </div>

        {/* Internal links */}
        <div className="mt-10 pt-6 border-t border-brand-light-2">
          <h3 className="font-semibold text-brand-navy mb-3">Related Guides</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover Testosterone Replacement Therapy?</Link></li>
            <li><Link href="/guides/low-testosterone-symptoms" className="text-brand-blue hover:underline">7 Signs of Low Testosterone Men Dismiss as Aging</Link></li>
            <li><Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-brand-blue hover:underline">TRT Injections vs Pellets vs Cream: What Men Need to Know</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
