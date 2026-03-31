import { notFound } from "next/navigation";
import { SERVICE_DETAILS, getServiceBySlug } from "@/lib/service-content";
import { ServicePageClient } from "./service-page-client";

export function generateStaticParams() {
  return SERVICE_DETAILS.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.titleEn} | A. Jiménez Pool Service Miami`,
    description: service.descEn,
    openGraph: {
      title: `${service.titleEn} | A. Jiménez Pool Service`,
      description: service.descEn,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageClient service={service} />;
}
