"use client"
import Header from "@/components/widgets/header";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/store/provider";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={workSans.className}>
        <Header />
        <Providers>

          {children}
        </Providers>
      </body>
    </html>
  );
}
