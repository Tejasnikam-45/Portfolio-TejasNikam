import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal>
      <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-[var(--color-border)] bg-white/5 w-fit" style={{ color: "var(--color-accent-2)" }}>
            {eyebrow}
          </span>
        )}
        <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-ink)]">
          {title}
        </h2>
        {subtitle && <p className="text-[var(--color-muted)] text-base sm:text-lg">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
