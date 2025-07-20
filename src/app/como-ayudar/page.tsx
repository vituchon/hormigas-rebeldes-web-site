import RendeVouzPointMap from '../components/RendeVouzPointMap';

export default function ComoAyudarPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cómo Ayudar</h2>
      <div className="mb-6 flex">
        <RendeVouzPointMap />
      </div>
      <p className="text-gray-700 mb-4 text-lg">
        Acercate los Lúnes de olla o <a href="/contacto" className="hover:underline">contactarnos</a> para colaborar en cualquiera de estas formas:
      </p>
      <ul className="list-disc ml-8 text-gray-700 space-y-3 text-base">
        <li><span className="font-semibold text-green-800">Doná ropa limpia</span>, especialmente de abrigo.</li>
        <li><span className="font-semibold text-green-800">Traé alimentos</span> no perecederos o cocinados (listos para comer).</li>
        <li><span className="font-semibold text-green-800">Sumate como voluntario</span> para repartir y conversar.</li>
        <li><span className="font-semibold text-green-800">Difundí la causa</span> en tus redes.</li>
      </ul>
    </div>
  );
}
