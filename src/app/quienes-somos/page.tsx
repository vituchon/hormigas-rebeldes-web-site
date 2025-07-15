'use client';
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

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
    const controls1 = animate(mealsServedCount, 78, { duration: 5 })
    const controls2 = animate(coatsDeliveredCount, 432, { duration: 5 })
    const controls3 = animate(talksUnlockedCount, 1420, { duration: 5 })
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
        Somos una agrupación de personas que decidimos unirnos para acompañar a quienes viven en la calle.
        Creemos en la dignidad, la escucha y la solidaridad como pilares de una sociedad mejor.
      </p>
      <p className="text-gray-700">
        Nos juntamos todos los Lúnes a partir de las 20:00 en la Plazoleta <i>Gracia y Libertad</i>, Av. Beiro y Cervantes, donde realizamos la olla solidaria.
      </p>
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
      Chambareros...
      <p className="text-gray-700">
        Con voluntad!<br />
        <a href="https://docs.google.com/document/d/1aciC8OmoMMxSUuXiA6qHt5lSfmn6jBj-72uvn9Xrz7c/edit?usp=sharing" className="hover:underline">Manual de la hormiga rebelde <span className="blue-emoji">🐜</span></a>
      </p>
    </div>
  );
}
