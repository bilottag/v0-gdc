"use client"

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowRight, Loader2 } from 'lucide-react'

interface InquiryFormProps {
  serviceType?: string
  variant?: 'light' | 'dark'
}

export default function InquiryForm({ serviceType = 'General', variant = 'light' }: InquiryFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email) {
      toast.error('Please provide your name and email.')
      return
    }
    setSending(true)
    // Simulate a brief delay for UX
    await new Promise(r => setTimeout(r, 1200))
    toast.success("Thank you! We'll be in touch within 24 hours.")
    setForm({ name: '', email: '', phone: '', message: '' })
    setSending(false)
  }

  const isDark = variant === 'dark'
  const inputClassName = isDark
    ? "bg-transparent border-0 border-b border-background/30 focus:border-background rounded-none px-0 py-3 font-sans text-sm text-background placeholder:text-background/50 focus-visible:ring-0 focus-visible:ring-offset-0"
    : "bg-transparent border-0 border-b border-border focus:border-primary rounded-none px-0 py-3 font-sans text-sm focus-visible:ring-0 focus-visible:ring-offset-0"

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          placeholder="Your Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClassName}
        />
        <Input
          type="email"
          placeholder="Email Address *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClassName}
        />
      </div>
      <Input
        type="tel"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className={inputClassName}
      />
      <Textarea
        placeholder={`Tell us about your ${serviceType === 'Home Staging' ? 'property' : 'space'}...`}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClassName} min-h-[120px] resize-none`}
      />
      <Button
        type="submit"
        disabled={sending}
        className={isDark 
          ? "bg-background text-foreground hover:bg-background/90 rounded-none font-sans text-xs font-semibold tracking-[0.2em] uppercase px-8 py-6 w-full md:w-auto"
          : "bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-sans text-xs font-semibold tracking-[0.2em] uppercase px-8 py-6 w-full md:w-auto"
        }
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
  )
}
