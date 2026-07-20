"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Submit your requirement through our simple form: staffing request, cleaning booking or professional registration. It only takes a few minutes.",
  },
  {
    number: "02",
    title: "We Match You",
    description:
      "Our platform matches you with available, verified professionals in your area. We check availability, skills, location and fit.",
  },
  {
    number: "03",
    title: "Confirm & Go",
    description:
      "Review your match, confirm the booking and you're done. Professionals arrive prepared. You get updates along the way.",
  },
  {
    number: "04",
    title: "Completed with Confidence",
    description:
      "After every job, both parties rate the experience. Our trust system rewards reliable professionals and protects every customer.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f3]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="How It Works"
          title="From request to completion in four steps"
          description="A simple process designed to save you time and give you complete confidence."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-transparent via-[#dededb] to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-start">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-[#dededb] flex items-center justify-center mb-6 shadow-sm relative z-10">
                    <span className="font-display text-lg font-bold text-[#356df3]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#202020] mb-3" style={{ letterSpacing: "-0.02em" }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#777773] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
