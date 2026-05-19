import { Marquee } from "./ui/marquee";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

type Item = { name: string; role: string; body: string };

function Card({ name, role, body }: Item) {
  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");
  return (
    <figure
      className="relative w-[150px] sm:w-[210px] lg:w-72 cursor-pointer overflow-hidden p-2.5 sm:p-4 lg:p-5 mx-1 sm:mx-2"
      style={{
        background: "var(--surface-card)",
        border: "1px solid rgba(255,184,0,0.18)",
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center font-label text-[9px] sm:text-[11px] lg:text-[12px] shrink-0"
          style={{ background: "var(--gold-primary)", color: "var(--near-black)" }}
        >
          {initials}
        </div>
        <div className="flex flex-col min-w-0">
          <figcaption className="font-label text-[9px] sm:text-[11px] lg:text-[12px] truncate" style={{ color: "var(--white-off)", letterSpacing: "0.1em" }}>
            {name}
          </figcaption>
          <p className="font-body text-[9px] sm:text-[10px] lg:text-[11px] truncate" style={{ color: "rgba(245,240,232,0.55)" }}>{role}</p>
        </div>
      </div>
      <blockquote className="mt-1.5 sm:mt-2 lg:mt-3 font-body italic text-[9px] sm:text-[12px] lg:text-[13px] leading-snug line-clamp-4" style={{ color: "rgba(245,240,232,0.85)" }}>
        "{body}"
      </blockquote>
      <div className="mt-1.5 sm:mt-2 lg:mt-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "var(--gold-primary)", fontSize: 9 }}>&#9733;</span>
        ))}
      </div>
    </figure>
  );
}

export function Testimonials() {
  const { t } = useT();
  const ref = useReveal<HTMLDivElement>();
  const items = t.testimonials.items as Item[];
  const cols = [
    items.slice(0, 3),
    items.slice(2, 5),
    items.slice(4, 7),
    items.slice(6, 8).concat(items.slice(0, 2)),
  ];

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div ref={ref} className="reveal text-center">
          <SectionLabel>{t.testimonials.eyebrow}</SectionLabel>
          <h2 className="font-display mt-5 text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
            {t.testimonials.title}
          </h2>
        </div>

        {/* 3D marquee — sve velicine ekrana */}
        <div className="mt-10 lg:mt-14 relative overflow-hidden" style={{ height: 600 }}>
          <div className="flex h-full justify-center gap-1 sm:gap-2 lg:gap-3 [perspective:300px]">
            <div
              className="flex flex-row items-center gap-1 sm:gap-2 lg:gap-3"
              style={{ transform: "translateX(0px) translateY(0px) translateZ(-30px) rotateX(5deg) rotateY(-8deg) rotateZ(15deg)" }}
            >
              {cols.map((col, i) => (
                <Marquee
                  key={i}
                  vertical
                  reverse={i % 2 === 1}
                  pauseOnHover
                  className="h-full"
                  style={{ ["--duration" as keyof React.CSSProperties]: `${24 + i * 4}s` } as React.CSSProperties}
                >
                  {col.map((item, j) => (
                    <Card key={j} {...item} />
                  ))}
                </Marquee>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
