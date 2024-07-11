import { Fragment, useEffect, useState } from "react";
import { IMateria, materias, puntosDeCorte } from "../materias";
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Grid({ checkbox }: { readonly checkbox: boolean }) {
  const [ materiasLista, setMateriasLista ] = useState<IMateria[]>([]);
  const [ animationParent ] = useAutoAnimate()

  useEffect(() => {
    const materiasConNota = checkbox ? materias : materias.filter(materia => materia.id >= 2);
    setMateriasLista(materiasConNota)
  }, [checkbox]);

  const bgColors = (materia: IMateria) => {
    let colors = "bg-gray-700 text-gray-300";
    if (materia.nota) {
      colors = "bg-green-900 text-green-100";
    } else if (materia.cursando) {
      colors = "bg-yellow-900 text-yellow-100";
    }
    return colors;
  };


  return (
    <div ref={animationParent} className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {
      materiasLista.map(materia => (
        <Fragment key={materia.id}>
          {puntosDeCorte.some(e => e.id === materia.id) && (
            <div className="font-semibold col-span-full text-center text-sm text-gray-400 mt-4 mb-2">
              {puntosDeCorte.find(e => e.id === materia.id)?.texto}
            </div>
          )}
          <div className={`${materia.horasSemanales && 'flip-card'} h-40`}> {/* El código para el flip-card lo saqué parcialmente de internet */}
            <div className='flip-card-inner'>
              <div className={`flip-card-front flex flex-col justify-center items-center py-4 px-3 gap-3 rounded-lg ${bgColors(materia)}`}>
                <p className="font-semibold text-lg">{materia.nombre}</p>
                {materia.nota && <p className="text-sm">Nota Final: {materia.nota}</p>}
              </div>
              <div className={`flip-card-back flex flex-col justify-center items-center py-4 px-3 gap-3 rounded-lg ${bgColors(materia)}`}>
                {materia.horasSemanales && (
                  <div className="flex justify-center items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>{materia.horasSemanales} hrs/sem</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Fragment>
      ))
      }
    </div>
  );
}
