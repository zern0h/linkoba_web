"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Home, Briefcase, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const audiences = [
  {
    icon: Building2,
    title: "Businesses",
    subtitle: "Hospitality & Commercial",
    description:
      "Hotels, restaurants, venues and commercial spaces that need reliable temporary staff at short notice. We source, verify and deliver.",
    cta: "For Businesses",
    href: "/businesses",
    accent: "#202020",
    accentLight: "#f0f0ed",
    highlights: ["Same-day staffing", "Multi-worker bookings", "Compliant & vetted"],
  },
  {
    icon: Home,
    title: "Households",
    subtitle: "Home Cleaning",
    description:
      "Homeowners who need a trusted, background-checked cleaner they can rely on, without the guesswork or uncertainty.",
    cta: "For Households",
    href: "/households",
    accent: "#356df3",
    accentLight: "#e8edff",
    highlights: ["DBS checked", "Insured professionals", "Flexible scheduling"],
    featured: true,
  },
  {
    icon: Briefcase,
    title: "Professionals",
    subtitle: "Flexible Work",
    description:
      "Skilled individuals looking for flexible, well-matched work in their area. Set your availability, get matched, get paid.",
    cta: "For Workers",
    href: "/workers",
    accent: "#202020",
    accentLight: "#f0f0ed",
    highlights: ["Fair pay", "Flexible hours", "Fast payments"],
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f3]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Who We Help"
          title="Built for businesses, households and professionals"
          description="Whether you need extra hands, a reliable cleaner or flexible work that fits your life, Linkoba was designed for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={`relative h-full rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:shadow-lg group ${
                  a.featured
                    ? "bg-[#202020] border-[#202020]"
                    : "bg-white border-[#dededb] hover:border-[#356df3]/30"
                }`}
              >
                {a.featured && (
                  <div className="absolute top-4 right-4 bg-[#356df3] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                    Most Popular
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: a.featured ? "rgba(53,109,243,0.2)" : a.accentLight }}
                >
                  <a.icon
                    size={22}
                    style={{ color: a.featured ? "#7aa8f7" : a.accent }}
                  />
                </div>

                <p
                  className={`text-[10px] font-extrabold tracking-widest uppercase mb-1 ${
                    a.featured ? "text-white/40" : "text-[#777773]"
                  }`}
                >
                  {a.subtitle}
                </p>
                <h3
                  className={`font-display text-2xl font-bold mb-3 ${
                    a.featured ? "text-white" : "text-[#202020]"
                  }`}
                  style={{ letterSpacing: "-0.03em" }}
                >
                  {a.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 flex-1 ${
                    a.featured ? "text-white/60" : "text-[#777773]"
                  }`}
                >
                  {a.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {a.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: a.featured ? "#7aa8f7" : a.accent }}
                      />
                      <span className={a.featured ? "text-white/70" : "text-[#3a3a3a]"}>
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={a.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3 ${
                    a.featured ? "text-[#7aa8f7]" : "text-[#356df3]"
                  }`}
                >
                  {a.cta}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
