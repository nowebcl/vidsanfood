"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="inicio" className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        >
          <source src="/1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 container mx-auto px-6 pt-32">
        <div className="max-w-4xl mx-auto text-center space-y-10">

          <div className="space-y-4 inline-block">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
              {t.hero.badge}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-primary bg-300% animate-gradient">
              {t.hero.title2}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed font-medium">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              href="#productos"
              className="group relative px-12 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40"
            >
              <span className="relative z-10">{t.hero.ctaPrimary}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link 
              href="#nosotros"
              className="px-12 py-5 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-all backdrop-blur-md"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>

        </div>
      </div>

      
      {/* Decorative Elements */}
      <div className="absolute bottom-12 left-6 z-20 hidden md:block">
        <div className="flex items-center gap-4 text-white/30 text-[10px] font-black uppercase tracking-[0.3em] vertical-rl">
          <span>EST. 2010</span>
          <div className="w-px h-12 bg-white/20" />
          <span>ANCUD, CHILE</span>
        </div>
      </div>
    </section>
  )
}


