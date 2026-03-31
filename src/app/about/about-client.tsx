"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Clock, MapPin, Award, Users, Heart } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";
import { SITE } from "@/lib/constants";

const stats = {
  en: [
    { value: "500+", label: "Happy Customers" },
    { value: "24/7", label: "Available" },
    { value: "SPO", label: "Certified" },
    { value: "100%", label: "Satisfaction" },
  ],
  es: [
    { value: "500+", label: "Clientes Satisfechos" },
    { value: "24/7", label: "Disponible" },
    { value: "SPO", label: "Certificado" },
    { value: "100%", label: "Satisfacción" },
  ],
};

const values = {
  en: [
    { icon: ShieldCheck, title: "Trust & Reliability", desc: "We show up on time, every time. Your pool is in certified, professional hands." },
    { icon: Heart, title: "Passion for Excellence", desc: "We treat every pool like it's our own. No shortcuts, no compromises." },
    { icon: Users, title: "Customer First", desc: "Your satisfaction drives everything we do. We're not happy until you are." },
    { icon: Clock, title: "Always Available", desc: "Pool emergencies don't wait, and neither do we. 24/7 service when you need it." },
    { icon: MapPin, title: "Local Miami Experts", desc: "We know Miami's climate challenges inside out — salt air, UV, tropical storms." },
    { icon: Award, title: "SPO Certified", desc: "Licensed Swimming Pool Operator with professional training and industry knowledge." },
  ],
  es: [
    { icon: ShieldCheck, title: "Confianza y Fiabilidad", desc: "Llegamos a tiempo, siempre. Su piscina está en manos certificadas y profesionales." },
    { icon: Heart, title: "Pasión por la Excelencia", desc: "Tratamos cada piscina como si fuera nuestra. Sin atajos, sin compromisos." },
    { icon: Users, title: "Cliente Primero", desc: "Su satisfacción impulsa todo lo que hacemos. No estamos contentos hasta que usted lo esté." },
    { icon: Clock, title: "Siempre Disponible", desc: "Las emergencias de piscinas no esperan, y nosotros tampoco. Servicio 24/7." },
    { icon: MapPin, title: "Expertos Locales en Miami", desc: "Conocemos los desafíos climáticos de Miami — aire salino, UV, tormentas tropicales." },
    { icon: Award, title: "Certificado SPO", desc: "Operador de Piscinas con licencia, formación profesional y conocimiento de la industria." },
  ],
};

export default function AboutClient() {
  const [lang, setLang] = useState<"en" | "es">("en");

  const t = {
    en: {
      title: "About Us",
      subtitle: "The story behind Miami's most trusted pool service",
      storyTitle: "Our Story",
      story1: `A. Jiménez Pool Service was born from a simple belief: every Miami homeowner deserves a pool they can be proud of. What started as a one-person operation has grown into a trusted name across Miami, built on hard work, honest service, and genuine care for our customers.`,
      story2: `As an SPO (Swimming Pool Operator) certified professional, we bring technical expertise that goes beyond basic cleaning. We understand water chemistry, equipment mechanics, and the unique challenges that Miami's tropical climate poses to pool owners.`,
      story3: `From weekly cleaning to emergency green pool recovery, we've handled it all. Every pool we service gets the same level of attention and care — because your family's health and your home's value depend on it.`,
      valuesTitle: "What We Stand For",
      missionTitle: "Our Mission",
      mission: "To provide every Miami homeowner with pool service so reliable and thorough that they never have to think twice about diving in.",
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "La historia detrás del servicio de piscinas más confiable de Miami",
      storyTitle: "Nuestra Historia",
      story1: `A. Jiménez Pool Service nació de una creencia simple: cada propietario en Miami merece una piscina de la que sentirse orgulloso. Lo que comenzó como una operación de una persona ha crecido hasta convertirse en un nombre de confianza en todo Miami.`,
      story2: `Como profesional certificado SPO (Operador de Piscinas), aportamos experiencia técnica que va más allá de la limpieza básica. Entendemos la química del agua, la mecánica de los equipos y los desafíos únicos del clima tropical de Miami.`,
      story3: `Desde limpieza semanal hasta recuperación de emergencia de piscinas verdes, lo hemos manejado todo. Cada piscina recibe el mismo nivel de atención — porque la salud de su familia y el valor de su hogar dependen de ello.`,
      valuesTitle: "Lo Que Nos Define",
      missionTitle: "Nuestra Misión",
      mission: "Proporcionar a cada propietario en Miami un servicio de piscinas tan confiable y exhaustivo que nunca tengan que pensarlo dos veces antes de zambullirse.",
    },
  };
  const c = t[lang];
  const st = stats[lang];
  const vals = values[lang];

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main className="pt-28 bg-[#030a1a]">
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e56a0]/10 rounded-full blur-[150px]" />
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{c.title}</h1>
              <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{c.subtitle}</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
              {st.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-[#36b5e0]">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Story with image */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.08]"
              >
                <Image
                  src="/images/pool-service-tech.webp"
                  alt="A. Jiménez Pool Service technician testing water"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a1a]/60 to-transparent" />
              </motion.div>
              <div>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-8"
              >
                {c.storyTitle}
              </motion.h2>
              {[c.story1, c.story2, c.story3].map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-blue-200/60 text-lg leading-relaxed mb-6"
                >
                  {paragraph}
                </motion.p>
              ))}
              </div>
            </div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center p-10 rounded-3xl bg-gradient-to-br from-[#1e56a0]/10 to-[#36b5e0]/5 border border-cyan-400/10 mb-24"
            >
              <h2 className="text-2xl font-bold text-white mb-4">{c.missionTitle}</h2>
              <p className="text-cyan-200/70 text-lg leading-relaxed italic">
                &ldquo;{c.mission}&rdquo;
              </p>
            </motion.div>

            {/* Values */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                {c.valuesTitle}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vals.map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center mb-4">
                      <val.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{val.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{val.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
