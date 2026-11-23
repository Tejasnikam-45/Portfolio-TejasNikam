import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolio";
import BackgroundGlow from "./ui/BackgroundGlow";
import Magnetic from "./ui/Magnetic";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const contactLinks = [
  { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}` },
  { icon: <FiPhone />, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: <FiMapPin />, label: profile.location, href: null },
  { icon: <FiGithub />, label: "github.com/Tejasnikam-45", href: profile.github },
  { icon: <FiLinkedin />, label: "LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <BackgroundGlow />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          subtitle="Open to AI/ML Engineer roles and collaborations. Reach out — I usually reply within a day."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          <Reveal direction="right">
            <div className="glass rounded-2xl p-6 sm:p-8 h-full">
              <ul className="space-y-5">
                {contactLinks.map((c) => (
                  <li key={c.label} className="flex items-center gap-4">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: "color-mix(in oklab, var(--color-accent) 20%, transparent)", color: "var(--color-accent-2)" }}
                    >
                      {c.icon}
                    </span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer" className="text-sm sm:text-base hover:text-[var(--color-accent-2)] transition-colors break-all">
                        {c.label}
                      </a>
                    ) : (
                      <span className="text-sm sm:text-base">{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="left">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-4">
              <div>
                <label className="text-sm text-[var(--color-muted)]">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--color-muted)]">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)] transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--color-muted)]">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 border border-[var(--color-border)] px-4 py-3 text-sm outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <Magnetic strength={0.15} className="block">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: "linear-gradient(90deg, var(--color-accent-2), var(--color-accent))" }}
                >
                  Send Message <FiSend />
                </button>
              </Magnetic>
              <p className="text-xs text-[var(--color-muted)] text-center">
                Opens your email client addressed to {profile.email}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
