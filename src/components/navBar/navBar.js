/*import styles from './navBar.module.css'*/
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "./CartWidget";

export const NavBar = ({ greeting }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Codershop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Libros</Nav.Link>
            <Nav.Link href="#pricing">Tecnologia</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hogar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Muebleria
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Deportes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Mas</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default NavBar;
