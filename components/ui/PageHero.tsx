interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="bg-[#f5f5f3] pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#202020 1px, transparent 1px), linear-gradient(90deg, #202020 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8">
        <span className="inline-block text-[#356df3] text-[10px] font-extrabold tracking-widest uppercase mb-5">
          {eyebrow}
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202020] leading-tight tracking-tight mb-5 max-w-2xl" style={{ letterSpacing: "-0.035em" }}>
          {title}
        </h1>
        <p className="text-[#777773] text-lg leading-relaxed max-w-xl">{description}</p>
      </div>
    </section>
  );
}
