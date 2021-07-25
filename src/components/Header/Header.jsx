import { Nav, Container, Navbar } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <Navbar variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Ethan Lay</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
