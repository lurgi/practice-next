import SideBar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto, Noto_Sans_KR } from "next/font/google";
import Home from "./page";
import SupabaseProvider from "@/providers/SupabaseProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const noto_sans_kr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto_sans_kr",
});

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Adapting Next.js 13V & Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${noto_sans_kr.variable}`}>
      <body className="font-noto_sans_kr">
        <SupabaseProvider>
          <SideBar>{children}</SideBar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
