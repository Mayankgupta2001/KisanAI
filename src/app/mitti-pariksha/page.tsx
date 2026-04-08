import type { Metadata } from 'next'
import MittiClient from './Mitticlient'

export const metadata: Metadata = {
  title: 'मिट्टी परीक्षा — सही उर्वरक, अच्छी फसल',
  description:
    'मिट्टी के प्रकार के अनुसार उर्वरक की सही मात्रा जानें। DAP, यूरिया, जैविक खाद — क्या कितना डालें। Soil Health Card की जानकारी हिंदी में।',
}

export default function MittiPariksha() {
  return <MittiClient />
}