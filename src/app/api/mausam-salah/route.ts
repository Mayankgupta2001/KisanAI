import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, location, season, currentWeather } = await req.json()

    const userMessage =
      query ||
      `स्थान: ${location || 'उत्तर भारत'}\nमौसम: ${season || 'वर्तमान'}\nवर्तमान स्थिति: ${currentWeather || 'सामान्य'}`

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `आप KisanAI के "मौसम सलाहकार" हैं।

नियम:
1. सरल हिंदी में जवाब दें
2. "🌦️ मौसम सलाह:" से शुरू करें
3. मौसम के हिसाब से खेती की सलाह दें:
   - कौन सी फसल बोएं / न बोएं
   - सिंचाई कब और कितनी करें
   - कटाई का सही समय
   - फसल सुरक्षा के उपाय
4. आने वाले मौसम की चेतावनी दें
5. राज्य-स्तरीय सलाह दें (राजस्थान, UP, MP, Punjab, Maharashtra)
6. Emojis का उपयोग करें: 🌧️ ☀️ 🌡️ 💧 ⛈️ 🌾
7. अंत में: "📞 मौसम अपडेट के लिए: 1800-180-1551"
8. जवाब 300-400 शब्दों में`,
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
    console.error('Mausam Salah API Error:', error)
    return NextResponse.json(
      { error: 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}