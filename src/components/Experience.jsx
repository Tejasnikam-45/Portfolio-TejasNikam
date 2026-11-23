import { FiBriefcase } from "react-icons/fi";
import { experience } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-14 relative">
          <div
            className="absolute left-[27px] top-2 bottom-2 w-px"
            style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }}
          />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.1}>
                <div className="relative flex gap-6">
                  <div
                    className="relative z-10 shrink-0 w-14 h-14 rounded-2xl glass flex items-center justify-center text-xl"
                    style={{ color: "var(--color-accent-2)" }}
                  >
                    <FiBriefcase />
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-[var(--font-display)] font-bold text-lg text-[var(--color-ink)]">
                        {job.role}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-muted)]">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-sm mt-1" style={{ color: "var(--color-accent-2)" }}>
                      {job.org}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {job.points.map((pt) => (
                        <li key={pt} className="text-sm text-[var(--color-muted)] flex gap-2">
                          <span style={{ color: "var(--color-accent)" }}>▹</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
