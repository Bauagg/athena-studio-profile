import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athena Studio — Konsultan TI & Software House",
  description: "Athena Studio adalah konsultan TI dan perusahaan perangkat lunak yang berfokus pada solusi transformasi digital strategis. Kami membangun website, aplikasi mobile, dashboard, dan sistem bisnis untuk membantu bisnis Anda berkembang.",
  keywords: [
    // IT Consultant
    "IT Consultant",
    "IT Consultant Jakarta",
    "IT Consultant Indonesia",
    "Konsultan IT",
    "Jasa Konsultan IT",
    "IT Consulting Services",
    // Software House
    "Software House",
    "Software House Jakarta",
    "Software House Indonesia",
    "Software Development Company",
    "Jasa Pembuatan Software",
    // Business Development IT
    "Business Development IT",
    "IT Solutions",
    "Solusi IT Bisnis",
    "Enterprise Software",
    "Custom Software Development",
    // Web Development
    "Web Development",
    "Jasa Pembuatan Website",
    "Jasa Buat Website",
    "Jasa Pembuatan Website Murah",
    "Jasa Pembuatan Website Profesional",
    "Jasa Pembuatan Website UKM",
    "Jasa Pembuatan Website UMKM",
    "Jasa Pembuatan Website Startup",
    "Website untuk UKM",
    "Website untuk UMKM",
    "Website untuk Startup",
    "Website Bisnis UKM",
    "Website Bisnis UMKM",
    "Website Startup Indonesia",
    "Buat Website UKM Murah",
    "Buat Website UMKM Murah",
    "Buat Website Startup Murah",
    "Solusi Website UKM",
    "Solusi Digital UMKM",
    "Digitalisasi UKM",
    "Digitalisasi UMKM",
    "Website Company Profile",
    "Website Company Profile UKM",
    "Website Company Profile UMKM",
    "Website Perusahaan",
    "Web Developer Jakarta",
    "Landing Page",
    "Landing Page UKM",
    "Landing Page UMKM",
    "Landing Page Startup",
    "E-commerce Website",
    "Toko Online",
    "Toko Online UKM",
    "Toko Online UMKM",
    "Platform E-commerce UMKM",
    // Mobile App Development
    "Mobile App Development",
    "Jasa Pembuatan Aplikasi",
    "Jasa Buat Aplikasi Mobile",
    "Aplikasi Android",
    "Aplikasi iOS",
    "React Native Developer",
    "Flutter Developer",
    "Mobile Developer Jakarta",
    // Digital Marketing
    "Digital Marketing",
    "Digital Marketing Agency",
    "Jasa Digital Marketing",
    "Social Media Marketing",
    "SEO Services",
    "Jasa SEO",
    "Google Ads",
    "Meta Ads",
    "Facebook Ads",
    "Instagram Ads",
    "Content Marketing",
    "Email Marketing",
    // Transformasi Digital
    "Transformasi Digital",
    "Digital Transformation",
    "Digitalisasi Bisnis",
    "Modernisasi Sistem",
    // UI/UX
    "UI UX Design",
    "Jasa Desain UI UX",
    "User Interface Design",
    "User Experience Design",
    // UKM & UMKM Extended
    "Jasa Pembuatan Website Usaha Kecil",
    "Jasa Pembuatan Website Usaha Menengah",
    "Website untuk Usaha Kecil Menengah",
    "Website untuk Bisnis Kecil",
    "Harga Website UKM Terjangkau",
    "Paket Website UMKM Murah",
    "Paket Website Startup Murah",
    "Website Profil Bisnis UMKM",
    "Sistem Informasi UKM",
    "Sistem Informasi UMKM",
    "Aplikasi Web UKM",
    "Aplikasi Web UMKM",
    "Jasa IT UMKM",
    "Jasa IT UKM",
    "Solusi IT untuk UMKM",
    "Solusi IT untuk UKM",
    "Teknologi untuk UMKM",
    "Teknologi untuk UKM",
    "Pengembangan Digital UKM",
    "Pengembangan Digital UMKM",
    // Startup Extended
    "Startup Website Indonesia",
    "Jasa Pembuatan Website Startup Jakarta",
    "Startup App Development",
    "MVP Development",
    "Minimum Viable Product",
    "Jasa Pembuatan MVP",
    "Tech Startup Indonesia",
    "Startup Software House",
    "Software House untuk Startup",
    "IT Partner Startup",
    "Pengembangan Produk Digital Startup",
    "Website Startup Profesional",
    "Aplikasi Startup Indonesia",
    "Jasa IT Startup",
    // Long-tail UKM/UMKM
    "Cara Buat Website UKM",
    "Cara Buat Website UMKM",
    "Biaya Pembuatan Website UMKM",
    "Biaya Pembuatan Website Startup",
    "Jasa Pembuatan Website Terpercaya",
    "Web Developer untuk UKM",
    "Web Developer untuk UMKM",
    "Web Developer untuk Startup",
    "Konsultan Digital UMKM",
    "Konsultan Digital Startup",
    // General
    "Tech Company Jakarta",
    "Startup IT Indonesia",
    "Athena Studio",
    "Jakarta",
    "Indonesia",
  ],
  alternates: {
    canonical: "https://athenastudio.my.id",
    languages: {
      'id-ID': 'https://athenastudio.my.id',
      'en-US': 'https://profile.athenastudio.my.id',
    },
  },
  authors: [{ name: "Athena Studio", url: "https://athenastudio.my.id" }],
  creator: "Athena Studio",
  openGraph: {
    title: "Athena Studio — Konsultan TI & Software House",
    description: "Kami membantu bisnis Anda berkembang melalui solusi digital yang tepat dan terpercaya.",
    siteName: "Athena Studio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/logo_athena.svg",
        width: 56,
        height: 48,
        alt: "Athena Studio Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Athena Studio — Konsultan TI & Software House",
    description: "Kami membantu bisnis Anda berkembang melalui solusi digital yang tepat dan terpercaya.",
    images: ["/logo_athena.svg"],
  },
  icons: {
    icon: "/logo-footer-athena.svg",
    shortcut: "/logo-footer-athena.svg",
    apple: "/logo-footer-athena.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
