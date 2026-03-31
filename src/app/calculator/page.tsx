import type { Metadata } from "next";
import CalculatorClient from "./calculator-client";

export const metadata: Metadata = {
  title: "Budget Calculator",
  description:
    "Get an approximate estimate for pool services in Miami. Calculate costs for cleaning, maintenance, resurfacing, green pool recovery and more.",
  alternates: { canonical: "/calculator" },
};

export default function CalculatorPage() {
  return <CalculatorClient />;
}
