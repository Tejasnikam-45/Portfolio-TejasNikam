import { FiStar } from "react-icons/fi";
import { achievements } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Achievements" title="Recognition & leadership" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ background: "color-mix(in oklab, var(--color-accent-3) 20%, transparent)", color: "var(--color-accent-3)" }}
                >
                  <FiStar />
                </div>
                <h3 className="font-semibold text-[var(--color-ink)]">{a.title}</h3>
                <p className="text-sm text-[var(--color-muted)] mt-2 leading-relaxed">{a.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
