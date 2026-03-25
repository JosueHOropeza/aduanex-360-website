import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL ?? 'https://aduanex360.com'),
  title: 'Aduanex 360 | Logística Internacional China - México - USA',
  description: 'Soluciones integrales de comercio internacional. Facilitamos la importación desde China hacia México y logística estratégica hacia Estados Unidos.',
  keywords: 'logística internacional, importación China México, comercio exterior, transporte marítimo, transporte aéreo',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Aduanex 360 | Logística Internacional',
    description: 'Tu puente estratégico entre Asia, México y Estados Unidos',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-center" />
        <a
          href="https://wa.me/527712409129?text=Hola%20Aduanex%20360,%20me%20interesa%20una%20cotización."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#25D366",
            color: "white",
            padding: "12px 18px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000
          }}
        >
          💬 WhatsApp
        </a>
      </body>
    </html>
  )
}