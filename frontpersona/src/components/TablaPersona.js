import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Paginador from "./Paginador";

const TablaPersona = (persona) => {
  const [pagePersonas, setPagePersonas] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState("");
  const [size, setSize] = useState(10);

  const parametros =
    (searchParams.get("size") ? `size=${searchParams.get("size")}&` : "") +
    (searchParams.get("page") ? `page=${searchParams.get("page")}&` : "") +
    (searchParams.get("sort") ? `sort=${searchParams.get("sort")}&` : "");

  useEffect(() => {
    fetch(`http://localhost:8080/persona?${parametros}`)
      .then((r) => r.json())
      .then((data) => setPagePersonas(data));
  }, [persona, searchParams]);
  useEffect(() => {
    setSearchParams({ page: page, size: size, sort: sort });
  }, [page, sort, size]);

  const handleChangeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="m-3">
        {pagePersonas && (
          <Paginador
            page={page}
            setPage={setPage}
            pageable={pagePersonas}
            handleChangeSize={handleChangeSize}
          />
        )}
        <table className="table">
          <thead>
            <tr>
              <th scope="col" onClick={() => setSort("numero")}>
                #
              </th>
              <th scope="col" onClick={() => setSort("nombre")}>
                Nombre
              </th>
              <th scope="col" onClick={() => setSort("apellido")}>
                Apellido
              </th>
              <th scope="col" onClick={() => setSort("edad")}>
                Edad
              </th>
            </tr>
          </thead>
          <tbody>
            {pagePersonas &&
              pagePersonas.content.map((item, index) => {
                return (
                  <tr key={`fila-persona-${index}`}>
                    <th scope="row">{item.numero}</th>
                    <td>{item.nombre}</td>
                    <td>{item.apellido}</td>
                    <td>{item.edad}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TablaPersona;
