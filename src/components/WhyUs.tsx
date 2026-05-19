import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

export function WhyUs() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="relative tex-stripes-blue py-28 lg:py-36 overflow-hidden" style={{ background: "var(--blue-dark)" }}>
      <div aria-hidden className="absolute left-[-40px] top-[40%] font-display select-none pointer-events-none"
        style={{ color: "var(--gold-primary)", opacity: 0.08, fontSize: 300, lineHeight: 0.7 }}>"</div>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div ref={ref} className="reveal lg:col-span-5">
          <SectionLabel color="var(--gold-primary)">{t.why.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.why.title1}<br />{t.why.title2}
          </h2>
          <p className="mt-6 font-body text-[15px] max-w-[420px]" style={{ color: "rgba(245,240,232,0.7)" }}>{t.why.desc}</p>
        </div>
        <ul className="lg:col-span-7 flex flex-col">
          {t.why.points.map((p, i) => (
            <Row key={p.h} n={String(i + 1).padStart(2, "0")} {...p} delay={i * 80} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Row({ n, h, t, delay }: { n: string; h: string; t: string; delay: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className="reveal py-8 grid grid-cols-12 gap-4 items-start"
      style={{ borderBottom: "1px solid rgba(255,184,0,0.18)", transitionDelay: `${delay}ms` }}>
      <div className="col-span-2 font-numeric text-[18px]" style={{ color: "var(--gold-primary)" }}>{n}</div>
      <div className="col-span-10">
        <h3 className="font-label text-[20px] sm:text-[24px]" style={{ color: "var(--white-off)", letterSpacing: "0.1em" }}>{h}</h3>
        <p className="mt-2 font-body text-[14px]" style={{ color: "rgba(245,240,232,0.65)" }}>{t}</p>
      </div>
    </li>
  );
}
