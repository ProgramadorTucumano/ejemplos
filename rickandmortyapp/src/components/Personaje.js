import React from "react";
import { useParams } from "react-router-dom";

const Personaje = ({ personaje }) => {
  return (
    <div className="card col-2 m-3" style={{ width: "18rem" }}>
      <img src={personaje.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{personaje.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{`Estado: ${personaje.status}`}</li>
        <li className="list-group-item">{`Tipo: ${personaje.type}`}</li>
        <li className="list-group-item">{`Especie: ${personaje.species}`}</li>
        <li className="list-group-item">{`Genero: ${personaje.gender}`}</li>
      </ul>
    </div>
  );
};

export default Personaje;
