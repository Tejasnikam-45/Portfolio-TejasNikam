import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent-2)] transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-accent-2)] transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-[var(--color-muted)] hover:text-[var(--color-accent-2)] transition-colors">
            <FiMail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
