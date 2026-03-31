"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Droplets } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";

// Placeholder gallery items - will be replaced with real images later
const galleryItems = [
  { id: 1, category: "green-recovery", labelEn: "Green Pool — Before Treatment", labelEs: "Piscina Verde — Antes del Tratamiento", image: "/images/pool-green-before.webp" },
  { id: 2, category: "green-recovery", labelEn: "Crystal Clear — After Recovery", labelEs: "Cristalina — Después de Recuperación", image: "/images/pool-green-after.webp" },
  { id: 3, category: "resurfacing", labelEn: "Pool Resurfacing — Before & After", labelEs: "Repavimentación — Antes y Después", image: "/images/pool-resurfacing.webp" },
  { id: 4, category: "resurfacing", labelEn: "Resurfacing in Progress", labelEs: "Repavimentación en Proceso", image: "/images/pool-resurfacing-2.webp" },
  { id: 5, category: "maintenance", labelEn: "Water Chemistry Testing", labelEs: "Prueba de Química del Agua", image: "/images/pool-service-tech.webp" },
  { id: 6, category: "cleaning", labelEn: "Our Service Vehicle", labelEs: "Nuestro Vehículo de Servicio", image: "/images/ajimenez-pool-service-vehicle-miami.jpeg" },
  { id: 7, category: "cleaning", labelEn: "A. Jiménez Pool Service", labelEs: "A. Jiménez Pool Service", image: "/images/ajimenez-pool-service-miami-promo.jpeg" },
  { id: 8, category: "cleaning", labelEn: "Ready for Service", labelEs: "Listos para el Servicio", image: "/images/extracted/ajimenez-pool-service-truck-front.jpeg" },
];

const categories = {
  en: [
    { key: "all", label: "All" },
    { key: "cleaning", label: "Cleaning" },
    { key: "green-recovery", label: "Green Recovery" },
    { key: "resurfacing", label: "Resurfacing" },
    { key: "maintenance", label: "Maintenance" },
    { key: "deck", label: "Deck" },
    { key: "salt-system", label: "Salt System" },
  ],
  es: [
    { key: "all", label: "Todos" },
    { key: "cleaning", label: "Limpieza" },
    { key: "green-recovery", label: "Recuperación" },
    { key: "resurfacing", label: "Repavimentación" },
    { key: "maintenance", label: "Mantenimiento" },
    { key: "deck", label: "Deck" },
    { key: "salt-system", label: "Sistema de Sal" },
  ],
};

export default function GalleryClient() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const t = {
    en: { title: "Our Work", subtitle: "See the results that keep Miami's pools crystal clear", placeholder: "Photos coming soon — generating with AI" },
    es: { title: "Nuestro Trabajo", subtitle: "Vea los resultados que mantienen las piscinas de Miami cristalinas", placeholder: "Fotos próximamente — generando con IA" },
  };
  const c = t[lang];
  const cats = categories[lang];

  const filtered = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main className="pt-28 bg-[#030a1a]">
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{c.title}</h1>
              <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{c.subtitle}</p>
            </motion.div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {cats.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                    activeCategory === cat.key
                      ? "bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white shadow-[0_0_15px_rgba(54,181,224,0.3)]"
                      : "bg-white/[0.04] text-white/50 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Gallery grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedItem(item.id)}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-[4/3] rounded-2xl border border-white/[0.06] overflow-hidden relative hover:border-cyan-400/20 transition-all">
                      <Image
                        src={item.image}
                        alt={lang === "es" ? item.labelEs : item.labelEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white font-medium text-sm">
                          {lang === "es" ? item.labelEs : item.labelEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <p className="text-center text-white/30 text-sm mt-8">{c.placeholder}</p>
          </div>
        </section>

        <CtaSection lang={lang} />
      </main>
      <Footer lang={lang} />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white cursor-pointer"
            >
              <X className="h-8 w-8" />
            </button>
            {(() => {
              const item = galleryItems.find((g) => g.id === selectedItem);
              return item ? (
                <div className="max-w-4xl w-full aspect-[16/10] rounded-2xl border border-white/10 overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={lang === "es" ? item.labelEs : item.labelEn}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : null;
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
