import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos de Bootstrap
import './navbar.css'; // Importa tu archivo CSS personalizado

function AppNavbar() {
  return (
    <div className="navbar-custom">
      <Navbar variant="dark" expand="lg">
        <Navbar.Brand href="/">MiNavbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link-custom" href="/">Inicio</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/about">Acerca de</Nav.Link>
            <Nav.Link className="nav-link-custom" href="/contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;

