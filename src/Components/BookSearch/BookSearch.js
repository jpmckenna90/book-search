import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import "./style.css";

function BookSearch() {
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
                  <Form.Control type="input" placeholder="Enter book name" />
                  <Form.Text className="text-muted">
                    Enter a book title here.
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
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
