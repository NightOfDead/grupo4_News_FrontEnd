import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

function Header() {
  return (
    <header className="header-navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Grupo 4 News</Link>
        <div className="header-buttons">
          <Link className="btn btn-outline-primary mr-2" to="/login">Iniciar Sesión</Link>
          <Link className="btn btn-primary" to="/register">Registrarse</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
