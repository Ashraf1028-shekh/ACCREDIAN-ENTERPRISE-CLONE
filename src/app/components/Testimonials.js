'use client'
import { useEffect, useRef, useState } from 'react'

const TESTIMONIALS = [
  {
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    name: 'Priya Sharma',
    role: 'Chief People Officer',
    company: 'TechMahindra',
    avatar: 'PS',
    color: 'bg-brand-500',
    stars: 5,
  },
  {
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    name: 'Rajesh Nair',
    role: 'VP Engineering',
    company: 'Infosys Digital',
    avatar: 'RN',
    color: 'bg-purple-600',
    stars: 5,
  },
  {
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    name: 'Ananya Krishnan',
    role: 'Head of L&D',
    company: 'Wipro Ventures',
    avatar: 'AK',
    color: 'bg-accent-500',
    stars: 5,
  },
  {
    quote:
      "Within 3 months of the AI literacy program, our product teams were shipping features that previously needed dedicated data science resources. Incredible impact.",
    name: 'Siddharth Mehta',
    role: 'CTO',
    company: 'Razorpay',
    avatar: 'SM',
    color: 'bg-green-600',
    stars: 5,
  },
  {
    quote:
      "The custom curriculum they built for our healthcare AI use case was exceptionally well-researched. Our CISO was impressed by the depth of security track content.",
    name: 'Dr. Kavitha Rao',
    role: 'CHRO',
    company: 'Apollo Hospitals',
    avatar: 'KR',
    color: 'bg-teal-600',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(intervalRef.current)
  }, [])

  const goTo = (idx) => {
    setCurrent(idx)
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length)
    }, 5000)
  }

  return (
    <section id="testimonials" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal" ref={sectionRef}>
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Testimonials
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">
            Trusted by L&D leaders
            <br />
            <span className="gradient-text">at India&apos;s top companies</span>
          </h2>
        </div>

        {/* Featured testimonial (auto-rotating) */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-accent-500" />
            <div className="text-5xl text-brand-200 font-display leading-none mb-4">&ldquo;</div>
            <blockquote className="text-slate-700 text-xl lg:text-2xl leading-relaxed font-medium mb-8 transition-all duration-500">
              {TESTIMONIALS[current].quote}
            </blockquote>
            <div className="flex items-center gap-4">
              <div
                className={`${TESTIMONIALS[current].color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {TESTIMONIALS[current].avatar}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{TESTIMONIALS[current].name}</p>
                <p className="text-slate-500 text-sm">
                  {TESTIMONIALS[current].role} · {TESTIMONIALS[current].company}
                </p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {Array.from({ length: TESTIMONIALS[current].stars }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2.5 bg-brand-500'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-all duration-300 cursor-pointer ${
                current === i ? 'border-brand-200 shadow-brand-100' : ''
              }`}
              onClick={() => goTo(i)}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`${t.color} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
