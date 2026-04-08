'use client'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

const soilTypes = [
  { id: 'alluvial', label: 'जलोढ़ मिट्टी', emoji: '🟤', region: 'UP, Bihar, Punjab' },
  { id: 'black', label: 'काली मिट्टी', emoji: '⚫', region: 'MP, Maharashtra' },
  { id: 'red', label: 'लाल मिट्टी', emoji: '🔴', region: 'Rajasthan, South India' },
  { id: 'sandy', label: 'बलुई मिट्टी', emoji: '🟡', region: 'Rajasthan, Gujarat' },
  { id: 'loamy', label: 'दोमट मिट्टी', emoji: '🟫', region: 'Haryana, UP' },
  { id: 'clay', label: 'चिकनी मिट्टी', emoji: '🟢', region: 'Bengal, Assam' },
]

const crops = [
  '🌾 गेहूं', '🌾 धान', '🌽 मक्का', '🟡 सरसों', '🎋 गन्ना',
  '⚪ कपास', '🟤 सोयाबीन', '🟤 चना', '🥔 आलू', '🍅 टमाटर',
]

const phLevels = [
  { range: '< 5.5', label: 'बहुत अम्लीय', color: 'bg-red-100 text-red-700', fix: 'चूना डालें' },
  { range: '5.5–6.5', label: 'थोड़ा अम्लीय', color: 'bg-orange-100 text-orange-700', fix: 'जिप्सम डालें' },
  { range: '6.5–7.5', label: 'सामान्य (Best)', color: 'bg-green-100 text-green-700', fix: 'बढ़िया है!' },
  { range: '7.5–8.5', label: 'क्षारीय', color: 'bg-yellow-100 text-yellow-700', fix: 'सल्फर डालें' },
  { range: '> 8.5', label: 'बहुत क्षारीय', color: 'bg-red-100 text-red-700', fix: 'विशेषज्ञ से मिलें' },
]

const fertilizerGuide = [
  { name: 'DAP', use: 'फास्फोरस के लिए', amount: '50 kg/एकड़', time: 'बुवाई के समय' },
  { name: 'यूरिया', use: 'नाइट्रोजन के लिए', amount: '45 kg/एकड़', time: '2 किस्तों में' },
  { name: 'MOP', use: 'पोटाश के लिए', amount: '30 kg/एकड़', time: 'बुवाई पर' },
  { name: 'गोबर खाद', use: 'जैविक — सभी पोषक', amount: '4-5 टन/एकड़', time: 'बुवाई से पहले' },
]

const suggestedQuestions = [
  'मेरी काली मिट्टी में गेहूं के लिए कितना खाद डालूं?',
  'मिट्टी का PH कम करने के उपाय बताएं',
  'जैविक खेती कैसे शुरू करें?',
  'Soil Health Card कैसे और कहाँ बनवाएं?',
  'ज्यादा यूरिया डालने से क्या नुकसान होता है?',
  'मिट्टी में जिंक की कमी के लक्षण क्या हैं?',
]

export default function MittiClient() {
  const [selectedSoil, setSelectedSoil] = useState('')
  const [selectedCrop, setSelectedCrop] = useState('')
  const [ph, setPh] = useState('')

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            🌱
          </div>
          <div>
            <h1 className="text-xl font-semibold">मिट्टी परीक्षा</h1>
            <p className="text-green-200 text-sm mt-0.5">
              सही उर्वरक, सही मात्रा — फसल दोगुनी करें
            </p>
          </div>
        </div>
      </div>

      {/* Soil Type Selector */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">मिट्टी का प्रकार चुनें:</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {soilTypes.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSoil(selectedSoil === s.id ? '' : s.id)}
              className={`p-3 rounded-xl text-left border transition-all ${
                selectedSoil === s.id
                  ? 'bg-kisan-green text-white border-kisan-green'
                  : 'bg-gray-50 border-gray-200 hover:border-kisan-green'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{s.emoji}</span>
                <span className="text-sm font-medium">{s.label}</span>
              </div>
              <div className={`text-[10px] ${selectedSoil === s.id ? 'text-green-200' : 'text-gray-400'}`}>
                {s.region}
              </div>
            </button>
          ))}
        </div>

        {/* Crop selector */}
        <p className="text-sm font-medium text-gray-700 mb-2">फसल चुनें:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {crops.map((c) => {
            const name = c.split(' ').slice(1).join(' ')
            return (
              <button
                key={c}
                onClick={() => setSelectedCrop(selectedCrop === name ? '' : name)}
                className={`px-3 py-1.5 rounded-xl text-sm border transition-all ${
                  selectedCrop === name
                    ? 'bg-kisan-green text-white border-kisan-green'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* PH input */}
        <p className="text-sm font-medium text-gray-700 mb-2">
          मिट्टी का PH <span className="text-gray-400 font-normal">(अगर पता हो)</span>
        </p>
        <input
          type="number"
          min="0"
          max="14"
          step="0.1"
          value={ph}
          onChange={(e) => setPh(e.target.value)}
          placeholder="जैसे: 7.2"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kisan-green transition-all"
        />
      </div>

      {/* PH Guide */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-2">📊 PH स्तर गाइड:</p>
        <div className="flex flex-col gap-1.5">
          {phLevels.map((level) => (
            <div key={level.range} className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs ${level.color}`}>
              <span className="font-medium">{level.range}</span>
              <span>{level.label}</span>
              <span className="font-medium">{level.fix}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Fertilizer Quick Reference */}
      <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-4 mb-4">
        <p className="text-sm font-medium text-kisan-green mb-3">💊 सामान्य उर्वरक मार्गदर्शिका:</p>
        <div className="flex flex-col gap-2">
          {fertilizerGuide.map((f) => (
            <div key={f.name} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-3">
              <div className="w-10 h-10 bg-kisan-green-pale rounded-lg flex items-center justify-center text-sm font-bold text-kisan-green flex-shrink-0">
                {f.name.slice(0, 3)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900">{f.name}</div>
                <div className="text-xs text-gray-500">{f.use}</div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-kisan-green">{f.amount}</div>
                <div className="text-[10px] text-gray-400">{f.time}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-2">
          * ये सामान्य मात्राएं हैं। Soil Health Card के अनुसार मात्रा अलग हो सकती है।
        </p>
      </div>

      {/* Soil Health Card CTA */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4 flex items-start gap-3">
        <span className="text-2xl">🏥</span>
        <div>
          <p className="text-sm font-medium text-amber-800">Soil Health Card बनवाएं — मुफ़्त!</p>
          <p className="text-xs text-amber-700 mt-1">
            नजदीकी KVK (कृषि विज्ञान केंद्र) में जाकर मुफ़्त मिट्टी जाँच कराएं।
            सरकार हर 2 साल पर यह कार्ड देती है।
          </p>
          <a href="tel:1800-180-1551" className="text-xs text-kisan-green font-medium mt-1 block">
            📞 1800-180-1551 पर कॉल करें
          </a>
        </div>
      </div>

      {/* Chat */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <ChatBox
          apiEndpoint="/api/mitti-salah"
          buildPayload={(input) => ({
            query: [
              selectedSoil && `मिट्टी: ${soilTypes.find((s) => s.id === selectedSoil)?.label}`,
              selectedCrop && `फसल: ${selectedCrop}`,
              ph && `PH: ${ph}`,
              `सवाल: ${input}`,
            ]
              .filter(Boolean)
              .join('\n'),
            soilType: soilTypes.find((s) => s.id === selectedSoil)?.label || '',
            crop: selectedCrop,
            ph,
          })}
          placeholder="जैसे: काली मिट्टी में गेहूं के लिए कितना DAP डालूं?"
          suggestedQuestions={suggestedQuestions}
          icon="🌱"
        />
      </div>
    </div>
  )
}