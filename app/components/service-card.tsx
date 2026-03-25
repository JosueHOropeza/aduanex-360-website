'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-gray-100 group"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-[#0A1F44] to-[#0D2A5C] rounded-lg flex items-center justify-center mb-4 text-white group-hover:from-[#FF6B00] group-hover:to-[#FF8533] transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0A1F44] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}
