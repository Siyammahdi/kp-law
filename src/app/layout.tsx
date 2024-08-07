import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import SideBanner from "@/Components/SideBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KP Law",
  description: "A journey to get justice",
};

export default function RootLayout({
  children,
  onNext,
  step,
}: Readonly<{
  children: React.ReactNode;
  onNext: () => void;
  step: number;
}>) {
  return (
    <html className="bg-background" lang="en">
      <body className={inter.className}>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/6">
            <SideBanner />
          </div>
          <div className="lg:w-4/6">
            <Navbar />
            <div>{children}</div>
            
          </div>
        </div>
      </body>
    </html>
  );
}
