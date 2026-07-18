"use client"

import { motion } from 'framer-motion'
import ServiceCard from './service-card'

const STAGING_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/24923ab66_generated_6d132a60.png'
const DESIGN_IMG = '/portfolio/curated-life-bedroom.jpeg'

const stagingFeatures = [
  { title: 'Strategic Assessment', desc: 'We analyze your property through the lens of the ideal buyer, identifying every opportunity to maximize appeal.' },
  { title: 'The Staged Aesthetic', desc: 'Our curated collection of furnishings, textiles, accessories and art, transforms vacant or lived-in spaces into aspirational environments.' },
  { title: 'Return On Investment Driven Approach', desc: 'It has been proven that staged homes sell 75% faster on average. We focus on the details that drive offers above asking price.' },
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
    <section id="services" className="relative py-12 md:py-16 px-6 md:px-[8vw] bg-section-cream">
      {/* Section header */}
      <div className="mb-8 md:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-[22px] font-semibold tracking-[0.4em] uppercase text-muted-foreground mb-4"
          style={{ fontSize: '20px', fontWeight: '600' }}
        >
          Our Expertise
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-5xl font-light italic text-foreground"
        >
          Two Paths - One Vision
        </motion.h2>
      </div>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ServiceCard
          title={<>The Staged <span className="italic">Aesthetic</span></>}
          subtitle="Home Staging"
          description="Preparing your property to captivate buyers from the moment they step inside. We orchestrate every detail to accelerate your sale and maximize your return."
          expandedDescription="We transform your property into a buyer's must-have. Our meticulous preparation accelerates your timeline and maximizes your equity, turning a first impression into a closed deal."
          features={stagingFeatures}
          image={STAGING_IMG}
          imageAlt="Beautifully staged living room"
          serviceKey="staging"
        />
        <div className="md:mt-16">
          <ServiceCard
            title={<>The Curated <span className="italic">Life</span></>}
            subtitle="Interior Design"
            description="Reimagining the spaces where life happens. From a single room refresh to a complete home transformation, we design environments that resonate with who you are."
            expandedDescription="Your home should feel like you. From tastefully curated room updates to total home makeovers, we handle the design so your space reflects exactly how you want to live."
            features={designFeatures}
            image={DESIGN_IMG}
            imageAlt="Elegant bedroom interior design"
            flipped
            serviceKey="design"
          />
        </div>
      </div>
    </section>
  )
}
