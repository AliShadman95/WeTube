import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo";
import video from "../videoPage/videoPageContent.json";
import { connect } from "react-redux";
import { getPopularVideos, getVideosBySearch } from "../actions/videoActions";
import { useHistory } from "react-router-dom";

function VerticalListPages({
  match,
  getPopularVideos,
  getVideosBySearch,
  videoList,
}) {
  const history = useHistory();

  useEffect(() => {
    if (match.params.searchValue) {
      // Need to search with value
      getVideosBySearch(match.params.searchValue);
    } else {
      getPopularVideos();
    }
  }, [match]);

  function openVideo(id) {
    console.log(id);
    if (id !== "") {
      history.push(`/video/${id}`);
    }
  }

  return (
    <Container fluid className="mt-3">
      <Row>
        {typeof videoList.items !== "undefined" &&
          videoList.items.map((video) => {
            console.log(video);
            return (
              <Col md="12" className="mb-2" key={video.id.videoId}>
                <RelatedVideo
                  onClick={() => openVideo(video.id.videoId || video.id)}
                  id={video.id.videoId}
                  isSearchPage
                  src={video.snippet.thumbnails.medium.url}
                  titolo={video.snippet.title}
                  nomecanale={video.snippet.channelTitle}
                  view={video.statistics ? video.statistics.viewCount : ""}
                  data={video.snippet.publishedAt}
                  description={video.snippet.description
                    .split(" ")
                    .slice(0, 20)
                    .join(" ")}
                />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    videoList: state.videos.items,
  };
};

export default connect(mapStateToProps, {
  getPopularVideos,
  getVideosBySearch,
})(VerticalListPages);
