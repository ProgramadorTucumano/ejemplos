import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Paginador from "./Paginador";
import Personaje from "./Personaje";

const Personajes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [personajes, setPersonajes] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    page === 9 && navigate("/");

    if (searchParams.get("name")) {
      fetch(
        `https://rickandmortyapi.com/api/character/?name=${searchParams.get(
          "name"
        )}`
      )
        .then((respuesta) => respuesta.json())
        .then((data) => setPersonajes(data));
    } else {
      fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((respuesta) => respuesta.json())
        .then((data) => setPersonajes(data));
    }
  }, [page, searchParams]);

  return (
    <>
      <div className="row">
        <input
          onChange={(e) => setSearchParams({ name: e.target.value })}
          placeholder="ponga un nombre"
        />
      </div>
      <div className="row">
        {personajes && (
          <Paginador page={page} setPage={setPage} personajes={personajes} />
        )}
      </div>
      <div className="row">
        {personajes ? (
          personajes.results.map((item, index) => {
            return (
              <Personaje personaje={item} key={`pagina-personaje-${index}`} />
            );
          })
        ) : (
          <p>No hay personajes</p>
        )}
      </div>
    </>
  );
};

export default Personajes;
