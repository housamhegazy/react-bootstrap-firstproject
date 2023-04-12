import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

function App() {
  const [theme, setTheme] = useState("light");
  const toggletheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className={theme}>
      <Navbar bg={theme} expand="md">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Form>
            <Form.Check
            onClick={() => {
              toggletheme();
            }}
              type="switch"
              id="custom-switch"
              label="Check this switch"
            />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className="text-primary" href="#home">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item className="text-primary" href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
