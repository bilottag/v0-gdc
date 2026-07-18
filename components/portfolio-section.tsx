"use client"

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import BeforeAfterSlider from './before-after-slider'

const BEFORE_IMG = '/portfolio/duchess-lucan-living-before.jpeg'
const AFTER_IMG = '/portfolio/duchess-lucan-living-after.jpg'
const KITCHEN_BEFORE_IMG = '/portfolio/ridgewood-kitchen-before.jpeg'
const KITCHEN_AFTER_IMG = '/portfolio/ridgewood-kitchen-after.jpeg'
// More Projects gallery images
const MODERN_KITCHEN_IMG = '/portfolio/project-modern-kitchen.jpeg'
const DINETTE_KITCHEN_IMG = '/portfolio/project-dinette-kitchen.jpeg'
const DINING_IMG = '/portfolio/project-dining.jpeg'
const SWALES_ENSUITE_IMG = '/portfolio/project-swales-ensuite.jpeg'
const SERENITY_ENSUITE_IMG = '/portfolio/project-serenity-ensuite.jpg'
const BRIGHT_LIVING_IMG = '/portfolio/project-bright-living.jpg'
const OFFICE_IMG = '/portfolio/project-office.jpeg'
const NURSERY_IMG = '/portfolio/project-nursery.jpeg'

const AUTOSCROLL_INTERVAL = 2000 // 2 seconds between scrolls
const SCROLL_AMOUNT_PERCENT = 0.4 // Scroll 40% of container width

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
              beforeAlt="Dated living room with brown leather furniture before staging"
              afterAlt="Bright, neutral living room after professional staging"
            />
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="font-serif text-xl text-foreground">Duchess Ave, Lucan</p>
                <p className="font-sans text-sm text-muted-foreground mt-1 max-w-xs text-pretty">We softened the space with warm greige walls, layered a chunky wool rug over the hardwood, and styled it with a crisp white loveseat, a leather sling chair, and a leafy tree — turning a cold, empty room into a cozy spot to gather by the wood stove.</p>
              </div>
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary">Drag Slider to reveal</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <BeforeAfterSlider
              beforeImg={KITCHEN_BEFORE_IMG}
              afterImg={KITCHEN_AFTER_IMG}
              beforeAlt="Dated kitchen with striped wallpaper and gold hardware before renovation"
              afterAlt="Bright modern white kitchen after renovation"
            />
            <div className="mt-4 flex justify-between items-end">
              <div>
                <p className="font-serif text-xl text-foreground">Ridgewood Cres, London</p>
                <p className="font-sans text-sm text-muted-foreground mt-1 max-w-xs text-pretty">A full refresh took this dated galley to bright and airy — crisp white shaker cabinets, quartz counters, a subway-tile backsplash, and stainless appliances, finished with a sunlit breakfast nook that makes the whole kitchen feel twice as big.</p>
              </div>
              <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-primary">Drag SLIDER to reveal</p>
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
          {/* Dinette Kitchen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[85vw] md:w-[50vw] flex-shrink-0"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={DINETTE_KITCHEN_IMG}
                alt="Open-concept kitchen and dinette with charcoal cabinetry, stainless appliances and a quartz island"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Where Mornings Begin</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">An open-concept kitchen and dinette dressed in moody charcoal cabinetry, ready to gather around.</p>
            </div>
          </motion.div>

          {/* Spacious Dining Room */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-[85vw] md:w-[42vw] flex-shrink-0"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={DINING_IMG}
                alt="Elegant dining room with a navy feature wall, glass-top table, cream chairs and a crystal chandelier"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Dinner Party Ready</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">A moody navy feature wall and glittering chandelier set the stage for unforgettable evenings.</p>
            </div>
          </motion.div>

          {/* Swales Ave Ensuite */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[70vw] md:w-[30vw] flex-shrink-0"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={SWALES_ENSUITE_IMG}
                alt="Contemporary ensuite with a gray double vanity, granite counter, black fixtures and marble-tiled shower"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">A Private Escape</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Swales Ave, Strathroy — matte black fixtures and marble tile turn this ensuite into a daily retreat.</p>
            </div>
          </motion.div>

          {/* Bright Living Room */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-[85vw] md:w-[45vw] flex-shrink-0"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={BRIGHT_LIVING_IMG}
                alt="Airy staged living room with plush white sofas, a brick gas fireplace and a large picture window"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Light Pours In</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Plush white sofas and a crackling brick fireplace make this sun-drenched living room impossible to leave.</p>
            </div>
          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-[85vw] md:w-[50vw] flex-shrink-0"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={OFFICE_IMG}
                alt="Modern flex living and office space with a gray sectional, wall-mounted TV and a dual-monitor desk"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Work Meets Unwind</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">A sleek dual-monitor setup shares the room with a cozy sectional and forest views beyond.</p>
            </div>
          </motion.div>

          {/* Modern Kitchen */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-[80vw] md:w-[40vw] flex-shrink-0"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={MODERN_KITCHEN_IMG}
                alt="Crisp white kitchen with a center island, upholstered bar stools, glass pendants and garden-door access"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">The Heart of the Home</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">A crisp white island, soft-glow pendants and garden doors invite everyone to linger a little longer.</p>
            </div>
          </motion.div>

          {/* Nursery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-[65vw] md:w-[28vw] flex-shrink-0"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={NURSERY_IMG}
                alt="Cozy nursery with a navy accent wall, white wainscoting, a white crib and a cream glider"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Sweet Dreams Await</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Deep navy walls and crisp white wainscoting wrap this little nursery in warmth and calm.</p>
            </div>
          </motion.div>

          {/* Serenity Ensuite */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-[70vw] md:w-[32vw] flex-shrink-0"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={SERENITY_ENSUITE_IMG}
                alt="Spa-like ensuite with marble subway tile, a double white shaker vanity, chrome fixtures and a glass shower"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="mt-4">
              <p className="font-serif text-xl text-foreground">Spa Days, Every Day</p>
              <p className="font-sans text-sm text-muted-foreground mt-1">Marble subway tile and a double shaker vanity bring quiet, hotel-worthy luxury home.</p>
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
