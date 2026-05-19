import { Check, Sparkles } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

export function Pricing() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="relative py-28 lg:py-36" style={{ background: "var(--near-black)" }}>
      <div className="absolute inset-0 tex-halftone opacity-[0.05] pointer-events-none" />
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 relative">
        <div ref={ref} className="reveal max-w-2xl">
          <SectionLabel>{t.pricing.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.pricing.title}
          </h2>
          <p className="mt-5 font-body text-[15px] max-w-[520px]" style={{ color: "rgba(245,240,232,0.65)" }}>
            {t.pricing.desc}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.pricing.tiers.map((tier, i) => (
            <Tier key={tier.badge} tier={tier} featured={i === 1} featuredLabel={t.pricing.featured} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Tier({
  tier, featured, featuredLabel,
}: {
  tier: { badge: string; price: string; suffix: string; features: string[]; cta: string };
  featured: boolean;
  featuredLabel: string;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal relative p-7 lg:p-9 flex flex-col"
      style={{
        background: featured
          ? "linear-gradient(160deg, rgba(255,184,0,0.08), var(--surface-card))"
          : "var(--surface-card)",
        border: `1px solid ${featured ? "var(--gold-primary)" : "rgba(255,184,0,0.18)"}`,
      }}
    >
      {featured && (
        <div className="absolute -top-3 left-7 inline-flex items-center gap-1 px-3 py-1 font-label text-[10px]"
          style={{ background: "var(--magenta)", color: "var(--white-off)", letterSpacing: "0.2em" }}>
          <Sparkles size={11} /> {featuredLabel}
        </div>
      )}
      <div className="flex items-center justify-between">
        <span className="font-label text-[11px]" style={{ color: featured ? "var(--gold-primary)" : "var(--magenta)", letterSpacing: "0.25em" }}>
          {tier.badge}
        </span>
      </div>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-[48px] lg:text-[56px] leading-none" style={{ color: "var(--white-off)" }}>{tier.price}</span>
      </div>
      <ul className="mt-7 space-y-3 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 font-body text-[14px]" style={{ color: "rgba(245,240,232,0.8)" }}>
            <span className="mt-1 w-4 h-4 flex items-center justify-center shrink-0"
              style={{ background: featured ? "var(--gold-primary)" : "rgba(255,184,0,0.15)", color: featured ? "var(--near-black)" : "var(--gold-primary)" }}>
              <Check size={11} strokeWidth={3} />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact"
        className="mt-8 w-full text-center font-label text-[12px] py-4 transition-colors"
        style={{
          background: featured ? "var(--gold-primary)" : "transparent",
          color: featured ? "var(--near-black)" : "var(--gold-primary)",
          border: `1px solid var(--gold-primary)`,
          letterSpacing: "0.2em",
        }}
        onMouseEnter={(e) => {
          if (!featured) { e.currentTarget.style.background = "var(--gold-primary)"; e.currentTarget.style.color = "var(--near-black)"; }
        }}
        onMouseLeave={(e) => {
          if (!featured) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold-primary)"; }
        }}>
        {tier.cta}
      </a>
    </div>
  );
}
