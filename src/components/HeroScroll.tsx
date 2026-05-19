import { ContainerScroll } from "./ui/container-scroll-animation";
import hero1 from "../assets/hero-1.jpg";
import { useT } from "../lib/i18n";

export function HeroScroll() {
  const { t } = useT();
  return (
    <section className="relative" style={{ background: "var(--near-black)" }}>
      <ContainerScroll
        titleComponent={
          <div className="px-6">
            <div className="font-label text-[12px] mb-4" style={{ color: "var(--magenta)", letterSpacing: "0.25em" }}>
              {t.scroll.eyebrow}
            </div>
            <h2 className="font-display text-[40px] sm:text-[64px] lg:text-[88px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
              {t.scroll.line1} <br />
              <span style={{ color: "var(--gold-primary)" }}>{t.scroll.line2}</span>
            </h2>
            <p className="mt-4 font-body text-[14px]" style={{ color: "rgba(245,240,232,0.65)" }}>
              {t.scroll.caption}
            </p>
          </div>
        }
      >
        <img
          src="https://tag-foto.rs/wp-content/uploads/2024/05/fotografije-sa-eminog-18-tog-rodjendana-27.jpg"
          alt="Dropshot Media backstage"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
