import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import VideoCard from "../homepageVideoCard/HomepageVideoCard.jsx";
import image from "../homepageVideoCard/img/ezioBosso.jpeg";

function HomepageVideoContainer({ title }) {
  return (
    <Container className="pt-4 pb-4">
      <h3 className="white-text">{title}</h3>
      <CardGroup>
        {["", "", "", ""].map((video) => {
          return (
            <VideoCard
              src={image}
              title="Ezio Bosso: Rain, In Your Black Eyes"
              channelTitle="Ezio Bosso"
              date="03/11/2020"
            />
          );
        })}
      </CardGroup>
    </Container>
  );
}

export default HomepageVideoContainer;
