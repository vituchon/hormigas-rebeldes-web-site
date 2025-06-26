import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hormigas Rebeldes",
  description: "Comida, abrigo y contención para personas en situación de calle",
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
              <a href="/" className="hover:underline">Inicio</a>
              <a href="/quienes-somos" className="hover:underline">Quiénes Somos</a>
              <a href="/como-ayudar" className="hover:underline">Cómo Ayudar</a>
              <a href="/contacto" className="hover:underline">Contacto</a>
            </nav>
          </div>
        </header>
        <main className="max-w-5xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
          🄯 {new Date().getFullYear()} Hormigas Rebeldes. Todos los derechos compartidos.
        </footer>

        {/* Hormigas abajo */}
        <div className="ant-container bottom">
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
        </div>

        {/* Hormigas arriba */}
        <div className="ant-container top">
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
          <div className="ant-emoji">🐜</div>
        </div>

      </body>
    </html>
  );
}
