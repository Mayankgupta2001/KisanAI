import type { Metadata } from 'next'
import MausamClient from './MausamClient'

export const metadata: Metadata = {
  title: 'मौसम सलाह — मौसम के हिसाब से खेती की सलाह',
  description:
    'मौसम के अनुसार बुवाई, सिंचाई और कटाई की सही सलाह। बारिश, सूखा, ओलावृष्टि से फसल बचाने के उपाय हिंदी में।',
}

export default function MausamSalahPage() {
  return <MausamClient />
}