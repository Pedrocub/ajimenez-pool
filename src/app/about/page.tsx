import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about A. Jiménez Pool Service — Miami's trusted SPO-certified pool professionals. Dedicated to crystal clear pools and exceptional service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutClient />;
}
