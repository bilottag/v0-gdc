"use client"

import { useState, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import InquiryForm from './inquiry-form'

interface Feature {
  title: string
  desc: string
}

interface ServiceCardProps {
  title: ReactNode
  subtitle: string
  description: string
  expandedDescription?: string
  features: Feature[]
  image: string
  imageAlt: string
  flipped?: boolean
}

export default function ServiceCard({ title, subtitle, description, expandedDescription, features, image, imageAlt, flipped }: ServiceCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative group cursor-pointer"
        onClick={() => setExpanded(true)}
      >
        <div className="relative overflow-hidden aspect-[3/4] md:aspect-[2/3]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />

          <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 ${flipped ? 'text-right' : ''}`}>
            <p className="font-sans text-xl font-black tracking-[0.4em] uppercase text-white/60 mb-3">
              {subtitle}
            </p>
            <h3 className="text-5xl md:text-5xl font-thin text-white leading-tight mb-4" style={{ fontFamily: "'Corbel', 'Lucida Grande', sans-serif" }}>
              {title}
            </h3>
            <p className={`font-sans text-base text-white/70 max-w-sm leading-relaxed mb-6 ${flipped ? 'ml-auto' : ''}`}>
              {description}
            </p>
            <div className={`flex items-center gap-3 ${flipped ? 'justify-end' : ''}`}>
              <span className="font-sans text-sm tracking-[0.3em] uppercase text-white">
                Learn More
              </span>
              <ArrowRight size={14} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expanded detail view */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            <button
              onClick={() => setExpanded(false)}
              className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
            >
              <X size={20} />
            </button>

            <div className="min-h-screen flex flex-col lg:flex-row">
              {/* Image side */}
              <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[50vh] lg:h-full object-cover"
                />
              </div>

              {/* Content side */}
              <div className="lg:w-1/2 px-8 md:px-16 py-16 md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                    {subtitle}
                  </p>
                  <h2 className="text-5xl md:text-6xl font-light text-foreground leading-tight mb-8" style={{ fontFamily: "'Corbel', 'Lucida Grande', sans-serif", fontSize: '50px' }}>
                    {title}
                  </h2>
                  <div className="w-12 h-px bg-primary mb-8" />
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-12" style={{ fontSize: '20px' }}>
                    {expandedDescription ?? description}
                  </p>

                  <div className="space-y-4 mb-16">
                    {features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-4 py-4 border-b border-border"
                      >
                        <span className="font-serif text-2xl text-primary font-light" style={{ fontSize: '26px' }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <p className="font-sans text-sm font-medium text-foreground" style={{ fontSize: '16px', fontWeight: '600' }}>{feature.title}</p>
                          <p className="font-sans text-sm text-muted-foreground mt-1" style={{ fontSize: '15px' }}>{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Inquiry form */}
                  <div className="border-t border-border pt-12">
                    <h3 className="font-serif text-3xl font-light text-foreground mb-2">
                      Begin Your Transformation
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground mb-8" style={{ fontSize: '15px' }}>
                      Tell us about your space. We&apos;ll craft the perfect approach.
                    </p>
                    <InquiryForm serviceType={subtitle} />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
