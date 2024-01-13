
import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const MainNavigation = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Navbar.Brand href="/">BytesAndBard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/shower-thoughts">Shower Thoughts</Nav.Link>
          <Nav.Link href="/tech">Tech</Nav.Link>
          <Nav.Link href="/poems">Poems</Nav.Link>
          <Nav.Link href="/jokes">Jokes</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleSearchClick}>
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
        </Nav>
        {searchVisible && (
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;
