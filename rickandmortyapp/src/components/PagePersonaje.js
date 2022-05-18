import React from "react";
import Personaje from "./Personaje";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PagePersonaje = () => {
  const [personaje, setPersonaje] = useState();
  const { idPersonaje } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje}`)
      .then((respuesta) => respuesta.json())
      .then((data) => setPersonaje(data));
  }, []);

  return (
    <div>
      {personaje ? (
        <Personaje personaje={personaje} />
      ) : (
        <p>No hay personaje</p>
      )}
    </div>
  );
};

export default PagePersonaje;
