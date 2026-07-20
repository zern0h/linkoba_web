import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Linkoba",
  description: "Terms and conditions for using the Linkoba platform.",
};

const sections = [
  {
    title: "1. About these terms",
    body: `These terms govern your use of the Linkoba website and platform (linkoba.com). By registering an account or using our services, you agree to these terms. If you do not agree, do not use the platform.

Linkoba Ltd is a company registered in England and Wales.`,
  },
  {
    title: "2. Eligibility",
    body: `You must be at least 18 years old to use Linkoba. By creating an account, you confirm that all information you provide is accurate and that you have the legal right to use our services.

Professionals must hold the legal right to work in the United Kingdom and must maintain valid compliance documentation at all times.`,
  },
  {
    title: "3. Our platform",
    body: `Linkoba operates a marketplace that connects customers (businesses and households) with self-employed professionals. We are not the employer of any professional on the platform.

Linkoba facilitates bookings, manages verification and mediates disputes, but the contract for any specific service is between the customer and the professional.`,
  },
  {
    title: "4. Accounts",
    body: `You are responsible for maintaining the security of your account credentials. You must not share your account with others.

We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity or pose a safety risk to other users.`,
  },
  {
    title: "5. Bookings and payments",
    body: `Bookings are confirmed when both the customer and professional have agreed. Payment is collected from the customer at the point of booking or completion, depending on the service type.

Linkoba charges a platform fee on each transaction. The fee and the rate paid to the professional are both disclosed before confirmation.

Cancellation terms and refund eligibility depend on the notice given and the service type. These are communicated during the booking process.`,
  },
  {
    title: "6. Professional obligations",
    body: `Professionals on Linkoba must:

- Maintain valid identity, right-to-work and DBS documentation
- Arrive on time and complete agreed work to a reasonable standard
- Communicate promptly regarding any issues or changes
- Not directly solicit or accept off-platform payments from Linkoba customers

Failure to meet these obligations may result in account suspension or removal.`,
  },
  {
    title: "7. Customer obligations",
    body: `Customers must:

- Provide accurate information about the service required
- Treat professionals with respect and maintain a safe working environment
- Make payment promptly through the platform
- Not directly hire professionals outside of Linkoba during or after engagement

Customers who engage in misconduct or fail to pay may have their access suspended.`,
  },
  {
    title: "8. Disputes",
    body: `If a dispute arises between a customer and a professional, both parties should notify Linkoba support. We will investigate and work toward a fair resolution. Our decision is final in relation to the platform.

Linkoba's liability is limited to the value of the booking in dispute.`,
  },
  {
    title: "9. Limitation of liability",
    body: `Linkoba is not liable for:

- The conduct or quality of work by any professional
- Damages or losses arising from a booking
- Platform downtime or technical failures
- Actions taken by third-party service providers

Nothing in these terms limits liability for death, personal injury caused by negligence or fraud.`,
  },
  {
    title: "10. Changes to terms",
    body: `We may update these terms from time to time. We will notify registered users of material changes by email. Continued use of the platform after changes take effect constitutes acceptance of the updated terms.`,
  },
  {
    title: "11. Governing law",
    body: `These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms and conditions that govern your use of the Linkoba platform."
      />
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-bold text-[#202020] mb-3" style={{ letterSpacing: "-0.02em" }}>{s.title}</h2>
                <div className="text-sm text-[#3a3a3a] leading-relaxed whitespace-pre-line">{s.body}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-[#f5f5f3] rounded-xl border border-[#dededb]">
            <p className="text-sm text-[#777773]">
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@linkoba.com" className="text-[#356df3] hover:underline">
                hello@linkoba.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
