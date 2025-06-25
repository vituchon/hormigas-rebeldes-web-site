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
