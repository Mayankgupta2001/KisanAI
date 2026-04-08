'use client'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

const crops = [
  '🌾 गेहूं', '🌾 धान', '🌽 मक्का', '🟡 सरसों', '🎋 गन्ना',
  '⚪ कपास', '🟤 सोयाबीन', '🟤 चना', '🟡 अरहर', '🥔 आलू',
  '🍅 टमाटर', '🧅 प्याज', '🥜 मूंगफली', '🌻 सूरजमुखी',
]

const msData = [
  { crop: 'गेहूं', msp: '₹2,275', unit: 'प्रति क्विंटल', trend: '↑', color: 'text-green-600' },
  { crop: 'धान', msp: '₹2,300', unit: 'प्रति क्विंटल', trend: '↑', color: 'text-green-600' },
  { crop: 'सरसों', msp: '₹5,650', unit: 'प्रति क्विंटल', trend: '→', color: 'text-amber-600' },
  { crop: 'चना', msp: '₹5,440', unit: 'प्रति क्विंटल', trend: '↑', color: 'text-green-600' },
  { crop: 'मक्का', msp: '₹2,090', unit: 'प्रति क्विंटल', trend: '↓', color: 'text-red-500' },
  { crop: 'अरहर', msp: '₹7,000', unit: 'प्रति क्विंटल', trend: '↑', color: 'text-green-600' },
]

const suggestedQuestions = [
  'गेहूं कब और कहाँ बेचना सही रहेगा?',
  'सरसों का MSP क्या है और बाजार भाव कितना है?',
  'eNAM पर फसल कैसे बेचें?',
  'मंडी में धोखे से कैसे बचें?',
  'फसल भंडारण कितने दिन तक करें?',
  'FPO से जुड़ने के क्या फायदे हैं?',
]

export default function MandiClient() {
  const [selectedCrop, setSelectedCrop] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            📊
          </div>
          <div>
            <h1 className="text-xl font-semibold">मंडी भाव</h1>
            <p className="text-green-200 text-sm mt-0.5">
              आज के दाम जानें — सही समय पर, सही जगह बेचें
            </p>
          </div>
        </div>
      </div>

      {/* MSP Quick Reference */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
          📌 <span>2024-25 MSP (सरकारी न्यूनतम समर्थन मूल्य)</span>
        </p>
        <div className="grid grid-cols-2 gap-2">
          {msData.map((item) => (
            <div key={item.crop} className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500">{item.crop}</div>
                <div className="font-semibold text-sm text-gray-900">{item.msp}</div>
                <div className="text-[10px] text-gray-400">{item.unit}</div>
              </div>
              <span className={`text-lg font-bold ${item.color}`}>{item.trend}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-2">
          * MSP 2024-25 के अनुसार। बाजार भाव अलग हो सकता है।
        </p>
      </div>

      {/* Crop + Location selector */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">
          🌾 फसल और जगह चुनें <span className="text-gray-400 font-normal">(वैकल्पिक)</span>
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
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

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="जिला / राज्य लिखें — जैसे: जयपुर, राजस्थान"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kisan-green transition-all"
        />
      </div>

      {/* Selling tips info */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
        <p className="text-sm font-medium text-amber-800 mb-2">💡 सही दाम पाने के तरीके:</p>
        <div className="grid grid-cols-2 gap-2 text-xs text-amber-700">
          {[
            ['🏪', 'eNAM — डिजिटल मंडी', 'बिचौलिए नहीं'],
            ['👥', 'FPO से बेचें', 'ज्यादा दाम'],
            ['🏦', 'भंडारण करें', 'सीज़न बाद बेचें'],
            ['📱', 'AgriMarket App', 'दाम चेक करें'],
          ].map(([icon, title, sub]) => (
            <div key={title} className="flex gap-2 items-start">
              <span>{icon}</span>
              <div>
                <div className="font-medium text-amber-800">{title}</div>
                <div>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <ChatBox
          apiEndpoint="/api/mandi-tips"
          buildPayload={(input) => ({
            query: [
              selectedCrop && `फसल: ${selectedCrop}`,
              location && `स्थान: ${location}`,
              `सवाल: ${input}`,
            ]
              .filter(Boolean)
              .join('\n'),
            crop: selectedCrop,
            location,
          })}
          placeholder="जैसे: गेहूं कब बेचूं? मंडी या eNAM — कहाँ बेचना सही?"
          suggestedQuestions={suggestedQuestions}
          icon="📊"
        />
      </div>
    </div>
  )
}