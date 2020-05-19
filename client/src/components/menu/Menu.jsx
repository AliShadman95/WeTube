import React, { useState } from "react";
import logo from "./logo.png";
import trends from "./trends.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import languageDataEn from "./en.json";
import languageDataIt from "./it.json";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Menu() {
  const [language, setLanguage] = useState("en");
  const [data, setDataSource] = useState(languageDataEn);
  const [input, setInput] = useState("");

  //search for video
  const searchVideo = (event) => {
    event.preventDefault();
    console.log("function called");
  };

  //switch language
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
        <Navbar.Brand href="/">
          <img
            style={{
              display: "flex",
              justifyContent: "flex-start",
              heigth: 50,
              width: 50,
            }}
            alt="logo"
            src={logo}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder={data.research}
                className="mr-sm-2"
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                onClick={(event) => searchVideo(event)}
                variant="outline-danger"
              >
                {data.submit}
              </Button>
            </Form>

            <Nav.Link href="#trends">
              <img
                style={{
                  heigth: 50,
                  width: 50,
                }}
                alt="logo"
                src={trends}
              ></img>
            </Nav.Link>
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
