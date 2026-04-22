"use client"

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BeforeAfterSlider from './before-after-slider'

const BEFORE_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/fcf9a41b0_generated_0abbced9.png'
const AFTER_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/ada604251_generated_83f51ddf.png'
const KITCHEN_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/6adce29d4_generated_1bf5ccc2.png'
const TEXTURE_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/9815c0777_generated_4a6c43c4.png'
const DINING_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/fb421a4d8_generated_e204a7af.png'
const BATHROOM_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/9404fc9fa_generated_daee69a4.png'

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.6
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-section-neutral">
      {/* Section header */}
      <div className="px-6 md:px-[8vw] mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-lg font-bold tracking-[0.4em] uppercase text-muted-foreground mb-4"
        >
          The Spatial Chronicle
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-light text-foreground"
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Before/After transformation - Featured */}
      <div className="px-6 md:px-[8vw] mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <BeforeAfterSlider
              beforeImg={BEFORE_IMG}
              afterImg={AFTER_IMG}
              beforeAlt="Dated living room before staging"
              afterAlt="Beautifully staged living room after transformation"
            />
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="font-serif text-xl text-foreground">The Meridian Residence</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Home Staging · Living Room</p>
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Drag to reveal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BeforeAfterSlider
              beforeImg={KITCHEN_IMG}
              afterImg={DINING_IMG}
              beforeAlt="Kitchen before renovation"
              afterAlt="Kitchen after renovation"
            />
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="font-serif text-xl text-foreground">The Harper Kitchen</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">Interior Design · Kitchen</p>
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary">Drag to reveal</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gallery header with navigation */}
      <div className="px-6 md:px-[8vw] mb-8 flex items-center justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl md:text-3xl font-light text-foreground"
        >
          More Projects
        </motion.p>
        
        {/* Navigation arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex gap-3"
        >
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div 
        ref={scrollRef}
        onScroll={checkScrollability}
        className="overflow-x-auto horizontal-scroll"
      >
        <div className="flex gap-6 px-6 md:px-[8vw] pb-8" style={{ width: 'max-content' }}>
          {/* Kitchen panorama */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[85vw] md:w-[50vw] flex-shrink-0"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={KITCHEN_IMG}
                alt="Modern kitchen with marble countertops and warm wood cabinetry"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Harper Kitchen</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Interior Design · Kitchen</p>
            </div>
          </motion.div>

          {/* Texture close-up */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-[60vw] md:w-[28vw] flex-shrink-0 self-end"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={TEXTURE_IMG}
                alt="Close-up of sage green velvet armchair texture with marble table"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Material Study</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Velvet & Marble</p>
            </div>
          </motion.div>

          {/* Dining */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[85vw] md:w-[42vw] flex-shrink-0"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={DINING_IMG}
                alt="Spacious dining room with oak table and modern chandelier"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Ashwood Dining</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Home Staging · Dining Room</p>
            </div>
          </motion.div>

          {/* Bathroom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[70vw] md:w-[30vw] flex-shrink-0 self-start mt-12"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={BATHROOM_IMG}
                alt="Luxury bathroom with freestanding stone bathtub and warm wood vanity"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Stone Retreat</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Interior Design · Bathroom</p>
            </div>
          </motion.div>

          {/* End spacer */}
          <div className="w-[8vw] flex-shrink-0" />
        </div>
      </div>

      {/* Bottom navigation arrows */}
      <div className="px-6 md:px-[8vw] mt-8 flex justify-center">
        <div className="flex gap-3">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:text-background disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-foreground"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
