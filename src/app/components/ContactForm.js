'use client'
import { useState } from 'react'

const COMPANY_SIZES = [
  '1–50 employees',
  '51–200 employees',
  '201–1000 employees',
  '1000+ employees',
]

const INTERESTS = [
  'Data Science & AI',
  'Product Management',
  'Leadership Development',
  'Cloud & Engineering',
  'Custom Program',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    size: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Valid email is required'
    if (!form.company.trim()) errs.company = 'Company is required'
    if (!form.size) errs.size = 'Please select company size'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full border rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:ring-red-400'
        : 'border-slate-200 bg-white hover:border-slate-300'
    }`

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-display text-3xl text-slate-900 mb-4">Request Received!</h2>
            <p className="text-slate-500 text-lg">
              Thank you for reaching out. Our enterprise team will contact you within{' '}
              <strong>1 business day</strong> to schedule your personalized demo.
            </p>
            <button
              onClick={() => { setStatus('idle'); setForm({ name:'',email:'',company:'',phone:'',size:'',interest:'',message:'' }) }}
              className="mt-8 text-brand-500 font-semibold hover:underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — copy */}
          <div className="lg:col-span-2">
            <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
              Get Started
            </span>
            <h2 className="font-display text-4xl text-slate-900 mb-4">
              Ready to transform your workforce?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              Book a free 30-minute demo with our enterprise learning consultants. We&apos;ll map your
              skill gaps, discuss your goals, and show you exactly how we can help.
            </p>

            <div className="space-y-5">
              {[
                { icon: '📞', title: 'Talk to an Expert', desc: 'Get a personalized consultation within 24 hours' },
                { icon: '📊', title: 'Free Skills Audit', desc: 'We map your team\'s learning gaps at no cost' },
                { icon: '🎓', title: 'Custom Demo', desc: 'See the platform configured for your org' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
              <h3 className="font-semibold text-slate-900 text-xl mb-6">Book a Free Demo</h3>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass('company')}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass('phone')}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Company Size *
                    </label>
                    <select
                      name="size"
                      value={form.size}
                      onChange={handleChange}
                      className={inputClass('size')}
                    >
                      <option value="">Select size</option>
                      {COMPANY_SIZES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.size && <p className="text-red-500 text-xs mt-1">{errors.size}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className={inputClass('interest')}
                    >
                      <option value="">Select area</option>
                      {INTERESTS.map((i) => (
                        <option key={i} value={i}>
                          {i}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5">
                    Tell us about your goals
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="We're looking to upskill our data team of 50 engineers in ML and AI over 6 months..."
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-4">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-brand-500 text-white font-semibold py-3.5 rounded-xl hover:bg-brand-600 active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-brand-500/30 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Book My Free Demo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-slate-400 text-xs text-center mt-3">
                  No spam. Your data is safe. We&apos;ll only contact you regarding your request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
