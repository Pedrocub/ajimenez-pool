import type { Metadata } from "next";
import GalleryClient from "./gallery-client";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See real results from A. Jiménez Pool Service in Miami. Before & after photos of pool cleaning, green pool recovery, resurfacing and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
