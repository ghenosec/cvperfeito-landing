import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'cvPERFEITO - Otimize seu Currículo com IA para Passar em ATS',
  description: 'Análise, corrija e otimize seu currículo com inteligência artificial. Aumente suas chances de passar pelos sistemas ATS e impressionar recrutadores.',
  keywords: ['currículo', 'ATS', 'otimização', 'IA', 'emprego', 'vaga', 'recrutamento'],
  openGraph: {
    title: 'cvPERFEITO - Otimize seu Currículo com IA',
    description: 'Analise e otimize seu currículo para passar em sistemas ATS e conseguir mais entrevistas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
