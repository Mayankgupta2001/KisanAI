import type { Metadata } from 'next'
import MandiClient from './MandiClient'

export const metadata: Metadata = {
  title: 'मंडी भाव — आज के फसल के दाम और बेचने की सलाह',
  description:
    'आज के मंडी भाव जानें, MSP की जानकारी पाएं और सही समय पर फसल बेचने की AI सलाह लें। eNAM, FPO, मंडी — सब कुछ हिंदी में।',
}

export default function MandiBhavPage() {
  return <MandiClient />
}