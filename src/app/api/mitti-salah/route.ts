import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { soilType, crop, ph, problem } = await req.json()
  
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `आप KisanAI के मिट्टी विशेषज्ञ हैं।
- मिट्टी की जांच के आधार पर सलाह दें
- उर्वरक की मात्रा एकड़ में बताएं
- जैविक और रासायनिक दोनों विकल्प दें
- Soil Health Card की जानकारी दें
- खर्च कम करने के तरीके बताएं`
      },
      {
        role: 'user',
        content: `मिट्टी का प्रकार: ${soilType}\nफसल: ${crop}\nPH: ${ph}\nसमस्या: ${problem}`
      }
    ],
    max_tokens: 1024,
  })
  
  return NextResponse.json({ 
    result: completion.choices[0].message.content 
  })
}