import Image from "next/image";
import ArrowRight from "@/app/icons/arrow-right";

const ProsesSection = () => {
    return (
        <div id="proses-kami" className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center text-center gap-3">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                            Bagaimana <span className="text-[#1677FF]">Athena</span> Membantu Bisnis Anda?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 max-w-xl leading-relaxed">
                            Pendekatan strategis dan terukur untuk menghadirkan solusi digital yang sesuai kebutuhan bisnis Anda.
                        </p>
                    </div>

                    {/* Steps — desktop/tablet */}
                    <div className="hidden md:block w-full">
                        <Image
                            src="/section-bisnis-decktop-tablet.svg"
                            alt="Proses Athena Desktop"
                            width={1296}
                            height={265}
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Steps — mobile */}
                    <div className="block md:hidden w-full">
                        <Image
                            src="/section-bisnis-mobile.svg"
                            alt="Proses Athena Mobile"
                            width={345}
                            height={1026}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="flex flex-col items-center text-center gap-5 py-14 px-6 bg-[#F0F5FF] rounded-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-gray-900">
                        Siap Mengembangkan Bisnis Anda<br className="hidden sm:block" />
                        dengan <span className="text-[#1677FF]">Solusi Digital</span>
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 max-w-lg">
                        Konsultasikan kebutuhan bisnis Anda secara gratis. Tim kami siap membantu
                    </p>
                    <a
                        href="/consultation"
                        className="flex items-center gap-2 bg-[#1677FF] hover:bg-[#0e5fd4] text-white font-medium px-6 py-3 rounded-full transition-colors text-sm sm:text-base"
                    >
                        Hubungi Tim Kami
                        <ArrowRight />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default ProsesSection;
