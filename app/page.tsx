import Image from 'next/image'
import { Ship, Plane, Building2, Search, Globe, Users, TrendingUp, Shield, DollarSign, Zap } from 'lucide-react'
import ContactForm from './components/contact-form'
import StickyNav from './components/sticky-nav'
import ServiceCard from './components/service-card'
import ValueCard from './components/value-card'
import HeroSection from './components/hero-section'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <StickyNav />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* What We Do Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">¿Qué Hacemos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un enfoque <span className="text-[#FF6B00] font-semibold">360°</span> en logística internacional con
              seguridad, eficiencia y transparencia en cada etapa.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Ship className="w-8 h-8" />}
              title="Logística Inteligente"
              description="Importación marítima (CBM Consolidado y Contenedor) y servicio aéreo China - México con las mejores tarifas del mercado."
            />
            
            <ServiceCard
              icon={<Building2 className="w-8 h-8" />}
              title="Comercializadora Propia"
              description="Importa de China y USA sin necesidad de contar con padrón de importadores. Nosotros nos encargamos de todo."
            />
            
            <ServiceCard
              icon={<Search className="w-8 h-8" />}
              title="Abastecimiento Estratégico"
              description="Búsqueda, validación de proveedores confiables y localización de productos competitivos en China."
            />
            
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Gestión USA-México"
              description="Recepción de mercancía en bodega de Estados Unidos y envío directo a domicilio en México."
            />
            
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Asesoría Especializada"
              description="Acompañamiento experto en procesos de comercio exterior y gestión de pagos internacionales."
            />
            
            <ServiceCard
              icon={<Plane className="w-8 h-8" />}
              title="Soluciones Express"
              description="Envíos aéreos urgentes con seguimiento en tiempo real para tus necesidades más importantes y urgentes."
            />
          </div>
        </div>
      </section>
      
      {/* Value Proposition Section */}
      <section id="propuesta" className="py-20 bg-[#0A1F44] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestra Propuesta de Valor</h2>
            <p className="text-2xl text-[#FF6B00] font-semibold mb-6">
              Tu puente estratégico entre Asia, México y Estados Unidos
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En Aduanex 360 no solo movemos mercancía; <span className="text-white font-semibold">conectamos tu visión con fabricantes globales</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon={<TrendingUp className="w-10 h-10" />}
              title="Crecimiento Garantizado"
              description="Impulsamos tu negocio con soluciones logísticas que se adaptan a tu ritmo de expansión."
            />
            
            <ValueCard
              icon={<Shield className="w-10 h-10" />}
              title="Seguridad Total"
              description="Protegemos cada envío con seguimiento 24/7 y seguros de carga internacional."
            />
            
            <ValueCard
              icon={<DollarSign className="w-10 h-10" />}
              title="Optimización de Costos"
              description="Reducimos tus gastos logísticos hasta un 30% con nuestras rutas consolidadas."
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de <span className="text-[#FF6B00] font-bold">10 años</span> de experiencia conectando mercados internacionales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Red Global de Contactos</h3>
                  <p className="text-gray-600">
                    Conexiones directas con fabricantes en China y centros de distribución en USA, garantizando las mejores condiciones.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Optimización de Costos</h3>
                  <p className="text-gray-600">
                    Consolidamos embarques, negociamos tarifas preferenciales y eliminamos intermediarios innecesarios.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Eliminación de Barreras</h3>
                  <p className="text-gray-600">
                    Gestionamos todos los trámites aduanales, permisos y documentación para que tú te enfoques en vender.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A1F44] mb-2">Enfoque en tu Crecimiento</h3>
                  <p className="text-gray-600">
                    Escalamos contigo: desde tu primera importación hasta operaciones de contenedores completos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">¡Contáctanos Hoy!</h2>
            <p className="text-xl text-gray-600">
              Obtén una <span className="text-[#FF6B00] font-semibold">asesoría gratuita</span> y descubre cómo podemos impulsar tu negocio
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="relative w-48 h-16 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Aduanex 360"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300">
                Conectando Mercados, Impulsando tu Crecimiento
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#servicios" className="text-gray-300 hover:text-[#FF6B00] transition-colors">Servicios</a></li>
                <li><a href="#nosotros" className="text-gray-300 hover:text-[#FF6B00] transition-colors">Nosotros</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-[#FF6B00] transition-colors">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Síguenos</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6B00] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Aduanex 360. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
