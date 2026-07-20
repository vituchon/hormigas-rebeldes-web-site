export default function ContactoPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-4 text-gray-700">
        Nos podés contactar por cualquiera de estos medios
      </p>
      <ul className="text-gray-700">
        <li><a href="mailto:contacto@hormigasrebeldes.org" className="inline-flex items-center gap-1.5 text-green-800 hover:text-green-900 hover:underline">
          <span>✉️</span>contacto@hormigasrebeldes.org
        </a></li>
        <li><a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-green-800 hover:text-green-900 hover:underline">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/250px-WhatsApp_icon.png" alt="WhatsApp" style={{ height: "1em", display: "inline"}} />+54 11 1234-5678
        </a></li>
        <li><a href="https://www.instagram.com/hormigas.rebeldes/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-green-800 hover:text-green-900 hover:underline">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/250px-Instagram_icon.png" alt="Instagram" style={{ height: "1em", display: "inline"}} />@hormigas.rebeldes
        </a></li>
      </ul>
    </div>
  );
}
