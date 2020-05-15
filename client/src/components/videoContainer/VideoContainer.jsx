import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import VideoCard from "../videoCard/VideoCard.jsx";

function VideoContainer() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <CardGroup>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </CardGroup>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default VideoContainer;
