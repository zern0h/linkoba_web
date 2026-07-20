import { type ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center" : "text-left";
  const mx = align === "center" ? "mx-auto" : "";

  return (
    <div className={`${textAlign} mb-12`}>
      {eyebrow && (
        <span
          className={`inline-block text-[10px] font-extrabold tracking-widest uppercase mb-3 ${
            light
              ? "text-white/60"
              : "text-[#356df3]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[2.625rem] font-bold leading-tight ${
          light ? "text-white" : "text-[#202020]"
        } ${mx} max-w-2xl`}
        style={{ letterSpacing: "-0.04em" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/65" : "text-[#777773]"
          } ${mx} max-w-xl`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
