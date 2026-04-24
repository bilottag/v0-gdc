"use client"

import { motion } from 'framer-motion'
import InquiryForm from './inquiry-form'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-foreground text-background">
      {/* Contact section */}
      <div className="px-6 md:px-[8vw] py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-sans text-xs tracking-[0.4em] uppercase text-background/50 mb-4"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl md:text-6xl font-light text-background leading-tight mb-8"
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
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-background/40">Contact</p>
            <p className="font-sans text-sm text-background/70">hello@giulianadesignco.com</p>
            <p className="font-sans text-sm text-background/70">(555) 821-4300</p>
          </div>

          <div className="grid grid-rows-[1.25rem_1.5rem_1.5rem] gap-3">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-background/40">Location</p>
            <p className="font-sans text-sm text-background/70">Austin, Texas</p>
            <p className="font-sans text-sm text-background/70">Serving Central Texas & Beyond</p>
          </div>

          <div className="grid grid-rows-[1.25rem_1.5rem_1.5rem] gap-3 md:text-right">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-background/40">Follow</p>
            <div className="flex gap-6 md:justify-end">
              <a href="#" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Instagram</a>
              <a href="#" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Pinterest</a>
              <a href="#" className="font-sans text-sm text-background/70 hover:text-background transition-colors">Houzz</a>
            </div>
            <div></div>
          </div>
        </div>

        {/* Oversized logo */}
        <div className="mt-16 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 0.15, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-[20vw] md:text-[15vw] font-light text-white leading-none tracking-tight whitespace-nowrap"
            style={{ marginBottom: '-2vw' }}
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
