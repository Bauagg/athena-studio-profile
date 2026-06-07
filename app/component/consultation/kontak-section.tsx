"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import EmailIcon from "@/app/icons/email-icon";
import PhoneIcon from "@/app/icons/phone-icon";
import SendIcon from "@/app/icons/send-icon";
import { constantsData } from "@/utils/constanta";

interface FormData {
    nama: string;
    email: string;
    no_telepon: string;
    pesan: string;
}

const KontakSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const waMessage = `Halo Athena Studio!%0A%0ANama: ${data.nama}%0AEmail: ${data.email}%0ANo. Telepon: ${data.no_telepon}%0APesan: ${data.pesan}`;
        window.open(`${constantsData.whatsapp}?text=${waMessage}`, "_blank");
        reset();
    };

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8" style={{ background: 'linear-gradient(180deg, #FAFBFE 0%, #FFFFFF 100%)' }}>
            <div className="max-w-screen-2xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl flex flex-col lg:flex-row">

                    {/* BG line_component full cover */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <Image
                            src="/line_component.svg"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Kiri — info kontak */}
                    <div className="relative z-10 flex flex-col justify-between gap-8 p-6 md:p-10 lg:w-[55%]">

                        <div className="flex flex-col gap-4">
                            <span
                                className="text-xs font-medium bg-[#E8F1FF] rounded-full px-4 py-1.5 w-fit text-[#1677FF]"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Dukungan Pelanggan
                            </span>
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Kontak <span className="text-[#1677FF]">Kami</span>
                            </h2>
                            <p
                                className="text-sm text-gray-500 leading-relaxed max-w-sm"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Tim Athena Studio siap membantu bisnis Anda berkembang melalui solusi digital yang tepat dan terpercaya.
                            </p>

                            {/* Email card */}
                            <div className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 px-4 py-4">
                                <div className="w-10 h-10 rounded-lg bg-[#EBF3FF] flex items-center justify-center shrink-0">
                                    <EmailIcon width={24} height={24} color="#1677FF" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Email</p>
                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&to=${constantsData.email}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-gray-500 hover:text-[#1677FF] transition-colors"
                                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                    >
                                        {constantsData.email}
                                    </a>
                                </div>
                            </div>

                            {/* Telepon card */}
                            <div className="flex items-center gap-4 bg-white rounded-xl border border-gray-100 px-4 py-4">
                                <div className="w-10 h-10 rounded-lg bg-[#DBFFEF] flex items-center justify-center shrink-0">
                                    <PhoneIcon width={24} height={24} color="#2ECC71" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-gray-800" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Telepon</p>
                                    <a
                                        href={constantsData.whatsapp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-gray-500 hover:text-[#1677FF] transition-colors"
                                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                    >
                                        {constantsData.no_telp}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Kanan — form */}
                    <div className="relative z-10 flex flex-col gap-5 bg-white rounded-2xl mx-4 mb-4 mt-0 md:mx-6 md:mb-6 lg:mt-6 lg:mb-6 lg:mr-6 lg:ml-0 p-6 md:p-8 lg:flex-1 shadow-lg">
                        <div>
                            <h3
                                className="text-xl font-semibold text-gray-900"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Kirim Pesan
                            </h3>
                            <p
                                className="text-sm text-gray-400 mt-1"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                            </p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 bg-white">
                            {/* Nama */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    Nama
                                </label>
                                <input
                                    {...register("nama", { required: "Nama wajib diisi" })}
                                    type="text"
                                    placeholder="Masukkan nama Anda"
                                    className={`w-full rounded-xl border bg-[#F0F5FF] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] ${errors.nama ? "border-red-400" : "border-[#EBF3FF]"}`}
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                />
                                {errors.nama && <span className="text-xs text-red-500">{errors.nama.message}</span>}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    Email
                                </label>
                                <input
                                    {...register("email", {
                                        required: "Email wajib diisi",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Format email tidak valid" },
                                    })}
                                    type="email"
                                    placeholder="nama@email.com"
                                    className={`w-full rounded-xl border bg-[#F0F5FF] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] ${errors.email ? "border-red-400" : "border-[#EBF3FF]"}`}
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                />
                                {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                            </div>

                            {/* No. Telepon */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    No.Telepon
                                </label>
                                <input
                                    {...register("no_telepon", {
                                        required: "No. telepon wajib diisi",
                                        pattern: { value: /^[0-9+\-\s]{8,15}$/, message: "Format nomor tidak valid" },
                                    })}
                                    type="tel"
                                    placeholder="0877-1111-2222"
                                    className={`w-full rounded-xl border bg-[#F0F5FF] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] ${errors.no_telepon ? "border-red-400" : "border-[#EBF3FF]"}`}
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                />
                                {errors.no_telepon && <span className="text-xs text-red-500">{errors.no_telepon.message}</span>}
                            </div>

                            {/* Pesan */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                    Pesan
                                </label>
                                <textarea
                                    {...register("pesan", { required: "Pesan wajib diisi" })}
                                    rows={4}
                                    placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                                    className={`w-full rounded-xl border bg-[#F0F5FF] px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors resize-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] ${errors.pesan ? "border-red-400" : "border-[#EBF3FF]"}`}
                                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                />
                                {errors.pesan && <span className="text-xs text-red-500">{errors.pesan.message}</span>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 w-full flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0e5fd4] text-white font-semibold py-3.5 rounded-full transition-colors"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                Kirim
                                <SendIcon />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default KontakSection;
