import { useCountUp } from "../hooks/use-reveal";
import { useT } from "../lib/i18n";

const values = [
  { value: 50, suffix: "+" },
  { value: 2500, suffix: "+" },
  { value: 50, suffix: "+" },
  { value: 2, suffix: "" },
];

export function Stats() {
  const { t } = useT();
  return (
    <section id="stats" className="py-20" style={{ background: "var(--surface-dark)" }}>
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10 grid grid-cols-2 lg:grid-cols-4">
        {values.map((s, i) => (
          <Stat key={i} value={s.value} suffix={s.suffix} label={t.stats.items[i]} index={i} />
        ))}
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const { ref, value: v } = useCountUp(value);
  // On mobile 2-col: border-right on col 0, border-bottom on row 0
  // On desktop 4-col: border-left on all except first
  const isRightCol = index % 2 === 1;
  const isTopRow = index < 2;
  return (
    <div
      className="px-4 py-8 text-center relative"
      style={{
        borderRight: !isRightCol ? "1px solid rgba(255,184,0,0.15)" : undefined,
        borderBottom: isTopRow ? "1px solid rgba(255,184,0,0.15)" : undefined,
      }}
    >
      <div className="font-display text-[52px] sm:text-[72px] lg:text-[88px] leading-none" style={{ color: "var(--gold-primary)" }}>
        <span ref={ref}>{v.toLocaleString()}</span>{suffix}
      </div>
      <div className="mt-2 font-label text-[10px] sm:text-[11px]" style={{ color: "rgba(245,240,232,0.7)", letterSpacing: "0.18em" }}>{label}</div>
    </div>
  );
}
