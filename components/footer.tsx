"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Facebook, Linkedin } from 'lucide-react'
import InquiryForm from './inquiry-form'

export default function Footer() {
  const gdcRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: gdcRef,
    offset: ["start end", "end start"]
  })
  
  // Start at 50% down (half-obscured), move up to 25% (quarter-obscured)
  // Using percentage of the element height via CSS transform
  const gdcY = useTransform(scrollYProgress, [0, 0.7], ["50%", "25%"])

  return (
    <footer id="contact" className="relative bg-foreground text-background">
      {/* Contact section */}
      <div className="px-6 md:px-[8vw] py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-lg font-semibold tracking-[0.4em] uppercase text-background/50 mb-4"
              style={{ fontSize: '24px' }}
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-light text-background leading-tight mb-8"
              style={{ fontSize: '56px', fontWeight: '100' }}
            >
              Let&apos;s Create
              <br />
              Something <em className="italic">Beautiful</em>
            </motion.h2>
            <div className="w-12 h-px bg-background/30 mb-8" />
            <p className="font-sans text-base text-background/60 leading-relaxed max-w-md">
              Whether you&apos;re selling or staying, every great space begins with a conversation. 
              Tell us about your vision and we&apos;ll bring it to life.
            </p>
          </div>

          <div>
            <InquiryForm serviceType="General" variant="dark" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 px-6 md:px-[8vw] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Contact details */}
          <div className="grid grid-rows-[1.25rem_1.5rem_1.5rem] gap-3">
            <p className="font-sans text-base tracking-[0.3em] uppercase text-background/40">Contact</p>
            <p className="font-sans text-base text-background/70">GiulianaDesignCo@gmail.com</p>
            <p className="font-sans text-base text-background/70">(519) 859-0318</p>
          </div>

          <div className="grid grid-rows-[1.25rem_1.5rem_1.5rem] gap-3">
            <p className="font-sans text-base tracking-[0.3em] uppercase text-background/40">Location</p>
            <p className="font-sans text-base text-background/70">London, Ontario</p>
            <p className="font-sans text-sm text-background/70">Serving Southwestern Ontario & Beyond</p>
          </div>

          <div className="grid grid-rows-[1.25rem_1.5rem_1.5rem] gap-3 md:justify-self-end">
            <p className="font-sans text-base uppercase tracking-[0.3em] text-background/40">Follow</p>
            <div className="flex gap-6">
              <a href="#" className="text-background/70 hover:text-background transition-colors text-lg" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors text-lg" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors text-lg" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div></div>
          </div>
        </div>

        {/* Oversized logo */}
        <div ref={gdcRef} className="mt-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.15 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ y: gdcY, marginBottom: '-2vw' }}
            className="font-serif text-[20vw] md:text-[15vw] font-light text-white leading-none tracking-tight whitespace-nowrap"
          >
            GDC
          </motion.p>
        </div>

        <div className="border-t border-background/10 pt-6 mt-6">
          <p className="font-sans text-xs text-background/30">
            © {new Date().getFullYear()} Giuliana Design Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
