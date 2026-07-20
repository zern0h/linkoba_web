import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://linkoba.com"),
  title: {
    default: "Linkoba: Trusted Professionals On Demand | Leeds",
    template: "%s | Linkoba",
  },
  description:
    "Linkoba connects businesses and households with trusted, verified local professionals in Leeds. Book kitchen porters and cleaning services with confidence.",
  keywords: [
    "kitchen porters Leeds",
    "cleaning services Leeds",
    "temporary staffing Leeds",
    "trusted professionals",
    "workforce access",
    "household cleaning",
    "catering staff Leeds",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://linkoba.com",
    siteName: "Linkoba",
    title: "Linkoba: Trusted Professionals On Demand",
    description:
      "Connecting businesses and households with trusted local professionals in Leeds.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linkoba: Trusted Professionals On Demand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkoba: Trusted Professionals On Demand",
    description:
      "Connecting businesses and households with trusted local professionals in Leeds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Linkoba",
  url: "https://linkoba.com",
  logo: "https://linkoba.com/logo-dark.svg",
  description:
    "Workforce access platform connecting businesses and households with trusted local professionals in Leeds.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leeds",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "hello@linkoba.com",
  },
  areaServed: {
    "@type": "City",
    name: "Leeds",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${plusJakarta.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
