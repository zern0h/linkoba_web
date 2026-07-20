import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import HomeLanding from "@/components/home/HomeLanding";

export const metadata: Metadata = {
  title: "Linkoba | Trusted Professionals in Leeds",
  description: "Linkoba connects Leeds businesses and households with trusted, verified professionals. Book local support or find flexible work with confidence.",
  alternates: { canonical: "https://linkoba.com" },
};

export default function HomePage() {
  return <PageLayout><HomeLanding /></PageLayout>;
}
