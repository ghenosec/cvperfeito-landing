import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'cvPERFEITO - Otimize seu Curriculo com IA para Passar em ATS',
  description:
    'Analise, corrija e otimize seu curriculo com inteligencia artificial. Aumente suas chances de passar pelos sistemas ATS e impressionar recrutadores.',
  keywords: [
    'curriculo',
    'ATS',
    'otimizacao',
    'IA',
    'emprego',
    'vaga',
    'recrutamento',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon32x32.png', type: 'image/png', sizes: '32x32' },
    ],
  },
  openGraph: {
    title: 'cvPERFEITO - Otimize seu Curriculo com IA',
    description:
      'Analise e otimize seu curriculo para passar em sistemas ATS e conseguir mais entrevistas.',
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
