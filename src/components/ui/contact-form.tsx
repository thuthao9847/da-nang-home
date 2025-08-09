'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useTranslations } from '@/utils/translations'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof formSchema>

// Replace with your Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL'

export function ContactForm() {
  const { t } = useTranslations()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitStatus('submitting')

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitStatus('success')
      reset()

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')

      // Reset error message after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-light">
          {t('contact.form.name.label')}
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-lg border border-secondary-600 bg-secondary-800 px-4 py-2 text-text-light placeholder-secondary-400 focus:border-primary-500 focus:outline-none"
          placeholder={t('contact.form.name.placeholder')}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-light">
          {t('contact.form.email.label')}
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-lg border border-secondary-600 bg-secondary-800 px-4 py-2 text-text-light placeholder-secondary-400 focus:border-primary-500 focus:outline-none"
          placeholder={t('contact.form.email.placeholder')}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-text-light">
          {t('contact.form.phone.label')} ({t('contact.form.phone.optional')})
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full rounded-lg border border-secondary-600 bg-secondary-800 px-4 py-2 text-text-light placeholder-secondary-400 focus:border-primary-500 focus:outline-none"
          placeholder={t('contact.form.phone.placeholder')}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-light">
          {t('contact.form.message.label')}
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className="mt-1 block w-full rounded-lg border border-secondary-600 bg-secondary-800 px-4 py-2 text-text-light placeholder-secondary-400 focus:border-primary-500 focus:outline-none"
          placeholder={t('contact.form.message.placeholder')}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitStatus === 'submitting'}
        className="w-full rounded-lg bg-primary-500 px-4 py-2 font-semibold text-text-light hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {submitStatus === 'submitting'
          ? t('contact.form.sending')
          : t('contact.form.submit')}
      </button>

      {submitStatus === 'success' && (
        <p className="text-sm text-green-400">{t('contact.form.success')}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-400">{t('contact.form.error')}</p>
      )}
    </form>
  )
}
