"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import BeforeAfterSlider from './before-after-slider'

const BEFORE_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/fcf9a41b0_generated_0abbced9.png'
const AFTER_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/ada604251_generated_83f51ddf.png'
const KITCHEN_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/6adce29d4_generated_1bf5ccc2.png'
const TEXTURE_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/9815c0777_generated_4a6c43c4.png'
const DINING_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/fb421a4d8_generated_e204a7af.png'
const BATHROOM_IMG = 'https://media.base44.com/images/public/69e82ef649477a9950ef6c22/9404fc9fa_generated_daee69a4.png'

// Additional project images
const LIVING_ROOM_IMG = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80'
const BEDROOM_IMG = 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80'
const OFFICE_IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
const PATIO_IMG = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80'
const ENTRYWAY_IMG = 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'

const AUTOSCROLL_INTERVAL = 2000 // 2 seconds between scrolls
const SCROLL_AMOUNT_PERCENT = 0.35 // Scroll 35% of container width

export default function PortfolioSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const autoScroll = useCallback(() => {
    if (scrollRef.current && !isPaused) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 10

      if (isAtEnd) {
        // Reset to beginning smoothly
        scrollRef.current.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      } else {
        // Scroll forward
        const scrollAmount = scrollRef.current.clientWidth * SCROLL_AMOUNT_PERCENT
        scrollRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        })
      }
    }
  }, [isPaused])

  useEffect(() => {
    checkScrollability()
    window.addEventListener('resize', checkScrollability)
    return () => window.removeEventListener('resize', checkScrollability)
  }, [])

  // Autoscroll effect
  useEffect(() => {
    if (isAutoScrolling && !isPaused) {
      autoScrollIntervalRef.current = setInterval(autoScroll, AUTOSCROLL_INTERVAL)
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
      }
    }
  }, [isAutoScrolling, isPaused, autoScroll])

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
    if (isAutoScrolling) {
      setIsPaused(true)
    } else {
      setIsPaused(false)
    }
  }

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
    <section id="portfolio" className="relative py-12 md:py-16 bg-section-neutral">
      {/* Section header */}
      <div className="px-6 md:px-[4vw] mb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-xl tracking-[0.4em] uppercase text-muted-foreground mb-4"
          style={{ fontSize: '20px', fontWeight: '600' }}
        >
          The Spatial Chronicle
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl md:text-[56px] font-semibold italic text-foreground"
          style={{ fontSize: '50px', fontWeight: '400' }}
        >
          Selected Works
        </motion.h2>
      </div>

      {/* Before/After transformation - Featured */}
      <div className="px-6 md:px-[4vw] mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
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
      <div className="px-6 md:px-[4vw] mb-8 flex items-center justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-3xl md:text-5xl font-light italic text-foreground"
        >
          More Projects
        </motion.p>

        {/* Navigation arrows and autoscroll toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex gap-3 items-center"
        >
          <button
            onClick={toggleAutoScroll}
            className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 ${isAutoScrolling
              ? 'border-primary bg-primary/10 text-primary hover:bg-primary hover:text-background'
              : 'border-foreground/20 hover:bg-foreground hover:text-background'
              }`}
            aria-label={isAutoScrolling ? 'Pause autoscroll' : 'Play autoscroll'}
          >
            {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="overflow-x-auto horizontal-scroll"
      >
        <div className="flex gap-6 pl-6 md:pl-[4vw] pr-6 md:pr-[8vw] pb-8" style={{ width: 'max-content' }}>
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
            className="w-[60vw] md:w-[28vw] flex-shrink-0"
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
            className="w-[70vw] md:w-[30vw] flex-shrink-0"
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

          {/* Living Room */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[85vw] md:w-[45vw] flex-shrink-0"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={LIVING_ROOM_IMG}
                alt="Modern living room with natural light and contemporary furniture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Horizon Lounge</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Home Staging · Living Room</p>
            </div>
          </motion.div>

          {/* Bedroom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[75vw] md:w-[35vw] flex-shrink-0"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={BEDROOM_IMG}
                alt="Serene bedroom with minimalist design and soft textiles"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Serenity Suite</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Interior Design · Bedroom</p>
            </div>
          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[80vw] md:w-[40vw] flex-shrink-0"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={OFFICE_IMG}
                alt="Elegant home office with natural wood desk and curated decor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Executive Study</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Home Staging · Office</p>
            </div>
          </motion.div>

          {/* Patio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-[70vw] md:w-[32vw] flex-shrink-0"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={PATIO_IMG}
                alt="Luxurious outdoor patio with comfortable seating and greenery"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Garden Terrace</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Interior Design · Outdoor</p>
            </div>
          </motion.div>

          {/* Entryway */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-[65vw] md:w-[28vw] flex-shrink-0"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={ENTRYWAY_IMG}
                alt="Grand entryway with statement lighting and elegant finishes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Grand Entry</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Home Staging · Entryway</p>
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
