import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "./style.css";
import getBooks from "../../utils/api";

function BookSearch() {
  const [search, setSearch] = useState("The Hobbit");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const findBooks = (event) => {
    event.preventDefault();
    console.log("we findin");
    getBooks(search);
  };

  return (
    <Row>
      <Col lg={8}>
        <Card>
          <Card.Body>Search for books here.</Card.Body>
          <Row>
            <Col lg={6}>
              <Form>
                <Form.Group controlId="bookSearch">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="input"
                    placeholder="Enter book name"
                    onChange={handleSearchChange}
                  />
                  <Form.Text className="text-muted">
                    Enter a book title here.
                  </Form.Text>
                  <p>{search}</p>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={findBooks}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default BookSearch;
