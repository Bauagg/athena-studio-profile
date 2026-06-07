import WebsiteIcon from "@/app/icons/website-icon";
import AppMobileIcon from "@/app/icons/app-mobile-icon";
import DashboardIcon from "@/app/icons/dashboard-icon";
import IntegrationIcon from "@/app/icons/integration-icon";
import DataSecurityIcon from "@/app/icons/data-security-icon";
import ConsultationIcon from "@/app/icons/consultation-icon";

const layanan = [
    {
        icon: <WebsiteIcon />,
        title: "Website & Sistem Bisnis",
        desc: "Website dan sistem bisnis yang dirancang khusus untuk membantu operasional berjalan lebih cepat, rapi, dan profesional sehingga bisnis Anda dapat berkembang dengan lebih efisien.",
    },
    {
        icon: <AppMobileIcon />,
        title: "Aplikasi Mobile",
        desc: "Aplikasi mobile modern yang memudahkan pelanggan mengakses layanan Anda kapan saja dan di mana saja dengan pengalaman pengguna yang nyaman dan responsif.",
    },
    {
        icon: <DashboardIcon />,
        title: "Dashboard & Laporan",
        desc: "Ubah data bisnis menjadi dashboard dan laporan interaktif yang mudah dipahami untuk membantu Anda mengambil keputusan dengan lebih cepat dan tepat.",
    },
    {
        icon: <IntegrationIcon />,
        title: "Integrasi & Otomatisasi",
        desc: "Menghubungkan berbagai sistem dan mengotomatisasi proses kerja agar aktivitas bisnis menjadi lebih praktis, hemat waktu, dan minim kesalahan.",
    },
    {
        icon: <DataSecurityIcon />,
        title: "Keamanan Data",
        desc: "Melindungi data bisnis dan pelanggan Anda dengan sistem keamanan terpercaya agar tetap aman, terjaga, dan dapat diandalkan setiap saat.",
    },
    {
        icon: <ConsultationIcon />,
        title: "Konsultasi Digital",
        desc: "Membantu Anda menentukan strategi, solusi, dan pengembangan digital yang sesuai dengan kebutuhan bisnis agar lebih siap bersaing di era modern.",
    },
];

const LayananSection = () => {
    return (
        <section id="layanan" className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-[#F0F5FF]">
            <div className="max-w-screen-2xl mx-auto">

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-10 md:mb-14 gap-3">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                        Layanan{" "}
                        <span className="text-[#1677FF]">Athena Studio</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed">
                        Solusi digital modern untuk membantu bisnis Anda berkembang lebih cepat, efisien, dan terpercaya.
                    </p>
                </div>

                {/* Grid layanan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {layanan.map((item) => (
                        <div
                            key={item.title}
                            className="relative flex flex-col gap-4 p-6 bg-white/80 rounded-2xl border border-[#9CC0FE] hover:shadow-md transition-shadow overflow-hidden"
                            style={{
                                borderLeft: '4px solid #1677FF',
                            }}
                        >
                            {/* bg decoration */}
                            <div
                                className="absolute inset-0 bg-no-repeat bg-bottom-right bg-cover opacity-100 pointer-events-none"
                                style={{ backgroundImage: "url('/line_component.svg')" }}
                            />

                            <div className="relative w-14 h-14 bg-[#EBF3FF] rounded-2xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="relative text-base md:text-lg font-semibold text-gray-900">
                                {item.title}
                            </h3>
                            <p className="relative text-sm md:text-base text-gray-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LayananSection;
