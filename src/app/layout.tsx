import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberCRM — Sartaroshxona boshqaruv tizimi",
  description:
    "Sartaroshxonangizni bir joydan boshqaring. Mijozlar bazasi, navbat tizimi va hisobotlarni oddiy va qulay tarzda boshqaring.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
