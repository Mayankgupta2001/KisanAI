import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { location, season, currentWeather } = await req.json()
  
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `आप KisanAI के मौसम सलाहकार हैं।
- सरल हिंदी में मौसम के अनुसार खेती की सलाह दें
- बुवाई, सिंचाई, कटाई का सही समय बताएं
- आने वाले मौसम की चेतावनी दें
- फसल बचाने के उपाय बताएं
- Regional context रखें (राजस्थान, UP, MP, Punjab आदि)`
      },
      {
        role: 'user',
        content: `स्थान: ${location}\nमौसम: ${season}\nवर्तमान मौसम: ${currentWeather}`
      }
    ],
    max_tokens: 1024,
  })
  
  return NextResponse.json({ 
    result: completion.choices[0].message.content 
  })
}