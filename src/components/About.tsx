"use client"

import Image from "next/image"
import { Anchor, ShieldCheck, Ship, Cpu, Factory, Globe2, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"

export default function About() {
  const { t } = useLanguage()

  const divisions = [
    {
      name: "Robótica Ancud SpA",
      description: t.vidGroup.badge === "Vid Group Holding" ? "Leaders in underwater robotics and specialized net washing services for the aquaculture industry." : "Líderes en robótica submarina y servicios especializados de lavado de redes para la industria acuícola.",
      icon: Cpu,
      color: "bg-blue-500"
    },
    {
      name: "Plantas Vidsan",
      description: t.vidGroup.badge === "Vid Group Holding" ? "State-of-the-art processing facilities with a focus on food safety and premium quality." : "Instalaciones de procesamiento de última generación con foco en la inocuidad y calidad premium.",
      icon: Factory,
      color: "bg-cyan-500"
    },
    {
      name: "Exportadora Vidfran",
      description: t.vidGroup.badge === "Vid Group Holding" ? "International trade specialists connecting Chilean products with Chile, Peru, and Argentina." : "Especialistas en comercio internacional conectando productos chilenos con Chile, Perú y Argentina.",
      icon: Globe2,
      color: "bg-indigo-500"
    },
    {
      name: "Barcos Vidkare",
      description: t.vidGroup.badge === "Vid Group Holding" ? "Own fleet equipped with circulating water tanks for the safe transport of live products." : "Flota propia equipada con tanques de agua circulante para el transporte seguro de producto vivo.",
      icon: Ship,
      color: "bg-sky-500"
    }
  ]

  return (
    <>
      <section id="nosotros" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div>
                <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">{t.about.badge}</h2>
                <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
                  {t.about.title1} <br /> {t.about.title2} <br /> <span className="text-primary">{t.about.title3}</span>
                </h3>
              </div>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {t.about.text}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-black/5">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{t.about.feature1}</h4>
                  <p className="text-sm text-slate-500">{t.about.feature1Text}</p>
                </div>
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-black/5">
                    <Anchor className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">{t.about.feature2}</h4>
                  <p className="text-sm text-slate-500">{t.about.feature2Text}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl group">
                <Image 
                  src="https://www.vidsanseafoods.cl/wp-content/uploads/2025/01/Copia-de-Muelle-Ancud.jpg"
                  alt="Vidsan Facilities Muelle Ancud"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />

                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/20">
                  <div className="flex items-center gap-6">
                    <span className="text-6xl font-black text-white tracking-tighter">15</span>
                    <div className="h-10 w-px bg-white/20" />
                    <p className="text-xs font-black text-white uppercase tracking-[0.2em] leading-tight">
                      {t.about.years.split(' ')[0]} <br /> {t.about.years.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vid-group" className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">{t.vidGroup.badge}</h2>
              <p className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
                {t.vidGroup.title.split(' ')[0]} <br /> {t.vidGroup.title.split(' ').slice(1).join(' ')}
              </p>
            </div>
            <p className="text-white/40 max-w-sm text-sm font-medium leading-relaxed">
              {t.vidGroup.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {divisions.map((div, idx) => (
              <div 
                key={idx}
                className="group relative p-10 rounded-[32px] bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div.icon className="h-40 w-40 text-white" />
                </div>
                
                <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center mb-8 shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-6", div.color)}>
                  <div.icon className="h-7 w-7 text-white" />
                </div>
                
                <h4 className="text-xl font-black mb-4 tracking-tight">{div.name}</h4>
                <p className="text-white/40 text-sm leading-relaxed font-medium">
                  {div.description}
                </p>
                
                <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{t.vidGroup.explore} →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}


