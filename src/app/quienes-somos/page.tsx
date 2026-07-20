'use client';
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
import PhotoGallery from "../components/PhotoGallery"

const galleryImages = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6_b.png",
]

function countMondaysBetween(begins: Date, ends: Date) {
    let mondaysCount = 0;

    begins.setHours(0, 0, 0, 0);
    ends.setHours(0, 0, 0, 0);
    while (begins <= ends) {
        if (begins.getDay() === 1) {
            mondaysCount++;
        }
        begins.setDate(begins.getDate() + 1); // next day
    }
    return mondaysCount;
}

function countOllasServed() {
    //const timezone = 'America/Buenos_Aires';

    const begins = new Date('2022-07-07') // 7 de julio de 2022, primer lunes de olla (en honor al cumple de Gauchito!)
    const ends = new Date() // "Hoy"
    return countMondaysBetween(begins, ends)
}

export default function QuienesSomosPage() {
  const text = {
    fontSize: "2em",
    display: "inline-block",
  }
  const mealsServedCount = useMotionValue(0)
  const roundedMealsServedCount = useTransform(() => Math.round(mealsServedCount.get()))

  const coatsDeliveredCount = useMotionValue(0)
  const roundedCoatsDeliveredCount = useTransform(() => Math.round(coatsDeliveredCount.get()))

  const talksUnlockedCount = useMotionValue(0)
  const roundedTalksUnlockedCount = useTransform(() => Math.round(talksUnlockedCount.get()))

  const jobsCount = useMotionValue(0)
  const roundedJobsCount = useTransform(() => Math.round(jobsCount.get()))

  useEffect(() => {
    const ollasServed = countOllasServed()
    const controls1 = animate(mealsServedCount, ollasServed, { duration: 5 })
    const controls2 = animate(coatsDeliveredCount, ollasServed * 3 / 2, { duration: 5 })
    const controls3 = animate(talksUnlockedCount, ollasServed * 7 / 2, { duration: 5 })
    const controls4 = animate(jobsCount, 3, { duration: 5 })
    return () => {
      controls1.stop()
      controls2.stop()
      controls3.stop()
      controls4.stop()
    }
  }, [])

  return (
    <div id="about">
      <h2 className="text-2xl font-semibold mb-4">Quiénes Somos</h2>
      <p className="text-gray-700">
        Somos un grupo de amigos que durante la pandemía decidimos salir a la calle a darle un plato de comida a quienes lo necesitaban.
        Desde entonces, nos organizamos para poder ayudar, además, entregando ropa, abrigos, y fomentando la inserción laboral.
      </p>
      <p className="text-gray-700">
        Nos juntamos todos los Lúnes a partir de las 20:00 en la Plazoleta <i>Gracia y Libertad</i>, Av. Beiro y Cervantes, donde realizamos la olla solidaria.
      </p>
      <div className="my-6">
        <PhotoGallery images={galleryImages} alt="Hormigas Rebeldes" />
      </div>
      <br/>
      <h2 className="text-2xl font-semibold mb-4">Datos fácticos</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center mb-8">
        <div className="flex-1 bg-green-50 rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-green-900">Ollas</span>
          <motion.span style={{ ...text, color: "#5BAE73" }}>{roundedMealsServedCount}</motion.span>
        </div>
        <div className="flex-1 bg-blue-50 rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-blue-900">Abrigos</span>
          <motion.span style={{ ...text, color: "#1e40af" }}>{roundedCoatsDeliveredCount}</motion.span>
        </div>
        <div className="flex-1 bg-yellow-50 rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-yellow-900">Conversaciones</span>
          <motion.span style={{ ...text, color: "#b45309" }}>{roundedTalksUnlockedCount}</motion.span>
        </div>
        <div className="flex-1 bg-red-50 rounded-lg shadow p-6 flex flex-col items-center">
          <span className="text-lg font-semibold text-red-900">Chambas</span>
          <motion.span style={{ ...text, color: "#dc2626" }}>{roundedJobsCount}</motion.span>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">¿Cómo ser una hormiga rebelde?</h2>
      <p className="text-gray-700">
        Con voluntad!<br />
      </p>
      <h2 className="text-2xl font-semibold mb-4 my-5">Chambareros</h2>
      <p className="text-gray-700">
        Trabajar es necesario para inclusión social, y por eso nos esforzamos en ayudar a quienes lo necesitan a conseguirlo.
        Los chambareros son las personas a las cuales les hemos podidos encontrar un trabajo. Esto es de lo más díficil pues se requiere construir un vector vinculante lleno de confianza, algo que escapa a nuestro accionar individual y requiere de la colaboración de toda la comunidad.
      </p>
    </div>
  );
}
