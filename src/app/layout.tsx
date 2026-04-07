import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KisanAI — भारत का पहला मुफ़्त AI किसान सहायक',
  description: 'फसल की बीमारी, मंडी भाव, मौसम सलाह, सरकारी योजना — सब कुछ हिंदी में बिल्कुल मुफ़्त',
  keywords: 'किसान, farming, fasal, kisan, AI, hindi, free, mandi bhav, sarkari yojana',
  openGraph: {
    title: 'KisanAI — किसान का डिजिटल साथी',
    description: '60 करोड़ किसानों के लिए बनाया गया मुफ़्त AI असिस्टेंट',
    locale: 'hi_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}