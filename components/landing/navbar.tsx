"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#recursos", label: "Recursos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#ats", label: "ATS" },
  { href: "#precos", label: "Preços" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-[#DC2626] to-[#991B1B] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <span className="font-semibold text-lg text-foreground">
              cv<span className="text-[#DC2626]">PERFEITO</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" className="text-sm font-medium">
              <Link href="https://cv-perfeito.vercel.app/">Entrar</Link>
            </Button>
            <Button
              asChild
              className="bg-linear-to-r from-[#DC2626] to-[#991B1B] hover:from-[#B91C1C] hover:to-[#7F1D1D] text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:shadow-red-500/40"
            >
              <Link href="https://cv-perfeito.vercel.app/">
                Analisar Currículo Grátis
              </Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-4 pt-4 border-t border-gray-100">
                <Button asChild variant="outline" className="w-full">
                  <Link
                    href="https://cv-perfeito.vercel.app/"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Entrar
                  </Link>
                </Button>
                <Button
                  asChild
                  className="w-full bg-linear-to-r from-[#DC2626] to-[#991B1B] text-white"
                >
                  <Link
                    href="https://cv-perfeito.vercel.app/"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Analisar Currículo Grátis
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
