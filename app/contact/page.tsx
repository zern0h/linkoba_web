"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { Mail, MapPin, MessageCircle } from "lucide-react";

type Intent = "business" | "household" | "professional" | "general";

export default function ContactPage() {
  const [intent, setIntent] = useState<Intent>("general");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const intentOptions: { value: Intent; label: string }[] = [
    { value: "business", label: "I need staff for my business" },
    { value: "household", label: "I need a cleaner for my home" },
    { value: "professional", label: "I want to join as a professional" },
    { value: "general", label: "General enquiry" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the Linkoba team"
        description="Whether you need staff, a cleaner, or want to join as a professional, we'd love to hear from you. We'll respond within one business day."
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-[#202020] mb-6" style={{ letterSpacing: "-0.025em" }}>Contact details</h2>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-[#356df3]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#777773] font-medium mb-0.5">Email</p>
                    <a href="mailto:hello@linkoba.com" className="text-sm text-[#202020] font-medium hover:text-[#356df3] transition-colors">
                      hello@linkoba.com
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-[#356df3]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#777773] font-medium mb-0.5">Location</p>
                    <p className="text-sm text-[#202020] font-medium">Leeds, United Kingdom</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8edff] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-[#356df3]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#777773] font-medium mb-0.5">Response time</p>
                    <p className="text-sm text-[#202020] font-medium">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5f3] rounded-xl border border-[#dededb] p-5">
                <p className="text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-3">Launching in Leeds</p>
                <p className="text-sm text-[#777773] leading-relaxed">
                  Linkoba is currently in pre-launch for the Leeds market. Get in touch now to be among the first to access the platform when we go live.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#e8edff] flex items-center justify-center mb-5">
                    <Mail size={28} className="text-[#356df3]" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#202020] mb-3">Message sent</h3>
                  <p className="text-[#777773] max-w-sm">
                    Thank you for getting in touch. We&apos;ll review your message and respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                      How can we help?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {intentOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setIntent(opt.value)}
                          className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            intent === opt.value
                              ? "border-[#356df3] bg-[#e8edff] text-[#356df3]"
                              : "border-[#dededb] text-[#3a3a3a] hover:border-[#356df3]/40"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                        Full name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-[#dededb] text-sm text-[#202020] placeholder:text-[#777773] focus:outline-none focus:border-[#356df3] focus:ring-2 focus:ring-[#356df3]/20 transition-all bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                        Email address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#dededb] text-sm text-[#202020] placeholder:text-[#777773] focus:outline-none focus:border-[#356df3] focus:ring-2 focus:ring-[#356df3]/20 transition-all bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                      Phone number (optional)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+44 7700 000000"
                      className="w-full px-4 py-3 rounded-xl border border-[#dededb] text-sm text-[#202020] placeholder:text-[#777773] focus:outline-none focus:border-[#356df3] focus:ring-2 focus:ring-[#356df3]/20 transition-all bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-extrabold tracking-widest uppercase text-[#777773] mb-2">
                      Your message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us a bit more about what you need..."
                      className="w-full px-4 py-3 rounded-xl border border-[#dededb] text-sm text-[#202020] placeholder:text-[#777773] focus:outline-none focus:border-[#356df3] focus:ring-2 focus:ring-[#356df3]/20 transition-all resize-none bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-[#356df3] hover:bg-[#2a5de0] text-white font-semibold rounded-[10px] transition-all shadow-sm hover:shadow-md text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
