import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Spin & Sip — Spin. Sip. Repeat.",
  description: "O jogo de festa que cabe no teu bolso.",
  applicationName: "Spin & Sip",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "black-translucent", title: "Spin & Sip" },
  icons: { icon: "/icon.svg", apple: "/apple-touch-icon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#080712", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt"><body className={`${inter.variable} ${display.variable}`}>{children}</body></html>;
}
