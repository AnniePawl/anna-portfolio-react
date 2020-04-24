import React from "react";
import Card from "react-bootstrap/Card";

const PortfolioItem = ({ img, title, description, link }) => {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="writing-button">
            <a href={link} target="_blank">
              Check it Out
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PortfolioItem;
