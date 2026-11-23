import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolio";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 3) * 0.08} className="h-full">
      <TiltCard className="h-full" maxTilt={6}>
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative glass rounded-3xl p-6 sm:p-7 h-full flex flex-col overflow-hidden"
        >
          <div
            className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            style={{ background: "var(--color-accent)" }}
          />

          {project.image && (
            <div className="relative -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 overflow-hidden rounded-t-3xl border-b border-[var(--color-border)]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-40 sm:h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-80" />
            </div>
          )}

          <div className="relative flex items-start justify-between gap-3">
            <span
              className="text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full border border-[var(--color-border)]"
              style={{ color: "var(--color-accent-2)" }}
            >
              {project.category}
            </span>
            {project.badge && (
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full text-black"
                style={{ background: "linear-gradient(90deg, var(--color-accent-2), var(--color-accent-3))" }}
              >
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="relative font-[var(--font-display)] text-xl sm:text-2xl font-bold mt-4 text-[var(--color-ink)]">
            {project.title}
          </h3>
          <p className="text-xs text-[var(--color-muted)] mt-1">{project.period}</p>

          <p className="relative text-sm text-[var(--color-muted)] mt-4 leading-relaxed">{project.description}</p>

          {project.highlights?.length > 0 && (
            <ul className="relative mt-4 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="text-sm text-[var(--color-ink)]/90 flex gap-2">
                  <span style={{ color: "var(--color-accent-2)" }}>▹</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="relative flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-[var(--color-border)] text-[var(--color-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="relative mt-6 pt-5 border-t border-[var(--color-border)] flex items-center gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--color-accent-2)] transition-colors"
            >
              <FiGithub /> Code
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[var(--color-accent-2)] transition-colors"
              >
                <FiExternalLink /> Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </TiltCard>
    </Reveal>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Top ML & GenAI projects"
          subtitle="Selected work from my resume and GitHub — RAG systems, LLM tooling, and deep learning models."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {rest.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        )}

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/Tejasnikam-45"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] font-semibold transition-colors"
            >
              <FiGithub /> See all repositories on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
