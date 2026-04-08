export default function Disclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 my-4">
      <div className="flex gap-3 items-start">
        <span className="text-xl flex-shrink-0">⚠️</span>
        <p className="text-sm text-amber-800 leading-relaxed">
          <strong className="font-medium">ध्यान दें:</strong> यह AI की सलाह है और केवल सामान्य जानकारी के लिए है।
          किसी भी बड़े निर्णय (दवाई, खाद, बीज) से पहले अपने{' '}
          <strong className="font-medium">नजदीकी कृषि विज्ञान केंद्र (KVK)</strong> या{' '}
          <strong className="font-medium">स्थानीय कृषि विशेषज्ञ</strong> से अवश्य मिलें।
        </p>
      </div>
    </div>
  )
}