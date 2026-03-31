"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
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
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

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

export function ServicesPreview({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive pool care for every Miami homeowner",
      viewAll: "View All Services",
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Cuidado integral de piscinas para cada hogar en Miami",
      viewAll: "Ver Todos los Servicios",
    },
  };
  const c = t[lang];

  return (
    <section className="py-24 bg-[#030a1a] relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1e56a0]/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {c.title}
          </h2>
          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Droplets;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center mb-4 group-hover:from-[#36b5e0]/30 group-hover:to-[#1e56a0]/30 transition-all">
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                    {lang === "es" ? service.titleEs : service.titleEn}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {lang === "es" ? service.descEs : service.descEn}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all cursor-pointer font-medium"
          >
            {c.viewAll}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
