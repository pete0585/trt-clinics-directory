import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '7 Signs of Low Testosterone Men Dismiss as Aging | FindTRTClinic',
  description: 'Low testosterone affects 13+ million American men but most write off the symptoms as normal aging. Here are the 7 signs that actually point to low T — and when to get tested.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the main symptoms of low testosterone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common symptoms of low testosterone include persistent fatigue (not improved by sleep), decreased libido, difficulty building or maintaining muscle mass, increased body fat (especially around the midsection), brain fog or difficulty concentrating, depression or low mood, and reduced morning erections. These symptoms are non-specific and can have other causes, so blood testing is essential to confirm low testosterone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What testosterone level is considered low?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most labs flag total testosterone below 300 ng/dL as low. However, the clinical definition of hypogonadism requires both low testosterone AND symptoms — a man with 280 ng/dL and no symptoms may not benefit from TRT, while a man with 400 ng/dL and significant symptoms may still be a candidate depending on free testosterone levels and clinical context.',
      },
    },
    {
      '@type': 'Question',
      name: 'At what age does testosterone start declining?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testosterone peaks in the late teens to early 20s and begins a slow natural decline of approximately 1-2% per year starting around age 30. By 45-50, many men have noticeably lower levels than in their prime. However, pathological hypogonadism (low testosterone causing symptoms) can occur at any age and is not simply a consequence of normal aging.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can low testosterone cause depression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Low testosterone is associated with depression, irritability, and reduced motivation. Testosterone plays a significant role in serotonin and dopamine signaling. Many men treated for depression who do not respond to antidepressants are found to have low testosterone — and their mood improves once hormone levels are optimized.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does low testosterone cause weight gain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Low testosterone and body fat have a bidirectional relationship. Low T reduces muscle mass and metabolic rate, making fat gain easier. Excess body fat increases aromatization (conversion of testosterone to estrogen), which further suppresses testosterone. This cycle is one reason men with low T often find it very difficult to lose weight through diet and exercise alone until their hormone levels are addressed.',
      },
    },
  ],
}

export default function LowTestosteroneSymptoms() {
  const symptoms = [
    {
      number: '01',
      title: 'Fatigue That Sleep Doesn\'t Fix',
      body: 'This is not tiredness from a long day. It is waking up after 8 hours of sleep and feeling like you barely slept at all. Men with low testosterone often describe a pervasive low-energy state that is not explained by poor sleep, overwork, or stress. If you are sleeping enough and still dragging, testosterone is worth investigating.',
    },
    {
      number: '02',
      title: 'Loss of Libido',
      body: 'Testosterone is the primary driver of male sexual desire. A significant drop in interest in sex — particularly when it feels like a switch was flipped rather than a gradual decline — is one of the most consistent markers of low T. This is often dismissed as relationship issues or stress, but it can be biochemical.',
    },
    {
      number: '03',
      title: 'Can\'t Build Muscle Despite Consistent Training',
      body: 'If you have been lifting consistently and your strength has plateaued or you are losing muscle despite eating and training correctly, your hormone status is worth checking. Testosterone drives muscle protein synthesis. Without adequate levels, the training stimulus produces diminishing returns.',
    },
    {
      number: '04',
      title: 'Belly Fat That Won\'t Move',
      body: 'Low testosterone promotes visceral fat accumulation, particularly around the abdomen. This is compounded by the fact that visceral fat converts testosterone to estrogen via aromatase, further suppressing T levels. Men caught in this cycle often find that no amount of diet and exercise moves the scale — because the hormonal root cause is unaddressed.',
    },
    {
      number: '05',
      title: 'Brain Fog and Reduced Sharpness',
      body: 'Testosterone affects cognitive function. Men with low T frequently report difficulty concentrating, slower processing speed, and a sense of mental fuzziness that was not present earlier in their lives. This is often misattributed to stress, poor sleep, or aging when it is actually hormonal.',
    },
    {
      number: '06',
      title: 'Low Mood, Depression, or Irritability',
      body: 'Testosterone plays a role in dopamine and serotonin signaling. Men with low T are at significantly higher risk for depression and often describe a persistent flatness or lack of motivation. Importantly, many of these men do not respond to standard antidepressants until their testosterone levels are addressed.',
    },
    {
      number: '07',
      title: 'Reduced Morning Erections',
      body: 'Morning erections (nocturnal penile tumescence) are largely testosterone-driven. A reliable indicator of adequate hormone status is experiencing them regularly. Their absence — particularly when it represents a change from your baseline — is worth discussing with a physician alongside a hormone panel.',
    },
  ]

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
          <span className="text-brand-navy font-medium">Low Testosterone Symptoms</span>
        </nav>

        <h1 className="text-3xl font-bold text-brand-navy mb-4">
          7 Signs of Low Testosterone Men Dismiss as Aging
        </h1>

        <p className="text-brand-steel mb-8 text-lg leading-relaxed">
          Low testosterone affects an estimated 13 to 20 million American men — yet most spend years attributing the symptoms to stress, poor sleep, getting older, or not trying hard enough. The problem is not effort. The problem is often biochemical, and it is measurable with a blood test.
        </p>

        <div className="space-y-8 mb-10">
          {symptoms.map((s) => (
            <div key={s.number} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 bg-brand-navy text-white rounded-xl flex items-center justify-center font-bold text-sm">
                {s.number}
              </div>
              <div>
                <h2 className="text-lg font-bold text-brand-navy mb-2">{s.title}</h2>
                <p className="text-brand-steel leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-brand-navy mb-3">What to Do If You Recognize These Signs</h2>
        <p className="text-brand-steel mb-4 leading-relaxed">
          The first step is a blood test. Total testosterone should be drawn in the morning (before 10am) while fasting — levels peak early and drop throughout the day. One test is not enough. Most physicians require two draws taken at least one week apart to confirm consistently low levels before discussing treatment.
        </p>
        <p className="text-brand-steel mb-4 leading-relaxed">
          A full panel includes more than just total testosterone. Free testosterone (the bioavailable fraction), SHBG, LH, FSH, and estradiol all provide context that total T alone cannot. A clinic that only checks total testosterone is cutting corners.
        </p>
        <p className="text-brand-steel mb-8 leading-relaxed">
          If your levels confirm hypogonadism and your symptoms are affecting your quality of life, TRT is an evidence-based treatment with a strong safety record when managed by a qualified physician. The goal is not to hit a specific number — it is to relieve symptoms and restore your baseline function.
        </p>

        {/* FAQ */}
        <div className="bg-white rounded-xl border border-brand-light-2 p-6 mb-10">
          <h2 className="font-bold text-brand-navy mb-4 text-xl">Common Questions</h2>
          <div className="space-y-5 text-sm">
            <div>
              <h3 className="font-semibold text-brand-slate">What testosterone level is considered low?</h3>
              <p className="text-brand-steel mt-1">Most labs flag total testosterone below 300 ng/dL as low. Clinical hypogonadism requires both low levels AND symptoms. Free testosterone, SHBG, and symptom severity all factor into the diagnosis.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">At what age does testosterone start declining?</h3>
              <p className="text-brand-steel mt-1">Testosterone peaks in your late teens to early 20s and declines roughly 1-2% per year starting around age 30. Pathological hypogonadism can occur at any age and is not simply normal aging.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Can low testosterone cause depression?</h3>
              <p className="text-brand-steel mt-1">Yes. Low T is associated with depression, low motivation, and mood dysregulation. Many men who do not respond to antidepressants have low testosterone as a contributing factor.</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-slate">Does low testosterone cause weight gain?</h3>
              <p className="text-brand-steel mt-1">Yes. Low T reduces muscle mass and metabolic rate, making fat accumulation easier. Excess body fat then converts T to estrogen, further suppressing testosterone — a cycle that is very difficult to break without addressing the hormonal root cause.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-navy text-white rounded-xl p-6 text-center">
          <h2 className="font-bold text-lg mb-2">Find a TRT Clinic Near You</h2>
          <p className="text-blue-200 text-sm mb-4">If these symptoms sound familiar, the next step is a blood panel. Browse physician-supervised TRT clinics in your area.</p>
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
            <li><Link href="/guides/how-to-find-a-trt-doctor" className="text-brand-blue hover:underline">How to Find a Good TRT Doctor (And What to Ask)</Link></li>
            <li><Link href="/guides/does-insurance-cover-trt" className="text-brand-blue hover:underline">Does Insurance Cover Testosterone Replacement Therapy?</Link></li>
            <li><Link href="/guides/how-much-does-trt-cost" className="text-brand-blue hover:underline">How Much Does TRT Really Cost?</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
