import React from "react";
import Card from "react-bootstrap/Card";

function HomepageVideoCard({ src, title, channelTitle, date }) {
  return (
    <Card className="ml-3">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{channelTitle}</Card.Text>
        <Card.Text>{date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomepageVideoCard;
