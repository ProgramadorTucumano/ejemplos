import React from "react";
import { Link } from "react-router-dom";

const Navegador = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar scroll
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ bsScrollHeight: "100px" }}
          >
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/personajes">
                Personajes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/personajes/1">
                Personaje 1
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegador;
