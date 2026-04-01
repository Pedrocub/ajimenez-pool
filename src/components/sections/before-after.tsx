"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BeforeAfter({ lang = "en" }: { lang?: "en" | "es" }) {
  const [sliderPos, setSliderPos] = useState(50);

  const t = {
    en: {
      title: "See the Difference",
      subtitle: "Real results from real Miami pools — no stock photos",
      before: "Before",
      after: "After",
      caption: "Green Pool Recovery — Algae treatment and complete restoration",
      resurfTitle: "Pool Resurfacing",
      resurfCaption: "Professional pool cleaning — real results from our Miami clients",
    },
    es: {
      title: "Vea la Diferencia",
      subtitle: "Resultados reales de piscinas reales en Miami — sin fotos de stock",
      before: "Antes",
      after: "Después",
      caption: "Recuperación de Piscina Verde — Tratamiento de algas y restauración completa",
      resurfTitle: "Repavimentación",
      resurfCaption: "Limpieza profesional de piscinas — resultados reales de nuestros clientes en Miami",
    },
  };
  const c = t[lang];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a1628] to-[#030a1a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#36b5e0]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{c.title}</h2>
          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{c.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Before/After Slider - Green Pool */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/[0.08] cursor-col-resize select-none"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setSliderPos(((e.clientX - rect.left) / rect.width) * 100);
              }}
              onTouchMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const touch = e.touches[0];
                setSliderPos(((touch.clientX - rect.left) / rect.width) * 100);
              }}
            >
              {/* After (full background) */}
              <Image
                src="/images/pool-green-after.webp"
                alt="Crystal clear pool after green pool recovery treatment by A. Jiménez Pool Service Miami"
                fill
                className="object-cover"
              />
              {/* Before (clipped) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image
                  src="/images/green-algae-pool-before-treatment-miami.webp"
                  alt="Green algae pool before treatment in Miami"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0a1628]" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500/80 text-white text-xs font-semibold z-20">
                {c.before}
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500/80 text-white text-xs font-semibold z-20">
                {c.after}
              </div>
            </div>
            <p className="text-white/40 text-sm mt-3 text-center">{c.caption}</p>
          </motion.div>

          {/* Before/After grid - real photos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/images/dirty-pool-debris-before-service-miami.webp"
                  alt="Dirty pool with debris before professional cleaning service in Miami"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-500/80 text-white text-xs font-semibold">
                  {c.before}
                </div>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src="/images/crystal-clear-pool-after-cleaning-miami.webp"
                  alt="Crystal clear pool after professional cleaning by A. Jiménez in Miami"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-green-500/80 text-white text-xs font-semibold">
                  {c.after}
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm text-center">{c.resurfCaption}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
