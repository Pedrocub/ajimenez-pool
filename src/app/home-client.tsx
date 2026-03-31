"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { WaterHero } from "@/components/ui/water-hero";
import { ServicesPreview } from "@/components/sections/services-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { CtaSection } from "@/components/sections/cta-section";
import { BeforeAfter } from "@/components/sections/before-after";
import { Footer } from "@/components/layout/footer";

export default function HomeClient() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <>
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "en" ? "es" : "en")} />
      <main>
        <WaterHero lang={lang} />
        <ServicesPreview lang={lang} />
        <BeforeAfter lang={lang} />
        <WhyChooseUs lang={lang} />
        <CtaSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
