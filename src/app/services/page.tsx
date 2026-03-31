import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Pool Services",
  description:
    "Complete pool services in Miami: weekly cleaning, maintenance, green pool recovery, resurfacing, salt system installation, acid wash & more. SPO Certified.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
