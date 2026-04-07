import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { state, landSize, crops, category } = await req.json()
  
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `आप KisanAI के सरकारी योजना विशेषज्ञ हैं।
- PM-KISAN, PMFBY, PMKSY, KCC, eNAM जैसी योजनाओं की जानकारी दें
- पात्रता, लाभ, आवेदन प्रक्रिया हिंदी में बताएं
- राज्य-स्तरीय योजनाएं भी बताएं
- आवेदन के लिए जरूरी दस्तावेज बताएं
- Helpline numbers और websites बताएं`
      },
      {
        role: 'user',
        content: `राज्य: ${state}\nजमीन: ${landSize}\nफसल: ${crops}\nश्रेणी: ${category}`
      }
    ],
    max_tokens: 1024,
  })
  
  return NextResponse.json({ 
    result: completion.choices[0].message.content 
  })
}