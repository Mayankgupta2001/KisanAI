export default function HelplineBar() {
  return (
    <div className="bg-kisan-green-pale border border-green-200 rounded-xl p-4 my-4">
      <p className="text-kisan-green font-medium text-sm mb-2">📞 आपातकालीन सहायता</p>
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="bg-white border border-green-200 rounded-lg px-3 py-1 text-kisan-green font-medium">
          किसान कॉल सेंटर: 1800-180-1551
        </span>
        <span className="bg-white border border-green-200 rounded-lg px-3 py-1 text-kisan-green font-medium">
          PM Kisan हेल्पलाइन: 155261
        </span>
      </div>
    </div>
  )
}