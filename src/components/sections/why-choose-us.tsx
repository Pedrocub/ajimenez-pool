"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, Phone } from "lucide-react";

const features = {
  en: [
    {
      icon: ShieldCheck,
      title: "SPO Certified",
      description: "Licensed Swimming Pool Operator ensuring the highest standards of pool care and safety.",
    },
    {
      icon: Clock,
      title: "Available 24/7",
      description: "Emergency pool service any time, day or night. Your pool can't wait, and neither do we.",
    },
    {
      icon: Award,
      title: "Miami Experts",
      description: "We understand Miami's unique climate challenges — salt air, intense sun, and heavy rains.",
    },
    {
      icon: Phone,
      title: "Free Estimates",
      description: "Get a no-obligation quote for any service. Transparent pricing with no hidden fees.",
    },
  ],
  es: [
    {
      icon: ShieldCheck,
      title: "Certificado SPO",
      description: "Operador de Piscinas con licencia que garantiza los más altos estándares de cuidado y seguridad.",
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Servicio de emergencia a cualquier hora, día o noche. Su piscina no puede esperar, y nosotros tampoco.",
    },
    {
      icon: Award,
      title: "Expertos en Miami",
      description: "Entendemos los desafíos únicos del clima de Miami — aire salino, sol intenso y lluvias fuertes.",
    },
    {
      icon: Phone,
      title: "Presupuestos Gratis",
      description: "Obtenga un presupuesto sin compromiso. Precios transparentes sin cargos ocultos.",
    },
  ],
};

export function WhyChooseUs({ lang = "en" }: { lang?: "en" | "es" }) {
  const items = features[lang];
  const title = lang === "es" ? "¿Por Qué Elegirnos?" : "Why Choose Us?";
  const subtitle =
    lang === "es"
      ? "La diferencia que hace confiar en profesionales certificados"
      : "The difference that trusting certified professionals makes";

  return (
    <section className="py-24 bg-gradient-to-b from-[#030a1a] to-[#0a1628] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 border border-cyan-400/10 flex items-center justify-center">
                <item.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
