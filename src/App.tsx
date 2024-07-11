import Grid from "./components/Grid";
import Referencias from "./components/Referencias";
import DatosBase from "./components/DatosBase";
import { useState } from "react";

export default function App() {
  const [checkbox, setCheckbox] = useState(true);

  return (
    <main className="bg-gray-900 text-gray-200">
      <div className="p-4 mx-auto max-w-7xl">
        <h1 className="text-3xl max-md:text-xl font-bold my-6 text-center text-white">Plan de Estudios - Licenciatura en Ciencias de la Computación</h1>

        <p>Mi nombre es{" "}<a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/alejandro-portaluppi/" target="_blank" rel="noopener noreferrer">Alejandro Portaluppi</a>. En esta página dejaré el progreso de mi carrera.</p>

        <DatosBase checkbox={checkbox} setCheckbox={setCheckbox}/>

        <Referencias />

        <Grid checkbox={checkbox} />
      </div>
    </main>
  );
}
