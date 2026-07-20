"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Clock, Star, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  {
    icon: Shield,
    title: "Every professional is verified",
    description:
      "Identity checks, right-to-work verification and professional references before anyone joins the platform.",
  },
  {
    icon: Zap,
    title: "Fast, reliable matching",
    description:
      "Our matching engine considers skills, location, availability and reliability to get you the right person, fast.",
  },
  {
    icon: Clock,
    title: "Flexibility when you need it",
    description:
      "Book in advance or at short notice. Professionals set real-time availability so there's no wasted time.",
  },
  {
    icon: Users,
    title: "Built for local communities",
    description:
      "Linkoba is a Leeds-first platform. We know the city, support local workers and serve local businesses.",
  },
  {
    icon: Star,
    title: "Quality through accountability",
    description:
      "Two-way reviews after every job keep standards high. Consistent performers are rewarded with more opportunities.",
  },
  {
    icon: MapPin,
    title: "Local focus, professional standards",
    description:
      "We combine the trust of local knowledge with the rigour of professional compliance, for every booking.",
  },
];

export default function WhyLinkoba() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              eyebrow="Why Linkoba"
              title="A platform built on trust and simplicity"
              description="We built Linkoba because finding reliable, verified professionals shouldn't be complicated, for businesses, households or the professionals themselves."
              align="left"
            />

            <div className="bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-6 mt-8">
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-4">
                Our Commitment
              </p>
              <blockquote className="font-display text-xl text-[#202020] font-bold leading-snug mb-4" style={{ letterSpacing: "-0.025em" }}>
                &ldquo;Every professional on Linkoba has been verified. Every booking is
                protected. Every experience is held to a high standard.&rdquo;
              </blockquote>
              <p className="text-sm text-[#777773]">The Linkoba Team</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-[#dededb] rounded-xl p-5 hover:shadow-md hover:border-[#356df3]/20 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e8edff] flex items-center justify-center mb-3">
                  <r.icon size={17} className="text-[#356df3]" />
                </div>
                <h3 className="font-semibold text-[#202020] text-sm mb-1.5">
                  {r.title}
                </h3>
                <p className="text-xs text-[#777773] leading-relaxed">
                  {r.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
