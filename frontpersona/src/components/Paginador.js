import React from "react";

const Paginador = ({ page, setPage, pageable, handleChangeSize }) => {
  return (
    <nav aria-label="..." className="d-flex justify-content-between">
      <ul className="pagination">
        <li className={`page-item ${page < 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage(page - 1)}
            tabIndex="-1"
            aria-disabled="true"
          >
            Previous
          </button>
        </li>
        {page > 0 && (
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page - 1)}>
              {page}
            </button>
          </li>
        )}
        <li className="page-item active" aria-current="page">
          <button className="page-link">{page + 1}</button>
        </li>
        {page + 1 < pageable.totalPages && (
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              {page + 2}
            </button>
          </li>
        )}
        <li
          className={`page-item ${
            page + 2 > pageable.totalPages ? "disabled" : ""
          }`}
        >
          <button className="page-link" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </li>

        <li className={`page-item disabled`}>
          <span className="page-link">{`Total: ${pageable.totalElements}`}</span>
        </li>
        <li className={`page-item disabled`}>
          <span className="page-link">
            {`Total paginas: ${pageable.totalPages}`}
          </span>
        </li>
      </ul>
      <ul className="pagination">
        <li className="page-item">
          <span className="page-link">Cantidad de items por página:</span>
        </li>
        <li className="page-item">
          <input type="number" name="size" onChange={handleChangeSize} />
        </li>
      </ul>
    </nav>
  );
};

export default Paginador;
