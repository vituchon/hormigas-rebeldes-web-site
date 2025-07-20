export default function ContactoPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
      <p className="mb-4 text-gray-700">
        Nos podés contactar por cualquiera de estos medios
      </p>
      <ul className="text-gray-700">
        <li><strong>✉️</strong> contacto@hormigasrebeldes.org</li>
        <li><strong><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/250px-WhatsApp_icon.png" style={{ height: "1em", display: "inline"}} /></strong> +54 11 1234-5678</li>
        <li><strong><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/250px-Instagram_icon.png" style={{ height: "1em", display: "inline"}} /></strong> @hormigasrebeldes</li>
      </ul>
    </div>
  );
}
