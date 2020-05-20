import React from "react";
import { Container, CardGroup } from "react-bootstrap";
import VideoCard from "../homepageVideoCard/HomepageVideoCard.jsx";
import { useHistory } from "react-router-dom";

function HomepageVideoContainer({ title, videoList }) {
  const history = useHistory();

  function openVideo(id) {
    console.log(id);
    if (id !== "") {
      history.push(`/video/${id}`);
    }
  }
  return (
    <Container className="pt-4 pb-4">
      <h3 className="white-text">{title}</h3>
      <CardGroup>
        {typeof videoList !== "undefined" &&
          typeof videoList.items !== "undefined" &&
          videoList.items.slice(0, 4).map((video) => {
            return (
              <VideoCard
                onClick={() => openVideo(video.id)}
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
