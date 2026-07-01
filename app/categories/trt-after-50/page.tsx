import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ListingCard from '@/components/ListingCard'
import { getListings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'TRT for Men Over 50 | Find TRT Clinic Directory',
  description:
    'Testosterone replacement therapy after 50 requires special consideration — cardiovascular monitoring, PSA baseline, hematocrit, and sleep apnea screening. What you need to know before starting.',
  alternates: { canonical: 'https://findtrtclinic.com/categories/trt-after-50' },
}

export const revalidate = 86400

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TRT safe after 50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Current evidence — including the TRAVERSE trial (2023), the largest randomized controlled trial of TRT to date — shows that testosterone replacement is safe for men with documented symptomatic hypogonadism when properly monitored. The TRAVERSE trial found no increased risk of major adverse cardiovascular events in men on TRT vs. placebo. A slightly elevated rate of pulmonary embolism and atrial fibrillation was observed, making thorough cardiovascular evaluation and ongoing monitoring important for men over 50.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is a normal testosterone level for a 55-year-old?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Reference ranges for total testosterone are typically 300–1,000 ng/dL, but these ranges are population-derived and don't account for the fact that testosterone declines with age. A 55-year-old with a total T of 320 ng/dL may be within the 'normal' range but still have symptomatic hypogonadism. Most TRT clinicians look at symptoms alongside labs — not labs alone. Free testosterone and SHBG are especially important after 50 because SHBG rises with age, meaning more testosterone is protein-bound and unavailable.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does TRT affect prostate health after 50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A PSA (prostate-specific antigen) baseline test is standard before starting TRT in men over 50. Current evidence does not support the historical belief that TRT causes prostate cancer — the 'saturation model' of testosterone and prostate cancer risk is now widely accepted, showing that prostate cancer risk does not increase once testosterone receptors are saturated (which happens at low-normal T levels). Men with known or suspected prostate cancer are not candidates for TRT. Men with stable, monitored BPH can often be treated with TRT with appropriate monitoring.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can TRT help with erectile dysfunction after 50?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "TRT improves erectile dysfunction when low testosterone is a contributing factor — which is common in men over 50. It is often used alongside PDE5 inhibitors (sildenafil, tadalafil) rather than as an either/or choice. If ED is primarily vascular rather than hormonal, TRT alone may not fully resolve it. A men's health clinic that addresses both testosterone levels and vascular health produces the best outcomes for older men with ED.",
      },
    },
  ],
}

export default async function TRTAfter50Page() {
  const { listings } = await getListings()
  const featuredListings = listings.slice(0, 9)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/listings" className="hover:text-brand-blue">All Clinics</Link>
          <span>/</span>
          <span>TRT for Men Over 50</span>
        </nav>

        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-3xl p-8 mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            TRT for Men Over 50: What You Need to Know Before Starting
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl leading-relaxed">
            Testosterone declines at roughly 1–2% per year after age 30, but the rate accelerates
            after 50. SHBG — the protein that binds testosterone — rises with age, meaning free
            testosterone (the biologically active fraction) falls faster than total testosterone.
            By 55, many men who are &quot;in the normal range&quot; on paper are functionally
            hypogonadal. TRT after 50 is effective and, with proper monitoring, well-supported
            by current evidence including the 2023 TRAVERSE trial.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>TRAVERSE trial evidence</span>
            <span>·</span>
            <span>Cardiovascular monitoring</span>
            <span>·</span>
            <span>PSA &amp; prostate screening</span>
            <span>·</span>
            <span>Physician supervised</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Why testosterone declines faster after 50
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                After 50, two things happen simultaneously: testosterone production by the testes
                slows, and SHBG (sex hormone-binding globulin) increases. SHBG binds testosterone
                tightly, leaving less available as free T. The result is that a man&apos;s total
                testosterone may fall modestly while his free testosterone — the form that actually
                acts on tissues — falls dramatically.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This is why labs for men over 50 should always include total T, free T, and SHBG
                together. Total T alone can be misleading. A man with a total T of 450 ng/dL and
                very high SHBG may have a free T in the hypogonadal range.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Special considerations for TRT after 50
              </h2>
              <div className="space-y-3">
                {[
                  { title: 'Cardiovascular monitoring', detail: 'Blood pressure, lipids, and hematocrit should be checked at baseline and monitored during treatment. The TRAVERSE trial reassured providers that TRT does not increase major CV events, but baseline CV health should be established.' },
                  { title: 'PSA baseline before starting', detail: 'A PSA test is standard before TRT in men over 50. A urologist consultation is warranted for elevated PSA before initiating testosterone. TRT is not for men with known or suspected prostate cancer.' },
                  { title: 'Hematocrit monitoring', detail: 'TRT stimulates red blood cell production (erythropoiesis). Hematocrit above 52–54% increases blood viscosity and clotting risk. This is checked at 6 weeks and every 6 months; managed with dose reduction or blood donation if elevated.' },
                  { title: 'Sleep apnea screening', detail: 'Untreated sleep apnea worsens the erythropoietic effect of TRT and reduces the benefits. Men over 50 starting TRT should be evaluated for sleep apnea — especially if they snore or have daytime sleepiness.' },
                ].map(({ title, detail }) => (
                  <div key={title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <p className="font-semibold text-gray-800">{title}</p>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Labs to run before starting TRT after 50
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Total testosterone (2 morning draws)', 'Free testosterone', 'SHBG', 'LH + FSH', 'PSA', 'CBC + hematocrit', 'Metabolic panel (CMP)', 'Estradiol (sensitive assay)', 'Thyroid panel (TSH)', 'Blood pressure + lipids'].map((lab) => (
                  <div key={lab} className="bg-blue-50 rounded-lg px-3 py-2 text-xs font-medium text-blue-800">
                    {lab}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-xl p-5">
              <h3 className="font-semibold text-gray-800 mb-3">Symptoms that warrant evaluation after 50</h3>
              <ul className="space-y-2">
                {[
                  'Persistent fatigue despite adequate sleep',
                  'Loss of morning erections',
                  'Significant reduction in libido',
                  'Muscle loss with maintained training',
                  'Increased abdominal fat',
                  'Brain fog or reduced motivation',
                  'Depression not responding to other treatment',
                  'Reduced physical endurance',
                ].map((s) => (
                  <li key={s} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-brand-blue mt-0.5 flex-shrink-0">→</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/listings" className="inline-flex w-full items-center justify-center gap-2 bg-brand-blue text-white px-5 py-3 rounded-xl font-semibold text-sm hover:opacity-90">
              Find a TRT Clinic Near You <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {featuredListings.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">TRT Clinics Across the US</h2>
              <Link href="/listings" className="text-sm text-brand-blue font-semibold hover:opacity-80">See all →</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featuredListings.map((listing: any) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">TRT After 50: Common Questions</h2>
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">{faq.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/guides/trt-side-effects" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Side Effects →</Link>
            <Link href="/guides/trt-vs-hrt" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT vs. HRT →</Link>
            <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            <Link href="/categories/physician-supervised" className="text-sm text-brand-blue hover:opacity-80 font-medium">Physician-Supervised TRT →</Link>
          </div>
        </div>
      </div>
    </>
  )
}
