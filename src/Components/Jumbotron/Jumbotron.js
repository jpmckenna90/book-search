import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./style.css";

function Jumbo() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>React Google Books Search</h1>
        <p>
          Search for and save books of interest.
        </p>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
