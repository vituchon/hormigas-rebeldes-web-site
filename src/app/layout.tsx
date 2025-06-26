import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hormigas Rebeldes",
  description: "Comida, abrigo y contención para personas en situación de calle",
  icons: {
    icon: "/favicon.ico",
  }
};

type VerticalPosition = 'top' | 'bottom';
type HorizonalDirection = 'left-to-right' | 'right-to-left';
interface AntRowProps {
  position: VerticalPosition;
  direction: HorizonalDirection;
  count: number;
};

const AntRow = ({ position = "bottom", direction = "right-to-left", count = 5 }: AntRowProps) => {
  return (
    <div className={`ant-container ${position}`}>
      {Array.from({ length: count }).map((_, i) => {
          return (
            <div key={i} className={`ant-emoji ${direction}`} style={{
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${7 + (i % 3)}s`
            }}>🐜</div>
          )
        }
      )}
    </div>
  );
}

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

        <AntRow position="top" direction="left-to-right" count={5} />
        <AntRow position="bottom" direction="right-to-left" count={10} />

      </body>
    </html>
  );
}
