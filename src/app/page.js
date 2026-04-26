import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Programs />
      <HowItWorks />
      <Testimonials />
      <Partners />
      <ContactForm />
      <Footer />
    </main>
  )
}
