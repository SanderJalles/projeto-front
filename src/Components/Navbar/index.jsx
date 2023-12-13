import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navegador() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Carros</Navbar.Brand>
          <Nav className="me-auto centralizar">
            <Nav>
              <Link className="home" to="/">
                Home
              </Link>
            </Nav>
            <Nav>
              <Link className="home" to="/cadastro">
                Cadastro
              </Link>
            </Nav>
            <Nav>
              <Link className="home" to="/catalogo">
                Catalogo
              </Link>
            </Nav>
            <Nav>
              <Link className="home" to="/usuarios">
                Criar Usuario
              </Link>
            </Nav>
            <Nav>
              <Link className="home" to="/listaUsuario">
                Lista de Clientes
              </Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}

export default Navegador;
