import { motion } from "framer-motion";
import hero1 from "../assets/hero-1.jpg";
import hero2 from "../assets/hero-2.jpg";
import hero3 from "../assets/hero-3.jpg";
import { useT } from "../lib/i18n";

function AnimatedLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const { t } = useT();
  return (
    <section id="top" className="relative min-h-screen pt-[88px] overflow-hidden">
      <div className="absolute inset-0 tex-halftone opacity-[0.06] pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 40%, rgba(13,31,92,0.45) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 pt-12 lg:pt-20 pb-24">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="font-label text-[12px] mb-6"
            style={{ color: "var(--magenta)" }}
          >
            <span className="inline-block h-[2px] w-8 align-middle mr-3" style={{ background: "var(--magenta)" }} />
            {t.hero.eyebrow}
          </motion.div>

          <h1 className="font-display text-[48px] sm:text-[72px] lg:text-[120px] leading-[0.88]" style={{ color: "var(--white-off)" }}>
            <AnimatedLine text={t.hero.line1} delay={0.2} />
            <AnimatedLine text={t.hero.line2} delay={0.35} />
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ background: "var(--gold-primary)", height: 2, width: 80, transformOrigin: "left" }}
            className="my-7"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="font-body text-[15px] sm:text-[16px] max-w-[520px]"
            style={{ color: "rgba(245,240,232,0.75)" }}
          >
            {t.hero.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="font-label text-[13px] px-6 py-4 transition-colors"
              style={{ background: "var(--gold-primary)", color: "var(--near-black)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--magenta)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold-primary)")}
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="font-label text-[13px] px-6 py-4 transition-colors"
              style={{ border: "1px solid var(--gold-primary)", color: "var(--gold-primary)", background: "transparent" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold-primary)";
                e.currentTarget.style.color = "var(--near-black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--gold-primary)";
              }}
            >
              {t.hero.cta2}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {t.hero.badges.map((s) => (
              <span
                key={s}
                className="font-label text-[11px] px-3 py-2"
                style={{ border: "1px solid rgba(255,184,0,0.4)", color: "var(--white-off)", letterSpacing: "0.2em" }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative min-h-[480px] lg:min-h-[640px]">
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center font-display select-none pointer-events-none"
            style={{ color: "var(--gold-primary)", opacity: 0.1, fontSize: "clamp(200px, 30vw, 400px)", lineHeight: 0.8 }}
          >
            DS
          </div>
          {[
            { src: hero1, rot: -3, x: -30, y: 20, z: 1 },
            { src: hero2, rot: 0, x: 60, y: -10, z: 3 },
            { src: hero3, rot: 2, x: 20, y: 120, z: 2 },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: c.x }}
              transition={{ delay: 0.4 + i * 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute"
              style={{
                top: `${20 + c.y}px`,
                left: "10%",
                width: "70%",
                aspectRatio: "3 / 4",
                rotate: `${c.rot}deg`,
                zIndex: c.z,
                border: "1px solid var(--blue-brand)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                background: "var(--surface-dark)",
              }}
            >
              <img
                src={c.src}
                alt=""
                width={768}
                height={1024}
                className="w-full h-full object-cover"
                style={{ filter: "contrast(1.05) saturate(1.05)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
