'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function StickyNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50)
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { href: '#servicios', label: 'Servicios' },
    { href: '#propuesta', label: 'Propuesta' },
    { href: '#nosotros', label: 'Nosotros' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1F44]/95 backdrop-blur-md shadow-lg py-3' : 'bg-[#0A1F44]/80 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative w-32 h-10 md:w-40 md:h-12 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Aduanex 360"
              fill
              className="object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="text-white hover:text-[#FF6B00] transition-colors font-medium"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-[#FF6B00] text-white px-6 py-2 rounded-lg hover:bg-[#FF8533] transition-all hover:scale-105 font-semibold shadow-lg"
            >
              Asesoría Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-[#FF6B00] transition-colors py-2"
              >
                {link?.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-[#FF6B00] text-white px-6 py-2 rounded-lg hover:bg-[#FF8533] transition-colors text-center font-semibold"
            >
              Asesoría Gratis
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
