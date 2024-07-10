import { useEffect, useRef, useState } from "react";
import Grid from "./components/Grid";
import { materias } from "./materias";

export default function App() {
  const [ promedio, setPromedio ] = useState(0);
  const [ checkbox, setCheckbox ] = useState(true);
  const [ progreso, setProgreso ] = useState(0);
  const pProgressRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let materiasConNota = [];

    if (checkbox) {
      materiasConNota = materias.filter(materia => materia.nota != null);

    } else {
      materiasConNota = materias.filter(materia => materia.nota != null && materia.id >= 2);
    }

    const promedio = materiasConNota.reduce((acc, materia) => acc + (materia.nota ?? 0), 0) / materiasConNota.length;
    setPromedio(promedio);

    const pProgres = pProgressRef.current;
    if (pProgres) {
      const progreso = materiasConNota.length / materias.length * 100;
      pProgres.style.width = `${progreso}%`;
      setProgreso(progreso);
    }
  }, [checkbox]);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(e.target.checked);
  }

  return (
    <section className="bg-slate-100 p-2">
      <p className="fixed top-[1vw] left-[1vw] text-red-600 font-bold">Página no terminada</p>

      <h1 className="text-center text-xl">Mi plan de estudios de la Licenciatura en Ciencias de la Computación</h1>

      <p className="my-4">En esta página dejaré mi progreso en la carrera</p>

      <div className="flex gap-3">
        <p className="font-semibold">Promedio general: <span className="text-green-700">{promedio}</span></p>
        <div>
          <input type="checkbox" name="prom" id="prom" defaultChecked onChange={handleCheckbox} />
          <label htmlFor="prom" className="pl-1">Incluir el CBC en los cálculos</label>
        </div>
      </div>

      <div className="my-4 flex justify-center items-center">
        <div className="relative flex w-2/3 flex-col border border-black rounded-sm">
          <p className="absolute h-7 w-full bg-gray-300 text-center"></p>
          <p ref={pProgressRef} className={`transition-all px-1 z-10 h-7 w-2/3 bg-blue-400 text-center border-r border-dashed border-black text-nowrap`}>{progreso.toFixed(2)}% completado</p>
        </div>
      </div>

      <div className="my-4 w-96 text-center flex gap-4">
        <p className="px-1 bg-green-400">Materias aprobadas</p>
        <p className="px-1 bg-yellow-400">Materias actuales</p>
      </div>

      <Grid />

      <a className='fixed bottom-[1vw] right-[1vw] hover:font-semibold text-sm max-md:text-xs hover:scale-105 hover:translate-x-[-0.25vw] transition-all duration-100' href="https://www.linkedin.com/in/alejandro-portaluppi/" target="_blank" rel="noopener noreferrer">Desarrollado por Alejandro P</a>
    </section>
  )
}
