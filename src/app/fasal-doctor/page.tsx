'use client'
import { useState } from 'react'
import Disclaimer from '@/components/Disclaimer'
import HelplineBar from '@/components/HelplineBar'

const crops = ['गेहूं','धान','मक्का','सरसों','गन्ना','कपास','सोयाबीन','चना','अरहर','आलू','टमाटर','प्याज']

export default function FasalDoctor() {
  const [crop, setCrop] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!crop || !symptoms) return
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/fasal-doctor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ crop, symptoms }),
      })
      const data = await res.json()
      setResult(data.result)
    } catch {
      setResult('कुछ गड़बड़ हुई। दोबारा कोशिश करें।')
    }
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-6">
        <h1 className="text-xl font-semibold">🌿 फसल डॉक्टर</h1>
        <p className="text-green-200 text-sm mt-1">लक्षण बताएं, AI तुरंत इलाज सुझाएगा</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">फसल चुनें</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {crops.map(c => (
            <button key={c} onClick={() => setCrop(c)}
              className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                crop === c ? 'bg-kisan-green text-white border-kisan-green' : 'bg-gray-50 text-gray-700 border-gray-200'
              }`}>
              {c}
            </button>
          ))}
        </div>

        <label className="block text-sm font-medium text-gray-700 mb-2">लक्षण बताएं</label>
        <textarea
          className="w-full border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:border-kisan-green"
          rows={4}
          placeholder="जैसे: पत्ते पीले पड़ रहे हैं, फल सड़ रहे हैं, जड़ें काली हो रही हैं..."
          value={symptoms}
          onChange={e => setSymptoms(e.target.value)}
        />

        <button onClick={handleSubmit} disabled={loading || !crop || !symptoms}
          className="w-full mt-4 bg-kisan-green text-white rounded-xl py-3 text-sm font-medium disabled:opacity-50">
          {loading ? '🔍 जाँच हो रही है...' : '🩺 AI से इलाज जानें'}
        </button>
      </div>

      {result && (
        <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-5 mb-4 whitespace-pre-wrap text-sm text-gray-800 leading-relaxed">
          {result}
        </div>
      )}

      <Disclaimer />
      <HelplineBar />
    </div>
  )
}