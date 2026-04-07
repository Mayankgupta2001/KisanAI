import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kisanai.vercel.app'
  return [
    { url: base, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/fasal-doctor`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/mandi-bhav`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/mausam-salah`, changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/sarkari-yojana`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/mitti-pariksha`, changeFrequency: 'weekly', priority: 0.7 },
  ]
}