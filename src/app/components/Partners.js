'use client'
import { useEffect, useRef } from 'react'

const ACADEMIC_PARTNERS = [
  { name: 'IIT Delhi', short: 'IIT-D', color: 'bg-blue-100 text-blue-700' },
  { name: 'IIT Bombay', short: 'IIT-B', color: 'bg-indigo-100 text-indigo-700' },
  { name: 'IIT Madras', short: 'IIT-M', color: 'bg-violet-100 text-violet-700' },
  { name: 'IIM Bangalore', short: 'IIM-B', color: 'bg-orange-100 text-orange-700' },
  { name: 'IIM Calcutta', short: 'IIM-C', color: 'bg-amber-100 text-amber-700' },
  { name: 'IIM Ahmedabad', short: 'IIM-A', color: 'bg-red-100 text-red-700' },
  { name: 'SP Jain', short: 'SPJ', color: 'bg-emerald-100 text-emerald-700' },
  { name: 'XLRI', short: 'XLRI', color: 'bg-teal-100 text-teal-700' },
]

const ENTERPRISE_CLIENTS = [
  'TechMahindra', 'Infosys', 'Wipro', 'HCL Tech',
  'Razorpay', 'Swiggy', 'PhonePe', 'Meesho',
  'Apollo', 'HDFC Bank', 'Zomato', 'Paytm',
]

export default function Partners() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && entry.target.classList.add('visible'),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal" ref={ref}>
          <span className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3 block">
            Our Partners
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate-900 mb-4">
            Co-designed with institutions
            <br />
            <span className="gradient-text">you already trust</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Our programs are certified by India&apos;s most prestigious academic institutions and global
            technology leaders.
          </p>
        </div>

        {/* Academic partners */}
        <div className="mb-16">
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Academic Partners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACADEMIC_PARTNERS.map((p) => (
              <div
                key={p.name}
                className="border border-slate-100 rounded-2xl p-5 flex flex-col items-center gap-3 hover:shadow-md hover:border-brand-100 transition-all duration-200 group"
              >
                <div
                  className={`${p.color} w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform`}
                >
                  {p.short}
                </div>
                <span className="text-slate-700 font-medium text-sm text-center">{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise clients — scrolling marquee */}
        <div>
          <p className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Join 500+ Enterprise Clients
          </p>
          <div className="overflow-hidden relative">
            <div
              className="flex gap-6 animate-[marquee_20s_linear_infinite]"
              style={{
                animation: 'marquee 22s linear infinite',
              }}
            >
              {[...ENTERPRISE_CLIENTS, ...ENTERPRISE_CLIENTS].map((company, i) => (
                <div
                  key={`${company}-${i}`}
                  className="flex-shrink-0 bg-slate-50 border border-slate-100 rounded-xl px-6 py-3 text-slate-600 font-semibold text-sm whitespace-nowrap hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {company}
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
