import type { Metadata } from "next";
import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact A. Jiménez Pool Service in Miami. Get a free quote, schedule service, or call 305-417-0116. Available 24/7 for pool emergencies.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactClient />;
}
