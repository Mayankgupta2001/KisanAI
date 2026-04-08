import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from './_posts'

export const metadata: Metadata = {
  title: 'किसान ब्लॉग — खेती की जानकारी हिंदी में',
  description:
    'गेहूं, धान, सरसों की खेती, सरकारी योजनाएं, खाद और उर्वरक — सब कुछ हिंदी में। KisanAI का मुफ़्त ज्ञान भंडार।',
}

const categories = ['सभी', 'फसल रोग', 'खाद और उर्वरक', 'सरकारी योजना', 'खेती गाइड']

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Header */}
      <div className="bg-kisan-green text-white rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">📚</span>
          <div>
            <h1 className="text-xl font-semibold">किसान ज्ञान भंडार</h1>
            <p className="text-green-200 text-sm mt-0.5">
              खेती की पूरी जानकारी — हिंदी में, मुफ़्त
            </p>
          </div>
        </div>

        {/* Search hint */}
        <div className="bg-white/10 rounded-xl px-4 py-2.5 mt-3 text-sm text-green-100 flex items-center gap-2">
          <span>🔍</span>
          <span>गेहूं, धान, PM Kisan, खाद... जो जानना है पढ़ें</span>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap border transition-all flex-shrink-0 ${
              cat === 'सभी'
                ? 'bg-kisan-green text-white border-kisan-green'
                : 'bg-white text-gray-600 border-gray-200 hover:border-kisan-green hover:text-kisan-green'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { num: `${blogPosts.length}+`, label: 'लेख' },
          { num: '100%', label: 'हिंदी में' },
          { num: 'Free', label: 'हमेशा' },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm">
            <div className="text-kisan-green font-semibold text-lg">{s.num}</div>
            <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Blog posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            {/* Category badge */}
            <div className="flex items-center justify-between mb-3">
              <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.categoryColor}`}>
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.readTime} पढ़ें</span>
            </div>

            {/* Icon + Title */}
            <div className="flex gap-3 mb-2">
              <span className="text-3xl flex-shrink-0">{post.icon}</span>
              <h2 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-kisan-green transition-colors">
                {post.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
              {post.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-kisan-green text-xs font-medium flex items-center gap-1">
                पढ़ें <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-kisan-green-pale border border-green-200 rounded-2xl p-5 mt-6 text-center">
        <p className="text-kisan-green font-medium mb-1">🤖 और जानकारी चाहिए?</p>
        <p className="text-gray-500 text-sm mb-3">
          KisanAI से सीधे हिंदी में पूछें — तुरंत जवाब मिलेगा
        </p>
        <Link
          href="/fasal-doctor"
          className="inline-block bg-kisan-green text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-kisan-green-light transition-all"
        >
          🌿 AI से पूछें — Free है!
        </Link>
      </div>
    </div>
  )
}