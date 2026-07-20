import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import { UserCheck, FileCheck, BadgeCheck, RefreshCw, MessageSquare, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Safety | Linkoba",
  description:
    "Learn how Linkoba verifies every professional on the platform and how we protect businesses, households and workers through our trust and safety framework.",
};

const verificationSteps = [
  { icon: UserCheck, title: "Photo ID Verification", body: "Every professional submits a government-issued photo ID. We verify it against their registration details before approving access." },
  { icon: FileCheck, title: "Right-to-Work Verification", body: "All professionals must evidence their legal right to work in the United Kingdom before any booking can proceed." },
  { icon: BadgeCheck, title: "DBS Screening", body: "Enhanced DBS checks are required for professionals entering homes or working in sensitive environments. We track check dates and expiry." },
  { icon: RefreshCw, title: "Document Expiry Monitoring", body: "We track expiry dates for all compliance documents. Professionals receive reminders and must renew before their active status is maintained." },
  { icon: MessageSquare, title: "References", body: "Relevant professional references are collected and reviewed as part of our onboarding process. Experience levels are recorded on each profile." },
  { icon: ShieldAlert, title: "Ongoing Review", body: "Platform conduct is monitored. A two-way review system after every booking keeps everyone accountable. Concerns are investigated promptly." },
];

export default function TrustAndSafetyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Trust & Safety"
        title="Verification is the foundation, not an afterthought"
        description="We believe that access to trusted professionals starts with rigorous verification. Here is exactly what we check, and how we keep the platform safe for everyone."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-[#202020] mb-5" style={{ letterSpacing: "-0.03em" }}>
              What we check before any professional can take bookings
            </h2>
            <p className="text-[#777773] leading-relaxed mb-4">
              Before a professional can accept a single booking through Linkoba, they must pass a structured verification process. This is not optional and cannot be bypassed.
            </p>
            <p className="text-[#777773] leading-relaxed">
              We do this because trust is not built through reviews alone. It starts before anyone walks through your door.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verificationSteps.map((v) => (
              <div
                key={v.title}
                className="bg-[#f5f5f3] border border-[#dededb] rounded-2xl p-6 hover:shadow-md hover:border-[#356df3]/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#202020] flex items-center justify-center mb-5">
                  <v.icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-[#202020] mb-2">{v.title}</h3>
                <p className="text-sm text-[#777773] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#202020] rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="font-display text-2xl font-bold mb-4" style={{ letterSpacing: "-0.025em" }}>Our commitment to every user</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "For customers", body: "You will only ever be matched with professionals who have passed our verification process. If a booking goes wrong, our support team investigates and works toward a fair resolution." },
                { label: "For professionals", body: "Your compliance documents are handled securely and confidentially. We notify you of upcoming expiry dates and guide you through renewals." },
                { label: "For everyone", body: "Two-way reviews after every job create accountability across the platform. Conduct that falls below our standards results in investigation and removal." },
              ].map((c) => (
                <div key={c.label}>
                  <p className="text-[10px] font-extrabold tracking-widest uppercase text-white/40 mb-2">{c.label}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
