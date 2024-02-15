import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Progressbar from "@/providers/Progressbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TalentBoost Consulting",
  description: "Boosting potential & driving excellence!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
