import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Capabilities } from "../components/Capabilities";
import { WhyUs } from "../components/WhyUs";
import { Stats } from "../components/Stats";
import { HeroScroll } from "../components/HeroScroll";
import { Testimonials } from "../components/Testimonials";
import { DjBanner } from "../components/DjBanner";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Cursor } from "../components/Cursor";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div style={{ background: "var(--near-black)" }}>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Capabilities />
        <WhyUs />
        <Stats />
        <HeroScroll />
        <Testimonials />
        <DjBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
