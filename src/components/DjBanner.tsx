import djBanner from "../assets/dj-banner.jpg";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

export function DjBanner() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
      <img src={djBanner} alt="" width={1920} height={1080} loading="lazy"
        className="absolute inset-0 w-full h-full object-cover" style={{ filter: "contrast(1.05) saturate(1.1)" }} />
      <div className="absolute inset-0 dj-gradient" style={{ opacity: 0.75 }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 0%, rgba(17,17,17,0.55) 80%)" }} />
      <div className="relative mx-auto max-w-[1100px] px-6 lg:px-10 py-20 lg:py-40 text-center">
        <div className="font-label text-[11px]" style={{ color: "var(--gold-primary)", letterSpacing: "0.25em" }}>{t.dj.eyebrow}</div>
        <h2 className="font-display mt-5 text-[44px] sm:text-[72px] lg:text-[112px] leading-[0.9]"
          style={{ color: "var(--white-off)", textShadow: "0 4px 40px rgba(0,0,0,0.5)" }}>{t.dj.title}</h2>
        <p className="mt-6 mx-auto max-w-[560px] font-body text-[14px] sm:text-[17px]" style={{ color: "rgba(245,240,232,0.88)" }}>{t.dj.desc}</p>
        <a href="#contact" className="inline-block mt-8 font-label text-[12px] px-6 py-3 transition-colors"
          style={{ border: "1px solid var(--gold-primary)", color: "var(--gold-primary)" }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-primary)"; e.currentTarget.style.color = "var(--near-black)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold-primary)"; }}>
          {t.dj.cta}
        </a>
      </div>
    </section>
  );
}
