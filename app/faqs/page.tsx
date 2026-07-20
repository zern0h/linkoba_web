"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";

const faqGroups = [
  {
    group: "About Linkoba",
    items: [
      {
        q: "What is Linkoba?",
        a: "Linkoba is a workforce access platform that connects businesses and households in Leeds with trusted, verified local professionals. We currently offer kitchen porter staffing and cleaning services.",
      },
      {
        q: "Where does Linkoba operate?",
        a: "Linkoba is launching in Leeds, United Kingdom. We are starting here because we want to build a platform that genuinely serves a local community before expanding. If you are outside Leeds, register your interest and we will let you know when we come to your area.",
      },
      {
        q: "Is Linkoba live yet?",
        a: "Linkoba is in pre-launch. We are building our worker community and our customer base now so we can hit the ground running. Get in touch to be among the first to access the platform.",
      },
    ],
  },
  {
    group: "For Businesses & Households",
    items: [
      {
        q: "How do I book a professional?",
        a: "During pre-launch, get in touch through our contact form and tell us what you need. Once the platform is live, bookings will be made directly through the Linkoba application.",
      },
      {
        q: "Can I book at short notice?",
        a: "Yes. Linkoba is designed for flexibility. Professionals set real-time availability and our matching system works around the clock, so same-day and next-day bookings are possible once the platform is live.",
      },
      {
        q: "How much does it cost?",
        a: "Pricing depends on the service, duration and the professional. We will always show you transparent pricing before you confirm any booking. There are no hidden fees.",
      },
      {
        q: "What if something goes wrong?",
        a: "Linkoba has a dedicated trust and safety process. If a booking does not go to plan, our support team investigates and works toward a fair resolution for all parties.",
      },
      {
        q: "Can I choose a regular professional?",
        a: "Yes. For recurring services like weekly cleaning, you can request your preferred professional for each booking. We encourage consistent relationships between customers and workers.",
      },
    ],
  },
  {
    group: "For Workers",
    items: [
      {
        q: "How do I join Linkoba as a worker?",
        a: "Visit our Workers page and submit the interest form. Once we review your application, we will guide you through the verification process and get you set up to start receiving opportunities.",
      },
      {
        q: "What checks do workers need to pass?",
        a: "All workers must complete identity verification and right-to-work checks. Workers in household or sensitive environments must also pass an enhanced DBS check. We guide you through everything.",
      },
      {
        q: "Can I choose my own hours?",
        a: "Yes. You set your own availability: days, times and the categories you work in. You only receive opportunities that match your preferences. You accept or decline each one.",
      },
      {
        q: "How and when do I get paid?",
        a: "Payments are processed promptly after each completed job. Rates are shown before you accept any booking. There are no surprises.",
      },
      {
        q: "What categories can I work in?",
        a: "At launch, Linkoba offers kitchen porter and cleaning service categories. More categories will be added as we grow.",
      },
    ],
  },
  {
    group: "Trust & Safety",
    items: [
      {
        q: "How do you verify professionals?",
        a: "Every professional on Linkoba goes through identity verification, right-to-work checks and relevant DBS screening before they can accept any bookings. Their documents are monitored for expiry and must remain current.",
      },
      {
        q: "Is Linkoba insured?",
        a: "Workers on the Linkoba platform carry appropriate insurance as a condition of registration. If you have a specific concern about insurance coverage for your booking, please contact us.",
      },
      {
        q: "What happens if a worker cancels last minute?",
        a: "Linkoba monitors reliability and cancellation rates. If a worker cancels, we work to find a replacement. Repeated last-minute cancellations result in review and potential removal from the platform.",
      },
    ],
  },
];

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#dededb] last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span
          className={`font-semibold text-sm transition-colors ${
            open
              ? "text-[#356df3]"
              : "text-[#202020] group-hover:text-[#356df3]"
          }`}
        >
          {q}
        </span>
        <span
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
            open ? "bg-[#356df3] text-white" : "bg-[#f0f0ed] text-[#777773]"
          }`}
        >
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
            <p className="text-sm text-[#777773] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQsPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key);

  return (
    <PageLayout>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Everything you need to know about Linkoba, for businesses, households and workers."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="space-y-12">
            {faqGroups.map((group, gi) => (
              <div key={group.group}>
                <h2 className="font-display text-xl font-bold text-[#202020] mb-6 pb-4 border-b border-[#dededb]" style={{ letterSpacing: "-0.02em" }}>
                  {group.group}
                </h2>
                {group.items.map((item, ii) => {
                  const key = `${gi}-${ii}`;
                  return (
                    <FAQItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      open={openKey === key}
                      onToggle={() => toggle(key)}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#f5f5f3] rounded-xl border border-[#dededb]">
            <p className="text-sm text-[#3a3a3a] font-medium mb-1">
              Still have a question?
            </p>
            <p className="text-sm text-[#777773]">
              Get in touch at{" "}
              <a
                href="mailto:hello@linkoba.com"
                className="text-[#356df3] hover:underline"
              >
                hello@linkoba.com
              </a>{" "}
              or use our{" "}
              <a href="/contact" className="text-[#356df3] hover:underline">
                contact form
              </a>
              . We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
