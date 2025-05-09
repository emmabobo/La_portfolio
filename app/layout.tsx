import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter , Prata} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const prata = Prata({
  variable: "--font-prata",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LA_Drogo_Portolio",
  description: "Build By next app like them talk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}  ${inter.variable} ${prata.variable} antialiased `}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
         
          <Navbar />
          <main className="transition-colors duration-500 ease-in-out  w-full  
            bg-gradient-to-r from-[#f8f9fa] via-[#e0e0e0] to-[#f8f9fa]
          dark:from-[#000000] dark:via-[#2c2c2c] dark:to-[#000000]
            bg-[length:200%_200%] animate-gradient ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
