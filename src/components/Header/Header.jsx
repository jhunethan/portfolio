import { Nav, Container, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-scroll";

export default function Header(props) {
  const { setShowContact } = props;

  return (
    <Navbar variant="dark" bg="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Ethan Lay</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            className="nav-link"
            activeClass="active--link"
            to="projects"
            spy={true}
            style={{ cursor: "pointer" }}
          >
            Portfolio
          </Link>
          <Link
            className="nav-link"
            style={{ cursor: "alias" }}
            onClick={() => {
              setShowContact(true);
            }}
            to="home"
            offset={-500}
          >
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
