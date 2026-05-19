export function SectionLabel({ children, color = "var(--magenta)" }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="flex items-center gap-3 font-label text-[12px]" style={{ color }}>
      <span className="inline-block h-[2px] w-8" style={{ background: color }} />
      <span>{children}</span>
      <span className="inline-block h-[2px] w-8" style={{ background: color }} />
    </div>
  );
}
