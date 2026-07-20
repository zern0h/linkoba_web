"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    q: "What is Linkoba?",
    a: "Linkoba is a workforce access platform that connects businesses and households in Leeds with trusted, verified local professionals. We currently offer kitchen porter staffing and cleaning services.",
  },
  {
    q: "How do you verify professionals?",
    a: "Every professional on Linkoba goes through identity verification, right-to-work checks and relevant DBS screening before they can accept any bookings. Their documents are monitored for expiry and must remain current.",
  },
  {
    q: "Can I book at short notice?",
    a: "Yes. Linkoba is designed for flexibility. Professionals set real-time availability and our matching system works around the clock, so same-day and next-day bookings are possible.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the service, duration and professional. We'll show you transparent pricing before you confirm any booking. There are no hidden fees.",
  },
  {
    q: "I'm a professional. How do I join?",
    a: "Visit our Professionals page and complete the interest form. Once we review your application, we'll guide you through the verification process and get you set up to start receiving opportunities.",
  },
  {
    q: "Is Linkoba available outside Leeds right now?",
    a: "Linkoba is launching in Leeds first. We have plans to expand to other cities, but we want to get it right here before we grow. If you're outside Leeds, register your interest and we'll let you know when we're coming to you.",
  },
  {
    q: "What happens if something goes wrong?",
    a: "Linkoba has a dedicated trust and safety process. If a booking doesn't go to plan, our support team investigates and works to find a fair resolution for all parties.",
  },
];

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#dededb] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-sm transition-colors ${open ? "text-[#356df3]" : "text-[#202020] group-hover:text-[#356df3]"}`}>
          {q}
        </span>
        <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${open ? "bg-[#356df3] text-white" : "bg-[#f0f0ed] text-[#777773]"}`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#777773] leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently asked questions"
              align="left"
            />
            <p className="text-sm text-[#777773] leading-relaxed mt-2">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a href="/contact" className="text-[#356df3] hover:underline font-medium">
                Get in touch
              </a>{" "}
              and we&apos;ll help.
            </p>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
