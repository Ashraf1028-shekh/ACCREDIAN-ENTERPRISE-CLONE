import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'Accredian Enterprise — Upskill Your Workforce at Scale',
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords: 'enterprise learning, corporate training, IIT programs, IIM programs, upskilling, L&D',
  openGraph: {
    title: 'Accredian Enterprise — Upskill Your Workforce at Scale',
    description: 'Partner with IITs, IIMs, and global universities to upskill your enterprise teams.',
    url: 'https://accredian-enterprise.vercel.app',
    siteName: 'Accredian Enterprise',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-slate-800 antialiased">{children}</body>
    </html>
  )
}
