'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 500, suffix: '+', label: 'Enterprise Clients' },
  { value: 94, suffix: '%', label: 'Completion Rate' },
  { value: 500, suffix: '+', label: 'Expert Mentors' },
  { value: 40, suffix: '%', label: 'Avg Productivity Boost' },
]

function AnimatedNumber({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let start = 0
          const duration = 1800
          const step = (timestamp) => {
            if (!start) start = timestamp
            const progress = Math.min((timestamp - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative hero-gradient min-h-screen flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-20 left-16 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              India&apos;s #1 Enterprise Learning Platform
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6">
              Upskill Your
              <br />
              <span className="text-accent-400">Workforce</span>
              <br />
              at Scale
            </h1>

            <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg">
              Partner with IITs, IIMs, and global universities to deliver curated programs, live
              mentorship, and real-time analytics that drive measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 bg-accent-500 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-accent-600 transition-all duration-200 shadow-lg hover:shadow-accent-500/40 hover:shadow-xl active:scale-95"
              >
                Get a Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all duration-200 active:scale-95 backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-3">
              {['IIT Certified', 'IIM Certified', 'ISO 27001', '500+ Companies'].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup card */}
          <div className="hidden lg:block relative">
            <div className="float-anim">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
                {/* Mock dashboard header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-1">
                      Learning Dashboard
                    </p>
                    <p className="text-white font-semibold text-lg">Q2 2025 Report</p>
                  </div>
                  <div className="bg-green-400/20 border border-green-400/30 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                    Live ●
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: 'Active Learners', value: '2,847', icon: '👤', change: '+12%' },
                    { label: 'Completion Rate', value: '96.2%', icon: '🎯', change: '+3.4%' },
                    { label: 'Courses Live', value: '48', icon: '📚', change: '+8' },
                    { label: 'ROI Delivered', value: '340%', icon: '📈', change: '↑ YoY' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-lg">{stat.icon}</span>
                        <span className="text-green-300 text-xs font-semibold">{stat.change}</span>
                      </div>
                      <p className="text-white font-bold text-xl">{stat.value}</p>
                      <p className="text-white/50 text-xs">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  <p className="text-white/60 text-xs font-medium uppercase tracking-widest">
                    Program Progress
                  </p>
                  {[
                    { name: 'Data Science', pct: 87 },
                    { name: 'AI / ML Track', pct: 72 },
                    { name: 'Leadership 360', pct: 94 },
                  ].map((prog) => (
                    <div key={prog.name}>
                      <div className="flex justify-between text-xs text-white/70 mb-1">
                        <span>{prog.name}</span>
                        <span>{prog.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-400 to-accent-400 rounded-full"
                          style={{ width: `${prog.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 text-sm">
              <span className="text-2xl">🎓</span>
              <div>
                <p className="font-semibold text-slate-800 text-xs">IIT Delhi Certified</p>
                <p className="text-slate-500 text-xs">+120 new certifications</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 text-sm">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-slate-800 text-xs">Productivity Up 40%</p>
                <p className="text-slate-500 text-xs">Avg across cohorts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl text-white font-bold mb-1">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 40 576 48C672 56 768 59 864 53.3C960 48 1056 34 1152 28C1248 22 1344 24 1392 25.3L1440 27V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
