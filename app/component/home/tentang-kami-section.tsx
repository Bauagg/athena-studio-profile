import Image from "next/image";
import FileIcon from "@/app/icons/file-icon";
import FokusIcon from "@/app/icons/fokus-icon";
import StatistikIcon from "@/app/icons/statistik-icon";
import TeamIcon from "@/app/icons/team-icon";

const features = [
    {
        icon: <FokusIcon width={32} height={32} />,
        title: "Fokus pada Solusi",
        desc: "Setiap solusi kami dibuat untuk membantu bisnis berjalan lebih efisien dan berkembang sesuai kebutuhan.",
    },
    {
        icon: <FileIcon width={32} height={32} />,
        title: "Mudah Dipahami",
        desc: "Kami menjelaskan proses dengan bahasa sederhana agar mudah dipahami tanpa istilah teknis yang rumit.",
    },
    {
        icon: <StatistikIcon width={32} height={32} />,
        title: "Hasil yang Terukur",
        desc: "Sistem dirancang untuk memberikan dampak nyata dalam produktivitas dan operasional bisnis.",
    },
    {
        icon: <TeamIcon width={32} height={32} />,
        title: "Pendampingan Penuh",
        desc: "Kami mendampingi Anda dari proses awal hingga sistem berjalan dengan optimal.",
    },
];

const TentangKamiSection = () => {
    return (
        <section id="tentang-kami" className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

                    {/* Kiri — teks + gambar */}
                    <div className="flex flex-col gap-6 w-full lg:w-1/2">
                        <span className="text-base sm:text-xl md:text-[28px] font-normal leading-[120%] tracking-normal text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tentang Kami</span>
                        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-medium leading-[120%] tracking-normal text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Partner Digital untuk Pertumbuhan Bisnis Anda
                        </h2>
                        <p className="text-sm sm:text-base md:text-[16px] font-normal leading-[140%] tracking-normal text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            ATHENA STUDIO adalah konsultan TI dan software house yang fokus membantu bisnis menghadirkan solusi digital yang tepat, praktis, dan memberikan hasil nyata. Kami percaya teknologi harus memudahkan, bukan mempersulit.
                        </p>
                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src="/section_conetnt.svg"
                                alt="Section Content"
                                width={704}
                                height={274}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Kanan — fitur */}
                    <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-10 w-full lg:w-1/2">
                        {features.map((item) => (
                            <div key={item.title} className="flex flex-row items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-blue-50 rounded-xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-lg sm:text-xl md:text-[24px] font-medium leading-[120%] tracking-normal text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</h3>
                                    <p className="text-sm sm:text-base md:text-[18px] font-normal leading-[140%] tracking-normal text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TentangKamiSection;
