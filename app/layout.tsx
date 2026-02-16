import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google"; 
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Daniel Mamani | Desarrollador Full-Stack & Backend",
  description: "Portfolio de Daniel Mamani. Estudiante de Ingeniería en Informática (UBA) y desarrollador de software enfocado en resolver problemas reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth"> 
      <body className={`${inter.variable} ${firaCode.variable} antialiased bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}