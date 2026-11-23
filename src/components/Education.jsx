import { FiAward, FiBookOpen } from "react-icons/fi";
import { certifications, education } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Education" title="Academic background & certifications" />

        <div className="mt-14 grid md:grid-cols-[1.4fr_1fr] gap-8">
          <div className="grid gap-5">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-[var(--color-accent)] transition-colors">
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "color-mix(in oklab, var(--color-accent-2) 20%, transparent)", color: "var(--color-accent-2)" }}
                  >
                    <FiBookOpen />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-[var(--color-ink)]">{ed.degree}</h3>
                      <span className="text-xs text-[var(--color-muted)]">{ed.period}</span>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] mt-1">{ed.school}</p>
                    <p className="text-sm font-semibold mt-1" style={{ color: "var(--color-accent-3)" }}>
                      {ed.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="left">
            <div className="glass rounded-2xl p-6 h-full">
              <h3 className="font-[var(--font-display)] font-semibold text-lg text-[var(--color-ink)] mb-5 flex items-center gap-2">
                <FiAward style={{ color: "var(--color-accent-2)" }} /> Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="pb-4 border-b border-[var(--color-border)] last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-[var(--color-ink)]">{cert.name}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
