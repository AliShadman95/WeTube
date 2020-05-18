import React, { useState } from "react";
import logo from "./logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import languageDataEn from "./en.json";
import languageDataIt from "./it.json";
import Button from "react-bootstrap/Button";

function Menu() {
  const [language, setLanguage] = useState("en");
  const [data, setDataSource] = useState(languageDataEn);

  // set up empty grid
  const switchLanguage = (lang) => {
    if (language === "en") {
      setLanguage("it");
      setDataSource(languageDataIt);

      return;
    } else {
      setLanguage("en");
      setDataSource(languageDataEn);

      return;
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            style={{
              display: "flex",
              justifyContent: "flex-start",
              heigth: 100,
              width: 100,
            }}
            alt="logo"
            src={logo}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#search">{data.research}</Nav.Link>
            <Nav.Link href="#trends">{data.selection}</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button variant="dark" onClick={() => switchLanguage(language)}>
              {data.lang}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
