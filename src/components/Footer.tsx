import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-kisan-green text-white mt-16 pb-20 md:pb-0">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="bg-kisan-gold rounded-xl p-1.5 text-xl leading-none">🌾</span>
              <div>
                <div className="font-semibold text-base">KisanAI</div>
                <div className="text-xs text-green-300">किसान का डिजिटल साथी</div>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              भारत के 60 करोड़ किसानों के लिए बनाया गया मुफ़्त AI असिस्टेंट। हिंदी में बात करें, सही सलाह पाएं।
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium text-sm mb-3 text-kisan-gold">हमारी सेवाएं</h3>
            <div className="flex flex-col gap-2 text-sm text-green-200">
              {[
                ['/fasal-doctor', '🌿 फसल डॉक्टर'],
                ['/mandi-bhav', '📊 मंडी भाव'],
                ['/mausam-salah', '🌦️ मौसम सलाह'],
                ['/sarkari-yojana', '📋 सरकारी योजना'],
                ['/mitti-pariksha', '🌱 मिट्टी परीक्षा'],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Helplines */}
          <div>
            <h3 className="font-medium text-sm mb-3 text-kisan-gold">आपातकालीन हेल्पलाइन</h3>
            <div className="flex flex-col gap-2 text-sm text-green-200">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <div className="text-white font-medium">1800-180-1551</div>
                  <div className="text-xs">किसान कॉल सेंटर (24/7 Free)</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <div className="text-white font-medium">155261</div>
                  <div className="text-xs">PM Kisan हेल्पलाइन</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span>📞</span>
                <div>
                  <div className="text-white font-medium">1551</div>
                  <div className="text-xs">कृषि मंत्रालय हेल्पलाइन</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-green-300">
          <div>© 2024 KisanAI — जय किसान 🌾</div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">हमारे बारे में</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">गोपनीयता नीति</Link>
          </div>
          <div>Made with ❤️ for Bharat 🇮🇳</div>
        </div>
      </div>
    </footer>
  )
}