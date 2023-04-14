import React from "react";
import { themeContext } from "context/ThemeContext";
import { useContext } from "react";
import { Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { NavLink } from "react-router-dom";

export default function Navbarr() {
  const { theme, toggletheme } = useContext(themeContext);
  return (
    <Navbar
      style={{ zIndex: 1000 }}
      bg={theme}
      expand="md"
      className="position-fixed w-100 top-0 zindex-1020"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="./images/logo.png" alt="logo" width={"150px"} />
        </Navbar.Brand>
        {/* dark mode */}
        <div
          onClick={() => {
            toggletheme();
          }}
        >
          <BootstrapSwitchButton
            checked={theme === "light" ? false : true}
            size="sm"
          />
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light bg-light"
        />
        <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
          <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">sections</NavDropdown.Item>
              <NavDropdown.Item href="/">Another action</NavDropdown.Item>
              <NavDropdown.Item className="text-primary" href="#action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="custom-btn">800006543</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
