"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Productos", href: "#productos" },
  { name: "Quiénes Somos", href: "#nosotros" },
  { name: "Vid Group", href: "#vid-group" },
  { name: "Contacto", href: "#contacto" },
]

import { useLanguage } from "@/lib/LanguageContext"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isLightMode = scrolled || !isHomePage

  const navItems = [
    { name: t.nav.inicio, href: "#inicio" },
    { name: t.nav.productos, href: "#productos" },
    { name: t.nav.nosotros, href: "#nosotros" },
    { name: t.nav.vidGroup, href: "https://vidsangroup.com/" },
    { name: t.nav.contacto, href: "#contacto" },
  ]


  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isLightMode ? "glass-morphism py-3 shadow-lg shadow-black/5" : "bg-transparent py-6"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="group flex items-center gap-4">
            <div className="relative h-12 w-12 group-hover:rotate-6 transition-transform">
              <Image
                src="/logo-blanco.png"
                alt="Vidsan Logo"
                fill
                className={cn(
                  "object-contain",
                  isLightMode && "brightness-0"
                )}
              />
            </div>


            <span className={cn(
              "text-2xl font-black tracking-tighter transition-colors",
              isLightMode ? "text-foreground" : "text-white"
            )}>
              VIDSAN<span className="text-primary group-hover:text-primary/80 transition-colors">SEAFOODS</span>
            </span>
          </Link>
        </div>

        
        <div className="flex lg:hidden">
          <button
            type="button"
            className={cn(
              "p-2 rounded-xl transition-colors",
              isLightMode ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href.startsWith('http') ? item.href : (isHomePage ? item.href : `/${item.href}`)}
              target={item.href.startsWith('http') ? "_blank" : undefined}
              className={cn(
                "text-[13px] font-bold uppercase tracking-widest transition-all hover:text-primary relative group",
                isLightMode ? "text-foreground/80" : "text-white/80"
              )}
            >

              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <button 
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className={cn(
              "flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary",
              isLightMode ? "text-foreground" : "text-white"
            )}
          >
            <Globe className="h-4 w-4 text-primary" />
            <span>{language === "es" ? "EN / ES" : "ES / EN"}</span>
          </button>
          <Link
            href="#contacto"
            className="rounded-xl bg-primary px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
          >
            {t.nav.quote}
          </Link>
        </div>
      </nav>


      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 z-50 lg:hidden transition-all duration-500",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto bg-white px-8 py-8 shadow-2xl transition-transform duration-500",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex items-center justify-between mb-12">
            <span className="text-2xl font-black tracking-tighter text-foreground">VIDSAN</span>
            <button
              type="button"
              className="p-2 rounded-full hover:bg-black/5 text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href.startsWith('http') ? item.href : (isHomePage ? item.href : `/${item.href}`)}
                target={item.href.startsWith('http') ? "_blank" : undefined}
                className="block text-2xl font-bold text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-8 border-t border-black/5 mt-8 space-y-6">
              <button 
                onClick={() => {
                  setLanguage(language === "es" ? "en" : "es")
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-3 text-lg font-bold text-foreground"
              >
                <Globe className="h-6 w-6 text-primary" />
                Language: {language === "es" ? "English" : "Español"}
              </button>
              <Link
                href="#contacto"
                className="block w-full rounded-2xl bg-primary py-4 text-center text-lg font-bold text-white shadow-xl shadow-primary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.quote}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}


