import { Fragment } from "react"
import { materias, puntosDeCorte } from "../materias"

export default function Grid() {
  return (
    <div className="custom-grid gap-8 text-center">
      {
      materias.map((materia) => (
        <Fragment key={materia.id}>
          {
            puntosDeCorte.some(e => e.id === materia.id) && <div className="flex items-center justify-center">{puntosDeCorte.find(e => e.id === materia.id)?.texto}</div>
          }

          <div className={`h-20 px-1 flex flex-col items-center justify-center border border-black rounded-sm ${materia.nota && 'bg-green-400'} ${materia.cursando && 'bg-yellow-400'} ${materia.colSpan}`}>
            <p className="font-semibold underline">{materia.nombre}</p>
            {materia.nota && <p>Nota Final: {materia.nota}</p>}
          </div>

          {
            [3, 5].includes(materia.id) && <div></div>
          }
        </Fragment>
      ))
      }
    </div>
  )
}
