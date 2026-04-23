"use client"

import { motion } from 'framer-motion'
import ServiceCard from './service-card'

const STAGING_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/24923ab66_generated_6d132a60.png'
const DESIGN_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/143398e91_generated_42d71334.png'

const stagingFeatures = [
  { title: 'Strategic Assessment', desc: 'We analyze your property through the lens of the ideal buyer, identifying every opportunity to maximize appeal.' },
  { title: 'The Staged Aesthetic', desc: 'Our curated collection of furnishings and art transforms vacant or lived-in spaces into aspirational environments.' },
  { title: 'ROI-Driven Approach', desc: 'Staged homes sell 73% faster on average. We focus on the details that drive offers above asking price.' },
  { title: 'Full-Service Execution', desc: 'From consultation through installation and de-staging — we handle every detail so you can focus on closing.' },
]

const designFeatures = [
  { title: 'Discovery & Vision', desc: 'We immerse ourselves in how you live, uncovering the aesthetic and functional DNA of your ideal space.' },
  { title: 'The Curated Life', desc: 'Every piece is selected with intention — bespoke furnishings, custom textiles, and art that speaks to your story.' },
  { title: 'Room-by-Room Revival', desc: "Whether it's one dated room or a whole-home refresh, we bring cohesion and character to every corner." },
  { title: 'White-Glove Installation', desc: 'Our team manages procurement, delivery, and placement. You walk into a finished space that feels unmistakably yours.' },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-[8vw] bg-section-cream">
      {/* Section header */}
      <div className="mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-2xl tracking-[0.4em] uppercase text-muted-foreground mb-4 font-semibold"
        >
          Our Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-light text-foreground"
        >
          Two Paths, One Vision
        </motion.h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ServiceCard
          title="The Staged Aesthetic"
          subtitle="Home Staging"
          description="Preparing your property to captivate buyers from the moment they cross the threshold. We orchestrate every detail to accelerate your sale and maximize your return."
          features={stagingFeatures}
          image={STAGING_IMG}
          imageAlt="Beautifully staged living room"
        />
        <div className="md:mt-16">
          <ServiceCard
            title="The Curated Life"
            subtitle="Interior Design"
            description="Reimagining the spaces where life happens. From a single room refresh to a complete home transformation, we design environments that resonate with who you are."
            features={designFeatures}
            image={DESIGN_IMG}
            imageAlt="Elegant bedroom interior design"
            flipped
          />
        </div>
      </div>
    </section>
  )
}
