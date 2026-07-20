import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import { CheckCircle2, Clock, Users, FileText, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Businesses: Flexible, Verified Staffing",
  description:
    "Linkoba provides Leeds businesses with fast, reliable, verified temporary staff. Kitchen porters, cleaning teams and more on demand.",
};

const benefits = [
  {
    icon: Clock,
    title: "Same-day and short-notice staffing",
    description:
      "Our platform matches you with available, nearby professionals in hours, not days. Coverage when you need it most.",
  },
  {
    icon: Users,
    title: "Multi-worker bookings",
    description:
      "Need three kitchen porters for a Saturday service? Request multiple professionals under one booking. Managed cleanly.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance-ready workers",
    description:
      "Every professional has passed identity, right-to-work and relevant checks. You don't carry the compliance burden alone.",
  },
  {
    icon: FileText,
    title: "Clear records",
    description:
      "Digital timesheets, booking confirmations and assignment history all in one place. Makes invoicing and auditing straightforward.",
  },
];

const useCases = [
  "Hotels & accommodation venues",
  "Restaurants & bars",
  "Event catering companies",
  "Contract caterers",
  "Office & commercial cleaning",
  "Retail & hospitality businesses",
];

export default function BusinessesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For Businesses"
        title="Reliable, vetted professionals when your business needs them most"
        description="Stop struggling with last-minute gaps. Linkoba gives Leeds businesses fast access to verified kitchen porters, cleaners and specialists, with compliance built in."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">The Challenge</p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-5 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Staffing gaps shouldn&apos;t put your operation at risk
              </h2>
              <p className="text-[#777773] leading-relaxed mb-4">
                Last-minute call-outs, seasonal demand spikes and unexpected absences are part of running a hospitality or service business. But scrambling to fill gaps wastes time and creates risk.
              </p>
              <p className="text-[#777773] leading-relaxed mb-8">
                Linkoba gives you a reliable, on-demand solution. Request staff, get matched and confirm in minutes. Every professional has been vetted so you can trust them on your premises.
              </p>

              <div className="bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-6">
                <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-4">Who uses Linkoba for business</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {useCases.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm text-[#3a3a3a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#356df3] flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 p-5 bg-white border border-[#dededb] rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                    <b.icon size={18} className="text-[#356df3]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202020] text-sm mb-1">{b.title}</h3>
                    <p className="text-xs text-[#777773] leading-relaxed">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f5f3]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="bg-white border border-[#dededb] rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
            <div>
              <Phone size={28} className="text-[#356df3] mb-4" />
              <h3 className="font-display text-2xl font-bold text-[#202020] mb-2" style={{ letterSpacing: "-0.025em" }}>
                Ready to simplify your staffing?
              </h3>
              <p className="text-[#777773] text-sm">
                Tell us your requirements and we&apos;ll show you how Linkoba works for your business.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold px-8 py-4 rounded-[10px] transition-all shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
