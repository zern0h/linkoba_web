import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import { Clock, Users, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Porter Staffing in Leeds | Linkoba",
  description:
    "Fast, reliable kitchen porter staffing for restaurants, hotels and events in Leeds. Verified, experienced professionals available at short notice.",
  keywords: ["kitchen porter Leeds", "KP staffing Leeds", "hospitality staffing Leeds", "catering staff Leeds"],
};

const features = [
  { icon: Clock, title: "Short-notice cover", body: "Same-day and next-day kitchen porter availability. Coverage for emergencies, sickness and seasonal demand spikes." },
  { icon: Users, title: "Single or multi-porter bookings", body: "Book one KP or ten. Our system manages multiple assignments under one request, with clear tracking throughout." },
  { icon: CheckCircle2, title: "Vetted & experienced", body: "Every kitchen porter on Linkoba has been identity-verified and screened. References and experience levels are recorded." },
  { icon: Star, title: "Performance rated", body: "After every shift, managers can rate and review. The best performers build strong records that get them more work, and you better staff." },
];

const whoFor = [
  "Independent restaurants",
  "Hotel kitchens",
  "Wedding & events caterers",
  "Contract catering companies",
  "Stadium & venue catering",
  "Corporate hospitality",
];

export default function KitchenPortersPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Kitchen Porters"
        title="Experienced kitchen porters for Leeds hospitality"
        description="Linkoba provides restaurants, hotels and catering operations with reliable, vetted kitchen porters available at short notice, matched to your needs."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">The Service</p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-5 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Kitchen porter staffing without the headache
              </h2>
              <p className="text-[#777773] leading-relaxed mb-4">
                Running a kitchen is demanding enough. When your KP calls in sick on a Friday evening or your events diary fills up faster than expected, you need help fast, not in a week.
              </p>
              <p className="text-[#777773] leading-relaxed mb-8">
                Linkoba maintains a pool of available, experienced kitchen porters in Leeds. Submit a request, get matched and confirm, often within the hour.
              </p>

              <div className="bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-6 mb-8">
                <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-4">Typical clients</p>
                <ul className="grid grid-cols-2 gap-2">
                  {whoFor.map((w) => (
                    <li key={w} className="flex items-center gap-2 text-sm text-[#3a3a3a]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#202020] flex-shrink-0" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#202020] hover:bg-[#333] text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all shadow-sm hover:shadow-md text-sm"
              >
                Request Kitchen Porters
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4 p-5 bg-white border border-[#dededb] rounded-xl hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#f0f0ed] flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-[#202020]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#202020] text-sm mb-1">{f.title}</h3>
                    <p className="text-xs text-[#777773] leading-relaxed">{f.body}</p>
                  </div>
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
