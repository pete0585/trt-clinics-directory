'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Please include a brief message (10+ chars)'),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  listingId: string
  clinicName: string
}

export default function ContactForm({ listingId, clinicName }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormData) {
    setError(null)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, listingId }),
      })
      if (!res.ok) throw new Error('Failed to send message')
      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try calling the clinic directly.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-green-600 font-semibold mb-1">Message sent!</div>
        <p className="text-sm text-brand-steel">{clinicName} will be in touch shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register('name')}
          placeholder="Your name"
          className="w-full text-sm px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Email address"
          className="w-full text-sm px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Phone (optional)"
          className="w-full text-sm px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
        />
      </div>
      <div>
        <textarea
          {...register('message')}
          placeholder="Brief message about your situation..."
          rows={3}
          className="w-full text-sm px-3 py-2.5 border border-brand-light-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-2.5 bg-brand-blue hover:bg-brand-blue-light disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <p className="text-xs text-brand-steel text-center">Your inquiry goes directly to the clinic.</p>
    </form>
  )
}
