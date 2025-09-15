// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Bottega Marchi",
  description: "Handcrafted wood frames, mirrors, and objects.",
  icons: { icon: "data:;base64,=" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* min-h-dvh handles mobile URL bar better than min-h-screen */}
      <body className="min-h-dvh flex flex-col bg-[#FAF7F2] text-[#2B241E] antialiased">
        <Navbar />

        {/* This grows to push the footer down when content is short */}
        <main className="flex-1">
          <div className="mx-auto max-w-6xl px-4">
            {children}
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
