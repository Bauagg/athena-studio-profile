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
    "Athena Studio",
    "konsultan IT",
    "software house",
    "transformasi digital",
    "website bisnis",
    "aplikasi mobile",
    "dashboard",
    "sistem bisnis",
    "pengembangan software",
    "solusi digital",
    "IT consultant Indonesia",
    "solusi IT untuk UMKM",
    "digitalisasi UMKM",
    "website untuk UMKM",
    "aplikasi UMKM",
    "sistem kasir UMKM",
    "toko online UMKM",
    "software bisnis kecil",
    "teknologi untuk usaha kecil",
    "digital marketing UMKM",
    "IT support UMKM Indonesia",
    "software house untuk startup",
    "MVP development Indonesia",
    "product development startup",
    "tech startup Indonesia",
    "pengembangan produk digital",
    "konsultan teknologi startup",
    "SaaS development Indonesia",
    "prototype aplikasi startup",
    "IT partner startup",
    "scale up teknologi bisnis",
  ],
  authors: [{ name: "Athena Studio", url: "https://athenastudio.id" }],
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
