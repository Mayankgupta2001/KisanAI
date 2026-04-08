import { groq, MODEL } from '@/lib/groq'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, state, landSize, crops, category } = await req.json()

    const userMessage =
      query ||
      `राज्य: ${state || 'भारत'}\nजमीन: ${landSize || 'छोटे किसान'}\nफसल: ${crops || 'मिश्रित'}\nश्रेणी: ${category || 'सामान्य'}`

    const completion = await groq.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: 'system',
          content: `आप KisanAI के "सरकारी योजना विशेषज्ञ" हैं।

आपको इन प्रमुख योजनाओं की पूरी जानकारी है:
- PM-KISAN: ₹6000/साल, 3 किस्त में
- PMFBY: फसल बीमा, कम प्रीमियम
- PMKSY: सिंचाई पर सब्सिडी
- KCC: किसान क्रेडिट कार्ड, 4% ब्याज
- eNAM: डिजिटल मंडी
- Soil Health Card: मिट्टी जांच
- RKVY: कृषि विकास योजना
- MIDH: बागवानी योजना
- NFSM: खाद्य सुरक्षा मिशन
- राज्य-स्तरीय योजनाएं

नियम:
1. सरल हिंदी में जवाब दें
2. "📋 सरकारी योजना सलाह:" से शुरू करें
3. किसान की स्थिति के अनुसार TOP 3-4 योजनाएं बताएं
4. हर योजना के लिए:
   - लाभ (rupees में)
   - पात्रता
   - आवेदन कैसे करें
   - जरूरी दस्तावेज
   - Helpline/Website
5. Emojis: 🏛️ 💰 📄 ✅ 🌿
6. अंत में: "📞 PM Kisan Helpline: 155261"`,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      max_tokens: 1200,
      temperature: 0.7,
    })

    return NextResponse.json({
      result: completion.choices[0].message.content,
    })
  } catch (error) {
    console.error('Yojana Finder API Error:', error)
    return NextResponse.json(
      { error: 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।' },
      { status: 500 }
    )
  }
}