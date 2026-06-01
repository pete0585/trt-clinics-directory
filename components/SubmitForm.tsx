'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { US_STATES, TREATMENT_LABELS, CLINIC_TYPE_LABELS } from '@/lib/utils'

const schema = z.object({
  clinic_name: z.string().min(2, 'Clinic name is required'),
  address_line1: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().length(2, 'Select a state'),
  zip: z.string().regex(/^\d{5}(-\d{4})?$/, 'Valid ZIP code required'),
  phone: z.string().optional(),
  website: z.string().url('Enter a valid URL (include https://)').optional().or(z.literal('')),
  email: z.string().email('Valid email required').optional().or(z.literal('')),
  clinic_type: z.enum(['in_person', 'telehealth', 'hybrid']).optional(),
  treatment_options: z.array(z.string()).optional(),
  insurance_accepted: z.boolean().optional(),
  physician_supervised: z.boolean().optional(),
  physician_credentials: z.string().optional(),
  bio: z.string().max(500, 'Bio must be under 500 characters').optional(),
  submitter_email: z.string().email('Valid email required for verification'),
})

type FormData = z.infer<typeof schema>

export default function SubmitForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      treatment_options: [],
      insurance_accepted: false,
      physician_supervised: false,
    },
  })

  const physicianSupervised = watch('physician_supervised')

  async function onSubmit(data: FormData) {
    setError(null)
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Submission failed')
      }
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="text-2xl font-bold text-brand-navy mb-3">Listing Submitted!</h2>
        <p className="text-brand-steel max-w-md mx-auto">
          Your clinic has been submitted for review. You&apos;ll receive a confirmation email within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Clinic Info */}
      <fieldset className="bg-white rounded-xl border border-brand-light-2 p-6 space-y-4">
        <legend className="text-base font-bold text-brand-navy mb-4">Clinic Information</legend>

        <div>
          <label className="block text-sm font-medium text-brand-slate mb-1.5">Clinic Name <span className="text-red-500">*</span></label>
          <input
            {...register('clinic_name')}
            className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            placeholder="e.g. Austin Men's Health Center"
          />
          {errors.clinic_name && <p className="text-xs text-red-500 mt-1">{errors.clinic_name.message}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">Address <span className="text-red-500">*</span></label>
            <input
              {...register('address_line1')}
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
              placeholder="123 Main St"
            />
            {errors.address_line1 && <p className="text-xs text-red-500 mt-1">{errors.address_line1.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">City <span className="text-red-500">*</span></label>
            <input
              {...register('city')}
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            />
            {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">State <span className="text-red-500">*</span></label>
            <select
              {...register('state')}
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            >
              <option value="">Select State</option>
              {Object.entries(US_STATES).map(([abbr, name]) => (
                <option key={abbr} value={abbr}>{name}</option>
              ))}
            </select>
            {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">ZIP Code <span className="text-red-500">*</span></label>
            <input
              {...register('zip')}
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
              placeholder="78701"
            />
            {errors.zip && <p className="text-xs text-red-500 mt-1">{errors.zip.message}</p>}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">Phone</label>
            <input
              {...register('phone')}
              type="tel"
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
              placeholder="(512) 555-0100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">Website</label>
            <input
              {...register('website')}
              type="url"
              className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
              placeholder="https://yourclinic.com"
            />
            {errors.website && <p className="text-xs text-red-500 mt-1">{errors.website.message}</p>}
          </div>
        </div>
      </fieldset>

      {/* Clinic Details */}
      <fieldset className="bg-white rounded-xl border border-brand-light-2 p-6 space-y-4">
        <legend className="text-base font-bold text-brand-navy mb-4">Clinic Details</legend>

        <div>
          <label className="block text-sm font-medium text-brand-slate mb-1.5">Clinic Type</label>
          <div className="flex flex-wrap gap-3">
            {Object.entries(CLINIC_TYPE_LABELS).map(([val, label]) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input type="radio" value={val} {...register('clinic_type')} className="accent-brand-blue" />
                <span className="text-sm text-brand-slate">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brand-slate mb-2">Treatment Options</label>
          <div className="flex flex-wrap gap-3">
            {Object.entries(TREATMENT_LABELS).map(([val, label]) => (
              <label key={val} className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" value={val} {...register('treatment_options')} className="accent-brand-blue rounded" />
                <span className="text-sm text-brand-slate">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" {...register('insurance_accepted')} className="accent-brand-blue rounded" />
            <span className="text-sm text-brand-slate">Accepts Insurance</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" {...register('physician_supervised')} className="accent-brand-blue rounded" />
            <span className="text-sm text-brand-slate">Physician-Supervised</span>
          </label>
        </div>

        {physicianSupervised && (
          <div>
            <label className="block text-sm font-medium text-brand-slate mb-1.5">Physician Credentials</label>
            <select
              {...register('physician_credentials')}
              className="w-full sm:w-48 px-3 py-2.5 border border-brand-light-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            >
              <option value="">Select...</option>
              <option value="MD">MD (Physician)</option>
              <option value="DO">DO (Physician)</option>
              <option value="NP">NP (Nurse Practitioner)</option>
              <option value="PA">PA (Physician Assistant)</option>
            </select>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-brand-slate mb-1.5">About Your Clinic <span className="text-brand-steel text-xs">(optional, max 500 chars)</span></label>
          <textarea
            {...register('bio')}
            rows={4}
            className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm resize-none"
            placeholder="Brief description of your practice, specialties, approach..."
          />
          {errors.bio && <p className="text-xs text-red-500 mt-1">{errors.bio.message}</p>}
        </div>
      </fieldset>

      {/* Contact */}
      <fieldset className="bg-white rounded-xl border border-brand-light-2 p-6 space-y-4">
        <legend className="text-base font-bold text-brand-navy mb-4">Your Contact Info</legend>
        <div>
          <label className="block text-sm font-medium text-brand-slate mb-1.5">Email Address <span className="text-red-500">*</span></label>
          <input
            {...register('submitter_email')}
            type="email"
            className="w-full px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm"
            placeholder="you@yourclinic.com"
          />
          {errors.submitter_email && <p className="text-xs text-red-500 mt-1">{errors.submitter_email.message}</p>}
          <p className="text-xs text-brand-steel mt-1">We&apos;ll send your listing confirmation here.</p>
        </div>
      </fieldset>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-brand-orange hover:bg-brand-orange-dark disabled:opacity-50 text-white font-bold rounded-xl transition-colors text-base"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Free Listing →'}
      </button>
      <p className="text-center text-xs text-brand-steel">Free listings are reviewed within 24 hours.</p>
    </form>
  )
}
