import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Linkoba",
  description: "How Linkoba collects, uses and protects your personal data.",
};

const sections = [
  {
    title: "1. Who we are",
    body: `Linkoba Ltd (&quot;Linkoba&quot;, &quot;we&quot;, &quot;us&quot;) operates the Linkoba workforce access platform at linkoba.com. We are responsible for the personal data we collect and process in connection with our services.

Contact: hello@linkoba.com`,
  },
  {
    title: "2. What data we collect",
    body: `We collect the following categories of personal data:

- Registration data: name, email address, phone number, account type
- Professional verification data: photo ID, right-to-work documents, DBS check references
- Booking and service data: service type, location, booking history, timesheets
- Payment data: billing details and transaction history (processed by Stripe; we do not store raw card data)
- Usage data: pages visited, device type, IP address, approximate location
- Communications: messages sent through our contact forms or support system`,
  },
  {
    title: "3. Why we collect it",
    body: `We collect your data to:

- Create and manage your account
- Verify professional identities and compliance documents
- Match service requests with available professionals
- Process bookings and payments
- Communicate with you about bookings, support and platform updates
- Comply with our legal obligations (including right-to-work verification)
- Improve the platform and investigate safety concerns`,
  },
  {
    title: "4. Legal basis for processing",
    body: `We process your data on the following legal bases:

- Contract performance: to deliver the services you have requested
- Legitimate interests: to operate and improve our platform safely
- Legal obligation: to maintain right-to-work and compliance records as required by UK law
- Consent: for marketing communications (where you have opted in)`,
  },
  {
    title: "5. How long we keep it",
    body: `We retain personal data only as long as necessary:

- Account data is retained for the duration of your account plus 3 years
- Right-to-work and compliance documents are retained in line with legal requirements
- Payment records are retained for 7 years for financial compliance purposes
- Contact enquiries are retained for up to 2 years`,
  },
  {
    title: "6. Who we share it with",
    body: `We share your data with:

- Stripe (payment processing)
- Cloud infrastructure providers (data storage and hosting)
- Email delivery services (transactional communications)

We do not sell your personal data to third parties. We only share data as required to deliver our services or comply with the law.`,
  },
  {
    title: "7. Your rights",
    body: `Under UK GDPR, you have the right to:

- Access the personal data we hold about you
- Correct inaccurate data
- Request deletion of your data (subject to legal retention requirements)
- Object to or restrict certain processing
- Data portability (where applicable)
- Withdraw consent for marketing at any time

To exercise any right, contact hello@linkoba.com`,
  },
  {
    title: "8. Cookies",
    body: `We use essential cookies to operate the website, and optional analytics cookies to understand usage. You can manage cookie preferences through your browser settings.`,
  },
  {
    title: "9. Changes to this policy",
    body: `We may update this policy from time to time. Material changes will be communicated by email or by a prominent notice on the website.`,
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect your personal data. Effective from launch date."
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
              If you have any questions about this privacy policy or how we handle your data, contact us at{" "}
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
