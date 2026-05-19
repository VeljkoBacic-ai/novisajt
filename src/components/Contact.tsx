import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";
import { LiquidGlassCTA } from "./LiquidGlassCTA";

export function Contact() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-28 lg:py-36" style={{ background: "var(--surface-dark)" }}>
      <LiquidGlassCTA />
      <div ref={ref} className="reveal mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>{t.contact.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[44px] sm:text-[56px] lg:text-[72px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.contact.title1}<br />{t.contact.title2}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">
          <ContactCard
            icon="✉"
            label="EMAIL"
            value="dropshotmedia.rs@gmail.com"
            href="mailto:dropshotmedia.rs@gmail.com"
          />
          <ContactCard
            icon="📸"
            label="INSTAGRAM"
            value="@dropshotmedia.rs"
            href="https://www.instagram.com/dropshotmedia.rs/"
          />
        </div>

        <div className="mt-10 inline-flex items-center gap-2 font-label text-[11px]" style={{ color: "var(--gold-primary)" }}>
          <span className="inline-block w-2 h-2 rounded-full" style={{ background: "var(--gold-primary)" }} />
          {t.contact.response}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-5 p-7 transition-colors group"
      style={{ background: "#161616", border: "1px solid rgba(255,184,0,0.15)" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold-primary)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,184,0,0.15)"; }}
    >
      <span className="text-3xl leading-none mt-1">{icon}</span>
      <div>
        <div className="font-label text-[10px] mb-2" style={{ color: "var(--magenta)", letterSpacing: "0.25em" }}>{label}</div>
        <div className="font-body text-[16px] break-all" style={{ color: "var(--white-off)" }}>{value}</div>
      </div>
    </a>
  );
}
