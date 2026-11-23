import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import useTypewriter from "../hooks/useTypewriter";
import { profile, stats } from "../data/portfolio";
import BackgroundGlow from "./ui/BackgroundGlow";
import Counter from "./ui/Counter";
import Magnetic from "./ui/Magnetic";
import TiltCard from "./ui/TiltCard";

export default function Hero() {
  const typed = useTypewriter(profile.taglineWords);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20">
      <BackgroundGlow />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-accent-2)" }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-[var(--font-display)] text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[var(--color-ink)]"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 h-10 sm:h-12"
            >
              <span className="text-xl sm:text-3xl font-semibold text-gradient">{typed}</span>
              <span className="inline-block w-[2px] h-6 sm:h-8 bg-[var(--color-accent-2)] ml-1 align-middle animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-base sm:text-lg text-[var(--color-muted)] max-w-xl leading-relaxed"
            >
              {profile.objective}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Magnetic className="inline-block" strength={0.25}>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block px-6 py-3 rounded-full font-semibold text-black transition-transform hover:scale-105"
                  style={{ background: "linear-gradient(90deg, var(--color-accent-2), var(--color-accent))" }}
                >
                  View Projects
                </a>
              </Magnetic>
              <Magnetic className="inline-block" strength={0.25}>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-block px-6 py-3 rounded-full font-semibold border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
                >
                  Get in Touch
                </a>
              </Magnetic>

              <div className="flex items-center gap-3 ml-2">
                {[
                  { icon: <FiGithub />, href: profile.github },
                  { icon: <FiLinkedin />, href: profile.linkedin },
                  { icon: <FiMail />, href: `mailto:${profile.email}` },
                ].map((s, i) => (
                  <Magnetic key={i} className="inline-block" strength={0.4}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-full glass flex items-center justify-center text-lg hover:text-[var(--color-accent-2)] transition-colors"
                    >
                      {s.icon}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold font-[var(--font-display)] text-gradient">
                    {s.display ? (
                      s.display
                    ) : (
                      <Counter
                        value={s.value}
                        prefix={s.prefix || ""}
                        suffix={s.suffix || ""}
                        decimals={s.decimals ?? (Number.isInteger(s.value) ? 0 : 2)}
                      />
                    )}
                  </div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center"
          >
            <TiltCard className="relative w-72 h-72 lg:w-80 lg:h-80" maxTilt={12}>
              <div
                className="absolute inset-0 rounded-[2.5rem] rotate-6 opacity-60 blur-sm"
                style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
              />
              <div className="relative w-full h-full rounded-[2.5rem] glass flex items-center justify-center overflow-hidden animate-float">
                <span className="font-[var(--font-display)] text-8xl font-bold text-gradient">TN</span>
                <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10" />
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
        aria-label="Scroll down"
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
