import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { symptoms, crop } = await req.json()
  
  const completion = await groq.chat.completions.create({
    model: MODEL,
    messages: [
      {
        role: 'system',
        content: `आप KisanAI के फसल डॉक्टर हैं। आप एक अनुभवी कृषि विशेषज्ञ हैं।
नियम:
- हमेशा सरल हिंदी में जवाब दें जो अनपढ़ किसान भी समझ सके
- पहले बीमारी का नाम बताएं
- फिर 3-4 practical उपाय बताएं जो घर पर कर सकें
- सरकारी योजनाओं का उल्लेख करें जहाँ लागू हो
- अंत में हमेशा: "अधिक जानकारी के लिए अपने नजदीकी कृषि केंद्र से मिलें"
- Bullet points और emojis का उपयोग करें
- दवाओं के नाम हिंदी में लिखें`
      },
      {
        role: 'user',
        content: `फसल: ${crop}\nलक्षण: ${symptoms}`
      }
    ],
    max_tokens: 1024,
    temperature: 0.7,
  })
  
  return NextResponse.json({ 
    result: completion.choices[0].message.content 
  })
}