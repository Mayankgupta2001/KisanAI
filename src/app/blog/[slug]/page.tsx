import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts, getPostBySlug, getAllSlugs } from '../_posts'
import HelplineBar from '@/components/HelplineBar'
import Disclaimer from '@/components/Disclaimer'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'hi_IN',
    },
  }
}

// Simple markdown-like renderer
function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (!line) { i++; continue }

    // H2
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-lg font-semibold text-gray-900 mt-6 mb-3 flex items-center gap-2">
          <span className="w-1 h-5 bg-kisan-green rounded-full flex-shrink-0" />
          {line.replace('## ', '')}
        </h2>
      )
    }
    // H3
    else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-base font-semibold text-gray-800 mt-4 mb-2">
          {line.replace('### ', '')}
        </h3>
      )
    }
    // Table
    else if (line.startsWith('|')) {
      const tableLines: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim())
        i++
      }
      const rows = tableLines.filter((r) => !r.match(/^\|[-| ]+\|$/))
      elements.push(
        <div key={i} className="overflow-x-auto my-3">
          <table className="w-full text-sm border-collapse">
            {rows.map((row, ri) => {
              const cells = row.split('|').filter((c) => c.trim())
              return ri === 0 ? (
                <thead key={ri}>
                  <tr className="bg-kisan-green text-white">
                    {cells.map((cell, ci) => (
                      <th key={ci} className="px-3 py-2 text-left font-medium text-sm rounded">
                        {cell.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
              ) : (
                <tbody key={`body-${ri}`}>
                  <tr className={ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-3 py-2 text-gray-700 border-b border-gray-100">
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      )
      continue
    }
    // Blockquote
    else if (line.startsWith('> ')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-kisan-gold bg-amber-50 rounded-r-xl px-4 py-3 my-3 text-sm text-amber-800 italic">
          {line.replace('> ', '')}
        </blockquote>
      )
    }
    // Bold line (standalone)
    else if (line.startsWith('**') && line.endsWith('**') && line.indexOf('**', 2) === line.length - 2) {
      elements.push(
        <p key={i} className="font-semibold text-gray-800 mt-2 mb-1 text-sm">
          {line.replace(/\*\*/g, '')}
        </p>
      )
    }
    // List item
    else if (line.startsWith('- ') || line.startsWith('✅ ') || line.startsWith('❌ ')) {
      const isCheck = line.startsWith('✅')
      const isCross = line.startsWith('❌')
      const text = line.replace(/^[-✅❌] /, '')
      elements.push(
        <div key={i} className="flex gap-2 items-start my-1.5">
          <span className="flex-shrink-0 mt-0.5">
            {isCheck ? '✅' : isCross ? '❌' : <span className="w-1.5 h-1.5 bg-kisan-green rounded-full mt-2 block" />}
          </span>
          <span className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
            __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>
      )
    }
    // Numbered list
    else if (/^\d+\. /.test(line)) {
      const num = line.match(/^(\d+)\. /)?.[1]
      const text = line.replace(/^\d+\. /, '')
      elements.push(
        <div key={i} className="flex gap-3 items-start my-2">
          <span className="w-6 h-6 bg-kisan-green text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
            {num}
          </span>
          <span className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{
            __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>
      )
    }
    // Phone number line
    else if (line.includes('📞')) {
      elements.push(
        <div key={i} className="bg-kisan-green-pale border border-green-200 rounded-xl px-4 py-3 my-3 text-sm text-kisan-green font-medium">
          {line}
        </div>
      )
    }
    // Regular paragraph
    else {
      elements.push(
        <p key={i} className="text-sm text-gray-700 leading-relaxed my-2" dangerouslySetInnerHTML={{
          __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
        }} />
      )
    }

    i++
  }

  return elements
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 pb-24 md:pb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <Link href="/" className="hover:text-kisan-green">होम</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-kisan-green">ब्लॉग</Link>
        <span>›</span>
        <span className="text-gray-700 truncate">{post.title.slice(0, 30)}...</span>
      </div>

      {/* Article header */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${post.categoryColor}`}>
            {post.category}
          </span>
          <span className="text-xs text-gray-400">{post.readTime} पढ़ें</span>
        </div>

        <div className="flex gap-3 mb-3">
          <span className="text-4xl">{post.icon}</span>
          <h1 className="text-lg font-semibold text-gray-900 leading-snug">{post.title}</h1>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-3">{post.description}</p>

        <div className="flex items-center gap-3 text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span>📅 {post.date}</span>
          <span>•</span>
          <span>🤖 KisanAI</span>
          <span>•</span>
          <span>🇮🇳 हिंदी</span>
        </div>
      </div>

      {/* Article content */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 mb-4 shadow-sm">
        {renderContent(post.content)}
      </div>

      {/* AI CTA */}
      <div className="bg-kisan-green text-white rounded-2xl p-5 mb-4 text-center">
        <p className="font-medium mb-1">🤖 और सवाल हैं?</p>
        <p className="text-green-200 text-sm mb-3">
          KisanAI से हिंदी में सीधे पूछें — तुरंत जवाब मिलेगा
        </p>
        <Link
          href="/fasal-doctor"
          className="inline-block bg-kisan-gold text-white rounded-xl px-6 py-2.5 text-sm font-medium hover:bg-kisan-gold-dark transition-all"
        >
          🌿 AI से पूछें — Free!
        </Link>
      </div>

      <Disclaimer />
      <HelplineBar />

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <span className="w-1 h-4 bg-kisan-green rounded-full" />
            और पढ़ें
          </h3>
          <div className="flex flex-col gap-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-3 hover:shadow-sm hover:border-kisan-green transition-all group"
              >
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-kisan-green transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{p.readTime} पढ़ें</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}