"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"

export default function Footer() {
  const { language, t } = useLanguage()


  return (
    <footer id="contacto" className="bg-slate-950 text-white pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative h-14 w-14">
                <Image
                  src="/logo-blanco.png"
                  alt="Vidsan Logo Blanco"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter">
                VIDSAN<span className="text-primary">SEAFOODS</span>
              </span>
            </Link>



            <p className="text-white/40 text-sm leading-relaxed font-medium">
              {t.footer.text}
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-white/40 group-hover:text-white" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-white/40 group-hover:text-white" />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group">
                <Youtube className="h-5 w-5 text-white/40 group-hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">{t.footer.navTitle}</h4>
            <ul className="space-y-4 text-sm font-bold text-white/40">
              <li><Link href="#inicio" className="hover:text-white transition-colors">{t.nav.inicio}</Link></li>
              <li><Link href="#productos" className="hover:text-white transition-colors">{t.nav.productos}</Link></li>
              <li><Link href="#nosotros" className="hover:text-white transition-colors">{t.nav.nosotros}</Link></li>
              <li><Link href="#vid-group" className="hover:text-white transition-colors">{t.nav.vidGroup}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">{t.footer.contactTitle}</h4>
            <ul className="space-y-6 text-sm font-bold text-white/40">
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-primary" />
                <span>sales@vidsanseafoods.cl</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-5 w-5 text-primary" />
                <span>+56-9 9239 5510</span>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="leading-relaxed">Pugueñun, lote 2. <br /> Ancud – Chile</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-8">{t.footer.newsletterTitle}</h4>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/5 space-y-6">
              <p className="text-xs font-medium text-white/40 leading-relaxed">{t.footer.newsletterText}</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:border-primary transition-all"
                />
                <button className="w-full bg-primary text-white text-[10px] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                  {t.footer.subscribe}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
            <p>{t.footer.rights}</p>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/20">
            {language === "es" ? "Desarrollado por" : "Developed by"}{" "}
            <Link 
              href="https://www.noweb.cl/" 
              target="_blank" 
              className="text-primary hover:text-white transition-colors"
            >
              Noweb Labs
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
