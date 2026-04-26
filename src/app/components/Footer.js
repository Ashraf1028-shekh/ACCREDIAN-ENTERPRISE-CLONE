import Link from 'next/link'

const LINKS = {
  Platform: ['Features', 'Programs', 'Analytics Dashboard', 'Mentorship', 'Certifications'],
  Company: ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  Resources: ['Case Studies', 'Webinars', 'ROI Calculator', 'API Docs', 'Help Center'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-white font-display text-lg font-bold">Accredian</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              India&apos;s most trusted enterprise learning platform. Upskill your workforce at scale
              with IIT & IIM certified programs.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-brand-500 transition-colors text-xs font-bold text-slate-300 hover:text-white"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-white transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {new Date().getFullYear()} Accredian Enterprise. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All systems operational
            </span>
            <span>ISO 27001 Certified</span>
            <span>SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
