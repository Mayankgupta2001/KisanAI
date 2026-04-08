'use client'
import { useState, useRef, useEffect } from 'react'
import Disclaimer from './Disclaimer'
import HelplineBar from './HelplineBar'

interface Message {
  role: 'user' | 'ai'
  content: string
}

interface ChatBoxProps {
  apiEndpoint: string
  buildPayload: (input: string) => Record<string, string>
  placeholder?: string
  suggestedQuestions?: string[]
  icon?: string
}

export default function ChatBox({
  apiEndpoint,
  buildPayload,
  placeholder = 'अपना सवाल हिंदी में लिखें...',
  suggestedQuestions = [],
  icon = '🤖',
}: ChatBoxProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text?: string) {
    const query = text || input
    if (!query.trim() || loading) return

    const userMsg: Message = { role: 'user', content: query }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(query)),
      })
      const data = await res.json()
      const aiMsg: Message = {
        role: 'ai',
        content: data.result || 'कुछ गड़बड़ हुई। दोबारा कोशिश करें।',
      }
      setMessages((prev) => [...prev, aiMsg])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'ai', content: 'इंटरनेट कनेक्शन जाँचें और दोबारा कोशिश करें।' },
      ])
    }
    setLoading(false)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Suggested questions */}
      {suggestedQuestions.length > 0 && messages.length === 0 && (
        <div>
          <p className="text-xs text-gray-500 mb-2 font-medium">💡 इनमें से कोई सवाल चुनें:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs bg-kisan-green-pale border border-green-200 text-kisan-green rounded-xl px-3 py-1.5 hover:bg-kisan-green hover:text-white transition-all text-left"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat messages */}
      {messages.length > 0 && (
        <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto pr-1">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2.5 fade-in ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0 ${
                  msg.role === 'ai' ? 'bg-kisan-green text-white' : 'bg-kisan-gold text-white'
                }`}
              >
                {msg.role === 'ai' ? icon : '👨‍🌾'}
              </div>

              {/* Bubble */}
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-kisan-green text-white rounded-tr-sm'
                    : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div className="flex gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-kisan-green flex items-center justify-center text-base flex-shrink-0">
                {icon}
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1.5 items-center h-5">
                  <span className="typing-dot w-2 h-2 rounded-full bg-kisan-green inline-block" />
                  <span className="typing-dot w-2 h-2 rounded-full bg-kisan-green inline-block" />
                  <span className="typing-dot w-2 h-2 rounded-full bg-kisan-green inline-block" />
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      )}

      {/* Input */}
      <div className="flex gap-2 mt-1">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          placeholder={placeholder}
          className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-kisan-green focus:ring-1 focus:ring-kisan-green transition-all bg-white"
        />
        <button
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          className="bg-kisan-green text-white rounded-2xl px-4 py-3 flex items-center justify-center disabled:opacity-40 hover:bg-kisan-green-light transition-all active:scale-95"
          aria-label="भेजें"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <Disclaimer />
      <HelplineBar />
    </div>
  )
}