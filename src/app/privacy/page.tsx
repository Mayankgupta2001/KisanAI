import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'गोपनीयता नीति — KisanAI',
  description: 'KisanAI की गोपनीयता नीति — आपकी जानकारी कैसे उपयोग होती है और हम आपकी privacy कैसे protect करते हैं।',
}

const sections = [
  {
    icon: '📋',
    title: 'हम क्या जानकारी लेते हैं?',
    content: [
      'KisanAI आपकी कोई भी व्यक्तिगत जानकारी (नाम, फोन, आधार) नहीं मांगता।',
      'आप जो सवाल पूछते हैं वह AI को जवाब देने के लिए भेजे जाते हैं।',
      'हम Google Analytics से website traffic की सामान्य जानकारी लेते हैं।',
      'Google AdSense विज्ञापन दिखाने के लिए cookies उपयोग कर सकता है।',
    ],
  },
  {
    icon: '🔒',
    title: 'आपकी बातचीत कहाँ जाती है?',
    content: [
      'आपके सवाल Groq API (अमेरिका) को भेजे जाते हैं जो AI जवाब तैयार करता है।',
      'हम आपकी बातचीत अपने सर्वर पर save नहीं करते।',
      'हर बार page reload करने पर बातचीत मिट जाती है।',
      'हम आपकी जानकारी किसी तीसरे पक्ष को नहीं बेचते।',
    ],
  },
  {
    icon: '🍪',
    title: 'Cookies के बारे में',
    content: [
      'Google AdSense विज्ञापन personalize करने के लिए cookies उपयोग करता है।',
      'आप अपने browser settings में cookies बंद कर सकते हैं।',
      'Cookies बंद करने से website की कार्यक्षमता प्रभावित हो सकती है।',
    ],
  },
  {
    icon: '👶',
    title: 'बच्चों की गोपनीयता',
    content: [
      'KisanAI 13 साल से कम उम्र के बच्चों के लिए नहीं है।',
      'हम जानबूझकर बच्चों से कोई जानकारी नहीं लेते।',
    ],
  },
  {
    icon: '📝',
    title: 'नीति में बदलाव',
    content: [
      'हम इस नीति को कभी भी बदल सकते हैं।',
      'बड़े बदलाव होने पर website पर सूचना दी जाएगी।',
      'इस नीति का उपयोग जारी रखना बदलावों की स्वीकृति माना जाएगा।',
    ],
  },
  {
    icon: '⚠️',
    title: 'अस्वीकरण (Disclaimer)',
    content: [
      'KisanAI की सलाह केवल सामान्य जानकारी के लिए है।',
      'यह किसी प्रशिक्षित कृषि विशेषज्ञ का विकल्प नहीं है।',
      'किसी भी नुकसान के लिए KisanAI जिम्मेदार नहीं होगा।',
      'बड़े निर्णय लेने से पहले स्थानीय विशेषज्ञ से मिलें।',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            🔒
          </div>
          <div>
            <h1 className="text-xl font-semibold">गोपनीयता नीति</h1>
            <p className="text-green-200 text-sm mt-0.5">
              आपकी privacy हमारी प्राथमिकता है
            </p>
          </div>
        </div>
      </div>

      <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-4 mb-5">
        <p className="text-sm text-kisan-green">
          <strong>संक्षेप में:</strong> KisanAI आपकी कोई व्यक्तिगत जानकारी नहीं लेता और
          आपकी बातचीत save नहीं करता। आपकी privacy हमारे लिए महत्वपूर्ण है।
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <span>{section.icon}</span>
              {section.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {section.content.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                  <span className="text-kisan-green mt-0.5 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Last updated */}
      <div className="text-center text-xs text-gray-400 mt-6 mb-4">
        <p>अंतिम अपडेट: दिसंबर 2024</p>
        <p className="mt-1">
          सवाल हो तो{' '}
          <Link href="/about" className="text-kisan-green hover:underline">
            हमसे संपर्क करें
          </Link>
        </p>
      </div>
    </div>
  )
}