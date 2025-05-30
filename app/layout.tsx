import type { Metadata } from "next";
import "./globals.css";
import { dotGothic16 } from './font';
import FixContent from "@/components/FixContent";

export const metadata: Metadata = {
  title: "SHUNTA IWASAKI",
  description: "岩崎俊太のポートフォリオサイトです。",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${dotGothic16.className}`}>
        <FixContent />
        {children}
      </body>
    </html>
  );
}
