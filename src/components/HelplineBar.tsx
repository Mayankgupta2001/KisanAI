export default function HelplineBar() {
  return (
    <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-4 my-4">
      <p className="text-kisan-green font-medium text-sm mb-3 flex items-center gap-2">
        <span>📞</span> आपातकालीन सहायता — तुरंत कॉल करें
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          { num: '1800-180-1551', label: 'किसान कॉल सेंटर (Free)' },
          { num: '155261', label: 'PM Kisan हेल्पलाइन' },
          { num: '1551', label: 'कृषि मंत्रालय' },
        ].map((h) => (
          <a
            key={h.num}
            href={`tel:${h.num.replace(/-/g, '')}`}
            className="flex items-center gap-2 bg-white border border-green-200 rounded-xl px-3 py-2 hover:bg-kisan-green hover:text-white hover:border-kisan-green transition-all group"
          >
            <span className="text-base">📱</span>
            <div>
              <div className="text-kisan-green group-hover:text-white font-semibold text-sm leading-tight">
                {h.num}
              </div>
              <div className="text-gray-500 group-hover:text-green-200 text-[10px]">{h.label}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}