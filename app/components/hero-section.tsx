'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef?.current
    if (!canvas) return

    const ctx = canvas?.getContext?.('2d')
    if (!ctx) return

    canvas.width = canvas?.offsetWidth ?? 0
    canvas.height = canvas?.offsetHeight ?? 0

    // Draw connection lines
    const drawConnections = () => {
      ctx.strokeStyle = 'rgba(255, 107, 0, 0.2)'
      ctx.lineWidth = 2
      
      const points = [
        { x: canvas.width * 0.2, y: canvas.height * 0.5 }, // China
        { x: canvas.width * 0.5, y: canvas.height * 0.6 }, // Mexico
        { x: canvas.width * 0.7, y: canvas.height * 0.4 }, // USA
      ]

      // Draw lines
      points?.forEach?.((point, i) => {
        const nextPoint = points?.[(i + 1) % points?.length]
        if (nextPoint) {
          ctx.beginPath()
          ctx.moveTo(point?.x ?? 0, point?.y ?? 0)
          ctx.lineTo(nextPoint?.x ?? 0, nextPoint?.y ?? 0)
          ctx.stroke()
        }
      })

      // Draw points
      ctx.fillStyle = '#FF6B00'
      points?.forEach?.(point => {
        ctx.beginPath()
        ctx.arc(point?.x ?? 0, point?.y ?? 0, 8, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    drawConnections()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A1F44] via-[#0D2A5C] to-[#0A1F44] pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Canvas for connections */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* World Map Background */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/world-map.png"
          alt="World Map"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-64 h-32 mx-auto mb-8">
            <Image
              src="/images/logo.png"
              alt="Aduanex 360"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Conectando Mercados,<br />
          <span className="text-[#FF6B00]">Impulsando tu Crecimiento</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 text-3xl md:text-4xl mb-8"
        >
          <span>🚢</span>
          <span>✈️</span>
          <span>🇲🇽</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200"
        >
          Soluciones integrales de comercio internacional, facilitando la importación desde <span className="font-semibold text-white">China</span> hacia <span className="font-semibold text-white">México</span> y
          la logística estratégica hacia <span className="font-semibold text-white">Estados Unidos</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="bg-[#FF6B00] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#FF8533] transition-all hover:scale-105 shadow-2xl"
          >
            Solicita tu Asesoría Gratuita
          </a>
          <a
            href="#servicios"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all border border-white/30"
          >
            Conoce Nuestros Servicios
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
