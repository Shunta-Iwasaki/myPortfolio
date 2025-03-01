import type { Metadata } from "next";
import "./globals.css";
import { DotGothic16, Noto_Color_Emoji } from 'next/font/google';
import FixContent from "@/components/FixContent";

export const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
});

export const notoColorEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
});

export const metadata: Metadata = {
  title: "SHUNTA IWASAKI",
  description: "岩崎俊太のポートフォリオサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${dotGothic16.className}`}>
        <FixContent />
        {children}
      </body>
    </html>
  );
}
