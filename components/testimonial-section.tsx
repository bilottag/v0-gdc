"use client"

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Giuliana's team staged our home and it sold in 4 days — $47,000 over asking. The transformation was unbelievable.",
    author: "Sarah & Michael R.",
    context: "Home Staging · The Meridian Residence",
  },
  {
    quote: "We'd lived with the same tired rooms for a decade. Walking into our redesigned home felt like stepping into someone else's dream — except it was finally ours.",
    author: "Jennifer L.",
    context: "Interior Design · Whole-Home Refresh",
  },
  {
    quote: "Every detail was considered. Every texture had intention. This is design at the highest level.",
    author: "David & Anna K.",
    context: "Interior Design · Living & Dining",
  },
]

export default function TestimonialSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-[8vw] bg-section-cool">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-2xl tracking-[0.4em] uppercase text-muted-foreground mb-16 text-center font-semibold"
        >
          Words from Our Clients
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className={i === 1 ? 'md:mt-12' : ''}
            >
              <div className="w-8 h-px bg-primary mb-8" />
              <p className="font-serif text-2xl md:text-2xl font-light text-foreground leading-relaxed italic mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-sans text-sm font-medium text-foreground">{t.author}</p>
              <p className="font-sans text-xs text-muted-foreground mt-1">{t.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
