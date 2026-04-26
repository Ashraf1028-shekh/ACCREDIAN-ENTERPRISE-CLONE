'use client'
import { useEffect, useRef } from 'react'

const STEPS = [
  {
    number: '01',
    title: 'Discovery & Skill Mapping',
    desc: 'Our L&D consultants meet with your team to map skill gaps, business goals, technology requirements, and strategic learning outcomes.',
    icon: '🔍',
    color: 'bg-brand-500',
  },
  {
    number: '02',
    title: 'Co-Create the Curriculum',
    desc: 'Together with our academic partners from IITs and IIMs, we design a custom learning journey tailored to your org\'s context and tech stack.',
    icon: '✏️',
    color: 'bg-purple-600',
  },
  {
    number: '03',
    title: 'Launch & Onboard Teams',
    desc: 'Onboard teams with platform access, orientation sessions, and mentor assignment. We handle everything so your L&D team can focus on outcomes.',
    icon: '🚀',
    color: 'bg-accent-500',
  },
  {
    number: '04',
    title: 'Track, Measure & Optimize',
    desc: 'Real-time analytics and monthly business reviews keep ROI measurable. Adaptive content recommendations keep engagement high throughout the program.',
    icon: '📈',
    color: 'bg-green-500',
  },
]

export default function HowItWorks() {
  const sectionRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    itemRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el) => {
    if (el && !itemRefs.current.includes(el)) itemRefs.current.push(el)
  }

  return (
    <section id="how-it-works" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal" ref={addRef}>
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-widest mb-3 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            From kickoff to{' '}
            <span className="text-accent-400">measurable ROI</span>
            <br />
            in 4 steps
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            A proven implementation framework used by 500+ enterprises across India and globally.
          </p>
        </div>

        {/* Steps — alternating layout on desktop */}
        <div className="space-y-12">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              ref={addRef}
              className={`reveal flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`${step.color} text-white font-bold font-display text-lg w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    {step.number}
                  </span>
                  <h3 className="font-semibold text-white text-xl">{step.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-lg ml-16">{step.desc}</p>
              </div>

              {/* Icon card */}
              <div className="flex-shrink-0">
                <div
                  className={`w-32 h-32 ${step.color} rounded-3xl flex items-center justify-center text-6xl shadow-2xl`}
                  style={{ boxShadow: `0 20px 60px -10px ${step.color.replace('bg-', '').replace('500', '500')}40` }}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-accent-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-accent-600 transition-all duration-200 shadow-xl hover:shadow-accent-500/40 active:scale-95 text-lg"
          >
            Start Your Enterprise Journey
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
