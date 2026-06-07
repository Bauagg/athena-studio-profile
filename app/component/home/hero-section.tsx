import Image from "next/image";
import ArrowRight from "@/app/icons/arrow-right";

const HeroSection = () => {
    return (
        <div id="beranda" className="px-2 sm:px-3 md:px-4">
            <section className="relative w-full min-h-105 sm:min-h-130 md:min-h-171 rounded-[20px] overflow-hidden">
                <Image
                    src="/hero_content.svg"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-20">
                    <h1 className="text-white font-bold leading-tight
                        text-2xl mb-3
                        sm:text-4xl sm:mb-4
                        md:text-6xl md:mb-5
                        lg:text-7xl lg:mb-6"
                    >
                        Solusi Digital yang Membantu<br />
                        Bisnis Tumbuh Lebih Cepat
                    </h1>

                    <p className="text-white/80 leading-relaxed
                        text-sm mb-6 max-w-sm
                        sm:text-base sm:mb-7 sm:max-w-xl
                        md:text-xl md:mb-10 md:max-w-3xl"
                    >
                        Kami membantu bisnis membangun system digital yang mudah digunakan, lebih
                        efisien, dan siap mendukung pertumbuhan jangka panjang
                    </p>

                    <a
                        href="/consultation"
                        className="flex items-center gap-2 bg-[#1677FF] hover:bg-[#0e5fd4] text-white font-medium rounded-full transition-colors
                            text-sm px-5 py-2.5
                            sm:text-base sm:px-6 sm:py-3
                            md:text-lg md:px-8 md:py-3.5"
                    >
                        Konsultasi Sekarang
                        <ArrowRight />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
