"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles, Wrench, Beaker, Filter, PaintBucket, Grid3X3,
  Zap, Leaf, Droplets, ArrowDownUp, Waves, ShieldCheck, ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles, wrench: Wrench, beaker: Beaker, filter: Filter,
  paintBucket: PaintBucket, grid: Grid3X3, zap: Zap, leaf: Leaf,
  droplets: Droplets, arrowDownUp: ArrowDownUp, waves: Waves, shieldCheck: ShieldCheck,
};

export default function ServicesClient() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = {
    en: { title: "Our Services", subtitle: "Complete pool care solutions for every Miami homeowner", learnMore: "Learn More" },
    es: { title: "Nuestros Servicios", subtitle: "Soluciones completas de cuidado de piscinas para cada hogar en Miami", learnMore: "Más Información" },
  };
  const c = t[lang];

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main className="pt-28 bg-[#030a1a]">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{c.title}</h1>
              <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{c.subtitle}</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, index) => {
                const Icon = iconMap[service.icon] || Droplets;
                return (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer h-full"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center mb-5 group-hover:from-[#36b5e0]/30 group-hover:to-[#1e56a0]/30 transition-all">
                        <Icon className="h-7 w-7 text-cyan-400" />
                      </div>
                      <h2 className="text-xl text-white font-semibold mb-3 group-hover:text-cyan-300 transition-colors">
                        {lang === "es" ? service.titleEs : service.titleEn}
                      </h2>
                      <p className="text-white/40 text-sm leading-relaxed mb-4">
                        {lang === "es" ? service.descEs : service.descEn}
                      </p>
                      <span className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                        {c.learnMore} <ArrowRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <CtaSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
