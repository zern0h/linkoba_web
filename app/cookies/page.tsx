import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy | Linkoba",
  description: "How Linkoba uses cookies and similar technologies on its website.",
};

const sections = [
  {
    title: "1. What are cookies?",
    body: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work, improve user experience and provide information to website owners.`,
  },
  {
    title: "2. How we use cookies",
    body: `We use cookies for the following purposes:

- Essential cookies: Required for the website to function correctly. These cannot be disabled. They include session management, security tokens and load balancing.

- Analytics cookies: Help us understand how visitors interact with our website, including which pages are visited, how long people stay, and where they come from. This data is aggregated and anonymous.

- Preference cookies: Remember your settings and choices so the site behaves as you expect on return visits.

We do not use advertising or tracking cookies. We do not share cookie data with third-party advertisers.`,
  },
  {
    title: "3. Specific cookies we use",
    body: `Essential:
- Session cookie: Maintains your session while you use the site. Deleted when you close your browser.
- Security cookie: Protects against cross-site request forgery. Deleted at end of session.

Analytics (where consent is given):
- We may use a privacy-first analytics tool (such as Plausible or a self-hosted solution) that does not use cookies or track individual users across sites.`,
  },
  {
    title: "4. Your choices",
    body: `You can control cookies through your browser settings. Most browsers allow you to:

- View which cookies are set
- Delete individual cookies or all cookies
- Block cookies from specific sites
- Block all third-party cookies
- Block all cookies

Please note that disabling essential cookies may affect how the website works. To manage your cookies, look in your browser's Privacy, Security or History settings.`,
  },
  {
    title: "5. Third-party cookies",
    body: `Our website may include functionality provided by third parties (such as embedded maps or fonts). These services may set their own cookies. We have no direct control over these cookies. Please review the relevant third-party privacy policies for details.`,
  },
  {
    title: "6. Changes to this policy",
    body: `We may update this cookie policy from time to time. We will notify users of material changes by updating the effective date and publishing the new policy on this page.`,
  },
  {
    title: "7. Contact",
    body: `If you have questions about our use of cookies, contact us at hello@linkoba.com`,
  },
];

export default function CookiesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="How we use cookies and similar technologies on the Linkoba website."
      />
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-xl font-bold text-[#202020] mb-3" style={{ letterSpacing: "-0.02em" }}>
                  {s.title}
                </h2>
                <div className="text-sm text-[#3a3a3a] leading-relaxed whitespace-pre-line">
                  {s.body}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-[#f5f5f3] rounded-xl border border-[#dededb]">
            <p className="text-sm text-[#777773]">
              For questions about this policy, contact us at{" "}
              <a
                href="mailto:hello@linkoba.com"
                className="text-[#356df3] hover:underline"
              >
                hello@linkoba.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
