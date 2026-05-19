import { useReveal } from "../hooks/use-reveal";
import { SectionLabel } from "./SectionLabel";
import { useT } from "../lib/i18n";

const accents = ["var(--gold-primary)", "var(--magenta)", "var(--teal)"];

export function Services() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div ref={ref} className="reveal max-w-2xl">
          <SectionLabel>{t.services.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.services.title1}<br />{t.services.title2}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {t.services.items.map((s, i) => (
            <ServiceCard key={s.name} num={String(i + 1).padStart(2, "0")} accent={accents[i]} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  num, accent, name, desc, tags, delay,
}: { num: string; accent: string; name: string; desc: string; tags: string[]; delay: number; }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal group relative tex-stripes p-8 lg:p-10 flex flex-col"
      style={{
        background: "var(--surface-card)",
        border: "1px solid rgba(255,184,0,0.18)",
        borderTop: `3px solid ${accent}`,
        aspectRatio: "2 / 3",
        transitionDelay: `${delay}ms`,
        transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 30px 60px -20px rgba(0,0,0,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div className="font-numeric text-[80px] leading-none" style={{ color: accent }}>{num}</div>
      <h3 className="font-display text-[40px] lg:text-[48px] mt-6" style={{ color: "var(--white-off)" }}>{name}</h3>
      <p className="font-body text-[14px] mt-4 max-w-[300px]" style={{ color: "rgba(245,240,232,0.65)" }}>{desc}</p>
      <div className="mt-auto pt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="font-label text-[10px] px-2.5 py-1.5"
            style={{ border: "1px solid rgba(255,184,0,0.35)", color: "var(--white-off)", letterSpacing: "0.2em" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
