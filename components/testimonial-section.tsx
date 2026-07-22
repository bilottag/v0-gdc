"use client"

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "Giuliana is lovely to work with and definitely has an eye for design. She transformed our house into a beautiful, trendy home. We highly recommend Giuliana Design Co.",
    author: "A.J.M.- ",
    context: "Home Staging Client",
  },
  {
    quote: "Giuliana updated our tired, drab living area to something modern, bright and functional. She has an eye for color and style and was able to stay within our budget. We could not be happier!",
    author: "G.B.",
    context: "Interior Design Client · Whole-Home Refresh",
  },
  {
    quote: "As a Realtor, I need listings to make a lasting first impression, and Giuliana consistently delivers. Her attention to detail and thoughtful staging makes every home stand out. I would not use anyone else",
    author: "B.B.H, Realtor",
    context: "Interior Design & Home Staging Client",
  },
]

export default function TestimonialSection() {
  return (
    <section className="relative py-12 md:py-16 px-6 md:px-[8vw] bg-section-cool">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-candara text-2xl font-semibold tracking-[0.4em] uppercase text-muted-foreground mb-16 text-center"
          style={{ fontSize: '24px', fontWeight: '600' }}
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
              <p className="font-serif font-light text-foreground leading-relaxed italic mb-8 text-xl" style={{ fontSize: '22px' }}>
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
