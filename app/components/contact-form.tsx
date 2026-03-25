'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e?.target
    if (!target) return
    
    setFormData(prev => ({
      ...prev,
      [target?.name ?? '']: target?.value ?? ''
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    
    if (!formData?.name || !formData?.email || !formData?.phone) {
      toast.error('Por favor completa todos los campos requeridos')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response?.ok) {
        toast.success('¡Mensaje enviado! Te contactaremos pronto.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        toast.error('Hubo un error. Intenta nuevamente.')
      }
    } catch (error) {
      toast.error('Error de conexión. Verifica tu internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-2xl"
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Nombre Completo *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData?.name ?? ''}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
              placeholder="Juan Pérez"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData?.email ?? ''}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
              placeholder="juan@empresa.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Teléfono *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData?.phone ?? ''}
              onChange={handleChange}
              required
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
              placeholder="+52 123 456 7890"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#0A1F44] mb-2">
            Empresa
          </label>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="company"
              name="company"
              value={formData?.company ?? ''}
              onChange={handleChange}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all"
              placeholder="Tu Empresa S.A."
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-[#0A1F44] mb-2">
          Mensaje o Consulta
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <textarea
            id="message"
            name="message"
            value={formData?.message ?? ''}
            onChange={handleChange}
            rows={4}
            className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all resize-none"
            placeholder="Cuéntanos sobre tu proyecto o necesidades de importación..."
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF6B00] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#FF8533] transition-all hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Enviar Mensaje
          </>
        )}
      </button>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Al enviar este formulario, aceptas que Aduanex 360 use tus datos para contactarte.
      </p>
    </motion.form>
  )
}
