"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, AlertTriangle, Phone, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";

type PoolSize = "small" | "medium" | "large" | "xlarge";
type ServiceType = "weekly" | "biweekly" | "monthly" | "green-recovery" | "acid-wash" | "resurfacing" | "salt-system" | "drain-refill" | "deck-wash";

const poolSizes: Record<PoolSize, { labelEn: string; labelEs: string; gallons: string }> = {
  small: { labelEn: "Small (up to 10,000 gal)", labelEs: "Pequeña (hasta 10,000 gal)", gallons: "≤10K" },
  medium: { labelEn: "Medium (10,000–20,000 gal)", labelEs: "Mediana (10,000–20,000 gal)", gallons: "10-20K" },
  large: { labelEn: "Large (20,000–35,000 gal)", labelEs: "Grande (20,000–35,000 gal)", gallons: "20-35K" },
  xlarge: { labelEn: "Extra Large (35,000+ gal)", labelEs: "Extra Grande (35,000+ gal)", gallons: "35K+" },
};

const services: Record<ServiceType, { labelEn: string; labelEs: string; prices: Record<PoolSize, [number, number]> }> = {
  weekly: {
    labelEn: "Weekly Pool Service",
    labelEs: "Servicio Semanal",
    prices: { small: [100, 140], medium: [130, 175], large: [160, 220], xlarge: [200, 280] },
  },
  biweekly: {
    labelEn: "Bi-Weekly Service",
    labelEs: "Servicio Quincenal",
    prices: { small: [130, 170], medium: [160, 210], large: [190, 260], xlarge: [240, 330] },
  },
  monthly: {
    labelEn: "Monthly Maintenance",
    labelEs: "Mantenimiento Mensual",
    prices: { small: [80, 110], medium: [100, 140], large: [130, 180], xlarge: [160, 220] },
  },
  "green-recovery": {
    labelEn: "Green Pool Recovery",
    labelEs: "Recuperación Piscina Verde",
    prices: { small: [250, 400], medium: [350, 550], large: [500, 750], xlarge: [650, 1000] },
  },
  "acid-wash": {
    labelEn: "Acid Wash",
    labelEs: "Lavado Ácido",
    prices: { small: [300, 450], medium: [400, 600], large: [550, 800], xlarge: [700, 1000] },
  },
  resurfacing: {
    labelEn: "Pool Resurfacing",
    labelEs: "Repavimentación",
    prices: { small: [3500, 5500], medium: [5000, 8000], large: [7000, 11000], xlarge: [9000, 15000] },
  },
  "salt-system": {
    labelEn: "Salt System Installation",
    labelEs: "Instalación Sistema de Sal",
    prices: { small: [1200, 1800], medium: [1500, 2200], large: [1800, 2800], xlarge: [2200, 3500] },
  },
  "drain-refill": {
    labelEn: "Drain & Refill",
    labelEs: "Vaciado y Rellenado",
    prices: { small: [250, 400], medium: [350, 500], large: [450, 650], xlarge: [550, 800] },
  },
  "deck-wash": {
    labelEn: "Deck Pressure Washing",
    labelEs: "Lavado a Presión del Deck",
    prices: { small: [150, 250], medium: [200, 350], large: [300, 450], xlarge: [400, 600] },
  },
};

export default function CalculatorClient() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [poolSize, setPoolSize] = useState<PoolSize | "">("");
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);

  const t = {
    en: {
      title: "Budget Calculator",
      subtitle: "Get an approximate estimate for your pool service needs",
      step1: "1. Select Your Pool Size",
      step2: "2. Choose Services",
      result: "Estimated Cost",
      perMonth: "/month",
      oneTime: "one-time",
      disclaimer: "These prices are approximate and non-binding. Final pricing depends on pool condition, access, and specific requirements. Contact us for an accurate, personalized quote.",
      total: "Total Estimate",
      monthly: "Monthly",
      oneTimeLabel: "One-Time",
      noSelection: "Select a pool size and at least one service to see your estimate",
      cta: "Get Exact Quote",
      call: "Call Us",
    },
    es: {
      title: "Calculadora de Presupuesto",
      subtitle: "Obtenga un estimado aproximado para sus necesidades de servicio de piscina",
      step1: "1. Seleccione el Tamaño de su Piscina",
      step2: "2. Elija los Servicios",
      result: "Costo Estimado",
      perMonth: "/mes",
      oneTime: "único",
      disclaimer: "Estos precios son aproximados y no vinculantes. El precio final depende del estado de la piscina, acceso y requisitos específicos. Contáctenos para un presupuesto preciso y personalizado.",
      total: "Estimado Total",
      monthly: "Mensual",
      oneTimeLabel: "Único",
      noSelection: "Seleccione un tamaño de piscina y al menos un servicio para ver su estimado",
      cta: "Presupuesto Exacto",
      call: "Llámanos",
    },
  };
  const c = t[lang];

  const toggleService = (service: ServiceType) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const monthlyServices: ServiceType[] = ["weekly", "biweekly", "monthly"];
  const isMonthly = (s: ServiceType) => monthlyServices.includes(s);

  const monthlyTotal = poolSize
    ? selectedServices
        .filter(isMonthly)
        .reduce((sum, s) => {
          const [min, max] = services[s].prices[poolSize];
          return [sum[0] + min, sum[1] + max];
        }, [0, 0])
    : [0, 0];

  const oneTimeTotal = poolSize
    ? selectedServices
        .filter((s) => !isMonthly(s))
        .reduce((sum, s) => {
          const [min, max] = services[s].prices[poolSize];
          return [sum[0] + min, sum[1] + max];
        }, [0, 0])
    : [0, 0];

  const hasSelection = poolSize && selectedServices.length > 0;

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main className="pt-28 bg-[#030a1a]">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 mb-6">
                <Calculator className="h-8 w-8 text-cyan-400" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{c.title}</h1>
              <p className="text-lg text-blue-200/60 max-w-xl mx-auto">{c.subtitle}</p>
            </motion.div>

            {/* Step 1: Pool Size */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-10"
            >
              <h2 className="text-xl font-semibold text-white mb-4">{c.step1}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {(Object.entries(poolSizes) as [PoolSize, typeof poolSizes.small][]).map(([key, size]) => (
                  <button
                    key={key}
                    onClick={() => setPoolSize(key)}
                    className={`p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                      poolSize === key
                        ? "bg-[#36b5e0]/10 border-cyan-400/40 shadow-[0_0_15px_rgba(54,181,224,0.15)]"
                        : "bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]"
                    }`}
                  >
                    <div className={`text-2xl font-bold mb-1 ${poolSize === key ? "text-cyan-400" : "text-white/60"}`}>
                      {size.gallons}
                    </div>
                    <div className={`text-xs ${poolSize === key ? "text-cyan-300/80" : "text-white/40"}`}>
                      {lang === "es" ? size.labelEs.split("(")[0] : size.labelEn.split("(")[0]}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <h2 className="text-xl font-semibold text-white mb-4">{c.step2}</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(Object.entries(services) as [ServiceType, typeof services.weekly][]).map(([key, service]) => {
                  const selected = selectedServices.includes(key);
                  const priceRange = poolSize ? service.prices[poolSize] : null;
                  return (
                    <button
                      key={key}
                      onClick={() => toggleService(key)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selected
                          ? "bg-[#36b5e0]/10 border-cyan-400/40"
                          : "bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${selected ? "text-white" : "text-white/70"}`}>
                          {lang === "es" ? service.labelEs : service.labelEn}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isMonthly(key)
                            ? "bg-cyan-400/10 text-cyan-400"
                            : "bg-amber-400/10 text-amber-400"
                        }`}>
                          {isMonthly(key) ? c.perMonth : c.oneTime}
                        </span>
                      </div>
                      {priceRange && (
                        <div className={`text-sm mt-1 ${selected ? "text-cyan-300/80" : "text-white/40"}`}>
                          ${priceRange[0].toLocaleString()} – ${priceRange[1].toLocaleString()}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[#1e56a0]/10 to-[#36b5e0]/5 border border-cyan-400/15"
            >
              <h2 className="text-2xl font-bold text-white mb-6">{c.result}</h2>

              {hasSelection ? (
                <>
                  {monthlyTotal[1] > 0 && (
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.06]">
                      <span className="text-white/60">{c.monthly}</span>
                      <span className="text-2xl font-bold text-cyan-400">
                        ${monthlyTotal[0].toLocaleString()} – ${monthlyTotal[1].toLocaleString()}{" "}
                        <span className="text-sm font-normal text-white/40">{c.perMonth}</span>
                      </span>
                    </div>
                  )}
                  {oneTimeTotal[1] > 0 && (
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                      <span className="text-white/60">{c.oneTimeLabel}</span>
                      <span className="text-2xl font-bold text-amber-400">
                        ${oneTimeTotal[0].toLocaleString()} – ${oneTimeTotal[1].toLocaleString()}
                      </span>
                    </div>
                  )}

                  {/* Disclaimer */}
                  <div className="flex gap-3 p-4 rounded-xl bg-amber-400/5 border border-amber-400/10 mb-6">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-white/50 text-sm leading-relaxed">{c.disclaimer}</p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/contact"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold hover:shadow-[0_0_30px_rgba(54,181,224,0.4)] transition-all cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      {c.cta}
                    </a>
                    <a
                      href={`tel:${SITE.phone.replace(/-/g, "")}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all cursor-pointer"
                    >
                      <Phone className="h-4 w-4" />
                      {c.call}
                    </a>
                  </div>
                </>
              ) : (
                <p className="text-white/40 text-center py-6">{c.noSelection}</p>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
