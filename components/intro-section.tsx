"use client"

import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="relative py-20 md:py-24 px-6 md:px-[8vw] bg-section-warm">
      {/* Vertical rule accent */}
      <div className="absolute left-6 md:left-[4vw] top-10 bottom-10 w-px bg-border" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-4xl tracking-[0.4em] uppercase mb-8"
          style={{ fontSize: '30px', color: '#695a40' }}
        >
          Giuliana Design Co.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground text-balance"
          style={{ fontSize: '50px' }}
        >
          We don&apos;t decorate spaces.
          <br />
          We <em className="italic text-primary">choreograph</em> emotion.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-16 h-px bg-primary mx-auto my-10"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Whether you&apos;re preparing your home for the market or reimagining the 
          space you live in, we create environments that tell compelling stories — 
          turning dated rooms into masterpieces of intentional living.
        </motion.p>
      </div>
    </section>
  )
}
