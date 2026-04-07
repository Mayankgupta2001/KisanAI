'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { href: '/fasal-doctor', label: '🌿 फसल डॉक्टर' },
  { href: '/mandi-bhav', label: '📊 मंडी भाव' },
  { href: '/mausam-salah', label: '🌦️ मौसम सलाह' },
  { href: '/sarkari-yojana', label: '📋 सरकारी योजना' },
  { href: '/mitti-pariksha', label: '🌱 मिट्टी परीक्षा' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-kisan-green text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="bg-kisan-gold rounded-lg p-1.5 text-xl">🌾</span>
          <div>
            <div className="font-semibold text-base leading-tight">KisanAI</div>
            <div className="text-[10px] text-green-200">किसान का डिजिटल साथी</div>
          </div>
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex gap-4 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-kisan-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-kisan-green-light px-4 pb-4 flex flex-col gap-3 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-kisan-gold">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}