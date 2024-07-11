import Grid from "./components/Grid";
import Referencias from "./components/Referencias";
import DatosBase from "./components/DatosBase";

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-200 p-8 mx-auto min-h-screen">
      <h1 className="text-3xl max-md:text-xl font-bold my-6 text-center text-white">Plan de Estudios - Licenciatura en Ciencias de la Computación</h1>

      <p>Mi nombre es{" "}<a className="text-blue-400 hover:underline" href="https://www.linkedin.com/in/alejandro-portaluppi/" target="_blank" rel="noopener noreferrer">Alejandro Portaluppi</a>. En esta página dejaré el progreso de mi carrera.</p>

      <DatosBase />

      <Referencias />

      <Grid />
    </div>
  );
}
