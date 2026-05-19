import { Sparkles, Shield, Zap, MapPin } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

const ICONS = [Sparkles, Shield, Zap, MapPin];

export function Capabilities() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 lg:py-32" style={{ background: "var(--near-black)" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <SectionLabel>{t.capabilities.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.capabilities.title}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.capabilities.cards.map((c, i) => {
            const Icon = ICONS[i];
            return (
              <BentoCard key={c.h} Icon={Icon} h={c.h} t={c.t} highlight={i === 1} delay={i * 70} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  Icon, h, t, highlight, delay,
}: { Icon: typeof Sparkles; h: string; t: string; highlight: boolean; delay: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal relative p-7 lg:p-8 overflow-hidden tex-stripes"
      style={{
        background: highlight ? "linear-gradient(160deg, rgba(204,14,138,0.12), var(--surface-card))" : "var(--surface-card)",
        border: `1px solid ${highlight ? "rgba(204,14,138,0.4)" : "rgba(255,184,0,0.18)"}`,
        minHeight: 220,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center mb-5"
        style={{
          background: "rgba(255,184,0,0.1)",
          border: "1px solid rgba(255,184,0,0.35)",
          color: "var(--gold-primary)",
        }}
      >
        <Icon size={22} />
      </div>
      <h3 className="font-display text-[26px] lg:text-[30px]" style={{ color: "var(--white-off)" }}>{h}</h3>
      <p className="mt-3 font-body text-[14px]" style={{ color: "rgba(245,240,232,0.65)" }}>{t}</p>
    </div>
  );
}
