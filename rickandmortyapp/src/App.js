import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Personajes from "./components/Personajes";
import Home from "./components/Home";
import PagePersonaje from "./components/PagePersonaje";
import Navegador from "./components/Navegador";

function App() {
  return (
    <>
      <Navegador />
      <div className="container mt-4 m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/personajes/:idPersonaje" element={<PagePersonaje />} />
          <Route
            path="/personajes/:idPersonaje/:otroParametroCualquiera"
            element={<Personajes />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
