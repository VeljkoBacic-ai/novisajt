import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { useT, type Lang } from "../lib/i18n";

export function Nav() {
  const { t, lang, setLang } = useT();
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.work, href: "#work" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className="mx-auto max-w-[1280px] h-[64px] flex items-center justify-between gap-4 px-3 sm:px-4"
        style={{
          background: "rgba(10,12,22,0.92)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255,184,0,0.12)",
          borderRadius: "9999px",
          boxShadow: "0 8px 40px -8px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center shrink-0 pl-1">
          <Logo />
        </div>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-label text-[12px] px-5 py-2 transition-all group"
              style={{ color: "rgba(245,240,232,0.7)", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--white-off)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(245,240,232,0.7)"; }}
            >
              {l.label}
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-4 transition-all duration-300"
                style={{ background: "var(--gold-primary)", borderRadius: 2 }}
              />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 shrink-0 pr-1">
          <LangSwitch lang={lang} setLang={setLang} />

          <a
            href="#contact"
            className="hidden md:inline-flex items-center font-label text-[12px] px-6 h-[44px] rounded-full transition-all"
            style={{
              background: "var(--gold-primary)",
              color: "var(--near-black)",
              letterSpacing: "0.1em",
              fontWeight: 700,
              boxShadow: "0 4px 20px -4px rgba(255,184,0,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--white-off)";
              e.currentTarget.style.boxShadow = "0 4px 24px -4px rgba(255,184,0,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold-primary)";
              e.currentTarget.style.boxShadow = "0 4px 20px -4px rgba(255,184,0,0.4)";
            }}
          >
            {t.nav.bookNow}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-full"
            aria-label="Toggle menu"
            style={{ border: "1px solid rgba(255,184,0,0.2)" }}
          >
            <span className="block w-4 h-[2px] mx-auto transition-all" style={{ background: "var(--gold-primary)" }} />
            <span className="block w-4 h-[2px] mx-auto transition-all" style={{ background: "var(--gold-primary)" }} />
            <span className="block w-4 h-[2px] mx-auto transition-all" style={{ background: "var(--gold-primary)" }} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden fixed inset-0 flex flex-col"
          style={{
            top: "84px",
            background: "rgba(10,12,22,0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(255,184,0,0.1)",
          }}
        >
          {/* Links */}
          <div className="flex flex-col px-8 pt-10 gap-1 flex-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-[40px] leading-none py-3 border-b flex items-center justify-between group"
                style={{
                  color: "var(--white-off)",
                  borderColor: "rgba(255,184,0,0.08)",
                  animationDelay: `${i * 60}ms`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-primary)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--white-off)"; }}
              >
                {l.label}
                <span className="text-[20px] opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "var(--gold-primary)" }}>→</span>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-8 pb-12 pt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full font-label text-[13px] py-4 rounded-full transition-colors"
              style={{
                background: "var(--gold-primary)",
                color: "var(--near-black)",
                letterSpacing: "0.1em",
                fontWeight: 700,
              }}
            >
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      className="hidden sm:inline-flex items-center font-label text-[11px] overflow-hidden rounded-full"
      style={{ border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.03)" }}
    >
      {(["sr", "en"] as Lang[]).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            onClick={() => setLang(l)}
            className="px-2.5 py-1.5 transition-colors rounded-full"
            style={{
              background: active ? "var(--gold-primary)" : "transparent",
              color: active ? "var(--near-black)" : "rgba(245,240,232,0.7)",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
            aria-label={l === "sr" ? "Srpski" : "English"}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
