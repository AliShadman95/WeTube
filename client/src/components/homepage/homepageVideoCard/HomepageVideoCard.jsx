import React, { useState } from "react";
import Card from "react-bootstrap/Card";

//test

function HomepageVideoCard({ src, title, channelTitle, date, views, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      className={`ml-4 hp-video-card ${isHovered ? "clickable" : ""}`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Text className="white-text hp-card-title">{title}</Card.Text>
        <Card.Text className="grey-text hp-card-detail">
          {channelTitle}
        </Card.Text>
        <Card.Text className="grey-text hp-card-detail">
          {views + " visualizzazioni"}
        </Card.Text>
        <Card.Text className="grey-text hp-card-detail">{date}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomepageVideoCard;
