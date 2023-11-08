import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const OneVinyl = ({ vinyl, rentVinyl }) => {
  return (
    <Col md={"3"} className="col">
      <Card className="card">
        <Card.Img variant="top" src={[vinyl.imgURL]} className="card-img" />
        <Card.Body>
          <Card.Title>{vinyl.title}</Card.Title>
          <Card.Title className="author">{vinyl.author}</Card.Title>
          <Card.Text>{vinyl.description}</Card.Text>
        </Card.Body>

        <Button
          variant="primary"
          className="card-button"
          onClick={() => rentVinyl(vinyl.id)}
        >
          {!vinyl.isRented ? "Rent" : "Return"}
        </Button>
      </Card>
    </Col>
  );
};

export default OneVinyl;