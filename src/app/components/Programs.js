'use client'
import { useEffect, useRef, useState } from 'react'

const CATEGORIES = ['All', 'Data & AI', 'Product', 'Leadership', 'Engineering']

const PROGRAMS = [
  {
    category: 'Data & AI',
    title: 'Executive Program in Data Science & AI',
    partner: 'IIT Delhi',
    duration: '6 months',
    level: 'Advanced',
    topics: ['Python & ML', 'Deep Learning', 'NLP', 'MLOps'],
    badge: '🏛️',
    color: 'border-t-brand-500',
    popular: true,
  },
  {
    category: 'Data & AI',
    title: 'Applied Machine Learning for Enterprise',
    partner: 'IIT Bombay',
    duration: '4 months',
    level: 'Intermediate',
    topics: ['Supervised ML', 'Feature Engineering', 'Model Deployment', 'AutoML'],
    badge: '🧪',
    color: 'border-t-purple-500',
    popular: false,
  },
  {
    category: 'Product',
    title: 'Product Leadership Program',
    partner: 'IIM Bangalore',
    duration: '5 months',
    level: 'Advanced',
    topics: ['Strategy', 'Roadmapping', 'Data-Driven PM', 'GTM'],
    badge: '🚀',
    color: 'border-t-accent-500',
    popular: true,
  },
  {
    category: 'Leadership',
    title: 'CHRO & People Analytics',
    partner: 'IIM Calcutta',
    duration: '3 months',
    level: 'Senior',
    topics: ['People Analytics', 'Talent Strategy', 'OKRs', 'DEI'],
    badge: '👔',
    color: 'border-t-green-500',
    popular: false,
  },
  {
    category: 'Engineering',
    title: 'Cloud & DevSecOps Transformation',
    partner: 'IIT Madras',
    duration: '4 months',
    level: 'Intermediate',
    topics: ['AWS/GCP', 'Kubernetes', 'Security', 'CI/CD'],
    badge: '☁️',
    color: 'border-t-cyan-500',
    popular: false,
  },
  {
    category: 'Leadership',
    title: 'Senior Leadership & Strategic Thinking',
    partner: 'IIM Ahmedabad',
    duration: '6 months',
    level: 'Senior',
    topics: ['Strategic Planning', 'P&L Management', 'Executive Presence', 'Influence'],
    badge: '⭐',
    color: 'border-t-yellow-500',
    popular: true,
  },
]

export default function Programs() {
  const [active, setActive] = useState('All')
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (revealRef.current) observer.observe(revealRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered =
    active === 'All' ? PROGRAMS : PROGRAMS.filter((p) => p.category === active)

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal" ref={revealRef}>
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Program Catalog
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">
            World-class programs,
            <br />
            <span className="gradient-text">co-designed with top institutions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Every program is rigorously structured for real-world applicability and certified by
            India&apos;s most prestigious academic institutions.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/25'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prog) => (
            <div
              key={prog.title}
              className={`bg-white border border-slate-100 border-t-4 ${prog.color} rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative`}
            >
              {prog.popular && (
                <span className="absolute top-4 right-4 bg-accent-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div className="text-3xl mb-4">{prog.badge}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-brand-50 text-brand-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {prog.partner}
                </span>
                <span className="bg-slate-100 text-slate-500 text-xs font-medium px-2.5 py-1 rounded-full">
                  {prog.level}
                </span>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg mb-2 leading-snug">
                {prog.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4">⏱ {prog.duration}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {prog.topics.map((topic) => (
                  <span
                    key={topic}
                    className="bg-slate-50 text-slate-600 text-xs px-2.5 py-1 rounded-lg border border-slate-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="block text-center text-brand-500 font-semibold text-sm border-2 border-brand-500 py-2.5 rounded-xl hover:bg-brand-500 hover:text-white transition-all duration-200"
                >
                  Request Curriculum →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            View Full Catalog — 100+ Programs
          </a>
        </div>
      </div>
    </section>
  )
}
