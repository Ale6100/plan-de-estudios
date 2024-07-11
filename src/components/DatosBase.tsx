import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { materias } from "../materias";

export default function DatosBase({ checkbox, setCheckbox }: { readonly checkbox: boolean, readonly setCheckbox: Dispatch<SetStateAction<boolean>>}) {
  const [promedio, setPromedio] = useState(0);
  const [progreso, setProgreso] = useState(0);
  const pProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listaMaterias = checkbox ? materias : materias.filter(materia => materia.id >= 2);
    const listaMateriasAprobadas = listaMaterias.filter(materia => materia.nota != null);

    const promedio = listaMateriasAprobadas.reduce((acc, materia) => acc + (materia.nota ?? 0), 0) / listaMateriasAprobadas.length;
    setPromedio(promedio);

    const pProgres = pProgressRef.current;
    if (pProgres) {
      const progreso = (listaMateriasAprobadas.length / listaMaterias.length) * 100;
      pProgres.style.width = `${progreso}%`;
      setProgreso(progreso);
    }
  }, [checkbox]);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <>
    <div className="flex flex-col sm:flex-row justify-between items-center my-6">
    <p className="font-semibold mb-2 sm:mb-0">Promedio general:{" "}<span className="text-green-400">{promedio.toFixed(2)}</span></p>
    <div className="flex items-center">
      <label htmlFor="prom" className="flex items-center cursor-pointer">
        <div className="relative">
          <input type="checkbox" id="prom" className="sr-only" checked={checkbox} onChange={handleCheckbox} />
          <div className={`block w-12 h-6 rounded-full transition-colors duration-300 ease-in-out ${checkbox ? 'bg-blue-600' : 'bg-gray-600'}`}>
          </div>
          <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${checkbox && 'transform translate-x-6'}`}>
          </div>
        </div>
        <span className="ml-3 text-sm">Incluir el CBC en los cálculos</span>
      </label>
    </div>
  </div>

  <div>
    <div className="w-full bg-gray-700 rounded-full h-2.5">
      <div ref={pProgressRef} className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out">
      </div>
    </div>
    <p className="text-center mt-2">{progreso.toFixed(2)}% completado</p>
  </div>
    </>
  )
}
