import { FiAward, FiCpu, FiTarget } from "react-icons/fi";
import { profile } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TechMarquee from "./TechMarquee";

const pillars = [
  {
    icon: <FiCpu />,
    title: "Rigorously Evaluated AI",
    desc: "Built a RAG system scoring 4.2/5 on LLM-as-Judge evaluation and a deepfake detector at 92% accuracy — measured, not just demoed.",
  },
  {
    icon: <FiAward />,
    title: "Published Researcher",
    desc: "IEEE Xplore publication for CLICKK, an AI coding assistant, independently presented at the I3CET 2026 conference.",
  },
  {
    icon: <FiTarget />,
    title: "Hackathon Builder",
    desc: "Top 40 of 200+ teams at Hack The Core 2026 with NeuralWatch, a real-time AI fraud-detection system.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About Me" title="Turning research into shipped AI systems" />

        <div className="mt-14 grid md:grid-cols-2 gap-12 items-start">
          <Reveal direction="right">
            <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-white/5 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#22c55e" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#22c55e" }} />
              </span>
              Open to AI/ML Engineer roles
            </span>

            <p className="text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              {profile.objective} I care about building AI systems that are evaluated rigorously — not just
              demoed once — and I enjoy the full loop from data pipeline to user-facing product.
            </p>
            <p className="mt-4 text-[var(--color-muted)] text-base sm:text-lg leading-relaxed">
              Currently based in <span className="text-[var(--color-ink)] font-medium">{profile.location}</span>,
              I'm interning in Data Science at Qspiders while finishing my B.E. in Information Technology at
              A.C. Patil College of Engineering — and building production RAG pipelines on the side.
            </p>
          </Reveal>

          <div className="grid gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} direction="left" delay={i * 0.1}>
                <div className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-[var(--color-accent)] transition-colors">
                  <div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: "color-mix(in oklab, var(--color-accent) 25%, transparent)", color: "var(--color-accent-2)" }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-ink)]">{p.title}</h3>
                    <p className="text-sm text-[var(--color-muted)] mt-1">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 border-y border-[var(--color-border)] bg-white/[0.02]">
          <TechMarquee />
        </div>
      </Reveal>
    </section>
  );
}
