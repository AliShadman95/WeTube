import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import VideoCard from "../homepageVideoCard/HomepageVideoCard.jsx";

function HomepageVideoContainer({ title }) {
  return (
    <Container className="pt-4 pb-4">
      <h3 className="white-text">{title}</h3>
      <CardGroup>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </CardGroup>
    </Container>
  );
}

export default HomepageVideoContainer;
