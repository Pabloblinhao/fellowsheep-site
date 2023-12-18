import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {


  return (
    <header>
      <div className="list-nav">
        <Link to="/">Home
          
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/campeonatos">Campeonatos</Link>
            </li>
            <li>
              <Link to="/membros">Membros</Link>
            </li>
            <li>
              <Link to="/canais">Canais</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;