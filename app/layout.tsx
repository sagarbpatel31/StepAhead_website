import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: "StepAhead — Peace of Mind Every Step of the Way",
  description: "Track Your Baby's Development with AI Powered Insights.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={exo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
