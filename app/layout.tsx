import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aoye — 从毕节出发",
  description: "自学成瘾的 AI 玩家，持续迭代 AI Agent 项目的高中生",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
