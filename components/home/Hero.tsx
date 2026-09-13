"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";

const trustBadges = [
  { icon: ShieldCheck, label: "Verified Professionals" },
  { icon: Star, label: "Quality Guaranteed" },
  { icon: Clock, label: "Fast Matching" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1f4c]">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f4c] via-[#0f2660] to-[#0a1840]" />
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#1a6bfa]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#1a6bfa]/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 text-white/70 text-xs font-semibold tracking-widest uppercase mb-6 border-l-2 border-emerald-400 pl-3">
              Now Launching in Leeds
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
          >
            Trusted People,{" "}
            <span className="text-[#4d9bff]">Flexible Work</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-xl"
          >
            Linkoba connects Leeds businesses and households with vetted,
            reliable professionals, from kitchen porters to cleaning specialists.
            Simple, fast and built on trust.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mb-14"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#1a6bfa] hover:bg-[#1558d4] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#1a6bfa]/30 hover:shadow-xl hover:shadow-[#1a6bfa]/30 group"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/workers"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white hover:bg-white/8 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Join as a Worker
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <Icon size={14} className="text-[#4d9bff]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats card, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block absolute right-8 xl:right-16 top-1/2 -translate-y-1/2"
        >
          <div className="bg-white/8 backdrop-blur-xl border border-white/15 rounded-2xl p-8 w-72">
            <p className="text-xs font-bold tracking-widest uppercase text-white/40 mb-6">
              Platform Highlights
            </p>
            <div className="space-y-6">
              {[
                { value: "100%", label: "Identity Verified" },
                { value: "2", label: "Launch Categories" },
                { value: "Leeds", label: "Launch City" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-3xl font-bold text-white font-display mb-0.5">
                    {value}
                  </div>
                  <div className="text-sm text-white/50">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
