"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ArrowRight from "@/app/icons/arrow-right";

const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Layanan", href: "#layanan" },
    { label: "Proses Kami", href: "#proses-kami" },
    { label: "Kontak Kami", href: "#kontak-kami" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById("kontak-kami");
            if (!footer) return;
            const footerTop = footer.getBoundingClientRect().top;
            setVisible(footerTop > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getHref = (anchor: string) => {
        return isHome ? anchor : `/${anchor}`;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-sm transition-all duration-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
            }`}
        >
            <div className="mx-auto flex max-w-360 items-center justify-between px-4 py-4 lg:px-6 lg:py-5">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo_athena.svg"
                        alt="Athena Studio"
                        width={56}
                        height={48}
                        priority
                    />
                </Link>

                {/* Nav links — desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={getHref(link.href)}
                            className="text-sm text-gray-800 hover:text-blue-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA button — desktop */}
                <a
                    href="/consultation"
                    className="hidden md:flex items-center gap-1 bg-[#1677FF] hover:bg-[#0e5fd4] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
                >
                    Konsultasi
                    <ArrowRight />
                </a>

                {/* Hamburger button — mobile */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="border-t border-gray-100 px-6 py-6 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={getHref(link.href)}
                            onClick={() => setMenuOpen(false)}
                            className="text-sm text-gray-700 font-medium py-3 px-3 rounded-xl hover:bg-gray-50 hover:text-[#1677FF] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/consultation"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 flex items-center justify-center gap-2 bg-[#1677FF] hover:bg-[#0e5fd4] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors"
                    >
                        Konsultasi
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
