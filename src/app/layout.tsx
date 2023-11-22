import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HAMACA – Gary introduces you the first meme coin with a meaning",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modals,
}: {
  children: React.ReactNode;
  modals: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <body className={inter.className}>
        {children}
        {modals}
      </body>
    </html>
  );
}
