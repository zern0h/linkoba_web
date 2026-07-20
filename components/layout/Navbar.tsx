"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, User, Briefcase } from "lucide-react";

const links = [
  { label: "What We Do", href: "/#services" },
  { label: "How We Work", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

function AuthDropdown({
  label,
  customerHref,
  professionalHref,
}: {
  label: string;
  customerHref: string;
  professionalHref: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isPrimary = label === "Sign Up";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={
          isPrimary
            ? "flex items-center gap-1.5 rounded-[9px] bg-[#202020] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
            : "flex items-center gap-1.5 rounded-[9px] border border-[#dedede] bg-[#fafafa] px-5 py-3 text-[13px] font-semibold text-[#222] transition-colors hover:border-[#bcbcbc]"
        }
        aria-haspopup="true"
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[#e5e5e3] bg-white py-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.10)]">
          <a
            href={customerHref}
            className="flex items-center gap-3 px-4 py-3 text-[13px] text-[#222] hover:bg-[#f5f5f3]"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef3ff]">
              <User size={13} className="text-[#356df3]" />
            </span>
            <span>
              <span className="block font-semibold">As a Customer</span>
              <span className="block text-[11px] text-[#888]">Individuals &amp; businesses</span>
            </span>
          </a>
          <a
            href={professionalHref}
            className="flex items-center gap-3 px-4 py-3 text-[13px] text-[#222] hover:bg-[#f5f5f3]"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff4e6]">
              <Briefcase size={13} className="text-[#d97706]" />
            </span>
            <span>
              <span className="block font-semibold">As a Professional</span>
              <span className="block text-[11px] text-[#888]">Workers &amp; service pros</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileAuth, setMobileAuth] = useState<"login" | "signup" | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f5f5f3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <Link href="/" className="relative h-9 w-[128px]" aria-label="Linkoba home">
          <Image src="/logo-dark.svg" alt="Linkoba" fill priority className="object-contain object-left" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#777] transition-colors hover:text-[#1f1f1f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <AuthDropdown
            label="Log In"
            customerHref="https://app.linkoba.com/login"
            professionalHref="https://work.linkoba.com/login"
          />
          <AuthDropdown
            label="Sign Up"
            customerHref="https://app.linkoba.com/signup"
            professionalHref="https://work.linkoba.com/signup"
          />
        </div>

        <button
          type="button"
          onClick={() => { setOpen((v) => !v); setMobileAuth(null); }}
          className="rounded-[8px] border border-[#dedede] bg-white p-2 text-[#222] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dedede] bg-[#f5f5f3] px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1240px] flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[8px] px-3 py-3 text-sm font-medium text-[#333] hover:bg-white"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-[#dedede] pt-4">
              <button
                type="button"
                onClick={() => setMobileAuth(mobileAuth === "login" ? null : "login")}
                className="flex items-center justify-center gap-1.5 rounded-[9px] border border-[#d7d7d7] bg-white px-4 py-3 text-sm font-semibold text-[#222]"
              >
                Log In
                <ChevronDown size={13} className={`transition-transform duration-200 ${mobileAuth === "login" ? "rotate-180" : ""}`} />
              </button>
              <button
                type="button"
                onClick={() => setMobileAuth(mobileAuth === "signup" ? null : "signup")}
                className="flex items-center justify-center gap-1.5 rounded-[9px] bg-[#202020] px-4 py-3 text-sm font-semibold text-white"
              >
                Sign Up
                <ChevronDown size={13} className={`transition-transform duration-200 ${mobileAuth === "signup" ? "rotate-180" : ""}`} />
              </button>
            </div>

            {mobileAuth && (
              <div className="mt-2 overflow-hidden rounded-xl border border-[#e5e5e3] bg-white">
                <a
                  href={mobileAuth === "login" ? "https://app.linkoba.com/login" : "https://app.linkoba.com/signup"}
                  className="flex items-center gap-3 px-4 py-3 text-[13px] text-[#222] hover:bg-[#f5f5f3]"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef3ff]">
                    <User size={13} className="text-[#356df3]" />
                  </span>
                  <span>
                    <span className="block font-semibold">As a Customer</span>
                    <span className="block text-[11px] text-[#888]">Individuals &amp; businesses</span>
                  </span>
                </a>
                <div className="mx-4 h-px bg-[#f0f0ee]" />
                <a
                  href={mobileAuth === "login" ? "https://work.linkoba.com/login" : "https://work.linkoba.com/signup"}
                  className="flex items-center gap-3 px-4 py-3 text-[13px] text-[#222] hover:bg-[#f5f5f3]"
                  onClick={() => setOpen(false)}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fff4e6]">
                    <Briefcase size={13} className="text-[#d97706]" />
                  </span>
                  <span>
                    <span className="block font-semibold">As a Professional</span>
                    <span className="block text-[11px] text-[#888]">Workers &amp; service pros</span>
                  </span>
                </a>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
