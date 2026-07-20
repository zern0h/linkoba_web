import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About Linkoba",
  description:
    "Learn about Linkoba, the trusted workforce infrastructure connecting Leeds businesses and households with verified local professionals.",
};

const values = [
  { title: "Trust first", body: "Every decision we make starts with whether it builds or protects trust, between workers, customers and the wider community." },
  { title: "Local focus", body: "We launched in Leeds because we believe great local platforms serve local communities. We know Leeds and we serve it with care." },
  { title: "Simplicity matters", body: "Workforce access shouldn't require complexity. We invest in making our platform clear, intuitive and low-friction for everyone." },
  { title: "Fair outcomes", body: "Professionals should earn fairly. Customers should pay fairly. We design the economics of our platform around both, not just one." },
  { title: "Built to last", body: "Linkoba is not a short-term play. We're building the infrastructure for trusted local work in the UK, one city at a time." },
];

const whoWeServe = [
  {
    label: "Businesses",
    body: "Restaurants, hotels, event venues and hospitality operators that need reliable kitchen porters and cleaning cover, fast.",
  },
  {
    label: "Households",
    body: "Families and homeowners who need a cleaner they can genuinely trust in their home, booked with ease.",
  },
  {
    label: "Professionals",
    body: "Kitchen porters, cleaners, students, people returning to work, and anyone seeking flexible, fairly paid local shifts.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="Trusted workforce infrastructure for businesses, households, and workers"
        description="Linkoba exists because there is a gap between people who need reliable professionals and the professionals who want fair, flexible work. We are closing it, starting in Leeds."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">Our Story</p>
              <h2 className="font-display text-3xl font-bold text-[#202020] mb-5 leading-tight" style={{ letterSpacing: "-0.03em" }}>
                Born in Leeds, built for trust
              </h2>
              <div className="space-y-4 text-[#777773] leading-relaxed text-sm">
                <p>
                  Linkoba was founded on a simple observation: finding a reliable, verified professional, whether for a hotel kitchen or a family home, is harder than it should be. And for professionals, finding flexible, fair work in their local area is equally challenging.
                </p>
                <p>
                  We set out to build a platform that changes that. Not a gig marketplace. A trust infrastructure. One where verification, accountability and fairness are built into every interaction, and where both sides of every booking are treated with respect.
                </p>
                <p>
                  We launched in Leeds with two focused categories, Kitchen Porters and Cleaning Services, because depth beats breadth at the start. Businesses here need reliable temporary staff. Households need cleaners they can trust at home. And professionals need flexible work that pays fairly and opens doors.
                </p>
                <p>
                  Linkoba connects all three, with rigour, transparency, and care for everyone involved.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-6">Our Values</p>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <div key={v.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[#e8edff] flex items-center justify-center text-[#356df3] font-bold text-xs flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#202020] text-sm mb-1">{v.title}</h3>
                      <p className="text-xs text-[#777773] leading-relaxed">{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Who we serve */}
          <div className="mt-16">
            <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-6">Who We Serve</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoWeServe.map((item) => (
                <div key={item.label} className="bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-6">
                  <h3 className="font-semibold text-[#202020] text-sm mb-2">{item.label}</h3>
                  <p className="text-xs text-[#777773] leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-8 lg:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "Leeds", label: "Launch city" },
              { value: "2", label: "Launch service categories" },
              { value: "2026", label: "Founded" },
              { value: "People first", label: "Our philosophy" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-bold text-[#202020] mb-2" style={{ letterSpacing: "-0.04em" }}>{s.value}</div>
                <div className="text-sm text-[#777773] font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Social impact */}
          <div className="mt-10 bg-[#f5f5f3] rounded-2xl border border-[#dededb] p-8 lg:p-12 flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
            <div className="flex-shrink-0">
              <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#356df3] mb-3">Social Impact</p>
              <h3 className="font-display text-2xl font-bold text-[#202020] leading-tight max-w-xs" style={{ letterSpacing: "-0.03em" }}>
                Creating pathways into work
              </h3>
            </div>
            <p className="text-[#777773] text-sm leading-relaxed lg:pt-9 max-w-xl">
              Beyond connecting supply and demand, Linkoba is designed to create real economic opportunity. We serve students, people returning to the workforce, women balancing responsibilities, and workers from underserved communities, giving everyone a structured, supported pathway into fair, flexible employment. Workforce access is not a luxury. We're building it as infrastructure.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
