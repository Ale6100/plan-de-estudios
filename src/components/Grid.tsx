import { Fragment } from "react"
import { materias, puntosDeCorte } from "../materias"

export default function Grid() {
  return (
    <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {
    materias.map((materia) => (
      <Fragment key={materia.id}>
        {
          puntosDeCorte.some((e) => e.id === materia.id) && <div className="font-semibold col-span-full text-center text-sm text-gray-400 mt-4 mb-2"> {puntosDeCorte.find((e) => e.id === materia.id)?.texto}</div>
        }
        <div className={`p-4 rounded-lg shadow-md ${materia.nota ? "bg-green-900 text-green-100" : materia.cursando ? "bg-yellow-900 text-yellow-100" : "bg-gray-700 text-gray-300"}`} >
          <h3 className="font-semibold mb-2">{materia.nombre}</h3>
          {materia.nota && <p>Nota Final: {materia.nota}</p>}
        </div>
      </Fragment>
    ))
    }
    </div>
  )
}
