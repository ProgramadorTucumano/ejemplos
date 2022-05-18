import React, { useState, useEffect } from "react";
import Button from "./button";

const ContadorEjemplo = () => {
  const [contadorActualizable, setcontadorActualizable] = useState(5);
  const [palabra, setpalabra] = useState("hola");
  const [otroState, setotroState] = useState({ nombre: "nahuel", edad: "15" });
  let contador = 2;

  useEffect(() => {
    return () => {
      <h1>Chau</h1>;
    };
  }, []);

  const sumarUno = () => {
    contador = contador + 1;
  };

  const sumarUnoContadorActualizable = () => {
    setcontadorActualizable(contadorActualizable + 1);
  };

  const actualizarPalabra = (e) => {
    setpalabra(e.target.value);
  };

  const actualizarNombreOtroState = (e) => {
    setotroState({ ...otroState, nombre: e.target.value });
  };
  const actualizarEdadOtroState = (e) => {
    setotroState({ ...otroState, edad: e.target.value });
  };

  return (
    <div>
      <h1>{`contador ${contador}`}</h1>
      <Button
        name={"Nombre cualquiera del boton"}
        handleClick={sumarUno}
        clases={"button-personalizado"}
      />
      <h1>{`contadorActualizable ${contadorActualizable}`}</h1>
      <Button
        name={"Nombre cualquiera del boton useState"}
        handleClick={sumarUnoContadorActualizable}
      />

      <h1>{`palabra ${palabra}`}</h1>
      <input onBlur={actualizarPalabra} />

      <ul>
        <li>{otroState.nombre}</li>
        <li>{otroState.edad}</li>
        <li>{otroState.key}</li>
      </ul>
      <input onChange={actualizarNombreOtroState} micaela={"nombre"} />
      <input onBlur={actualizarEdadOtroState} micaela={"edad"} />
    </div>
  );
};

export default ContadorEjemplo;
