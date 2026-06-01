import type { Metadata } from 'next'
import { CheckCircle, Star } from 'lucide-react'
import SubmitForm from '@/components/SubmitForm'

export const metadata: Metadata = {
  title: 'Add Your TRT Clinic — Free Listing on FindTRTClinic',
  description: 'List your testosterone replacement therapy clinic on FindTRTClinic. Free listings available. Upgrade to Verified ($199/yr) or Featured ($399/yr) for more visibility and patient inquiries.',
}

const PLAN_FEATURES = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Basic listing: name, city, phone, website',
      'Up to 3 treatment types displayed',
      'Searchable by city and state',
      'Claim and verify anytime',
    ],
    cta: 'Start Free',
    highlight: false,
  },
  verified: {
    name: 'Verified',
    price: '$199',
    period: 'per year',
    features: [
      'Everything in Free',
      'Full treatment type display',
      'Insurance acceptance badge',
      'Physician credentials badge',
      'Telehealth/in-person badge',
      'Patient contact form (inquiries routed to you)',
      'Priority placement below Featured',
      '"Verified by FindTRTClinic" badge',
    ],
    cta: 'Get Verified',
    highlight: false,
  },
  featured: {
    name: 'Featured',
    price: '$399',
    period: 'per year',
    features: [
      'Everything in Verified',
      'Top 3 placement in city search results',
      'Logo display on listing card',
      'Highlighted card design',
      'Promo offer display (e.g., Free consultation)',
      'Monthly performance report',
      'Phone and email shown prominently',
    ],
    cta: 'Get Featured',
    highlight: true,
  },
}

export default function SubmitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-brand-navy mb-3">List Your TRT Clinic</h1>
        <p className="text-brand-steel max-w-xl mx-auto">
          Get in front of men actively searching for TRT clinics in your city. One new patient per year covers the cost of a Verified listing 15x over.
        </p>
      </div>

      {/* Pricing */}
      <div id="pricing" className="grid md:grid-cols-3 gap-4 mb-12 scroll-mt-20">
        {Object.entries(PLAN_FEATURES).map(([tier, plan]) => (
          <div
            key={tier}
            className={`relative bg-white rounded-xl border p-6 ${
              plan.highlight
                ? 'border-brand-orange ring-2 ring-brand-orange/20 shadow-md'
                : 'border-brand-light-2 shadow-sm'
            }`}
          >
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
                  <Star className="w-3 h-3" aria-label="" /> Most Popular
                </span>
              </div>
            )}
            <div className="mb-4">
              <h3 className="font-bold text-brand-navy text-lg">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl font-extrabold text-brand-navy">{plan.price}</span>
                <span className="text-brand-steel text-sm">/{plan.period}</span>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm text-brand-slate">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-label="" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-brand-light-2 p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold text-brand-navy mb-2">Submit Your Clinic</h2>
        <p className="text-brand-steel text-sm mb-6">Start with a free listing. Upgrade to Verified or Featured after claiming.</p>
        <SubmitForm />
      </div>
    </div>
  )
}
