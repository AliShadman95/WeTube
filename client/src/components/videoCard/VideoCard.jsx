import React from "react";
import Card from "react-bootstrap/Card";
import image from "./img/ezioBosso.jpeg";

function VideoCard() {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Ezio Bosso: Rain, In Your Black Eyes</Card.Title>
        <Card.Text>Ezio Bosso</Card.Text>
        <Card.Text>Visualizzazioni</Card.Text>
        <Card.Text>Data di Pubblicazione</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VideoCard;
