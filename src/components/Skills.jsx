import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My toolbox"
          subtitle="Languages, frameworks and tools I use to take AI products from idea to production."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.08} className="h-full">
              <div className="glass rounded-2xl p-6 h-60 flex flex-col hover:-translate-y-1 transition-transform">
                <h3 className="font-[var(--font-display)] font-semibold text-lg text-[var(--color-ink)] mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap content-start gap-2 flex-1">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-white/5 text-[var(--color-ink)] cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
