import Navbar from "./component/global/navbar";
import HeroSection from "./component/home/hero-section";
import TentangKamiSection from "./component/home/tentang-kami-section";
import LayananSection from "./component/home/layanan-section";
import ProsesSection from "./component/home/proses-section";
import Footer from "./component/global/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 lg:pt-22">
        <HeroSection />
        <TentangKamiSection />
        <LayananSection />
        <ProsesSection />
        <Footer />
      </div>
    </div>
  );
}
