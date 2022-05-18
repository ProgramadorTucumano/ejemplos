import React, { useState, useEffect } from "react";
import TablaPersona from "./TablaPersona";

const FormPersona = () => {
  const [persona, setPersona] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });
  const [validations, setValidations] = useState();

  const handleChange = (e) => {
    setPersona({ ...persona, [e.target.name]: e.target.value });
  };

  //   useEffect(() => {
  //     console.log("persona", persona);
  //   }, [persona]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/persona2", {
      method: "POST",
      body: JSON.stringify(persona),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        if (r.status === 400) {
          throw r.json();
        } else {
          return r.json();
        }
      })
      .then((data) => {
        setPersona(data);
        setValidations(null);
      })
      .catch((promesa) => promesa.then((data) => setValidations(data)));
  };

  const handleReset = (e) => {
    e.preventDefault();
    setPersona({
      nombre: "",
      apellido: "",
      edad: "",
    });
  };
  return (
    <>
      {persona.id && (
        <p style={{ color: "green" }}>Persona guardada con Exito!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            id="exampleInputEmail1"
            defaultValue={persona.nombre}
            onChange={handleChange}
          />
          {validations && <p style={{ color: "red" }}>{validations.nombre}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            id="exampleInputPassword1"
            defaultValue={persona.apellido}
            onChange={handleChange}
          />
          {validations && (
            <p style={{ color: "red" }}>{validations.apellido}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Edad
          </label>
          <input
            name="edad"
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            defaultValue={persona.nombre}
            onChange={handleChange}
          />
          {validations && <p style={{ color: "red" }}>{validations.edad}</p>}
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button
          type="reset"
          className="btn btn-primary ms-2"
          onClick={handleReset}
        >
          Reseatear
        </button>
      </form>
      <TablaPersona />
    </>
  );
};

export default FormPersona;
