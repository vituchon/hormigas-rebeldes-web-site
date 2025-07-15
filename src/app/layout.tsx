import type { Metadata } from "next";
import Link from "next/link";
import AntsRow from './components/AntsRow';
import AnimatedMainClient from "./components/AnimatedMainClient";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hormigas Rebeldes",
  description: "Comida, abrigo y espacio para personas en situación de calle",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-gray-50 text-gray-800">
        <header className="bg-white shadow">
          <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-green-700">Hormigas Rebeldes</h1>
            <nav className="space-x-4 text-sm">
              <Link href="/" className="hover:underline">Inicio</Link>
              <Link href="/quienes-somos" className="hover:underline">Quiénes Somos</Link>
              <Link href="/como-ayudar" className="hover:underline">Cómo Ayudar</Link>
              <Link href="/contacto" className="hover:underline">Contacto</Link>
            </nav>
          </div>
        </header>
        <AnimatedMainClient>{children}</AnimatedMainClient>
        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          🄯 {new Date().getFullYear()} Hormigas Rebeldes. Todos los derechos compartidos.
        </footer>
        <AntsRow position="top" direction="left-to-right" count={5} />
        <AntsRow position="bottom" direction="right-to-left" count={10} />
      </body>
    </html>
  );
}
