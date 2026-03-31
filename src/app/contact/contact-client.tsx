"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SITE } from "@/lib/constants";

export default function ContactClient() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const t = {
    en: {
      title: "Contact Us",
      subtitle: "Ready for crystal clear water? Get in touch today.",
      formTitle: "Send Us a Message",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      service: "Service Needed",
      serviceDefault: "Select a service...",
      message: "Message",
      messagePlaceholder: "Tell us about your pool and what you need...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent! We'll get back to you within 24 hours.",
      infoTitle: "Get in Touch",
      hours: "Hours",
      hoursValue: "Available 24/7",
      whatsapp: "WhatsApp Us",
      whatsappDesc: "Quick response via WhatsApp",
      serviceOptions: [
        "Weekly Pool Cleaning",
        "Pool Maintenance",
        "Chemical Balancing",
        "Green Pool Recovery",
        "Pool Resurfacing",
        "Acid Wash",
        "Salt System Installation",
        "Deck Pressure Washing",
        "Other",
      ],
    },
    es: {
      title: "Contáctenos",
      subtitle: "¿Listo para agua cristalina? Comuníquese hoy.",
      formTitle: "Envíenos un Mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      service: "Servicio Necesitado",
      serviceDefault: "Seleccione un servicio...",
      message: "Mensaje",
      messagePlaceholder: "Cuéntenos sobre su piscina y lo que necesita...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Le responderemos dentro de 24 horas.",
      infoTitle: "Comuníquese",
      hours: "Horario",
      hoursValue: "Disponible 24/7",
      whatsapp: "WhatsApp",
      whatsappDesc: "Respuesta rápida por WhatsApp",
      serviceOptions: [
        "Limpieza Semanal",
        "Mantenimiento de Piscina",
        "Balanceo Químico",
        "Recuperación Piscina Verde",
        "Repavimentación",
        "Lavado Ácido",
        "Instalación Sistema de Sal",
        "Lavado a Presión del Deck",
        "Otro",
      ],
    },
  };
  const c = t[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with actual form handler (email/API)
    setSubmitted(true);
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/30 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.06] transition-all text-sm";

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main className="pt-28 bg-[#030a1a]">
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#1e56a0]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#36b5e0]/6 rounded-full blur-[130px]" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{c.title}</h1>
              <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">{c.subtitle}</p>
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-3 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06]"
              >
                <h2 className="text-2xl font-bold text-white mb-6">{c.formTitle}</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                      <Send className="h-7 w-7 text-green-400" />
                    </div>
                    <p className="text-green-400 font-medium text-lg">{c.success}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-sm mb-1.5">{c.name}</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-sm mb-1.5">{c.email}</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/50 text-sm mb-1.5">{c.phone}</label>
                        <input
                          type="tel"
                          value={formState.phone}
                          onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-sm mb-1.5">{c.service}</label>
                        <select
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className={`${inputClasses} cursor-pointer`}
                        >
                          <option value="" className="bg-[#0a1628]">{c.serviceDefault}</option>
                          {c.serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#0a1628]">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/50 text-sm mb-1.5">{c.message}</label>
                      <textarea
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder={c.messagePlaceholder}
                        className={`${inputClasses} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold hover:shadow-[0_0_30px_rgba(54,181,224,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {c.submit}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 space-y-4"
              >
                {/* Phone */}
                <a
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                  className="block p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">Phone</p>
                      <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{SITE.phone}</p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-2xl bg-green-500/5 border border-green-500/15 hover:border-green-500/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/15 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{c.whatsapp}</p>
                      <p className="text-green-400 font-medium text-sm">{c.whatsappDesc}</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE.email}`}
                  className="block p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">Email</p>
                      <p className="text-white font-medium text-sm group-hover:text-cyan-400 transition-colors">{SITE.email}</p>
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">Location</p>
                      <p className="text-white font-medium">{SITE.location}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#36b5e0]/20 to-[#1e56a0]/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm">{c.hours}</p>
                      <p className="text-cyan-400 font-semibold">{c.hoursValue}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
