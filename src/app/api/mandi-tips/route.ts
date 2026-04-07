import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { crop, quantity, location } = await req.json()
  
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `आप KisanAI के मंडी सलाहकार हैं।
- फसल बेचने की सही रणनीति बताएं
- MSP (Minimum Support Price) की जानकारी दें
- कब और कहाँ बेचें — eNAM, मंडी, FPO
- भंडारण की सलाह दें
- बिचौलियों से बचने के तरीके बताएं
- सरल हिंदी में प्रैक्टिकल टिप्स`
      },
      {
        role: 'user',
        content: `फसल: ${crop}\nमात्रा: ${quantity}\nस्थान: ${location}`
      }
    ],
    max_tokens: 1024,
  })
  
  return NextResponse.json({ 
    result: completion.choices[0].message.content 
  })
}