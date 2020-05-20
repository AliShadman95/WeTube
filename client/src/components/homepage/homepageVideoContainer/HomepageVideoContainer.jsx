import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import VideoCard from "../homepageVideoCard/HomepageVideoCard.jsx";
import image from "../homepageVideoCard/img/ezioBosso.jpeg";

function HomepageVideoContainer({ title, videoList }) {
  return (
    <Container className="pt-4 pb-4">
      <h3 className="white-text">{title}</h3>
      <CardGroup>
        {typeof videoList !== "undefined" &&
          videoList.items.slice(0, 4).map((video) => {
            return (
              <VideoCard
                key={video.id}
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
                channelTitle={video.snippet.channelTitle}
                date={video.snippet.publishedAt}
                views={video.statistics.viewCount}
              />
            );
          })}
      </CardGroup>
    </Container>
  );
}

export default HomepageVideoContainer;
