import type { Metadata } from 'next'
import { Noto_Sans_Devanagari } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const noto = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'KisanAI — भारत का पहला मुफ़्त AI किसान सहायक',
    template: '%s | KisanAI',
  },
  description:
    'फसल की बीमारी, मंडी भाव, मौसम सलाह, सरकारी योजना — सब कुछ हिंदी में बिल्कुल मुफ़्त। 60 करोड़ किसानों का AI साथी।',
  keywords: [
    'किसान', 'farming', 'fasal doctor', 'kisan', 'AI', 'hindi', 'free',
    'mandi bhav', 'sarkari yojana', 'fasal bimari', 'mausam salah',
    'PM Kisan', 'krishi', 'agriculture India',
  ],
  authors: [{ name: 'KisanAI' }],
  creator: 'KisanAI',
  metadataBase: new URL('https://kisanai.vercel.app'),
  openGraph: {
    title: 'KisanAI — किसान का डिजिटल साथी',
    description: '60 करोड़ किसानों के लिए बनाया गया मुफ़्त AI असिस्टेंट',
    locale: 'hi_IN',
    type: 'website',
    siteName: 'KisanAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KisanAI — भारत का पहला AI किसान सहायक',
    description: 'हिंदी में बात करें, मुफ़्त में सलाह पाएं',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi" className={noto.variable}>
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-[#f7f9f7] min-h-screen">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}