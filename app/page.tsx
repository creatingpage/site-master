import { TopBar, Header, Footer, MobileCallBar } from "../components/chrome";
import {
  Hero,
  TrustBar,
  About,
  Services,
  WorkStrip,
  Gallery,
  Plans,
  Process,
  EmergencyBand,
} from "../components/sections";
import { Reviews, ServiceAreas, Faq, FinalCta } from "../components/sections2";

export default function Page() {
  return (
    <div id="top">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WorkStrip />
        <Gallery />
        <Plans />
        <Process />
        <Reviews />
        <EmergencyBand />
        <ServiceAreas />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
