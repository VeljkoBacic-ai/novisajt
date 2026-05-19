import { Logo } from "./Logo";
import { useT } from "../lib/i18n";

export function Footer() {
  const { t } = useT();
  const links = [
    { l: t.nav.work, h: "#work" },
    { l: t.nav.services, h: "#services" },
    { l: t.nav.why, h: "#why" },
    { l: t.nav.packages, h: "#pricing" },
    { l: t.nav.contact, h: "#contact" },
  ];
  return (
    <footer style={{ background: "#0A0A0A" }}>
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Logo />
          <p className="mt-6 font-body italic text-[15px] max-w-[260px]" style={{ color: "rgba(245,240,232,0.6)" }}>{t.footer.tagline}</p>
        </div>
        <div>
          <div className="font-label text-[11px] mb-4" style={{ color: "var(--magenta)" }}>{t.footer.quick}</div>
          <ul className="space-y-3">
            {links.map((x) => (
              <li key={x.h}>
                <a href={x.h} className="font-body text-[15px] transition-colors" style={{ color: "var(--white-off)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--white-off)")}>
                  {x.l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-label text-[11px] mb-4" style={{ color: "var(--magenta)" }}>{t.footer.follow}</div>
          <ul className="space-y-3 font-body text-[15px]" style={{ color: "var(--white-off)" }}>
            <li>
              <a href="https://www.instagram.com/dropshotmedia.rs/" target="_blank" rel="noreferrer"
                style={{ color: "var(--white-off)" }}>Instagram</a>
              <span style={{ color: "rgba(245,240,232,0.45)" }}> · @dropshotmedia.rs</span>
            </li>
            <li>Facebook <span style={{ color: "rgba(245,240,232,0.45)" }}>· /dropshotmedia</span></li>
            <li>TikTok <span style={{ color: "rgba(245,240,232,0.45)" }}>· @dropshotmedia</span></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,184,0,0.15)" }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-6 flex flex-col items-center gap-2 font-label text-[11px] text-center" style={{ color: "rgba(245,240,232,0.55)" }}>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>© {new Date().getFullYear()} Dropshot Media · {t.footer.rights}</span>
            <span className="hidden md:inline" style={{ color: "rgba(245,240,232,0.3)" }}>·</span>
            <span>Kruševac · Trstenik · Vrnjačka Banja · Kraljevo</span>
          </div>
          <div>
            Dizajnirano od strane{" "}
            <a
              href="https://velbyte.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors"
              style={{ color: "var(--gold-primary)", letterSpacing: "0.15em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--magenta)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-primary)")}
            >
              VelByte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
