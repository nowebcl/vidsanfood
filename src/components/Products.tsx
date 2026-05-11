"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/LanguageContext"
import { products } from "@/lib/data"


const categories = ["VIVO", "FRESCO ENFRIADO", "CRUDO CONGELADO", "COCIDO CONGELADO", "AHUMADO"]

export default function Products() {
  const { language, t } = useLanguage()


  return (
    <section id="productos" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">{t.products.badge}</h2>
            <p className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none">
              {t.products.title.split(' ')[0]} <br /> {t.products.title.split(' ').slice(1).join(' ')}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span 
                key={cat}
                className="px-5 py-2 rounded-xl border border-slate-100 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-primary hover:text-primary transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Link 
              key={idx}
              href={`/productos/${product.slug}`}
              className="group relative bg-white rounded-3xl overflow-hidden premium-shadow transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={language === "es" ? product.name_es : product.name_en}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  unoptimized
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {language === "es" ? product.name_es : product.name_en}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {language === "es" ? product.description_es : product.description_en}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                    {t.products.details} <ChevronRight className="h-3 w-3" />
                  </span>
                  <div className="h-px flex-1 bg-slate-100 mx-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        
        <div className="mt-20 text-center">
          <button className="inline-flex items-center gap-4 px-12 py-5 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-primary transition-all shadow-2xl hover:shadow-primary/40">
            {t.products.download}
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  )
}


