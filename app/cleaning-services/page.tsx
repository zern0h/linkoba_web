import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import { ShieldCheck, Repeat, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services in Leeds | Linkoba",
  description:
    "Professional, insured domestic and commercial cleaning in Leeds. DBS-checked cleaners matched to your home or business. Book with confidence.",
  keywords: ["cleaning services Leeds", "domestic cleaner Leeds", "home cleaning Leeds", "DBS checked cleaner Leeds"],
};

const features = [
  { icon: ShieldCheck, title: "DBS checked & insured", body: "Every cleaner on Linkoba carries appropriate insurance and holds a valid DBS certificate. No exceptions." },
  { icon: Repeat, title: "Regular or one-off", body: "Set up a weekly or fortnightly cleaning schedule, or book a single deep clean. We work around your life." },
  { icon: Calendar, title: "Flexible scheduling", body: "Choose a date and time that suits you. Your cleaner arrives prepared and leaves your home as agreed." },
  { icon: Sparkles, title: "Consistent standard", body: "Reviews after every visit keep quality high. Your cleaner builds a track record you can see before you book." },
];

const serviceTypes = [
  { title: "Regular Domestic Cleaning", desc: "Weekly or fortnightly cleaning for your home. Consistent cleaner, consistent standard." },
  { title: "One-off Deep Clean", desc: "A thorough top-to-bottom clean for any occasion: moving in, moving out or a seasonal refresh." },
  { title: "End of Tenancy Cleaning", desc: "Professional cleaning to help you meet tenancy agreement requirements and secure your deposit." },
  { title: "Commercial Office Cleaning", desc: "Reliable cleaning for offices and small commercial spaces in Leeds. Scheduled to suit your business hours." },
];

export default function CleaningServicesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Cleaning Services"
        title="Professional cleaning you can trust, in your home or office"
        description="Linkoba connects Leeds households and businesses with insured, background-checked cleaning specialists. Book with confidence. Every professional is verified."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">Service Types</p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Cleaning for every situation
              </h2>
              <div className="space-y-3 mb-8">
                {serviceTypes.map((s) => (
                  <div key={s.title} className="p-5 bg-[#f5f5f3] border border-[#dededb] rounded-xl">
                    <h3 className="font-semibold text-[#202020] text-sm mb-1">{s.title}</h3>
                    <p className="text-xs text-[#777773] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold px-7 py-3.5 rounded-[10px] transition-all shadow-sm hover:shadow-md text-sm"
              >
                Book a Cleaner
              </Link>
            </div>

            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-6">Why Linkoba Cleaning</p>
              <div className="grid grid-cols-1 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 p-5 bg-white border border-[#dededb] rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                      <f.icon size={18} className="text-[#356df3]" />
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
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
