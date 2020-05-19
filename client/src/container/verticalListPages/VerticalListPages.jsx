import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo";
import video from "../videoPage/videoPageContent.json";
import { connect } from "react-redux";
import { getVideos } from "../actions/videoActions";

function VerticalListPages({ match, getVideos, videoTrendsList }) {
  console.log(videoTrendsList);
  useEffect(() => {
    if (match.params.searchValue) {
      // Need to search with value
      console.log("there is id");
    } else {
      getVideos();
    }
  }, [match]);
  return (
    <Container fluid className="mt-3">
      <Row>
        {typeof videoTrendsList !== "undefined" &&
          videoTrendsList.items.map((video) => (
            <Col md="12" className="mb-2" key={video.id}>
              <RelatedVideo
                id={video.id}
                isSearchPage
                src={video.snippet.thumbnails.medium.url}
                titolo={video.snippet.title}
                nomecanale={video.snippet.channelTitle}
                view={video.statistics.viewCount}
                data={video.snippet.publishedAt}
                description={video.snippet.description}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    videoTrendsList: state.items,
  };
};

export default connect(mapStateToProps, { getVideos })(VerticalListPages);
