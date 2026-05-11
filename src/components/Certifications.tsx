"use client"

import { CheckCircle2, Award, ShieldCheck, Zap } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

export default function Certifications() {
  const { t } = useLanguage()
  
  const iconMap = [ShieldCheck, Award, CheckCircle2, Zap]

  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-white max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-black mb-6 tracking-tighter">{t.certifications.title}</h2>
            <p className="text-white/40 text-lg font-medium leading-relaxed">
              {t.certifications.text}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12">
            {t.certifications.items.map((item, idx) => {
              const Icon = iconMap[idx]
              return (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                  <div className="h-20 w-20 rounded-[28px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white group-hover:text-white" />
                  </div>
                  <span className="text-white/40 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


