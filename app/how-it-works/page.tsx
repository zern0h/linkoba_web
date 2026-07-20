import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FinalCTA from "@/components/home/FinalCTA";
import {
  ClipboardList,
  Search,
  CheckCircle,
  Bell,
  Star,
  UserCheck,
  FileCheck,
  CalendarDays,
  Briefcase,
  Banknote,
  ShieldCheck,
  Zap,
  MapPin,
  Clock,
  Users,
  Building2,
  ChefHat,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Linkoba",
  description:
    "Learn how Linkoba connects businesses and households with trusted professionals in Leeds. Simple steps from request to completion, for customers and professionals alike.",
};

const customerSteps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Submit your request",
    body: "Tell us what you need: the service type (Kitchen Porter or Cleaning), date, time, location and any specific requirements. Businesses can request multiple workers for a single shift. Our form takes under five minutes.",
    detail: "Kitchen Porters for restaurants, hotels and events. Cleaners for homes, offices and short-lets.",
  },
  {
    n: "02",
    icon: Search,
    title: "Get matched with a verified professional",
    body: "Linkoba matches your request with available, verified professionals nearby based on category, availability, location, experience and trust signals. Every professional is identity-checked before they appear in results.",
    detail: "View profiles, ratings, completed jobs and service radius before confirming.",
  },
  {
    n: "03",
    icon: CheckCircle,
    title: "Confirm and pay securely",
    body: "Review your match and confirm your booking. Payment is handled securely through Stripe. Card, Apple Pay and Google Pay are all supported. You receive a full booking confirmation immediately.",
    detail: "No cash, no ambiguity. Transparent pricing with no hidden fees.",
  },
  {
    n: "04",
    icon: Bell,
    title: "Your professional arrives",
    body: "Your professional arrives on time, prepared and ready to work. Linkoba sends reminders and real-time status updates so you're never left guessing. Businesses can track multiple workers across a single shift.",
    detail: "Check-in and check-out is tracked digitally for full accountability.",
  },
  {
    n: "05",
    icon: Star,
    title: "Review and repeat",
    body: "After every completed job, leave a rating and review. Reviews are only accepted from verified completed bookings, with no anonymous or unverified feedback. High ratings build professional reputations and help you find the best people faster next time.",
    detail: "Build a roster of trusted professionals for recurring work.",
  },
];

const professionalSteps = [
  {
    n: "01",
    icon: UserCheck,
    title: "Apply and register",
    body: "Create your Linkoba for Professionals account. Tell us your experience, the categories you work in (Kitchen Porter, Cleaning or both), and your preferred working area in Leeds.",
    detail: "Quick application. No lengthy forms, no unnecessary barriers.",
  },
  {
    n: "02",
    icon: FileCheck,
    title: "Complete verification",
    body: "Go through Linkoba's identity, right-to-work and, where required, DBS verification process. Upload your documents through the app. Our team reviews and approves applications promptly.",
    detail: "Verification protects you and gives customers the confidence to book.",
  },
  {
    n: "03",
    icon: CalendarDays,
    title: "Set your availability",
    body: "Once approved, configure your weekly availability calendar and the types of work you're open to. Set your service radius, experience level and any preferences. You stay in full control of when and where you work.",
    detail: "Update availability any time. No lock-ins, no minimum hours.",
  },
  {
    n: "04",
    icon: Briefcase,
    title: "Receive and accept opportunities",
    body: "Linkoba notifies you when a matching booking or shift opportunity is available. Review the details, including client type, location, date, time and rate, and accept what works for you. Reject what doesn't.",
    detail: "Flexible work that fits around your life, not the other way around.",
  },
  {
    n: "05",
    icon: Banknote,
    title: "Complete the job and get paid",
    body: "Check in digitally when you arrive and check out when the job is done. Your timesheet is submitted automatically. Payment is processed promptly via Stripe after completion. Build your rating with every job you complete.",
    detail: "Earnings dashboard tracks all income, payouts and job history in one place.",
  },
];

const trustPoints = [
  { icon: ShieldCheck, title: "Identity verified", body: "Every professional is identity-checked before appearing on the platform. No unverified workers." },
  { icon: FileCheck, title: "Right-to-work checked", body: "All professionals have confirmed right-to-work documentation as required under UK employment law." },
  { icon: Star, title: "Review-verified only", body: "Ratings come exclusively from completed bookings. Unverified or anonymous reviews are not accepted." },
  { icon: ShieldCheck, title: "DBS checks available", body: "For household and sensitive environments, DBS-checked professionals are available and clearly indicated." },
];

const whyPoints = [
  { icon: Zap, title: "Fast matching", body: "Requests are matched quickly based on category, availability, location and trust. No long waits." },
  { icon: MapPin, title: "Local to Leeds", body: "Linkoba launches in Leeds with full operational focus. Local density means faster availability and more reliable service." },
  { icon: Clock, title: "Last-minute cover", body: "Need a Kitchen Porter tonight or a cleaner tomorrow? Linkoba is built for short-notice requests, not just planned bookings." },
  { icon: Users, title: "Multiple workers, one request", body: "Businesses can request multiple Kitchen Porters or cleaners for a single shift in one booking." },
];

const categories = [
  {
    icon: ChefHat,
    label: "Kitchen Porters",
    color: "bg-[#eef3ff] text-[#356df3]",
    border: "border-[#356df3]/15",
    who: "For businesses",
    customers: ["Restaurants and cafés", "Hotels and hospitality venues", "Event spaces and caterers", "Corporate canteens"],
    professionals: ["Flexible shift workers", "Hospitality-experienced porters", "Day and night shift availability", "Last-minute cover specialists"],
  },
  {
    icon: Sparkles,
    label: "Cleaning Services",
    color: "bg-[#fff4e6] text-[#d97706]",
    border: "border-[#d97706]/15",
    who: "For businesses & households",
    customers: ["Households and families", "Airbnb and short-let hosts", "Offices and commercial spaces", "Property managers"],
    professionals: ["Domestic and commercial cleaners", "Airbnb turnaround specialists", "Regular and one-time bookings", "DBS-checked for home environments"],
  },
];

function StepList({
  steps,
  accentClass,
}: {
  steps: typeof customerSteps;
  accentClass: string;
}) {
  return (
    <div className="space-y-0">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <div key={s.n} className="flex gap-5">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-xl ${accentClass} flex items-center justify-center flex-shrink-0`}>
                <Icon size={16} className="text-white" />
              </div>
              {i < steps.length - 1 && <div className="w-px flex-1 bg-[#dededb] mt-2 mb-0" style={{ minHeight: "28px" }} />}
            </div>
            <div className="pb-7">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold tracking-widest text-[#aaa] uppercase">{s.n}</span>
                <h3 className="font-semibold text-[#202020] text-sm">{s.title}</h3>
              </div>
              <p className="text-[13px] text-[#777773] leading-relaxed mb-1.5">{s.body}</p>
              <p className="text-[11px] text-[#aaa] leading-relaxed italic">{s.detail}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="How It Works"
        title="Simple by design, reliable in practice"
        description="Linkoba is built around a clear, accountable process, whether you're booking a professional for your business or home, or looking for flexible work in Leeds."
      />

      {/* ── STEP-BY-STEP ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

            {/* Customers */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#e8edff] border border-[#356df3]/20 text-[#356df3] text-[10px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                <Building2 size={11} />
                For Businesses &amp; Households
              </div>
              <h2 className="font-display text-2xl font-bold text-[#202020] mb-1 mt-4" style={{ letterSpacing: "-0.025em" }}>
                Booking a professional
              </h2>
              <p className="text-[13px] text-[#777773] mb-8 leading-relaxed">
                From your first request to a completed job: transparent, accountable and fast.
              </p>
              <StepList steps={customerSteps} accentClass="bg-[#202020]" />
            </div>

            {/* Professionals */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f0f0ed] border border-[#dededb] text-[#777773] text-[10px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full mb-2">
                <Briefcase size={11} />
                For Professionals
              </div>
              <h2 className="font-display text-2xl font-bold text-[#202020] mb-1 mt-4" style={{ letterSpacing: "-0.025em" }}>
                Joining and earning
              </h2>
              <p className="text-[13px] text-[#777773] mb-8 leading-relaxed">
                Flexible work in Leeds, on your terms, backed by a platform that verifies and pays reliably.
              </p>
              <StepList steps={professionalSteps} accentClass="bg-[#356df3]" />
            </div>

          </div>
        </div>
      </section>

      {/* ── LAUNCH CATEGORIES ── */}
      <section className="py-16 lg:py-20 bg-[#f5f5f3]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <span className="inline-block bg-white border border-[#dededb] text-[#356df3] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Launch Categories
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#202020]" style={{ letterSpacing: "-0.03em" }}>
              Two focused categories at launch
            </h2>
            <p className="text-[#777773] text-sm mt-2 max-w-xl leading-relaxed">
              Linkoba launches with Kitchen Porters and Cleaning Services, two high-demand, high-frequency workforce needs in Leeds. Focused categories mean better matching, stronger trust, and more reliable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.label} className={`bg-white rounded-2xl border ${cat.border} p-7`}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center`}>
                      <Icon size={18} />
                    </span>
                    <div>
                      <div className="font-bold text-[#202020] text-[15px]">{cat.label}</div>
                      <div className="text-[11px] text-[#aaa] font-semibold tracking-wide uppercase">{cat.who}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#aaa] mb-2">Who books</p>
                      <ul className="space-y-1.5">
                        {cat.customers.map((c) => (
                          <li key={c} className="text-[12px] text-[#555] flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#356df3] flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-[#aaa] mb-2">Who works</p>
                      <ul className="space-y-1.5">
                        {cat.professionals.map((p) => (
                          <li key={p} className="text-[12px] text-[#555] flex items-start gap-1.5">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#d97706] flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRUST & VERIFICATION ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <span className="inline-block bg-white border border-[#dededb] text-[#356df3] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Trust &amp; Verification
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#202020]" style={{ letterSpacing: "-0.03em" }}>
              Every professional is verified before they work
            </h2>
            <p className="text-[#777773] text-sm mt-2 max-w-xl leading-relaxed">
              Customers are trusting Linkoba professionals with their businesses, kitchens and homes. Every worker goes through a structured verification process before being matched with a booking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="bg-[#f5f5f3] rounded-xl p-5 border border-[#ebebea]">
                  <Icon size={20} className="text-[#356df3] mb-3" />
                  <h3 className="font-semibold text-[#202020] text-[13px] mb-1">{t.title}</h3>
                  <p className="text-[12px] text-[#777773] leading-relaxed">{t.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY LINKOBA ── */}
      <section className="py-16 lg:py-20 bg-[#f5f5f3]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <span className="inline-block bg-white border border-[#dededb] text-[#356df3] text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
              Why Linkoba
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-[#202020]" style={{ letterSpacing: "-0.03em" }}>
              Built for how businesses and households actually need workforce support
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPoints.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="bg-white rounded-xl p-5 border border-[#ebebea]">
                  <div className="w-9 h-9 rounded-lg bg-[#e8edff] flex items-center justify-center mb-3">
                    <Icon size={16} className="text-[#356df3]" />
                  </div>
                  <h3 className="font-semibold text-[#202020] text-[13px] mb-1">{w.title}</h3>
                  <p className="text-[12px] text-[#777773] leading-relaxed">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
