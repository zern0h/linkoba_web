import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { Banknote, CalendarDays, TrendingUp, Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Workers: Flexible Work in Leeds",
  description:
    "Join Linkoba as a kitchen porter or cleaning worker in Leeds. Register your interest, complete verification and start earning on your own terms.",
  alternates: { canonical: "https://linkoba.com/workers" },
};

const benefits = [
  {
    icon: CalendarDays,
    title: "Work on your terms",
    description:
      "Set your availability and the types of work you want. Accept opportunities that fit around your life, not the other way around.",
  },
  {
    icon: Banknote,
    title: "Fair pay, fast payments",
    description:
      "Linkoba pays promptly. No chasing invoices, no ambiguity. Transparent rates before you accept any booking.",
  },
  {
    icon: TrendingUp,
    title: "Build your reputation",
    description:
      "Every completed job builds your profile. Strong reviews unlock better opportunities and higher-value clients.",
  },
  {
    icon: Handshake,
    title: "Supported from day one",
    description:
      "We guide you through registration, verification and your first bookings. You are not alone. We want you to succeed.",
  },
];

const steps = [
  {
    step: "01",
    title: "Register your interest",
    detail:
      "Fill in our short form to tell us about yourself, your experience and the types of work you are interested in. Takes under 10 minutes.",
  },
  {
    step: "02",
    title: "Complete verification",
    detail:
      "We will guide you through identity, right-to-work and relevant DBS checks. We make it as straightforward as possible.",
  },
  {
    step: "03",
    title: "Set your availability",
    detail:
      "Once approved, configure when you are available and the categories you work in. You stay in control of your schedule.",
  },
  {
    step: "04",
    title: "Start earning",
    detail:
      "Receive opportunities that match your profile and availability. Complete great work and get paid promptly after every job.",
  },
];

const categories = [
  {
    title: "Kitchen Porter",
    desc: "Work in hotel and restaurant kitchens across Leeds. Experience in a commercial kitchen environment is helpful but not always required.",
  },
  {
    title: "Cleaning Specialist",
    desc: "Domestic and commercial cleaning roles for households and businesses in Leeds. Reliability and attention to detail are essential.",
  },
];

export default function WorkersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For Workers"
        title="Flexible work. Fair pay. Built around your life."
        description="Join Linkoba as a kitchen porter or cleaning specialist in Leeds. Register your interest today. The platform launches soon and we are building our worker community now."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">
                Why Join Linkoba
              </p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-5 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Work that fits around your life, not the other way around
              </h2>
              <p className="text-[#777773] leading-relaxed mb-4">
                Whether you are looking to supplement your existing income, return to work
                flexibly or build a career in professional services, Linkoba gives you a
                genuine platform to do it on your terms.
              </p>
              <p className="text-[#777773] leading-relaxed mb-8">
                We verify your credentials so clients trust you before you arrive. We
                manage the bookings so you can focus on doing great work. And we pay
                fairly, every time.
              </p>

              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-4">
                Open Categories
              </p>
              <div className="space-y-3 mb-8">
                {categories.map((c) => (
                  <div
                    key={c.title}
                    className="p-5 bg-[#f5f5f3] border border-[#dededb] rounded-xl"
                  >
                    <h3 className="font-semibold text-[#202020] text-sm mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#777773] leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((b) => (
                  <div
                    key={b.title}
                    className="flex gap-4 p-5 bg-white border border-[#dededb] rounded-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                      <b.icon size={18} className="text-[#356df3]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#202020] text-sm mb-1">
                        {b.title}
                      </h3>
                      <p className="text-xs text-[#777773] leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-6">
                How to Join
              </p>
              <div className="space-y-1">
                {steps.map((s, i) => (
                  <div key={s.step} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-[#202020] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {s.step}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-px flex-1 bg-[#dededb] mt-2" />
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-[#202020] mb-1 text-sm">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#777773] leading-relaxed">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#f5f5f3] border border-[#dededb] rounded-2xl p-6 mt-2">
                <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                  Pre-launch registration
                </p>
                <p className="text-sm text-[#777773] leading-relaxed mb-5">
                  Linkoba is launching in Leeds soon. Register your interest now and we
                  will contact you as soon as onboarding opens. Early registrants get
                  priority access.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all shadow-sm hover:shadow-md text-sm group"
                >
                  Register Your Interest
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
