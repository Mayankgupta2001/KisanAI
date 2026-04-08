'use client'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

const states = [
  'राजस्थान', 'उत्तर प्रदेश', 'मध्य प्रदेश', 'महाराष्ट्र',
  'पंजाब', 'हरियाणा', 'बिहार', 'गुजरात', 'कर्नाटक',
  'आंध्र प्रदेश', 'तेलंगाना', 'छत्तीसगढ़', 'झारखंड',
]

const landSizes = [
  { id: 'small', label: 'छोटे किसान', sub: '0-2 हेक्टेयर' },
  { id: 'medium', label: 'मध्यम किसान', sub: '2-5 हेक्टेयर' },
  { id: 'large', label: 'बड़े किसान', sub: '5+ हेक्टेयर' },
]

const topSchemes = [
  {
    name: 'PM-KISAN सम्मान निधि',
    benefit: '₹6,000/साल',
    desc: '3 किस्त में सीधे बैंक खाते में',
    icon: '💰',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    helpline: '155261',
    link: 'pmkisan.gov.in',
  },
  {
    name: 'प्रधानमंत्री फसल बीमा (PMFBY)',
    benefit: '90% सब्सिडी',
    desc: 'फसल खराब होने पर मुआवजा',
    icon: '🌿',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
    helpline: '14447',
    link: 'pmfby.gov.in',
  },
  {
    name: 'किसान क्रेडिट कार्ड (KCC)',
    benefit: '4% ब्याज दर',
    desc: '₹3 लाख तक आसान लोन',
    icon: '💳',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
    helpline: '1800-180-1111',
    link: 'agricoop.gov.in',
  },
  {
    name: 'PM कृषि सिंचाई (PMKSY)',
    benefit: 'ड्रिप सिंचाई',
    desc: 'सिंचाई उपकरण पर भारी सब्सिडी',
    icon: '💧',
    color: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100',
    helpline: '1800-180-1551',
    link: 'pmksy.gov.in',
  },
  {
    name: 'Soil Health Card योजना',
    benefit: 'मुफ़्त मिट्टी जांच',
    desc: 'उर्वरक की सही मात्रा जानें',
    icon: '🌱',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    helpline: '1800-180-1551',
    link: 'soilhealth.dac.gov.in',
  },
  {
    name: 'eNAM — डिजिटल मंडी',
    benefit: 'बेहतर दाम',
    desc: 'देशभर की मंडियों में फसल बेचें',
    icon: '📱',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100',
    helpline: '1800-270-0224',
    link: 'enam.gov.in',
  },
]

const suggestedQuestions = [
  'PM Kisan का पैसा नहीं आया, क्या करूं?',
  'मेरे लिए कौन सी योजना सबसे फायदेमंद है?',
  'KCC के लिए कैसे अप्लाई करें?',
  'फसल बीमा क्लेम कैसे करें?',
  'Soil Health Card कैसे बनवाएं?',
  'छोटे किसानों के लिए कौन सी योजनाएं हैं?',
]

export default function YojanaClient() {
  const [selectedState, setSelectedState] = useState('')
  const [selectedLand, setSelectedLand] = useState('')

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            📋
          </div>
          <div>
            <h1 className="text-xl font-semibold">सरकारी योजना</h1>
            <p className="text-green-200 text-sm mt-0.5">
              आपके हक की सभी योजनाएं — एक जगह
            </p>
          </div>
        </div>
      </div>

      {/* Top Schemes Grid */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">🏛️ प्रमुख सरकारी योजनाएं:</p>
        <div className="grid grid-cols-1 gap-3">
          {topSchemes.map((scheme) => (
            <div
              key={scheme.name}
              className={`border rounded-2xl p-4 flex items-center gap-3 ${scheme.color}`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${scheme.iconBg}`}>
                {scheme.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-900">{scheme.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{scheme.desc}</div>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="text-kisan-green text-xs font-semibold">{scheme.benefit}</span>
                  <a
                    href={`tel:${scheme.helpline}`}
                    className="text-xs text-gray-500 hover:text-kisan-green flex items-center gap-1"
                  >
                    📞 {scheme.helpline}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* State + Land size selector */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">
          अपनी जानकारी दें — बेहतर सलाह पाएं
        </p>

        {/* Land size */}
        <p className="text-xs text-gray-500 mb-2">जमीन का आकार:</p>
        <div className="flex gap-2 mb-4">
          {landSizes.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLand(selectedLand === l.id ? '' : l.id)}
              className={`flex-1 py-2.5 rounded-xl text-sm border transition-all text-center ${
                selectedLand === l.id
                  ? 'bg-kisan-green text-white border-kisan-green'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green'
              }`}
            >
              <div className="font-medium text-xs">{l.label}</div>
              <div className="text-[10px] opacity-70 mt-0.5">{l.sub}</div>
            </button>
          ))}
        </div>

        {/* State */}
        <p className="text-xs text-gray-500 mb-2">राज्य:</p>
        <div className="flex flex-wrap gap-2">
          {states.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedState(selectedState === s ? '' : s)}
              className={`px-3 py-1.5 rounded-xl text-xs border transition-all ${
                selectedState === s
                  ? 'bg-kisan-green text-white border-kisan-green'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Documents checklist */}
      <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-4 mb-4">
        <p className="text-sm font-medium text-kisan-green mb-2">📄 जरूरी दस्तावेज (सभी योजनाओं के लिए):</p>
        <div className="grid grid-cols-2 gap-1.5 text-xs text-gray-600">
          {[
            '✅ आधार कार्ड', '✅ बैंक पासबुक', '✅ खसरा/खतौनी',
            '✅ मोबाइल नंबर', '✅ पासपोर्ट फोटो', '✅ जाति प्रमाण पत्र',
          ].map((doc) => (
            <div key={doc}>{doc}</div>
          ))}
        </div>
      </div>

      {/* AI Chat */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">
          🤖 AI से योजना की जानकारी पूछें:
        </p>
        <ChatBox
          apiEndpoint="/api/yojana-finder"
          buildPayload={(input) => ({
            query: [
              selectedState && `राज्य: ${selectedState}`,
              selectedLand && `जमीन: ${landSizes.find((l) => l.id === selectedLand)?.label}`,
              `सवाल: ${input}`,
            ]
              .filter(Boolean)
              .join('\n'),
            state: selectedState,
            landSize: landSizes.find((l) => l.id === selectedLand)?.label || '',
          })}
          placeholder="जैसे: PM Kisan का पैसा क्यों नहीं आया? KCC कैसे बनवाएं?"
          suggestedQuestions={suggestedQuestions}
          icon="📋"
        />
      </div>
    </div>
  )
}