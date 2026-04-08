import Link from 'next/link'
import type { Metadata } from 'next'
import HelplineBar from '@/components/HelplineBar'

export const metadata: Metadata = {
  title: 'KisanAI — भारत का पहला मुफ़्त AI किसान सहायक',
  description:
    'फसल की बीमारी, मंडी भाव, मौसम सलाह, सरकारी योजना — सब कुछ हिंदी में बिल्कुल मुफ़्त। 60 करोड़ किसानों का AI साथी।',
}

const features = [
  {
    href: '/fasal-doctor',
    icon: '🌿',
    title: 'फसल डॉक्टर',
    desc: 'लक्षण बताएं, AI तुरंत बीमारी और इलाज बताएगा',
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100',
  },
  {
    href: '/mandi-bhav',
    icon: '📊',
    title: 'मंडी भाव',
    desc: 'आज के दाम जानें और सही समय पर बेचने की सलाह',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100',
  },
  {
    href: '/mausam-salah',
    icon: '🌦️',
    title: 'मौसम सलाह',
    desc: 'मौसम के हिसाब से बुवाई, सिंचाई, कटाई की सलाह',
    color: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100',
  },
  {
    href: '/sarkari-yojana',
    icon: '📋',
    title: 'सरकारी योजना',
    desc: 'PM Kisan, PMFBY व अन्य सरकारी लाभ पाएं',
    color: 'bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-100',
  },
  {
    href: '/mitti-pariksha',
    icon: '🌱',
    title: 'मिट्टी परीक्षा',
    desc: 'सही उर्वरक, सही मात्रा — फसल दोगुनी करें',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
  },
]

const howItWorks = [
  { step: '1', icon: '✍️', title: 'सवाल लिखें', desc: 'हिंदी में अपनी समस्या या सवाल लिखें' },
  { step: '2', icon: '🤖', title: 'AI सोचता है', desc: 'हमारा AI आपकी भाषा समझकर जवाब तैयार करता है' },
  { step: '3', icon: '✅', title: 'सलाह पाएं', desc: 'प्रैक्टिकल सलाह जो आप घर पर अपना सकते हैं' },
]

const schemes = [
  { name: 'PM-KISAN सम्मान निधि', amount: '₹6,000/साल', icon: '🏛️', color: 'bg-blue-50 border-blue-100' },
  { name: 'फसल बीमा योजना (PMFBY)', amount: '90% सब्सिडी', icon: '🌿', color: 'bg-green-50 border-green-100' },
  { name: 'किसान क्रेडिट कार्ड (KCC)', amount: '4% ब्याज दर', icon: '💳', color: 'bg-purple-50 border-purple-100' },
  { name: 'सिंचाई योजना (PMKSY)', amount: 'ड्रिप सिंचाई', icon: '💧', color: 'bg-sky-50 border-sky-100' },
]

export default function Home() {
  return (
    <div className="pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="bg-kisan-green text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-kisan-gold rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-kisan-gold/20 border border-kisan-gold/40 rounded-full px-4 py-1.5 mb-5">
            <span className="text-kisan-gold text-sm font-medium">✦ बिल्कुल मुफ़्त — हमेशा के लिए</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            भारत का पहला<br />
            <span className="text-kisan-gold">AI किसान सहायक</span>
          </h1>

          <p className="text-green-200 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            हिंदी में बात करें। फसल की बीमारी, मंडी भाव, मौसम सलाह,
            सरकारी योजना — सब कुछ एक जगह, बिल्कुल मुफ़्त।
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <Link
              href="/fasal-doctor"
              className="bg-kisan-gold text-white rounded-2xl px-8 py-3.5 text-base font-medium hover:bg-kisan-gold-dark transition-all active:scale-95 shadow-lg"
            >
              🌿 अभी पूछें — Free है!
            </Link>
            <Link
              href="/sarkari-yojana"
              className="bg-white/10 border border-white/30 text-white rounded-2xl px-8 py-3.5 text-base font-medium hover:bg-white/20 transition-all"
            >
              📋 सरकारी योजना जानें
            </Link>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-0 divide-x divide-white/20 bg-white/10 rounded-2xl p-4 max-w-md mx-auto">
            {[
              ['60Cr+', 'किसान'],
              ['100%', 'हिंदी'],
              ['24/7', 'उपलब्ध'],
              ['Free', 'हमेशा'],
            ].map(([n, l]) => (
              <div key={l} className="flex-1 text-center px-2">
                <div className="text-kisan-gold font-semibold text-lg">{n}</div>
                <div className="text-green-300 text-xs mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        {/* Features Grid */}
        <section className="py-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
            <span className="w-1 h-5 bg-kisan-green rounded-full" />
            हमारी सेवाएं
          </h2>
          <p className="text-gray-500 text-sm mb-5 ml-3">5 तरह की AI सहायता — हिंदी में, मुफ़्त</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <Link
                key={f.href}
                href={f.href}
                className={`border rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 group ${f.color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-kisan-green transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="mt-3 text-kisan-green text-sm font-medium flex items-center gap-1">
                  अभी देखें <span>→</span>
                </div>
              </Link>
            ))}

            {/* Extra: Mitti link in grid */}
            <Link
              href="/about"
              className="border border-gray-100 bg-gray-50 rounded-2xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 bg-gray-100">
                ℹ️
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">हमारे बारे में</h3>
              <p className="text-gray-500 text-sm leading-relaxed">KisanAI क्या है और यह कैसे काम करता है</p>
              <div className="mt-3 text-kisan-green text-sm font-medium flex items-center gap-1">
                जानें <span>→</span>
              </div>
            </Link>
          </div>
        </section>

        {/* How it works */}
        <section className="py-6 border-t border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-1 flex items-center gap-2">
            <span className="w-1 h-5 bg-kisan-gold rounded-full" />
            कैसे काम करता है?
          </h2>
          <p className="text-gray-500 text-sm mb-6 ml-3">3 आसान कदम</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {howItWorks.map((s) => (
              <div key={s.step} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
                <div className="w-10 h-10 bg-kisan-green text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                  {s.step}
                </div>
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Government Schemes Preview */}
        <section className="py-6 border-t border-gray-100">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-1 h-5 bg-kisan-green rounded-full" />
                सरकारी योजनाएं
              </h2>
              <p className="text-gray-500 text-sm ml-3">जो योजनाएं आपके काम की हैं</p>
            </div>
            <Link href="/sarkari-yojana" className="text-kisan-green text-sm font-medium hover:underline">
              सब देखें →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {schemes.map((s) => (
              <div key={s.name} className={`border rounded-2xl p-4 flex items-center gap-3 ${s.color}`}>
                <div className="text-2xl">{s.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm text-gray-900 truncate">{s.name}</div>
                  <div className="text-kisan-green text-xs font-medium mt-0.5">{s.amount}</div>
                </div>
                <Link href="/sarkari-yojana" className="text-gray-400 hover:text-kisan-green text-lg">›</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Chat preview CTA */}
        <section className="py-6 border-t border-gray-100">
          <div className="bg-kisan-green rounded-2xl p-6 md:p-8 text-center text-white">
            <div className="text-4xl mb-3">🌾</div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">आज ही अपना सवाल पूछें</h2>
            <p className="text-green-200 text-sm mb-5 max-w-sm mx-auto">
              हजारों किसान रोज KisanAI से सलाह ले रहे हैं। आप भी शुरू करें — बिल्कुल मुफ़्त।
            </p>
            <Link
              href="/fasal-doctor"
              className="inline-block bg-kisan-gold text-white rounded-2xl px-8 py-3 font-medium hover:bg-kisan-gold-dark transition-all active:scale-95"
            >
              🌿 फसल डॉक्टर से पूछें
            </Link>
          </div>
        </section>

        <HelplineBar />
      </div>
    </div>
  )
}