import "./globals.css";
import { Providers } from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ViksApp",
  description: "WhatsApp analytics dashboard with real-time messaging insights, engagement metrics, and growth tracking.",
  icons: {
    icon: "/assets/logos/viksapp-logo-2.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
