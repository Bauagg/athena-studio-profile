import KontakSection from "../component/consultation/kontak-section";
import Footer from "../component/global/footer";
import Navbar from "../component/global/navbar";

export default function ConsultationPage() {
    return (
        <div>
            <Navbar />
            <div className="pt-20 lg:pt-22">
                <KontakSection />
            </div>
            <Footer />
        </div>
    );
}
