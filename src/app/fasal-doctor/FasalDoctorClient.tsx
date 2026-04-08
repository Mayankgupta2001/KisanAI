'use client'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

const crops = [
  '🌾 गेहूं', '🌾 धान', '🌽 मक्का', '🟡 सरसों', '🎋 गन्ना',
  '⚪ कपास', '🟤 सोयाबीन', '🟤 चना', '🟡 अरहर',
  '🥔 आलू', '🍅 टमाटर', '🧅 प्याज', '🧄 लहसुन',
  '🍆 बैंगन', '🥜 मूंगफली', '🌻 सूरजमुखी',
]

const suggestedQuestions = [
  'गेहूं के पत्ते पीले पड़ रहे हैं, क्या करूं?',
  'धान में भूरे धब्बे आ रहे हैं',
  'टमाटर के फल सड़ रहे हैं',
  'सरसों पर सफेद चूर्ण जमा है',
  'आलू की फसल में काले धब्बे',
  'मक्का के पत्ते लाल हो रहे हैं',
]

export default function FasalDoctorClient() {
  const [selectedCrop, setSelectedCrop] = useState('')

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            🌿
          </div>
          <div>
            <h1 className="text-xl font-semibold">फसल डॉक्टर</h1>
            <p className="text-green-200 text-sm mt-0.5">
              लक्षण बताएं — AI तुरंत बीमारी और इलाज बताएगा
            </p>
          </div>
        </div>
      </div>

      {/* Crop Selector */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">
          🌾 अपनी फसल चुनें <span className="text-gray-400 font-normal">(वैकल्पिक)</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {crops.map((c) => {
            const name = c.split(' ').slice(1).join(' ')
            return (
              <button
                key={c}
                onClick={() => setSelectedCrop(selectedCrop === name ? '' : name)}
                className={`px-3 py-1.5 rounded-xl text-sm border transition-all ${
                  selectedCrop === name
                    ? 'bg-kisan-green text-white border-kisan-green'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green hover:text-kisan-green'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>
        {selectedCrop && (
          <p className="text-xs text-kisan-green mt-2 font-medium">
            ✅ चुनी हुई फसल: {selectedCrop} — अब नीचे लक्षण लिखें
          </p>
        )}
      </div>

      {/* Tips card */}
      <div className="bg-kisan-gold-light border border-amber-200 rounded-2xl p-4 mb-4">
        <p className="text-sm font-medium text-amber-800 mb-2">💡 अच्छा जवाब पाने के लिए बताएं:</p>
        <ul className="text-xs text-amber-700 flex flex-col gap-1.5">
          <li>• पत्ते, फल, तना, जड़ — कहाँ समस्या है</li>
          <li>• रंग बदला है? धब्बे हैं? सूख रहे हैं?</li>
          <li>• कब से है यह समस्या</li>
          <li>• पहले कोई दवाई डाली है?</li>
        </ul>
      </div>

      {/* Chat */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <ChatBox
          apiEndpoint="/api/fasal-doctor"
          buildPayload={(input) => ({
            query: selectedCrop ? `फसल: ${selectedCrop}\nलक्षण: ${input}` : input,
            crop: selectedCrop,
          })}
          placeholder={
            selectedCrop
              ? `${selectedCrop} के लक्षण हिंदी में बताएं...`
              : 'जैसे: गेहूं के पत्ते पीले पड़ रहे हैं...'
          }
          suggestedQuestions={suggestedQuestions}
          icon="🌿"
        />
      </div>
    </div>
  )
}