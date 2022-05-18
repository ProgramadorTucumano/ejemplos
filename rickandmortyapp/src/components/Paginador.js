import React from "react";

const Paginador = ({ page, setPage, personajes }) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item ${page < 2 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => setPage(page - 1)}
            tabIndex="-1"
            aria-disabled="true"
          >
            Previous
          </button>
        </li>
        {page > 1 && (
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page - 1)}>
              {page - 1}
            </button>
          </li>
        )}
        <li className="page-item active" aria-current="page">
          <button className="page-link">{page}</button>
        </li>
        {page < 42 && (
          <li className="page-item">
            <button className="page-link" onClick={() => setPage(page + 1)}>
              {page + 1}
            </button>
          </li>
        )}
        <li className={`page-item ${page > 41 ? "disabled" : ""}`}>
          <button className="page-link" onClick={() => setPage(page + 1)}>
            Next
          </button>
        </li>

        <li className={`page-item disabled`}>
          <span className="page-link">{`Total: ${personajes.info.count}`}</span>
        </li>
        <li className={`page-item disabled`}>
          <span className="page-link">
            {`Total paginas: ${personajes.info.pages}`}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Paginador;
