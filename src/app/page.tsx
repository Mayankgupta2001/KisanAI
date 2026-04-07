import Link from 'next/link'
import HelplineBar from '@/components/HelplineBar'

const features = [
  { href: '/fasal-doctor', icon: '🌿', title: 'फसल डॉक्टर', desc: 'बीमारी पहचानें, सही इलाज जानें' },
  { href: '/mandi-bhav', icon: '📊', title: 'मंडी भाव', desc: 'आज के दाम और बेचने की सलाह' },
  { href: '/mausam-salah', icon: '🌦️', title: 'मौसम सलाह', desc: 'मौसम के हिसाब से खेती' },
  { href: '/sarkari-yojana', icon: '📋', title: 'सरकारी योजना', desc: 'PM Kisan व अन्य सरकारी लाभ' },
  { href: '/mitti-pariksha', icon: '🌱', title: 'मिट्टी परीक्षा', desc: 'सही उर्वरक, अच्छी फसल' },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Hero */}
      <div className="bg-kisan-green rounded-2xl p-6 text-white mb-6 text-center">
        <div className="inline-block bg-kisan-gold/20 border border-kisan-gold/40 rounded-full px-4 py-1 text-kisan-gold text-xs mb-4">
          ✦ बिल्कुल मुफ़्त — हमेशा के लिए
        </div>
        <h1 className="text-2xl font-semibold mb-2">भारत का पहला<br /><span className="text-kisan-gold">AI किसान सहायक</span></h1>
        <p className="text-green-200 text-sm mb-5">हिंदी में बात करें। फसल की बीमारी, मंडी भाव,<br />सरकारी योजना — सब कुछ एक जगह।</p>
        <Link href="/fasal-doctor" className="bg-kisan-gold text-white rounded-xl px-8 py-3 text-sm font-medium inline-block">
          अभी पूछें — Free है!
        </Link>
        <div className="flex mt-5 pt-5 border-t border-white/10">
          {[['60Cr+','किसान'],['100%','हिंदी'],['24/7','उपलब्ध'],['Free','हमेशा']].map(([n,l]) => (
            <div key={l} className="flex-1 text-center border-r border-white/10 last:border-0">
              <div className="text-kisan-gold font-semibold">{n}</div>
              <div className="text-green-300 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <h2 className="text-base font-medium text-gray-800 mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-kisan-green rounded-full inline-block"></span>
        हमारी सेवाएं
      </h2>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {features.map(f => (
          <Link key={f.href} href={f.href}
            className="bg-gray-50 hover:bg-kisan-green-pale border border-gray-100 hover:border-kisan-green rounded-xl p-4 transition-all">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-medium text-sm text-gray-900">{f.title}</div>
            <div className="text-xs text-gray-500 mt-1">{f.desc}</div>
          </Link>
        ))}
      </div>

      <HelplineBar />
    </div>
  )
}