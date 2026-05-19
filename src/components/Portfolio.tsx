import { useMemo, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { useReveal } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import g6 from "../assets/gallery-6.jpg";

type Cat = "all" | "photo" | "video" | "dj";

const items: { src: string; cat: Exclude<Cat, "all">; name: string; date: string; w: number; h: number }[] = [
  { src: g1, cat: "photo", name: "Aleksa & Mila", date: "Kruševac · 2025", w: 1024, h: 768 },
  { src: g2, cat: "dj", name: "Summer Afterparty", date: "Vrnjačka Banja · 2024", w: 768, h: 1024 },
  { src: g3, cat: "photo", name: "Stojanović Gala", date: "Kraljevo · 2025", w: 1024, h: 1024 },
  { src: g4, cat: "video", name: "Korporativna večera", date: "Trstenik · 2024", w: 1024, h: 768 },
  { src: g5, cat: "photo", name: "Bridal Editorial", date: "Kruševac · 2025", w: 768, h: 1024 },
  { src: g6, cat: "dj", name: "Riverside Festival", date: "Kraljevo · 2024", w: 1024, h: 768 },
];

export function Portfolio() {
  const { t } = useT();
  const [cat, setCat] = useState<Cat>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const ref = useReveal<HTMLDivElement>();
  const filtered = useMemo(() => (cat === "all" ? items : items.filter((i) => i.cat === cat)), [cat]);

  const filters: { id: Cat; label: string }[] = [
    { id: "photo", label: t.portfolio.filters.photo },
    { id: "video", label: t.portfolio.filters.video },
    { id: "dj", label: t.portfolio.filters.dj },
    { id: "all", label: t.portfolio.filters.all },
  ];

  return (
    <section id="work" className="relative py-28 lg:py-36" style={{ background: "var(--surface-dark)" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div ref={ref} className="reveal flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <SectionLabel>{t.portfolio.eyebrow}</SectionLabel>
            <h2 className="font-display mt-5 text-[44px] sm:text-[64px] lg:text-[80px] leading-[0.9]" style={{ color: "var(--white-off)" }}>
              {t.portfolio.title}
            </h2>
          </div>
          <div className="flex flex-wrap gap-5">
            {filters.map((f) => {
              const active = cat === f.id;
              return (
                <button key={f.id} onClick={() => setCat(f.id)}
                  className="font-label text-[12px] pb-1.5 transition-colors"
                  style={{
                    color: active ? "var(--gold-primary)" : "rgba(245,240,232,0.7)",
                    borderBottom: `2px solid ${active ? "var(--gold-primary)" : "transparent"}`,
                  }}>
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((it, i) => (
            <button key={it.src + i} onClick={() => setLightbox(i)}
              className="gallery-card mb-5 block w-full text-left relative overflow-hidden break-inside-avoid"
              style={{ border: "1px solid rgba(255,184,0,0.15)" }}>
              <img src={it.src} alt={it.name} width={it.w} height={it.h} loading="lazy"
                className="gallery-img w-full h-auto block" />
              <div className="absolute left-0 bottom-0 right-0 p-4"
                style={{ background: "linear-gradient(0deg, rgba(17,17,17,0.85) 0%, transparent 100%)" }}>
                <div className="font-label text-[11px]" style={{ color: "var(--gold-primary)" }}>{it.name}</div>
                <div className="font-label text-[10px]" style={{ color: "rgba(245,240,232,0.6)" }}>{it.date}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6"
          style={{ background: "rgba(8,8,8,0.95)" }} onClick={() => setLightbox(null)} role="dialog" aria-modal>
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === null ? null : (p - 1 + filtered.length) % filtered.length)); }}
            className="absolute left-6 top-1/2 -translate-y-1/2 font-display text-[40px]"
            style={{ color: "var(--gold-primary)" }} aria-label="Previous">‹</button>
          <img src={filtered[lightbox].src} alt={filtered[lightbox].name}
            className="max-h-[90vh] max-w-[90vw] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p === null ? null : (p + 1) % filtered.length)); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-[40px]"
            style={{ color: "var(--gold-primary)" }} aria-label="Next">›</button>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 font-label text-[12px]"
            style={{ color: "var(--gold-primary)" }}>✕</button>
        </div>
      )}
    </section>
  );
}
