"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const REALTOR_IMG = '/images/realtors-family-room.jpeg'

export default function RealtorsSection() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', firm: '' })
  const [sending, setSending] = useState(false)

  useEffect(() => {
    const handleOpen = () => setOpen(true)
    window.addEventListener('open-realtors', handleOpen)
    return () => window.removeEventListener('open-realtors', handleOpen)
  }, [])

  const inputClassName =
    "bg-transparent border-0 border-b border-border focus:border-primary rounded-none px-0 py-3 font-sans text-sm focus-visible:ring-0 focus-visible:ring-offset-0"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please provide your name, email, and phone number.')
      return
    }
    setSending(true)

    const subject = `Realtor Loyalty Member Club Inquiry from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Realty/Brokerage Firm: ${form.firm || 'N/A'}`,
    ].join('\n')

    const mailtoUrl = `mailto:GiulianaDesignCo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl

    toast.success('Opening your email app to send the inquiry...')
    setForm({ name: '', email: '', phone: '', firm: '' })
    setSending(false)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
        >
          <button
            onClick={() => setOpen(false)}
            className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Image side */}
            <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
              <img
                src={REALTOR_IMG}
                alt="Beautifully staged interior for realtor listings"
                className="w-full h-[50vh] lg:h-full object-cover"
              />
            </div>

            {/* Content side */}
            <div className="lg:w-1/2 px-8 md:px-16 py-16 md:py-24 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="w-full"
              >
                <p className="font-sans text-xs tracking-[0.4em] uppercase text-muted-foreground mb-4" style={{ fontSize: '20px', fontWeight: '600' }}>
                  Realtors
                </p>
                <h2 className="text-4xl md:text-5xl font-light text-foreground leading-tight mb-4" style={{ fontFamily: "'Corbel', 'Lucida Grande', sans-serif" }}>
                  Join our Realtor Loyalty Member Club
                </h2>
                <div className="w-12 h-px bg-primary mb-6" />
                <p className="font-sans text-sm text-muted-foreground mb-10" style={{ fontSize: '15px' }}>
                  Sign Up Below for Special Realtor Offers and Discounts
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Input
                      placeholder="Name *"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClassName}
                    />
                    <Input
                      type="email"
                      placeholder="E-mail Address *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClassName}
                    />
                  </div>
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClassName}
                  />
                  <Input
                    placeholder="Realty/Brokerage Firm"
                    value={form.firm}
                    onChange={(e) => setForm({ ...form, firm: e.target.value })}
                    className={inputClassName}
                  />
                  <p className="text-xs text-muted-foreground">* Required Information</p>
                  <Button
                    type="submit"
                    disabled={sending}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-sans text-xs font-semibold tracking-[0.2em] uppercase px-8 py-6 w-full md:w-auto"
                    style={{ fontSize: '14px' }}
                  >
                    {sending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight size={14} className="ml-3" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
