import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, crop, quantity, location } = await req.json()

    const userMessage =
      query ||
      `फसल: ${crop || 'अज्ञात'}\nमात्रा: ${quantity || 'अज्ञात'}\nस्थान: ${location || 'उत्तर भारत'}`

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `आप KisanAI के "मंडी सलाहकार" हैं।

आपको इनकी जानकारी है:
- MSP (Minimum Support Price) — 2024-25 के अनुसार
- eNAM (राष्ट्रीय कृषि बाजार)
- FPO (किसान उत्पादक संगठन)
- मंडी के नियम और APMC

नियम:
1. सरल हिंदी में जवाब दें
2. "📊 मंडी सलाह:" से शुरू करें
3. बताएं:
   - फसल का MSP कितना है (क्विंटल में)
   - वर्तमान अनुमानित बाजार भाव
   - कब बेचें — सीज़न के हिसाब से
   - कहाँ बेचें — मंडी, eNAM, FPO, सीधे खरीदार
   - भंडारण की सलाह (कब तक रखें)
   - बिचौलियों से कैसे बचें
4. किसान के फायदे की बात करें
5. Emojis: 📊 💰 🏪 🚛 📱 ✅
6. अंत में: "📞 eNAM हेल्पलाइन: 1800-270-0224"`,
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
    console.error('Mandi Tips API Error:', error)
    return NextResponse.json(
      { error: 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}