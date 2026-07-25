import Navbar from '@/components/navbar'
import DualityHero from '@/components/duality-hero'
import IntroSection from '@/components/intro-section'
import PortfolioSection from '@/components/portfolio-section'
import ServicesSection from '@/components/services-section'
import TestimonialSection from '@/components/testimonial-section'
import RealtorsSection from '@/components/realtors-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DualityHero />
      <IntroSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialSection />
      <Footer />
      <RealtorsSection />
    </main>
  )
}
