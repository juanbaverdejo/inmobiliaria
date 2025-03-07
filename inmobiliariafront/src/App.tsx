import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Inicio from "./components/Inicio";
import CrearPropietario from "./components/CrearPropietario";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout envuelve todas las rutas hijas */}
        <Route path="/" element={<Layout/>}>
        <Route index element={<Inicio />} /> {/* Ruta principal */}
        <Route path="/crearpropietario" element={<CrearPropietario />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
