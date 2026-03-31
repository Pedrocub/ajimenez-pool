"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/constants";

/* ── Rain Drops ── falling from top ── */
function RainDrop({ delay, left, duration }: { delay: number; left: string; duration: number }) {
  return (
    <motion.div
      className="absolute top-0 w-[2px] rounded-full"
      style={{
        left,
        height: 20 + Math.random() * 40,
        background: "linear-gradient(to bottom, transparent, rgba(54, 181, 224, 0.6), transparent)",
      }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    />
  );
}

/* ── Splash Particle ── flies outward from center ── */
function SplashParticle({
  angle,
  distance,
  size,
  delay,
}: {
  angle: number;
  distance: number;
  size: number;
  delay: number;
}) {
  const rad = (angle * Math.PI) / 180;
  const endX = Math.cos(rad) * distance;
  const endY = Math.sin(rad) * distance;

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "45%",
        background: `radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.9), rgba(54, 181, 224, 0.4))`,
        boxShadow: "0 0 6px rgba(54, 181, 224, 0.5)",
      }}
      initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
      animate={{
        x: [0, endX * 0.6, endX],
        y: [0, endY * 0.6 - 40, endY + 80],
        opacity: [0, 1, 0.8, 0],
        scale: [0, 1.2, 0.6],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeOut",
      }}
    />
  );
}

/* ── Dripping Drop ── falls from a splash point ── */
function DrippingDrop({ x, delay, height }: { x: string; delay: number; height: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: "55%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay }}
    >
      {/* The drop */}
      <motion.div
        style={{
          width: 6,
          height: 10,
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          background: "linear-gradient(180deg, rgba(125, 211, 252, 0.8), rgba(54, 181, 224, 0.4))",
          boxShadow: "0 2px 8px rgba(54, 181, 224, 0.3)",
        }}
        animate={{
          y: [0, height],
          opacity: [0.9, 0.9, 0],
          scaleY: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          delay: delay + 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeIn",
        }}
      />
      {/* Tiny ripple where it lands */}
      <motion.div
        className="absolute rounded-full border border-cyan-400/30"
        style={{ top: height, left: -10 }}
        animate={{
          width: [0, 30],
          height: [0, 10],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1,
          delay: delay + 2.3,
          repeat: Infinity,
          repeatDelay: 4.2,
        }}
      />
    </motion.div>
  );
}

/* ── Central Water Splash SVG ── */
function WaterSplashCenter() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
      {/* Large central glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(54, 181, 224, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated splash crown SVG */}
      <svg
        viewBox="0 0 800 600"
        className="absolute w-[90vw] max-w-[900px] h-auto opacity-30"
        style={{ top: "10%" }}
      >
        {/* Central splash body */}
        <motion.path
          d="M300,500 Q320,350 350,300 Q370,250 400,200 Q430,250 450,300 Q480,350 500,500 Z"
          fill="url(#splashGrad)"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: [0, 1, 0.95, 1] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 4 }}
        />
        {/* Left arc */}
        <motion.path
          d="M300,500 Q250,400 200,350 Q170,320 150,250 Q180,280 220,300 Q260,330 300,400 Z"
          fill="url(#splashGrad2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.6, 0] }}
          transition={{ duration: 3, delay: 0.8, repeat: Infinity, repeatDelay: 3.5 }}
        />
        {/* Right arc */}
        <motion.path
          d="M500,500 Q550,400 600,350 Q630,320 650,250 Q620,280 580,300 Q540,330 500,400 Z"
          fill="url(#splashGrad2)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.6, 0] }}
          transition={{ duration: 3, delay: 0.8, repeat: Infinity, repeatDelay: 3.5 }}
        />
        {/* Far left spray */}
        <motion.path
          d="M200,350 Q150,280 100,200 Q130,250 170,300 Z"
          fill="rgba(125, 211, 252, 0.3)"
          animate={{ opacity: [0, 0.6, 0], y: [0, -20, 0] }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
        />
        {/* Far right spray */}
        <motion.path
          d="M600,350 Q650,280 700,200 Q670,250 630,300 Z"
          fill="rgba(125, 211, 252, 0.3)"
          animate={{ opacity: [0, 0.6, 0], y: [0, -20, 0] }}
          transition={{ duration: 2.5, delay: 1, repeat: Infinity, repeatDelay: 4 }}
        />
        <defs>
          <linearGradient id="splashGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(125, 211, 252, 0.6)" />
            <stop offset="100%" stopColor="rgba(54, 181, 224, 0.1)" />
          </linearGradient>
          <linearGradient id="splashGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(54, 181, 224, 0.5)" />
            <stop offset="100%" stopColor="rgba(30, 86, 160, 0.1)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Splash particles flying outward */}
      {Array.from({ length: 24 }).map((_, i) => (
        <SplashParticle
          key={i}
          angle={(i * 360) / 24 + Math.random() * 15}
          distance={120 + Math.random() * 200}
          size={3 + Math.random() * 8}
          delay={Math.random() * 1.5}
        />
      ))}
    </div>
  );
}

/* ── Floating Bubble ── rising from bottom ── */
function FloatingBubble({ delay, left, size }: { delay: number; left: string; size: number }) {
  return (
    <motion.div
      className="absolute bottom-0 rounded-full"
      style={{
        left,
        width: size,
        height: size,
        background: "radial-gradient(circle at 30% 30%, rgba(125, 211, 252, 0.5), rgba(54, 181, 224, 0.05))",
        border: "1px solid rgba(125, 211, 252, 0.25)",
      }}
      animate={{
        y: [0, -900],
        x: [0, Math.random() * 80 - 40],
        opacity: [0, 0.8, 0.5, 0],
        scale: [0.3, 1, 0.7],
      }}
      transition={{
        duration: 7 + Math.random() * 5,
        delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
    />
  );
}

/* ── Ripple Ring ── expanding from a point ── */
function RippleRing({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute rounded-full border border-cyan-400/20"
      style={{ left: x, top: y }}
      initial={{ width: 0, height: 0, opacity: 0.5 }}
      animate={{
        width: [0, 250, 500],
        height: [0, 250, 500],
        opacity: [0.4, 0.1, 0],
        x: [0, -125, -250],
        y: [0, -125, -250],
      }}
      transition={{ duration: 5, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

/* ════════════════════════════════════════════════════
   MAIN HERO COMPONENT
   ════════════════════════════════════════════════════ */
export function WaterHero({ lang = "en" }: { lang?: "en" | "es" }) {
  const content = {
    en: {
      headline: "Crystal Clear Pools",
      headlineLine2: "Guaranteed.",
      subheadline:
        "Miami's Most Trusted Pool Service — Weekly Cleaning, Maintenance & Emergency Service 24/7",
      cta1: "Get Free Quote",
      cta2: `Call Now: ${SITE.phone}`,
      certified: "SPO Certified",
    },
    es: {
      headline: "Piscinas Cristalinas",
      headlineLine2: "Garantizado.",
      subheadline:
        "El Servicio de Piscinas Más Confiable de Miami — Limpieza Semanal, Mantenimiento y Emergencias 24/7",
      cta1: "Presupuesto Gratis",
      cta2: `Llama: ${SITE.phone}`,
      certified: "Certificado SPO",
    },
  };

  const t = content[lang];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030a1a]">
      {/* Hero splash background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-splash.webp"
          alt="Crystal clear water splash"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#030a1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030a1a]/80 via-transparent to-[#030a1a]/90" />
      </div>

      {/* Ambient light blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute w-[600px] h-[600px] -left-[10%] top-[10%] bg-[#1e56a0]/10 rounded-full blur-[150px]" />
        <div className="absolute w-[500px] h-[500px] right-[-5%] top-[50%] bg-[#36b5e0]/8 rounded-full blur-[130px]" />
      </div>

      {/* ── Rain effect ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 30 }).map((_, i) => (
          <RainDrop
            key={`rain-${i}`}
            delay={Math.random() * 5}
            left={`${Math.random() * 100}%`}
            duration={1.5 + Math.random() * 2}
          />
        ))}
      </div>

      {/* ── Central Water Splash ── */}
      <WaterSplashCenter />

      {/* ── Dripping drops ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <DrippingDrop x="30%" delay={1} height={200} />
        <DrippingDrop x="45%" delay={2.5} height={180} />
        <DrippingDrop x="55%" delay={1.8} height={220} />
        <DrippingDrop x="70%" delay={3.2} height={190} />
        <DrippingDrop x="25%" delay={4} height={160} />
        <DrippingDrop x="75%" delay={0.5} height={210} />
      </div>

      {/* ── Ripple rings ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <RippleRing delay={0} x="50%" y="50%" />
        <RippleRing delay={1.5} x="25%" y="60%" />
        <RippleRing delay={3} x="75%" y="45%" />
      </div>

      {/* ── Floating bubbles ── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <FloatingBubble
            key={`bubble-${i}`}
            delay={i * 0.8}
            left={`${3 + i * 5.5}%`}
            size={4 + Math.random() * 14}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-24">
        <div className="max-w-4xl mx-auto">
          {/* SPO Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-cyan-400/20 backdrop-blur-md mb-8"
          >
            <ShieldCheck className="h-4 w-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 tracking-wide font-medium">
              {t.certified}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/80 block drop-shadow-[0_0_30px_rgba(54,181,224,0.3)]">
                {t.headline}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-[#36b5e0] to-[#1e56a0] block">
                {t.headlineLine2}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-lg md:text-xl text-blue-200/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              {t.subheadline}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="/contact"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_50px_rgba(54,181,224,0.5)] hover:scale-105 cursor-pointer flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta1}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/-/g, "")}`}
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 cursor-pointer flex items-center gap-2 backdrop-blur-sm"
            >
              <Phone className="h-5 w-5" />
              {t.cta2}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030a1a] to-transparent pointer-events-none" />

      {/* WhatsApp floating button */}
      <motion.a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(34,197,94,0.4)] hover:bg-green-600 transition-colors cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </section>
  );
}
