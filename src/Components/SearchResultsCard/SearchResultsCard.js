import React from "react";
import { Card } from "react-bootstrap";
import "./style.css";
import BookResult from "../BookResult/BookResult";

function ResultsCard() {
  return (
    <Card>
      <BookResult />
    </Card>
  );
}

export default ResultsCard;
