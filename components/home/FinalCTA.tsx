"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, Briefcase } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f5f3]">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#202020] rounded-3xl overflow-hidden relative"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#356df3]/10 rounded-sm blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-64 bg-[#356df3]/6 rounded-sm blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

            {/* Left: customers */}
            <div className="px-8 py-12 lg:px-12 lg:py-16 flex flex-col">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/60 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6 self-start">
                <Building2 size={10} />
                Businesses &amp; Households
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-3" style={{ letterSpacing: "-0.035em" }}>
                Book a trusted professional in Leeds
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                Kitchen Porters for your venue. Cleaners for your home or office. Verified, reliable, and fast to book.
              </p>
              <a
                href="https://app.linkoba.com/signup"
                className="inline-flex items-center gap-2 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all shadow-[0_12px_24px_rgb(53_109_243_/25%)] group self-start text-sm"
              >
                Get Started
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Right: professionals */}
            <div className="px-8 py-12 lg:px-12 lg:py-16 flex flex-col">
              <span className="inline-flex items-center gap-1.5 bg-white/8 border border-white/12 text-white/60 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6 self-start">
                <Briefcase size={10} />
                Professionals
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight mb-3" style={{ letterSpacing: "-0.035em" }}>
                Flexible work in Leeds, on your terms
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1">
                Set your availability, accept what fits, and get paid after every job. No lock-in, no minimum hours.
              </p>
              <a
                href="https://work.linkoba.com/signup"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/6 text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all group self-start text-sm"
              >
                Join as a Professional
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
