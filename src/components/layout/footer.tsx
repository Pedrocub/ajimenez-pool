"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

function PoolLogo() {
  return (
    <svg viewBox="0 0 44 44" className="h-8 w-8" aria-hidden="true">
      <defs>
        <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#36b5e0" />
          <stop offset="100%" stopColor="#1e56a0" />
        </linearGradient>
        <linearGradient id="footerWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
        </linearGradient>
      </defs>
      <path
        d="M22 4 C22 4, 8 20, 8 28 C8 36, 14.3 42, 22 42 C29.7 42, 36 36, 36 28 C36 20, 22 4, 22 4Z"
        fill="url(#footerLogoGrad)"
      />
      <path
        d="M22 8 C22 8, 12 21, 12 28 C12 33.5, 16.5 38, 22 38 C27.5 38, 32 33.5, 32 28 C32 21, 22 8, 22 8Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.8"
      />
      <path
        d="M14 28 Q18 25, 22 28 Q26 31, 30 28"
        fill="none"
        stroke="url(#footerWaveGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15 32 Q19 29, 22 32 Q25 35, 29 32"
        fill="none"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <ellipse cx="17" cy="18" rx="3" ry="5" fill="rgba(255,255,255,0.25)" transform="rotate(-20 17 18)" />
    </svg>
  );
}

export function Footer({ lang = "en" }: { lang?: "en" | "es" }) {
  const t = {
    en: {
      tagline: "Miami's Most Trusted Pool Service",
      services: "Services",
      company: "Company",
      contact: "Contact",
      rights: `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`,
      available: "Available 24/7 — Emergency Service",
      quote: "Get a Free Quote",
    },
    es: {
      tagline: "El Servicio de Piscinas Más Confiable de Miami",
      services: "Servicios",
      company: "Empresa",
      contact: "Contacto",
      rights: `© ${new Date().getFullYear()} ${SITE.name}. Todos los derechos reservados.`,
      available: "Disponible 24/7 — Servicio de Emergencias",
      quote: "Presupuesto Gratis",
    },
  };

  const c = t[lang];

  return (
    <footer className="bg-[#030a1a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer">
              <PoolLogo />
              <div>
                <span className="text-white font-bold text-lg">A. Jiménez</span>
                <span className="text-cyan-400 text-xs font-medium tracking-widest uppercase block">
                  Pool Service
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              {c.tagline}
            </p>
            <p className="text-cyan-400/80 text-sm font-medium">{c.available}</p>
            {/* Social icons placeholder */}
            <div className="flex items-center gap-3 mt-4">
              {["facebook", "instagram", "tiktok", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-pointer"
                  aria-label={social}
                >
                  <span className="text-xs font-medium uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">{c.services}</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/50 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {lang === "es" ? service.titleEs : service.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">{c.company}</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                  >
                    {lang === "es" ? link.labelEs : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{c.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-2 text-white/50 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-white/50 hover:text-cyan-400 text-sm transition-colors cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-white/50 text-sm">
                  <MapPin className="h-4 w-4" />
                  {SITE.location}
                </span>
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-block mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(54,181,224,0.3)] transition-all cursor-pointer"
            >
              {c.quote}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-white/30 text-sm">{c.rights}</p>
        </div>
      </div>
    </footer>
  );
}
