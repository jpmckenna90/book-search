import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import book from "../../img/book.png"
function TopNav() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={book}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        React Bootstrap
      </Navbar.Brand>
    </Navbar>
  );
}

export default TopNav;
