export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 ${className}`} aria-label="Dropshot Media home">
      <img
        src="/logo/logo.PNG"
        alt="Dropshot Media"
        className="w-auto object-contain"
        style={{
          height: 44,
          borderRadius: "9999px",
          overflow: "hidden",
        }}
        onError={(e) => {
          const img = e.currentTarget;
          img.style.display = "none";
          const fallback = img.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = "flex";
        }}
      />
      <span
        className="items-center gap-2"
        style={{ display: "none" }}
      >
        <span
          className="inline-flex items-center justify-center"
          style={{
            width: 44,
            height: 44,
            background: "var(--gold-primary)",
            color: "var(--near-black)",
            fontFamily: "Bebas Neue",
            fontSize: 24,
            letterSpacing: "0.04em",
            borderRadius: "9999px",
          }}
        >
          DS
        </span>
        <span className="font-display text-[24px] leading-none tracking-[0.04em]" style={{ color: "var(--white-off)" }}>
          DROPSHOT<span style={{ color: "var(--gold-primary)" }}>.</span>MEDIA
        </span>
      </span>
    </a>
  );
}
