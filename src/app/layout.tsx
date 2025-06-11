import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import NavBar from "./ui/Navbar";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Rafatul Alam | FrontEnd Engineer",
  description: "Hi! Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-100">
        <NavBar />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
