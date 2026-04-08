import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, crop, symptoms } = await req.json()

    const userMessage = query || `फसल: ${crop || 'अज्ञात'}\nलक्षण: ${symptoms || ''}`

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `आप KisanAI के "फसल डॉक्टर" हैं — एक अनुभवी कृषि विशेषज्ञ जो भारतीय किसानों की मदद करते हैं।

नियम:
1. हमेशा सरल हिंदी में जवाब दें — जो कोई भी किसान समझ सके
2. जवाब की शुरुआत "🌾 नमस्ते किसान भाई!" से करें
3. पहले बीमारी/समस्या का नाम बताएं
4. फिर 3-4 कारण बताएं
5. 3-4 व्यावहारिक उपाय बताएं — जो घर पर किए जा सकें
6. रासायनिक और जैविक दोनों उपाय दें
7. दवाइयों के नाम और मात्रा बताएं (एकड़/बीघा में)
8. संबंधित सरकारी योजना का उल्लेख करें
9. अंत में लिखें: "📞 अधिक जानकारी: किसान कॉल सेंटर 1800-180-1551"
10. Emojis का उपयोग करें — ✅ ⚠️ 💊 🌿 💧 आदि
11. जवाब 300-400 शब्दों में रखें`,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      max_tokens: 1024,
      temperature: 0.7,
    })

    return NextResponse.json({
      result: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('Fasal Doctor API Error:', error)
    return NextResponse.json(
      { error: 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}