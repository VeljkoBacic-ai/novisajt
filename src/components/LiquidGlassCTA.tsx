import { Camera, Video, Music, MapPin } from "lucide-react";
import { useT } from "../lib/i18n";

export function LiquidGlassCTA() {
  const { t } = useT();
  const icons = [
    { Icon: Camera, label: t.glass.items[0] },
    { Icon: Video, label: t.glass.items[1] },
    { Icon: Music, label: t.glass.items[2] },
    { Icon: MapPin, label: t.glass.items[3] },
  ];

  return (
    <div className="hidden lg:block absolute top-12 right-10 z-20 pointer-events-none">
      <div
        className="relative overflow-hidden p-5 pointer-events-auto backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,184,0,0.08), rgba(204,14,138,0.06), rgba(13,31,92,0.1))",
          border: "1px solid rgba(255,184,0,0.25)",
          borderRadius: 20,
          boxShadow:
            "0 6px 6px rgba(0,0,0,0.2), 0 0 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 0%, rgba(255,184,0,0.15), transparent 50%)" }} />
        <div className="relative">
          <div className="font-label text-[10px] mb-3" style={{ color: "var(--gold-primary)", letterSpacing: "0.25em" }}>
            {t.glass.title}
          </div>
          <div className="flex items-center gap-3">
            {icons.map(({ Icon, label }) => (
              <a
                key={label}
                href="#contact"
                title={label}
                className="w-11 h-11 flex items-center justify-center transition-transform hover:scale-110"
                style={{
                  background: "rgba(255,184,0,0.1)",
                  border: "1px solid rgba(255,184,0,0.3)",
                  borderRadius: 12,
                  color: "var(--gold-primary)",
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
