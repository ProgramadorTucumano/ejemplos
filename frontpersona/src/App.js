import logo from "./logo.svg";
import "./App.css";
import Navegador from "./components/Navegador";
import { Route, Routes } from "react-router-dom";
import TablaPersona from "./components/TablaPersona";
import FormPersona from "./components/FormPersona";
import Home from "./components/Home";

function App() {
  return (
    <div className="Container">
      <Navegador />
      <div className="container mt-4 m-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personas" element={<TablaPersona />} />
          <Route path="/personas/form" element={<FormPersona />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
