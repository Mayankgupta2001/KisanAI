import type { Metadata } from 'next'
import YojanaClient from './YojanaClient'

export const metadata: Metadata = {
  title: 'सरकारी योजना — PM Kisan, PMFBY व सभी किसान योजनाएं',
  description:
    'किसानों के लिए सभी सरकारी योजनाएं — PM-KISAN ₹6000, PMFBY फसल बीमा, KCC किसान क्रेडिट कार्ड। पात्रता और आवेदन हिंदी में जानें।',
}

export default function SarkariYojanaPage() {
  return <YojanaClient />
}