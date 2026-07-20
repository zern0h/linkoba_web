"use client";

import { motion } from "framer-motion";
import { UserCheck, FileCheck, BadgeCheck, RefreshCw } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const trustItems = [
  {
    icon: UserCheck,
    title: "Identity Verification",
    description:
      "Every professional verifies their identity before joining. No anonymous workers, ever.",
  },
  {
    icon: FileCheck,
    title: "Right-to-Work Checks",
    description:
      "All professionals must hold and evidence their legal right to work in the UK.",
  },
  {
    icon: BadgeCheck,
    title: "DBS Screening",
    description:
      "Relevant enhanced DBS checks for roles working in homes or with vulnerable environments.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Monitoring",
    description:
      "Documents are tracked for expiry. Professionals must keep compliance current to remain active.",
  },
];

export default function TrustVerification() {
  return (
    <section className="py-20 lg:py-28 bg-[#202020] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#356df3]/10 rounded-full blur-3xl" />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Trust & Verification"
          title="Safety is not optional. It is the foundation"
          description="We built verification into the core of Linkoba. Every professional on the platform has passed our checks before their first booking."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#356df3]/20 flex items-center justify-center mb-5">
                <item.icon size={20} className="text-[#7aa8f7]" />
              </div>
              <h3 className="font-semibold text-white mb-2 text-sm">
                {item.title}
              </h3>
              <p className="text-xs text-white/50 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/trust-and-safety"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-sm font-semibold px-6 py-3 rounded-[10px] transition-all hover:bg-white/6"
          >
            Learn about Trust & Safety
          </Link>
        </div>
      </div>
    </section>
  );
}
