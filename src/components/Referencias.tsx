export default function Referencias() {
  return (
    <section className="my-6 flex max-md:flex-col max-md:items-start gap-8 justify-center items-center text-sm">
      <div className="flex gap-1">
        <div className="w-5 h-5 bg-green-900"></div>
        <span>Materias aprobadas</span>
      </div>
      {/* <div className="flex gap-1">
        <div className="w-5 h-5 bg-yellow-900"></div>
        <span>Materias en curso</span>
      </div> */}
      <div className="flex gap-1">
        <div className="w-5 h-5 bg-gray-700"></div>
        <span>Materias pendientes</span>
      </div>
      <div className="flex gap-1">
        <div className="w-5 h-5 bg-gray-700 border border-green-300"></div>
        <span>Materias habilitadas para cursar</span>
      </div>
    </section>
  )
}