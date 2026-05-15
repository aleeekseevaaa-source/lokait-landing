import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lokait — автоматизация для автосервиса",
  description: "Telegram-боты берут на себя приёмку, заявки и переписки. Сотрудники делают то, за что им платят.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body style={{ backgroundColor: "var(--bg)", color: "var(--ink)" }}>
        {children}
      </body>
    </html>
  );
}
