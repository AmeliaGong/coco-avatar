import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coco 数字分身",
  description: "基于生命之流哲学体系的AI数字伴侣",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
