"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'

const STAGING_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/24923ab66_generated_6d132a60.png'
const DESIGN_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/143398e91_generated_42d71334.png'

export default function DualityHero() {
  const [hovered, setHovered] = useState<'staging' | 'design' | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Split panels */}
      <div className="flex h-full">
        {/* Staging Side */}
        <motion.div
          className="relative h-full overflow-hidden cursor-pointer"
          animate={{
            flex: hovered === 'staging' ? 1.6 : hovered === 'design' ? 0.6 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHovered('staging')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollTo('services')}
        >
          <div className="absolute inset-0">
            <img
              src={STAGING_IMG}
              alt="Luxury staged living room with mid-century modern furniture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/30" />
          </div>
          <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-16 pt-48 md:pt-56 pb-20 md:pb-24">
            <div>
              <motion.p
                className="font-serif text-2xl font-semibold italic tracking-[0.35em] uppercase text-white/70 mb-4"
                animate={{ opacity: hovered === 'design' ? 0.4 : 1 }}
              >
                Home Staging
              </motion.p>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl text-white leading-none"
                style={{ fontFamily: "'Corbel', 'Lucida Grande', sans-serif" }}
                animate={{ opacity: hovered === 'design' ? 0.4 : 1 }}
              >
                <span className="font-thin">Sell the</span>
                <br />
                <span className="italic font-normal">Dream</span>
              </motion.h2>
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ width: 250 }}
              animate={{ width: 250, opacity: hovered === 'staging' ? 1 : 0.7 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-white whitespace-nowrap flex items-center gap-3 transition-all duration-300 hover:text-[17px]" style={{ fontWeight: '600' }}>
                <span className="block w-8 h-px bg-white" />
                Enter Staging
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Center divider */}
        <div className="w-px bg-white/20 z-20" />

        {/* Design Side */}
        <motion.div
          className="relative h-full overflow-hidden cursor-pointer"
          animate={{
            flex: hovered === 'design' ? 1.6 : hovered === 'staging' ? 0.6 : 1,
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHovered('design')}
          onMouseLeave={() => setHovered(null)}
          onClick={() => scrollTo('services')}
        >
          <div className="absolute inset-0">
            <img
              src={DESIGN_IMG}
              alt="Elegant bedroom with bespoke walnut headboard and linen bedding"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/30" />
          </div>
          <div className="relative z-10 flex flex-col justify-between items-end h-full p-8 md:p-16 pt-48 md:pt-56 pb-20 md:pb-24 text-right">
            <div>
              <motion.p
                className="font-serif text-2xl font-semibold italic tracking-[0.35em] uppercase text-white/70 mb-4"
                animate={{ opacity: hovered === 'staging' ? 0.4 : 1 }}
              >
                Interior Design
              </motion.p>
              <motion.h2
                className="text-5xl md:text-7xl lg:text-8xl text-white leading-none"
                style={{ fontFamily: "'Corbel', 'Lucida Grande', sans-serif" }}
                animate={{ opacity: hovered === 'staging' ? 0.4 : 1 }}
              >
                <span className="font-thin">Live the</span>
                <br />
                <span className="italic font-normal">Reality</span>
              </motion.h2>
            </div>
            <motion.div
              className="overflow-hidden flex justify-end"
              initial={{ width: 250 }}
              animate={{ width: 250, opacity: hovered === 'design' ? 1 : 0.7 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-white whitespace-nowrap flex items-center gap-3 transition-all duration-300 hover:text-[17px]" style={{ fontWeight: '600' }}>
                Explore Design
                <span className="block w-8 h-px bg-white" />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span className="font-sans tracking-[0.4em] uppercase" style={{ fontSize: '15px', fontStyle: 'italic', fontWeight: '600', color: 'rgba(254, 254, 254, 0.76)' }}>
          Scroll
        </span>
        <div className="w-px h-8 bg-white/40" />
      </motion.div>
    </section>
  )
}
