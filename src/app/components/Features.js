'use client'
import { useEffect, useRef } from 'react'

const FEATURES = [
  {
    icon: '🎓',
    title: 'University-Certified Programs',
    desc: 'Access a library of programs co-created with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
    color: 'from-blue-50 to-indigo-100',
    border: 'border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics',
    desc: 'Track completion rates, engagement scores, and ROI through a live command-center dashboard designed for L&D leaders and CHROs.',
    color: 'from-purple-50 to-violet-100',
    border: 'border-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    icon: '🧑‍💼',
    title: 'Live 1:1 Mentorship',
    desc: 'Industry experts guide your team through capstone projects and career milestones. 500+ mentors across AI/ML, Data Science, Product, and Leadership.',
    color: 'from-orange-50 to-amber-100',
    border: 'border-orange-100',
    iconBg: 'bg-orange-100',
  },
  {
    icon: '🤝',
    title: 'Cohort-Based Learning',
    desc: 'Foster team collaboration with synchronized learning paths. Structured cohorts drive accountability and peer learning — completion rates above 94%.',
    color: 'from-green-50 to-emerald-100',
    border: 'border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: '⚙️',
    title: 'Custom Curriculum',
    desc: 'Tailor programs entirely to your organization\'s specific tech stack, skill gaps, and strategic goals. Built around your business, not a generic catalogue.',
    color: 'from-cyan-50 to-sky-100',
    border: 'border-cyan-100',
    iconBg: 'bg-cyan-100',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Learning Paths',
    desc: 'Adaptive learning paths adjust to each learner\'s pace and baseline. Monthly nudges and recommendations keep engagement high and learning sticky.',
    color: 'from-rose-50 to-pink-100',
    border: 'border-rose-100',
    iconBg: 'bg-rose-100',
  },
  {
    icon: '📜',
    title: 'Recognized Certifications',
    desc: 'Earn certifications from IITs, IIMs, and global universities that employees wear with pride — boosting retention and attracting top talent.',
    color: 'from-yellow-50 to-amber-100',
    border: 'border-yellow-100',
    iconBg: 'bg-yellow-100',
  },
  {
    icon: '🌐',
    title: 'Global & Remote-First',
    desc: 'Seamlessly upskill distributed teams across timezones. Enterprise-grade infrastructure handles 300+ simultaneous learners without a hitch.',
    color: 'from-teal-50 to-emerald-100',
    border: 'border-teal-100',
    iconBg: 'bg-teal-100',
  },
]

export default function Features() {
  const revealRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <section id="features" className="py-24 mesh-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal" ref={addRef}>
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Platform Features
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">
            Everything L&D teams need,
            <br />
            <span className="gradient-text">in one platform</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From curriculum design to analytics — Accredian Enterprise is the complete operating
            system for ambitious learning organizations.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              ref={addRef}
              className="reveal group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${(i % 4) * 80}ms` }}
            >
              <div
                className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2 leading-snug">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
