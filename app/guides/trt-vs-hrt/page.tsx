import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TRT vs. HRT: What\'s the Difference? | FindTRTClinic',
  description: "TRT and HRT both involve hormone replacement — but they're different things for different populations. Here's what each term means and how to know which applies to you.",
  alternates: { canonical: 'https://findtrtclinic.com/guides/trt-vs-hrt' },
}

export const revalidate = 86400

const FAQ = [
  {
    q: 'What is TRT?',
    a: "TRT (testosterone replacement therapy) is hormone therapy specifically for men diagnosed with hypogonadism — a condition where the testes don't produce enough testosterone. The diagnosis is based on lab-confirmed low testosterone (typically below 300 ng/dL on two morning tests) plus symptoms: fatigue, low libido, reduced muscle mass, brain fog, depression, and reduced morning erections. TRT replaces the testosterone the body is not producing adequately. Delivery methods include injectable testosterone, patches, gels, pellets, and oral tablets.",
  },
  {
    q: 'What is HRT?',
    a: "HRT (hormone replacement therapy) is a broader term most commonly used in the context of menopause treatment for women — replacing estrogen (and often progesterone) that the body stops producing at menopause. HRT may also refer to hormone therapy for transgender individuals, or to broader hormonal protocols that include multiple hormone replacements. When men use the term HRT, they usually mean TRT — the terms are often used interchangeably in men's health contexts.",
  },
  {
    q: 'Can women use TRT?',
    a: "Yes. Testosterone is not exclusively a male hormone — women produce it too, and testosterone deficiency in women is associated with low libido, fatigue, mood changes, and reduced muscle tone. Some women's health specialists prescribe low-dose testosterone as part of a menopause HRT regimen. The FDA does not have an approved testosterone product for women in the US, so prescribing is off-label, but this practice is supported by evidence and endorsed by the Menopause Society.",
  },
  {
    q: 'Is TRT the same as anabolic steroids?',
    a: "No. TRT replaces testosterone to bring levels to the normal physiological range (400-900 ng/dL). Anabolic steroid use involves doses many times higher than physiological range — often 1,000-5,000+ ng/dL — for the purpose of supraphysiological muscle building. Medically supervised TRT does not produce the same risks as anabolic steroid abuse. Legitimate TRT clinics aim for the middle of the normal range, monitor labs regularly, and manage estrogen conversion and hematocrit.",
  },
  {
    q: 'How do I know if I need TRT or another type of HRT?',
    a: "If you're a man with symptoms of low testosterone (fatigue, low libido, muscle loss, brain fog, mood changes) and lab-confirmed low testosterone, TRT is the appropriate treatment. If you're a woman in menopause with hot flashes, night sweats, vaginal dryness, sleep disruption, or mood changes, you're looking at estrogen-based HRT (possibly with testosterone added). If you're a transgender individual, your provider will discuss the appropriate hormone protocol for your transition goals.",
  },
]

export default function TRTvsHRTPage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm text-brand-steel mb-6 flex items-center gap-1 flex-wrap">
          <Link href="/" className="hover:text-brand-blue">Home</Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-brand-blue">Guides</Link>
          <span>/</span>
          <span>TRT vs. HRT</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
            TRT vs. HRT: What&apos;s the Difference?
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Both TRT and HRT involve replacing hormones the body is no longer producing adequately —
            but they typically refer to different treatments for different populations. If you&apos;re
            confused about which applies to you, here&apos;s a clear breakdown.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="text-left p-4 text-gray-700 font-semibold border-b border-blue-100"></th>
                    <th className="text-left p-4 text-gray-700 font-semibold border-b border-blue-100">TRT</th>
                    <th className="text-left p-4 text-gray-700 font-semibold border-b border-blue-100">HRT (Women)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'Primary population', trt: 'Men with hypogonadism', hrt: 'Women in perimenopause/menopause' },
                    { label: 'Hormones replaced', trt: 'Testosterone', hrt: 'Estrogen + Progesterone (+ sometimes testosterone)' },
                    { label: 'Common delivery', trt: 'Injections, gels, pellets, patches', hrt: 'Patches, gels, pills, IUD, pellets' },
                    { label: 'FDA-approved products', trt: 'Yes (Androgel, Testopel, Aveed, etc.)', hrt: 'Yes (Vivelle-Dot, Prometrium, etc.)' },
                    { label: 'Primary symptoms treated', trt: 'Fatigue, low libido, muscle loss, brain fog', hrt: 'Hot flashes, night sweats, vaginal dryness, mood changes' },
                    { label: 'Lab-confirmed diagnosis needed', trt: 'Yes (low T on two morning tests)', hrt: 'Symptom-based; labs confirm menopause' },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-gray-100">
                      <td className="p-4 font-medium text-gray-700">{row.label}</td>
                      <td className="p-4 text-gray-600">{row.trt}</td>
                      <td className="p-4 text-gray-600">{row.hrt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              When the terms overlap
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In men&apos;s health settings, &quot;HRT&quot; and &quot;TRT&quot; are often used interchangeably — both
              referring to testosterone replacement for men. The distinction matters more when discussing
              women&apos;s health: a woman seeking &quot;HRT&quot; is typically looking for estrogen therapy for
              menopause, not testosterone therapy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Some men also use the term &quot;hormone optimization&quot; rather than TRT — especially in the
              functional medicine and anti-aging space, where the goal is optimizing testosterone within
              the high-normal range rather than simply treating documented hypogonadism.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
            {FAQ.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </section>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Looking for a TRT clinic?
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              FindTRTClinic.com lists physician-supervised testosterone replacement clinics across the US.
              Filter by location, telehealth availability, and insurance acceptance.
            </p>
            <Link href="/listings" className="inline-flex items-center gap-2 bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90">
              Browse TRT Clinics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Guides</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/low-testosterone-symptoms" className="text-sm text-brand-blue hover:opacity-80 font-medium">Low Testosterone Symptoms →</Link>
              <Link href="/guides/how-to-find-a-trt-doctor" className="text-sm text-brand-blue hover:opacity-80 font-medium">How to Find a TRT Doctor →</Link>
              <Link href="/guides/trt-injections-vs-pellets-vs-cream" className="text-sm text-brand-blue hover:opacity-80 font-medium">TRT Delivery Methods Compared →</Link>
              <Link href="/guides/does-insurance-cover-trt" className="text-sm text-brand-blue hover:opacity-80 font-medium">Does Insurance Cover TRT? →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
