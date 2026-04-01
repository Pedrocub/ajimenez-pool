"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";

const galleryItems = [
  // Cleaning - Before
  { id: 1, category: "cleaning", labelEn: "Pool Before Cleaning — Leaves & Debris", labelEs: "Piscina Antes de Limpieza — Hojas y Residuos", image: "/images/pool-before-cleaning-leaves-debris-miami.webp" },
  { id: 2, category: "cleaning", labelEn: "Dirty Pool — Before Professional Service", labelEs: "Piscina Sucia — Antes del Servicio Profesional", image: "/images/dirty-pool-debris-before-service-miami.webp" },
  // Cleaning - After
  { id: 3, category: "cleaning", labelEn: "Crystal Clear Pool — After Cleaning", labelEs: "Piscina Cristalina — Después de Limpieza", image: "/images/crystal-clear-pool-after-cleaning-miami.webp" },
  { id: 4, category: "cleaning", labelEn: "Pool Vacuum Cleaning in Progress", labelEs: "Limpieza con Aspiradora en Proceso", image: "/images/large-rectangular-pool-vacuum-cleaning-miami.webp" },
  { id: 5, category: "cleaning", labelEn: "Kidney Pool — Cleaning Service", labelEs: "Piscina Riñón — Servicio de Limpieza", image: "/images/kidney-pool-cleaning-service-miami.webp" },
  // Green Recovery
  { id: 6, category: "green-recovery", labelEn: "Green Algae Pool — Before Treatment", labelEs: "Piscina Verde con Algas — Antes del Tratamiento", image: "/images/green-algae-pool-before-treatment-miami.webp" },
  { id: 7, category: "green-recovery", labelEn: "Green Pool — Before Recovery", labelEs: "Piscina Verde — Antes de Recuperación", image: "/images/pool-green-before.webp" },
  { id: 8, category: "green-recovery", labelEn: "Crystal Clear — After Recovery", labelEs: "Cristalina — Después de Recuperación", image: "/images/pool-green-after.webp" },
  // Maintenance
  { id: 9, category: "maintenance", labelEn: "Water Chemistry pH & Chlorine Testing", labelEs: "Prueba de Química del Agua — pH y Cloro", image: "/images/water-chemistry-testing-ph-chlorine-miami.webp" },
  { id: 10, category: "maintenance", labelEn: "Above Ground Pool — Chlorine Maintenance", labelEs: "Piscina Sobre Nivel — Mantenimiento de Cloro", image: "/images/above-ground-pool-chlorine-maintenance-miami.webp" },
  { id: 11, category: "maintenance", labelEn: "Filter & Pump System Running", labelEs: "Sistema de Filtro y Bomba en Funcionamiento", image: "/images/above-ground-pool-filter-pump-miami.webp" },
  { id: 12, category: "maintenance", labelEn: "Pool with Safety Fence — Well Maintained", labelEs: "Piscina con Cerca de Seguridad — Bien Mantenida", image: "/images/rectangular-pool-safety-fence-maintained-miami.webp" },
  // Resurfacing
  { id: 13, category: "resurfacing", labelEn: "Pool Resurfacing — Before & After", labelEs: "Repavimentación — Antes y Después", image: "/images/pool-resurfacing.webp" },
  { id: 14, category: "resurfacing", labelEn: "Resurfacing in Progress", labelEs: "Repavimentación en Proceso", image: "/images/pool-resurfacing-2.webp" },
  // Luxury Pools
  { id: 15, category: "cleaning", labelEn: "Luxury Modern Pool with Spa — Mosaic Tile", labelEs: "Piscina Moderna de Lujo con Spa — Mosaico", image: "/images/luxury-modern-pool-spa-mosaic-tile-miami.webp" },
  { id: 16, category: "cleaning", labelEn: "Rectangular Pool with Tropical Landscaping", labelEs: "Piscina Rectangular con Paisajismo Tropical", image: "/images/rectangular-pool-spa-tropical-landscaping-miami.webp" },
  { id: 17, category: "cleaning", labelEn: "Modern Pool with Pergola", labelEs: "Piscina Moderna con Pérgola", image: "/images/modern-rectangular-pool-pergola-miami.webp" },
  { id: 18, category: "cleaning", labelEn: "Luxury Pool — Travertine & Mediterranean Style", labelEs: "Piscina de Lujo — Estilo Mediterráneo", image: "/images/luxury-pool-travertine-mediterranean-miami.webp" },
  { id: 19, category: "cleaning", labelEn: "Clean Pool with Travertine Deck", labelEs: "Piscina Limpia con Deck de Travertino", image: "/images/clean-rectangular-pool-travertine-deck-miami.webp" },
  { id: 20, category: "cleaning", labelEn: "Residential Pool with Spa — Blue Tile", labelEs: "Piscina Residencial con Spa — Azulejo Azul", image: "/images/residential-pool-spa-blue-tile-miami.webp" },
  { id: 21, category: "cleaning", labelEn: "Freeform Pool — Crystal Clear Water", labelEs: "Piscina de Forma Libre — Agua Cristalina", image: "/images/freeform-backyard-pool-clear-water-miami.webp" },
  { id: 22, category: "cleaning", labelEn: "Freeform Pool with Safety Fence", labelEs: "Piscina de Forma Libre con Cerca de Seguridad", image: "/images/freeform-pool-safety-fence-clean-water-miami.webp" },
  { id: 23, category: "cleaning", labelEn: "Screened Pool — Night Blue Lighting", labelEs: "Piscina con Pantalla — Iluminación Nocturna Azul", image: "/images/screened-pool-night-blue-lighting-miami.webp" },
  // Our Team
  { id: 24, category: "maintenance", labelEn: "Our Pool Technician at Work", labelEs: "Nuestro Técnico de Piscinas en Acción", image: "/images/pool-technician-clean-residential-pool-miami.webp" },
  { id: 25, category: "maintenance", labelEn: "A. Jiménez Pool Service Vehicle", labelEs: "Vehículo de A. Jiménez Pool Service", image: "/images/ajimenez-pool-service-vehicle-miami.jpeg" },
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
    en: { title: "Our Work", subtitle: "Real photos from real Miami pools — see the A. Jiménez difference" },
    es: { title: "Nuestro Trabajo", subtitle: "Fotos reales de piscinas reales en Miami — vea la diferencia A. Jiménez" },
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
