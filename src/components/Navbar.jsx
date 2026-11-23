import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { profile } from "../data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 transition-all duration-300 rounded-2xl ${
          scrolled ? "glass mx-4 sm:mx-auto shadow-lg shadow-black/20" : ""
        }`}
        style={{ paddingTop: scrolled ? "0.6rem" : 0, paddingBottom: scrolled ? "0.6rem" : 0 }}
      >
        <button
          onClick={() => handleNavClick("home")}
          className="font-[var(--font-display)] font-bold text-lg tracking-tight"
        >
          <span className="text-gradient">TN</span>
          <span className="hidden sm:inline text-[var(--color-ink)]"> · Tejas Nikam</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === link.id
                  ? "text-[var(--color-ink)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              }`}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "color-mix(in oklab, var(--color-accent) 25%, transparent)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href={profile.resumeUrl}
            download
            className="text-sm font-semibold px-4 py-2 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent-2)] transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          className="md:hidden text-2xl text-[var(--color-ink)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mx-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col p-2">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium ${
                    active === link.id ? "bg-white/10 text-[var(--color-ink)]" : "text-[var(--color-muted)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="text-left px-4 py-3 rounded-xl text-sm font-semibold text-[var(--color-accent-2)]"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
