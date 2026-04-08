'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/fasal-doctor', icon: '🌿', label: 'फसल डॉक्टर' },
  { href: '/mandi-bhav', icon: '📊', label: 'मंडी भाव' },
  { href: '/mausam-salah', icon: '🌦️', label: 'मौसम सलाह' },
  { href: '/sarkari-yojana', icon: '📋', label: 'सरकारी योजना' },
  { href: '/mitti-pariksha', icon: '🌱', label: 'मिट्टी परीक्षा' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="bg-kisan-green text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="bg-kisan-gold rounded-xl p-1.5 text-xl leading-none">🌾</span>
            <div>
              <div className="font-semibold text-[15px] leading-tight tracking-wide">KisanAI</div>
              <div className="text-[10px] text-green-200 leading-tight">किसान का डिजिटल साथी</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-all ${
                  pathname === link.href
                    ? 'bg-white/20 text-white font-medium'
                    : 'text-green-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="text-base">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-kisan-green-dark px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                  pathname === link.href
                    ? 'bg-white/20 text-white font-medium'
                    : 'text-green-100 hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex">
          <Link
            href="/"
            className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[9px] ${
              pathname === '/' ? 'text-kisan-green' : 'text-gray-500'
            }`}
          >
            <span className="text-xl">🏠</span>
            <span>होम</span>
          </Link>
          {navLinks.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2 text-[9px] ${
                pathname === link.href ? 'text-kisan-green font-medium' : 'text-gray-500'
              }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="truncate px-1">{link.label.split(' ')[0]}</span>
              {pathname === link.href && (
                <span className="w-1 h-1 bg-kisan-green rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}