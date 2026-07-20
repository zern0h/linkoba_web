import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import { ShieldCheck, Star, Calendar, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Households: Trusted Home Cleaning in Leeds",
  description:
    "Book a trusted, DBS-checked cleaner for your home in Leeds. Linkoba connects households with professional, insured cleaning specialists.",
};

const benefits = [
  {
    icon: ShieldCheck,
    title: "DBS checked and insured",
    description:
      "Every cleaner on Linkoba has passed a DBS check and carries appropriate insurance. You can welcome them into your home with confidence.",
  },
  {
    icon: Star,
    title: "Consistent quality",
    description:
      "After every clean, both parties leave a review. This keeps standards high and ensures only the best professionals stay active.",
  },
  {
    icon: Calendar,
    title: "Regular or one-off",
    description:
      "Need a weekly cleaner or a one-off deep clean? Linkoba works for both. Book what you need, when you need it.",
  },
  {
    icon: Heart,
    title: "Personal match",
    description:
      "We match you with a cleaner who fits your preferences, schedule and location, not just the nearest available person.",
  },
];

export default function HouseholdsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="For Households"
        title="A cleaner you can trust, every time"
        description="Say goodbye to unreliable cleaners and the guesswork. Linkoba connects Leeds homeowners with background-checked, insured cleaning professionals."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">The Problem</p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-5 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Finding a cleaner you can actually trust shouldn&apos;t be this hard
              </h2>
              <p className="text-[#777773] leading-relaxed mb-4">
                Hiring a cleaner from a random listing is a leap of faith. You don&apos;t know who they are, whether they&apos;ve been checked, or what standard to expect.
              </p>
              <p className="text-[#777773] leading-relaxed mb-8">
                Linkoba fixes that. Every cleaner on our platform has been identity-verified, DBS-checked and reviewed. You get a professional you can rely on, and we stand behind every booking.
              </p>

              <div className="bg-[#e8edff] rounded-2xl p-6 border border-[#356df3]/15">
                <p className="font-semibold text-[#202020] text-sm mb-2">Our commitment to households</p>
                <p className="text-xs text-[#3a3a3a] leading-relaxed">
                  Every cleaning professional on Linkoba carries appropriate insurance, has a valid DBS check and has been verified with photo ID. If anything goes wrong, our support team is here to help.
                </p>
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
              <h3 className="font-display text-2xl font-bold text-[#202020] mb-2" style={{ letterSpacing: "-0.025em" }}>
                Ready to book a cleaner you can trust?
              </h3>
              <p className="text-[#777773] text-sm">
                Get in touch and we&apos;ll help you find the right match for your home.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold px-8 py-4 rounded-[10px] transition-all shadow-sm hover:shadow-md"
            >
              Book a Cleaner
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
