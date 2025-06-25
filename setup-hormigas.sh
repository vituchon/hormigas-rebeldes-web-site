#!/bin/bash

echo "🏗️  Armando páginas base para el sitio de Hormigas Rebeldes..."

# Ruta base
APP_DIR="src/app"

# Crear carpetas
mkdir -p "$APP_DIR/quienes-somos"
mkdir -p "$APP_DIR/como-ayudar"
mkdir -p "$APP_DIR/contacto"

# Reemplazar layout.tsx
cat > "$APP_DIR/layout.tsx" <<'EOF'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hormigas Rebeldes",
  description: "Comida, abrigo y contención para personas en situación de calle",
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
          © $(date +%Y) Hormigas Rebeldes. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
EOF

# Página principal
cat > "$APP_DIR/page.tsx" <<'EOF'
export default function HomePage() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold mb-4">Comida, abrigo y contención</h2>
      <p className="mb-6 text-gray-600">
        Nos organizamos para brindar un plato de comida, ropa limpia y un espacio de escucha a quienes más lo necesitan.
      </p>
      <a href="/como-ayudar" className="inline-block bg-green-700 text-white px-6 py-2 rounded shadow hover:bg-green-800 transition">
        Quiero ayudar
      </a>
    </div>
  );
}
EOF

# Página: quienes-somos
cat > "$APP_DIR/quienes-somos/page.tsx" <<'EOF'
export default function QuienesSomosPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Quiénes Somos</h2>
      <p className="text-gray-700">
        Somos una agrupación de personas que decidimos unirnos para acompañar a quienes viven en la calle.
        Creemos en la dignidad, la escucha y la solidaridad como pilares de una sociedad mejor.
      </p>
    </div>
  );
}
EOF

# Página: como-ayudar
cat > "$APP_DIR/como-ayudar/page.tsx" <<'EOF'
export default function ComoAyudarPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cómo Ayudar</h2>
      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Doná ropa limpia, especialmente de abrigo.</li>
        <li>Traé alimentos no perecederos o cocinados.</li>
        <li>Sumate como voluntario para repartir y conversar.</li>
        <li>Difundí la causa en tus redes.</li>
      </ul>
    </div>
  );
}
EOF

# Página: contacto
cat > "$APP_DIR/contacto/page.tsx" <<'EOF'
export default function ContactoPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-4 text-gray-700">
        Si querés colaborar, contactanos por cualquiera de estas vías:
      </p>
      <ul className="text-gray-700">
        <li><strong>Email:</strong> contacto@hormigasrebeldes.org</li>
        <li><strong>Teléfono:</strong> +54 11 1234-5678</li>
        <li><strong>Instagram:</strong> @hormigasrebeldes</li>
      </ul>
    </div>
  );
}
EOF

echo "✅ Sitio generado con éxito. Ahora corré: npm run dev 🚀"
