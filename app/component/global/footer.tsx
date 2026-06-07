import Image from "next/image";
import EmailIcon from "@/app/icons/email-icon";
import PhoneIcon from "@/app/icons/phone-icon";
import LocationIcon from "@/app/icons/location-icon";
import LinkedinIcon from "@/app/icons/linkedin-icon";
import InstagramIcon from "@/app/icons/instragam-icon";
import { constantsData } from "@/utils/constanta";

const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proses Kami", href: "#proses-kami" },
    { label: "Kontak Kami", href: "#kontak-kami" },
];

const Footer = () => {
    return (
        <footer id="kontak-kami" className="w-full bg-[#E8F1FF] mt-8">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-12">
                {/* Baris atas: logo + deskripsi (full width di mobile) */}
                <div className="flex flex-col gap-4 max-w-sm mb-8 md:hidden">
                    <Image
                        src="/logo-footer-athena.svg"
                        alt="Athena Studio"
                        width={56}
                        height={48}
                    />
                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Konsultan TI & Perusahaan Perangkat Lunak yang berfokus pada solusi transformasi digital strategis.
                    </p>
                </div>

                {/* Mobile: 2 kolom (menu + kontak) | Desktop: 3 kolom */}
                <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-16 md:justify-between">

                    {/* Logo — hanya desktop */}
                    <div className="hidden md:flex flex-col gap-4 max-w-xs">
                        <Image
                            src="/logo-footer-athena.svg"
                            alt="Athena Studio"
                            width={56}
                            height={48}
                        />
                        <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Konsultan TI & Perusahaan Perangkat Lunak yang berfokus pada solusi transformasi digital strategis.
                        </p>
                    </div>

                    {/* Kolom menu */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Menu List</h3>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-gray-500 hover:text-[#1677FF] transition-colors"
                                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Kolom kontak */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Kontak Kami</h3>
                        <a
                            href={`https://mail.google.com/mail/?view=cm&to=${constantsData.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-2 text-sm text-gray-500 hover:text-[#1677FF] transition-colors"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                            <span className="mt-0.5 shrink-0"><EmailIcon width={26} height={26} /></span>
                            <span className="break-all">{constantsData.email}</span>
                        </a>
                        <a
                            href={constantsData.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#1677FF] transition-colors"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                            <span className="shrink-0"><PhoneIcon width={25} height={26} /></span>
                            {constantsData.no_telp}
                        </a>
                        <div className="flex items-start gap-2 text-sm text-gray-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            <span className="mt-0.5 shrink-0"><LocationIcon /></span>
                            Jakarta, Indonesia
                        </div>

                        {/* Social media */}
                        <div className="flex items-center gap-3 mt-2">
                            <a
                                href={constantsData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:border-[#1677FF] transition-colors"
                            >
                                <LinkedinIcon />
                            </a>
                            <a
                                href={constantsData.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-gray-200 bg-white flex items-center justify-center hover:border-[#1677FF] transition-colors"
                            >
                                <InstagramIcon />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    © 2026 ATHENA STUDIO. All right reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
