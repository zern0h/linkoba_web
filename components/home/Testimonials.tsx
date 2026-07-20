"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote:
      "We needed three kitchen porters for a Saturday night service with less than 24 hours' notice. Linkoba had them confirmed within the hour. Absolutely saved the evening.",
    name: "James Hartley",
    role: "Head Chef, Restaurant Owner",
    location: "Leeds",
    initial: "JH",
  },
  {
    quote:
      "Finding a trustworthy cleaner felt like a gamble before Linkoba. Now I have the same person every week and I know they've been properly checked. Huge peace of mind.",
    name: "Sarah Okonkwo",
    role: "Homeowner",
    location: "Leeds",
    initial: "SO",
  },
  {
    quote:
      "I work three days a week now doing kitchen porter shifts and cleaning jobs through Linkoba. The flexibility fits around my kids and the pay is fair and on time.",
    name: "Marcus Webb",
    role: "Professional on Linkoba",
    location: "Leeds",
    initial: "MW",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f3]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="What People Say"
          title="Real stories from real people"
          description="Placeholder testimonials representing the experience we're building towards. Stories from launch will appear here."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl border border-[#dededb] p-7 flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <Quote size={24} className="text-[#356df3]/25 mb-5" />
              <p className="text-[#3a3a3a] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#f0f0ed]">
                <div className="w-10 h-10 rounded-full bg-[#202020] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#202020]">{t.name}</p>
                  <p className="text-xs text-[#777773]">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#777773] mt-8">
          * These are illustrative testimonials representing the experience we are building.
          Real customer stories will be published at launch.
        </p>
      </div>
    </section>
  );
}
