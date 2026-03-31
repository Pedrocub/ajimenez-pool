"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function CtaSection({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = {
    en: {
      title: "Ready for Crystal Clear Water?",
      subtitle:
        "Get your free estimate today. We'll have your pool looking perfect in no time.",
      cta1: "Get Free Quote",
      cta2: `Call ${SITE.phone}`,
    },
    es: {
      title: "¿Listo para Agua Cristalina?",
      subtitle:
        "Obtenga su presupuesto gratis hoy. Tendremos su piscina perfecta en poco tiempo.",
      cta1: "Presupuesto Gratis",
      cta2: `Llama ${SITE.phone}`,
    },
  };
  const c = t[lang];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e56a0]/20 via-[#030a1a] to-[#36b5e0]/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#36b5e0]/10 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {c.title}
          </h2>
          <p className="text-lg text-blue-200/60 mb-10 max-w-2xl mx-auto">
            {c.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(54,181,224,0.4)] hover:scale-105 transition-all cursor-pointer"
            >
              <MessageCircle className="h-5 w-5" />
              {c.cta1}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-cyan-400/50 transition-all cursor-pointer"
            >
              <Phone className="h-5 w-5" />
              {c.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
