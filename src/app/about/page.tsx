import type { Metadata } from 'next'
import Link from 'next/link'
import HelplineBar from '@/components/HelplineBar'

export const metadata: Metadata = {
  title: 'हमारे बारे में — KisanAI क्या है?',
  description:
    'KisanAI भारत का पहला मुफ़्त AI किसान सहायक है। जानें यह कैसे काम करता है, इसे किसने बनाया और यह किसानों की कैसे मदद करता है।',
}

const team = [
  {
    emoji: '🤖',
    title: 'AI Technology',
    desc: 'Groq API पर चलने वाला llama-3.3-70b-versatile मॉडल — दुनिया का सबसे तेज AI',
  },
  {
    emoji: '🇮🇳',
    title: 'Made in India',
    desc: 'भारतीय किसानों की जरूरतों को समझकर बनाया गया — हिंदी पहले',
  },
  {
    emoji: '🔒',
    title: 'Privacy First',
    desc: 'आपकी कोई भी जानकारी सेव नहीं होती। बातचीत पूरी तरह प्राइवेट।',
  },
  {
    emoji: '📱',
    title: 'Mobile First',
    desc: 'किसान मोबाइल से चलाते हैं — इसीलिए हमने मोबाइल के लिए बनाया',
  },
]

const features = [
  { icon: '🌿', title: 'फसल डॉक्टर', desc: '500+ बीमारियों की पहचान और उपाय' },
  { icon: '📊', title: 'मंडी भाव', desc: 'MSP जानकारी और बेचने की रणनीति' },
  { icon: '🌦️', title: 'मौसम सलाह', desc: 'मौसम के हिसाब से खेती की सलाह' },
  { icon: '📋', title: 'सरकारी योजना', desc: '50+ केंद्र और राज्य योजनाएं' },
  { icon: '🌱', title: 'मिट्टी परीक्षा', desc: 'सही उर्वरक, सही मात्रा' },
  { icon: '🆓', title: 'बिल्कुल मुफ़्त', desc: 'हमेशा — कोई hidden charge नहीं' },
]

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-6 mb-6 text-center">
        <div className="text-5xl mb-3">🌾</div>
        <h1 className="text-2xl font-semibold mb-2">KisanAI के बारे में</h1>
        <p className="text-green-200 text-sm leading-relaxed">
          भारत का पहला मुफ़्त AI किसान सहायक —<br />
          हिंदी में, किसानों के लिए, किसानों द्वारा
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-kisan-green rounded-full" />
          हमारा लक्ष्य
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          भारत में 60 करोड़ से ज्यादा किसान हैं, लेकिन उनमें से ज्यादातर के पास
          <strong className="text-gray-800"> सही समय पर सही जानकारी</strong> नहीं होती।
          महंगे कृषि सलाहकार सभी के लिए accessible नहीं हैं।
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          KisanAI इसी समस्या को हल करने के लिए बनाया गया है।{' '}
          <strong className="text-gray-800">AI की ताकत</strong> को किसानों तक पहुँचाना —
          उनकी भाषा में, उनके मोबाइल पर, बिल्कुल मुफ़्त।
        </p>
        <div className="bg-kisan-green-pale border border-green-200 rounded-xl p-3 text-sm text-kisan-green font-medium">
          🎯 लक्ष्य: हर किसान के हाथ में एक AI कृषि विशेषज्ञ
        </div>
      </div>

      {/* Features */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-kisan-green rounded-full" />
          हमारी सेवाएं
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-2.5">
              <span className="text-xl flex-shrink-0">{f.icon}</span>
              <div>
                <div className="text-sm font-medium text-gray-900">{f.title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <span className="w-1 h-4 bg-kisan-gold rounded-full" />
          हम कैसे काम करते हैं
        </h2>
        <div className="flex flex-col gap-3">
          {team.map((t) => (
            <div key={t.title} className="flex gap-3 items-start">
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {t.emoji}
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">{t.title}</div>
                <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer important */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
        <h3 className="text-sm font-semibold text-amber-800 mb-2">⚠️ महत्वपूर्ण सूचना</h3>
        <p className="text-xs text-amber-700 leading-relaxed">
          KisanAI एक AI सहायक है और यह प्रशिक्षित कृषि विशेषज्ञ का विकल्प नहीं है।
          यह सामान्य जानकारी और मार्गदर्शन प्रदान करता है।
          किसी भी बड़े निर्णय से पहले अपने नजदीकी KVK या कृषि विभाग से संपर्क करें।
        </p>
      </div>

      {/* Contact / Feedback */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-4 text-center">
        <div className="text-3xl mb-2">💬</div>
        <h3 className="font-semibold mb-1">सुझाव या शिकायत?</h3>
        <p className="text-green-200 text-sm mb-3">
          आपका फीडबैक हमें बेहतर बनाता है।
          किसानों के लिए कोई नई सेवा चाहिए? बताएं!
        </p>
        <Link
          href="/fasal-doctor"
          className="inline-block bg-kisan-gold text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-kisan-gold-dark transition-all"
        >
          🌾 अभी इस्तेमाल करें
        </Link>
      </div>

      <HelplineBar />
    </div>
  )
}