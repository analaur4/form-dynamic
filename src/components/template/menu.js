import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Criar Formulário</li>
        </Link>
        <Link to="/getform">
          <li>Visualizar Formulário</li>
        </Link>
        <Link to="/answers">
          <li>Respostas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
