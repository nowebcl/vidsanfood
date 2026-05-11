"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Globe, ShieldCheck, Ship, Box, Package } from "lucide-react"
import { products } from "@/lib/data"
import { useLanguage } from "@/lib/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ProductPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">404</h1>
          <p className="text-slate-500 mb-8">Product not found / Producto no encontrado</p>
          <Link href="/#productos" className="text-primary font-black uppercase tracking-widest text-xs">
            Back to Catalog / Volver al Catálogo
          </Link>
        </div>
      </div>
    )
  }

  const name = language === "es" ? product.name_es : product.name_en
  const description = language === "es" ? product.description_es : product.description_en

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <Link href="/#productos" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors mb-12">
            <ChevronLeft className="h-4 w-4" />
            {language === "es" ? "Volver al Catálogo" : "Back to Catalog"}
          </Link>

          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
              <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl premium-shadow">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  className="object-cover"
                  unoptimized
                />

                <div className="absolute top-8 left-8">
                  <span className="bg-primary/90 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                  {name}
                </h1>
                <p className="text-xl font-black italic text-primary/60 tracking-tight">
                  {product.scientific_name}
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {description}
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <Globe className="h-6 w-6 text-primary mb-4" />
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Origin</h4>
                  <p className="text-sm text-slate-500 font-bold">{product.specs.origin || "Chilean Patagonia"}</p>
                </div>
                <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-primary mb-4" />
                  <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px] mb-2">Quality</h4>
                  <p className="text-sm text-slate-500 font-bold">Export Grade A+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                  {language === "es" ? "Formatos de Exportación" : "Export Formats"}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.formats.map((format, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-primary transition-colors">
                      <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:bg-white/20">
                        <Box className="h-5 w-5 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-sm font-black text-slate-700 group-hover:text-white">
                        {language === "es" ? format.es : format.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">
                  {language === "es" ? "Especificaciones Técnicas" : "Technical Specifications"}
                </h2>
                <div className="overflow-hidden rounded-3xl border border-slate-100">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-slate-100">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <tr key={key} className="bg-white">
                          <td className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50/50 w-1/3">
                            {key.replace('_', ' ')}
                          </td>
                          <td className="px-8 py-6 text-sm font-bold text-slate-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="sticky top-32 bg-slate-950 p-10 rounded-[40px] text-white shadow-2xl space-y-8 overflow-hidden relative">
                <div className="absolute -right-20 -top-20 h-64 w-64 bg-primary/20 rounded-full blur-[100px]" />
                
                <div className="relative z-10 space-y-6">
                  <h3 className="text-3xl font-black tracking-tighter">
                    {language === "es" ? "¿Interesado en importar?" : "Interested in importing?"}
                  </h3>
                  <p className="text-white/40 font-medium leading-relaxed">
                    {language === "es" 
                      ? "Contamos con la logística y certificaciones necesarias para despachar a cualquier mercado global."
                      : "We have the logistics and certifications required to ship to any global market."}
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <button className="w-full bg-primary py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                      {language === "es" ? "Solicitar Cotización" : "Request Quote"}
                    </button>
                    <button className="w-full bg-white/5 border border-white/10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                      {language === "es" ? "Descargar Ficha Técnica" : "Download Data Sheet"}
                    </button>
                  </div>

                  <div className="pt-10 flex items-center gap-6">
                    <div className="flex -space-x-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center overflow-hidden">
                          <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Agent" width={40} height={40} />
                        </div>
                      ))}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 leading-tight">
                      {language === "es" ? "Agentes de ventas" : "Sales Agents"} <br /> <span className="text-white">Online Now</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
