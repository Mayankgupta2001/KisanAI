import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, soilType, crop, ph, problem } = await req.json()

    const userMessage =
      query ||
      `मिट्टी का प्रकार: ${soilType || 'अज्ञात'}\nफसल: ${crop || 'अज्ञात'}\nPH: ${ph || 'अज्ञात'}\nसमस्या: ${problem || 'सामान्य सलाह'}`

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `आप KisanAI के "मिट्टी विशेषज्ञ" हैं।

नियम:
1. सरल हिंदी में जवाब दें
2. "🌱 मिट्टी सलाह:" से शुरू करें
3. मिट्टी की स्थिति के आधार पर:
   - उर्वरक की मात्रा (kg/एकड़ में)
   - रासायनिक उर्वरक: DAP, यूरिया, MOP, SSP
   - जैविक विकल्प: गोबर खाद, वर्मीकम्पोस्ट, हरी खाद
   - कब और कैसे डालें
4. PH सुधारने के उपाय बताएं
5. Soil Health Card के बारे में बताएं
6. खर्च कम करने के तरीके बताएं
7. Emojis: 🌱 💊 ⚗️ 🌿 💧 ✅
8. अंत में: "📞 KVK से मिट्टी जांच कराएं: 1800-180-1551"`,
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
    console.error('Mitti Salah API Error:', error)
    return NextResponse.json(
      { error: 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}