import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Kitchen Porters", href: "/kitchen-porters" },
    { label: "Cleaning Services", href: "/cleaning-services" },
    { label: "For Businesses", href: "/businesses" },
    { label: "For Households", href: "/households" },
  ],
  Explore: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Trust & Safety", href: "/trust-and-safety" },
    { label: "Find Work", href: "/workers" },
  ],
  Help: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f3] px-5 pb-8 pt-14 text-[#747474] sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-8 border-b border-[#dededb] pb-8 sm:flex-row sm:items-center">
          <Link href="/" className="relative h-8 w-[118px]"><Image src="/logo-dark.svg" alt="Linkoba" fill className="object-contain object-left" /></Link>
          <div className="flex items-center gap-4 text-[#555]">
            <span className="text-xs font-semibold">Social Media</span>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] border border-[#d8d8d5] text-[11px] font-bold hover:bg-white">in</a>
            <a href="https://www.instagram.com" aria-label="Instagram" className="flex h-[34px] w-[34px] items-center justify-center rounded-[7px] border border-[#d8d8d5] text-[11px] font-bold hover:bg-white">ig</a>
            <a href="mailto:hello@linkoba.com" aria-label="Email" className="rounded-[7px] border border-[#d8d8d5] p-2 hover:bg-white"><Mail size={16} /></a>
          </div>
        </div>
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <h3 className="mb-5 text-xs font-semibold text-[#262626]">Join Our Newsletter</h3>
            <form className="flex max-w-[360px]" action="/contact">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input id="footer-email" type="email" placeholder="Enter email address" className="min-w-0 flex-1 rounded-l-[9px] border border-r-0 border-[#dedede] bg-white px-4 py-3 text-xs outline-none focus:border-[#356df3]" />
              <button type="submit" className="rounded-r-[9px] bg-[#242424] px-5 text-lg text-white" aria-label="Subscribe">→</button>
            </form>
            <p className="mt-4 max-w-[310px] text-xs leading-5">Weekly updates on local opportunities, trusted services, and the Linkoba launch.</p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="mb-5 text-xs font-semibold text-[#262626]">{group}</h3>
              <ul className="space-y-3">{links.map((link) => <li key={link.href}><Link href={link.href} className="text-xs hover:text-[#222]">{link.label}</Link></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-[#dededb] pt-6 text-[11px] sm:flex-row">
          <p>Copyright © {new Date().getFullYear()} Linkoba Ltd. All rights reserved.</p>
          <p>Connecting Leeds with trusted local professionals.</p>
        </div>
      </div>
    </footer>
  );
}
