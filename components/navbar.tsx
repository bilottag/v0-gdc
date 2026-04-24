"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    // Small delay to allow mobile menu to close before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const links = [
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-neutral-300/95 backdrop-blur-xl border-b border-border/50'
          : 'bg-neutral-400/80 backdrop-blur-[3px]'
      }`}
    >
      <div className={`flex items-center justify-between px-6 md:px-12 relative overflow-visible transition-all duration-500 ${
        scrolled ? 'py-12' : 'py-24'
      }`}>
        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-corbel text-xl font-bold tracking-widest uppercase transition-all duration-300 ${
                scrolled 
                  ? 'text-muted-foreground hover:text-foreground hover:scale-105' 
                  : 'text-white hover:text-amber-200 hover:scale-105'
              }`}
              style={{ textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Centered logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className={`absolute left-1/2 -translate-x-1/2 transition-all duration-500 ${
            scrolled ? 'top-1/2 -translate-y-1/2' : 'top-1/2 -translate-y-1/2'
          }`}
        >
          <Image 
            src="/images/logo.png"
            alt="Giuliana Design Co." 
            width={256}
            height={256}
            className={`h-auto transition-all duration-500 ${
              scrolled ? 'w-32 md:w-40' : 'w-48 md:w-64'
            }`}
            priority
          />
        </button>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollTo('contact')}
            className={`font-corbel text-xl font-bold tracking-widest uppercase border px-6 py-2.5 transition-all duration-300 ${
              scrolled 
                ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105'
                : 'border-white text-white hover:bg-amber-200 hover:border-amber-200 hover:text-foreground hover:scale-105'
            }`}
            style={{ textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)' }}
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="font-sans text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="font-sans text-sm tracking-widest uppercase border border-primary text-primary px-6 py-2.5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Inquire
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
