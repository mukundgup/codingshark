import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "CodingSharks",
  description: "A clean Next.js + Tailwind starter with header and footer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
