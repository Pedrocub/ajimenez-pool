"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

function PoolLogo() {
  return (
    <svg viewBox="0 0 44 44" className="h-10 w-10" aria-hidden="true">
      {/* Water drop shape */}
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#36b5e0" />
          <stop offset="100%" stopColor="#1e56a0" />
        </linearGradient>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
        </linearGradient>
      </defs>
      {/* Drop body */}
      <path
        d="M22 4 C22 4, 8 20, 8 28 C8 36, 14.3 42, 22 42 C29.7 42, 36 36, 36 28 C36 20, 22 4, 22 4Z"
        fill="url(#logoGrad)"
      />
      {/* Inner highlight */}
      <path
        d="M22 8 C22 8, 12 21, 12 28 C12 33.5, 16.5 38, 22 38 C27.5 38, 32 33.5, 32 28 C32 21, 22 8, 22 8Z"
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.8"
      />
      {/* Wave lines inside */}
      <path
        d="M14 28 Q18 25, 22 28 Q26 31, 30 28"
        fill="none"
        stroke="url(#waveGrad)"
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
      {/* Shine reflection */}
      <ellipse cx="17" cy="18" rx="3" ry="5" fill="rgba(255,255,255,0.25)" transform="rotate(-20 17 18)" />
    </svg>
  );
}

export function Navbar({ lang = "en", onToggleLang }: { lang?: "en" | "es"; onToggleLang?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <nav
        className={`mx-3 md:mx-5 mt-3 md:mt-4 px-4 md:px-6 py-2.5 md:py-3 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1628]/85 backdrop-blur-2xl border border-cyan-400/10 shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(54,181,224,0.05)]"
            : "bg-[#0a1628]/50 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <PoolLogo />
              {/* Glow behind logo on hover */}
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/20 rounded-full blur-lg transition-all duration-300" />
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base md:text-lg tracking-tight">
                A. Jiménez
              </span>
              <span className="text-cyan-400 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                Pool Service
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-0.5 px-2 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.04]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg transition-all duration-200 cursor-pointer group"
                >
                  <span className="relative z-10">
                    {lang === "es" ? link.labelEs : link.labelEn}
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.06] transition-all duration-200" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-[2px] bg-cyan-400 rounded-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/60 hover:text-white hover:border-cyan-400/20 text-sm transition-all cursor-pointer group"
            >
              <Globe className="h-3.5 w-3.5 group-hover:text-cyan-400 transition-colors" />
              <span className="font-medium">{lang === "en" ? "ES" : "EN"}</span>
            </button>
            <a
              href={`tel:${SITE.phone.replace(/-/g, "")}`}
              className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(54,181,224,0.35)] transition-all cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10">{SITE.phone}</span>
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-xl hover:bg-white/[0.06] transition-all cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-3 space-y-1 border-t border-white/[0.06] mt-3">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all cursor-pointer"
                    >
                      {lang === "es" ? link.labelEs : link.labelEn}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center gap-3 px-4 pt-4 border-t border-white/[0.06]">
                  <button
                    onClick={() => { onToggleLang?.(); setIsOpen(false); }}
                    className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm cursor-pointer"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {lang === "en" ? "Español" : "English"}
                  </button>
                  <a
                    href={`tel:${SITE.phone.replace(/-/g, "")}`}
                    className="flex-1 text-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#36b5e0] to-[#1e56a0] text-white font-semibold text-sm cursor-pointer"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
