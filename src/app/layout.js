import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/Components/Navbar";
// import Footer from "@/Components/Footer";
// import WhatsAppFloat from "@/Components/WhatsappFloat";
// import CallFloat from "@/Components/CallFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "MetalMindCabin | Portable Cabins & Container Solutions in Mumbra, Thane",
    template: "%s | MetalMindCabin",
  },

  description:
    "MetalMindCabin offers premium portable office cabins, security cabins, toilet cabins, storage containers, and modular container houses in Mumbra, Thane & across Mumbai. Strong, durable aur modern cabin solutions ke liye contact kare.",

  keywords: [
    "Portable Cabin Mumbra",
    "Container Cabin Thane",
    "Portable Office Cabin Mumbai",
    "Security Cabin Supplier",
    "Portable Toilet Cabin India",
    "Modular Container House Mumbai",
    "Storage Container Supplier",
    "Cabin Manufacturer Thane",
  ],

  authors: [{ name: "MetalMindCabin" }],

  creator: "MetalMindCabin",

  openGraph: {
    title: "MetalMindCabin - Premium Portable Cabins in Mumbra, Thane",
    description:
      "Get durable and modern portable cabins, office containers, and modular homes in Mumbra, Thane. Contact MetalMindCabin today.",
    url: "https://yourdomain.com", // 👉 change this
    siteName: "MetalMindCabin",
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* <Navbar /> */}
        <main className="flex-grow">{children}</main>
        {/* <Footer />
        <WhatsAppFloat />
        <CallFloat /> */}
      </body>
    </html>
  );
}
