'use client'
import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <nav className="top-0 left-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-[#F2EDE3] shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.avif"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>

        {/* Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg text-2xl text-[#005A5A] transition hover:bg-[#F2EDE3]/70"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`
          absolute w-full left-0 bg-white shadow-xl border-t border-[#F2EDE3]
          transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col items-center py-4 space-y-2 px-6">

          {/* Nav Links */}
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                w-full text-center py-3 px-4 rounded-xl
                text-[#005A5A] text-lg font-medium tracking-wide
                hover:text-[#CFA45A] hover:bg-[#F2EDE3]/60
                transition-all duration-300
              "
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Button */}
          <div className="pt-4 w-full">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="
                w-full py-3 rounded-xl
                font-semibold text-lg tracking-wide
                text-white bg-[#005A5A]
                hover:bg-[#004848]
                shadow-md hover:shadow-lg
                transition flex justify-center items-center
              "
            >
              Request a Quote
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
