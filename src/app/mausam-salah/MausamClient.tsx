'use client'
import { useState } from 'react'
import ChatBox from '@/components/ChatBox'

const seasons = [
  { id: 'kharif', label: 'खरीफ', emoji: '🌧️', months: 'जून–सितंबर' },
  { id: 'rabi', label: 'रबी', emoji: '❄️', months: 'अक्टूबर–मार्च' },
  { id: 'zaid', label: 'जायद', emoji: '☀️', months: 'मार्च–जून' },
]

const weatherTypes = [
  { id: 'rain', label: 'बारिश', emoji: '🌧️' },
  { id: 'drought', label: 'सूखा', emoji: '🏜️' },
  { id: 'cold', label: 'ठंड', emoji: '🥶' },
  { id: 'hot', label: 'गर्मी', emoji: '🔥' },
  { id: 'hail', label: 'ओलावृष्टि', emoji: '🧊' },
  { id: 'flood', label: 'बाढ़', emoji: '🌊' },
]

const suggestedQuestions = [
  'इस मौसम में कौन सी फसल बोना सही रहेगा?',
  'बारिश से पहले क्या तैयारी करें?',
  'ओलावृष्टि के बाद फसल कैसे बचाएं?',
  'सर्दी में सिंचाई कब करें?',
  'मानसून देर से आए तो क्या करें?',
  'गर्मी में फसल को लू से कैसे बचाएं?',
]

const weatherAlerts = [
  { icon: '⚠️', text: 'राजस्थान: अगले 3 दिन तेज गर्मी', color: 'bg-red-50 border-red-200 text-red-700' },
  { icon: '💧', text: 'UP/Bihar: मानसून अपेक्षित — बुवाई की तैयारी करें', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { icon: '✅', text: 'Punjab: गेहूं कटाई के लिए अच्छा मौसम', color: 'bg-green-50 border-green-200 text-green-700' },
]

export default function MausamClient() {
  const [selectedSeason, setSelectedSeason] = useState('')
  const [selectedWeather, setSelectedWeather] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            🌦️
          </div>
          <div>
            <h1 className="text-xl font-semibold">मौसम सलाह</h1>
            <p className="text-green-200 text-sm mt-0.5">
              मौसम के हिसाब से खेती — सही समय, सही काम
            </p>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">📡 आज के मौसम अपडेट:</p>
        <div className="flex flex-col gap-2">
          {weatherAlerts.map((alert) => (
            <div key={alert.text} className={`border rounded-xl px-4 py-2.5 text-sm flex items-center gap-2 ${alert.color}`}>
              <span>{alert.icon}</span>
              <span>{alert.text}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-1.5">
          * ये सामान्य जानकारी है। IMD वेबसाइट से सटीक मौसम जाँचें।
        </p>
      </div>

      {/* Season + Weather Selector */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-4 shadow-sm">
        <p className="text-sm font-medium text-gray-700 mb-3">
          मौसम की जानकारी दें <span className="text-gray-400 font-normal">(वैकल्पिक)</span>
        </p>

        {/* Season */}
        <p className="text-xs text-gray-500 mb-2">फसल सीज़न:</p>
        <div className="flex gap-2 mb-4">
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSeason(selectedSeason === s.id ? '' : s.id)}
              className={`flex-1 py-2 rounded-xl text-sm border transition-all text-center ${
                selectedSeason === s.id
                  ? 'bg-kisan-green text-white border-kisan-green'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green'
              }`}
            >
              <div className="text-lg">{s.emoji}</div>
              <div className="font-medium">{s.label}</div>
              <div className="text-[10px] opacity-70">{s.months}</div>
            </button>
          ))}
        </div>

        {/* Weather Type */}
        <p className="text-xs text-gray-500 mb-2">वर्तमान मौसम:</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {weatherTypes.map((w) => (
            <button
              key={w.id}
              onClick={() => setSelectedWeather(selectedWeather === w.id ? '' : w.id)}
              className={`px-3 py-1.5 rounded-xl text-sm border transition-all flex items-center gap-1.5 ${
                selectedWeather === w.id
                  ? 'bg-kisan-green text-white border-kisan-green'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-kisan-green'
              }`}
            >
              <span>{w.emoji}</span>
              <span>{w.label}</span>
            </button>
          ))}
        </div>

        {/* Location */}
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="जिला / राज्य — जैसे: जोधपुर, राजस्थान"
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-kisan-green transition-all"
        />
      </div>

      {/* Seasonal Crops Guide */}
      <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-4 mb-4">
        <p className="text-sm font-medium text-kisan-green mb-2">🌾 मौसम के हिसाब से फसल:</p>
        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
          <div className="bg-white rounded-xl p-2.5">
            <div className="font-medium text-gray-800 mb-1">🌧️ खरीफ</div>
            <div>धान, मक्का, ज्वार, मूंगफली, सोयाबीन, कपास</div>
          </div>
          <div className="bg-white rounded-xl p-2.5">
            <div className="font-medium text-gray-800 mb-1">❄️ रबी</div>
            <div>गेहूं, सरसों, चना, मटर, जौ, आलू</div>
          </div>
          <div className="bg-white rounded-xl p-2.5">
            <div className="font-medium text-gray-800 mb-1">☀️ जायद</div>
            <div>खीरा, तरबूज, खरबूज, मूंग, उड़द</div>
          </div>
        </div>
      </div>

      {/* Chat */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <ChatBox
          apiEndpoint="/api/mausam-salah"
          buildPayload={(input) => ({
            query: [
              location && `स्थान: ${location}`,
              selectedSeason && `सीज़न: ${seasons.find((s) => s.id === selectedSeason)?.label}`,
              selectedWeather && `मौसम: ${weatherTypes.find((w) => w.id === selectedWeather)?.label}`,
              `सवाल: ${input}`,
            ]
              .filter(Boolean)
              .join('\n'),
            location,
            season: seasons.find((s) => s.id === selectedSeason)?.label || '',
            currentWeather: weatherTypes.find((w) => w.id === selectedWeather)?.label || '',
          })}
          placeholder="जैसे: इस बारिश में धान की बुवाई करूं या नहीं?"
          suggestedQuestions={suggestedQuestions}
          icon="🌦️"
        />
      </div>
    </div>
  )
}