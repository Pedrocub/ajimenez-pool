"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ChevronRight,
  Phone,
  MessageCircle,
  Sparkles,
  Wrench,
  Beaker,
  Filter,
  PaintBucket,
  Grid3X3,
  Zap,
  Leaf,
  Droplets,
  ArrowDownUp,
  Waves,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";
import { SITE, SERVICES } from "@/lib/constants";
import type { ServiceDetail } from "@/lib/service-content";

const iconMap: Record<string, React.ElementType> = {
  sparkles: Sparkles,
  wrench: Wrench,
  beaker: Beaker,
  filter: Filter,
  paintBucket: PaintBucket,
  grid: Grid3X3,
  zap: Zap,
  leaf: Leaf,
  droplets: Droplets,
  arrowDownUp: ArrowDownUp,
  waves: Waves,
  shieldCheck: ShieldCheck,
};

export function ServicePageClient({ service }: { service: ServiceDetail }) {
  const [lang, setLang] = useState<"en" | "es">("en");
  const Icon = iconMap[service.icon] || Droplets;

  const title = lang === "es" ? service.titleEs : service.titleEn;
  const desc = lang === "es" ? service.longDescEs : service.longDescEn;
  const benefits = lang === "es" ? service.benefitsEs : service.benefitsEn;
  const process = lang === "es" ? service.processEs : service.processEn;

  const t = {
    en: {
      back: "All Services",
      benefits: "Benefits",
      process: "Our Process",
      cta: "Get a Free Quote",
      call: `Call ${SITE.phone}`,
      otherServices: "Other Services",
    },
    es: {
      back: "Todos los Servicios",
      benefits: "Beneficios",
      process: "Nuestro Proceso",
      cta: "Presupuesto Gratis",
      call: `Llama ${SITE.phone}`,
      otherServices: "Otros Servicios",
    },
  };
  const c = t[lang];

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />

      <main className="pt-28 pb-0 bg-[#030a1a]">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1e56a0]/15 via-transparent to-[#36b5e0]/10" />
          <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-[#36b5e0]/8 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-cyan-400/80 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                {c.back}
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 border border-cyan-400/10 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    {title}
                  </h1>
                  <p className="text-lg text-blue-200/60 leading-relaxed">
                    {desc}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3 mt-8"
                >
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold hover:shadow-[0_0_30px_rgba(54,181,224,0.4)] transition-all cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {c.cta}
                  </a>
                  <a
                    href={`tel:${SITE.phone.replace(/-/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all cursor-pointer"
                  >
                    <Phone className="h-4 w-4" />
                    {c.call}
                  </a>
                </motion.div>
              </div>

              {/* Right - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold text-white mb-6">{c.benefits}</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-white/70">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-b from-[#030a1a] to-[#0a1628]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
            >
              {c.process}
            </motion.h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-4xl font-bold text-cyan-400/20 mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-white/80 font-medium">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-20 bg-[#0a1628]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              {c.otherServices}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherServices.map((s) => {
                const SIcon = iconMap[s.icon] || Droplets;
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 transition-all cursor-pointer flex items-center gap-3"
                  >
                    <SIcon className="h-5 w-5 text-cyan-400 shrink-0" />
                    <span className="text-white/70 group-hover:text-white text-sm transition-colors">
                      {lang === "es" ? s.titleEs : s.titleEn}
                    </span>
                    <ChevronRight className="h-4 w-4 text-white/30 ml-auto shrink-0" />
                  </Link>
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
