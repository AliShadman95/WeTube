import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo";
import video from "../videoPage/videoPageContent.json";

function VerticalListPages({ match }) {
  useEffect(() => {
    if (match.params.searchValue) {
      // Need to search with value
      console.log("there is id");
    } else {
      // Need to get trends
      console.log("no id");
    }
  }, [match]);
  return (
    <Container fluid className="mt-3">
      <Row>
        {video.othervideo.map((video) => (
          <Col md="12" className="mb-2" key={video.id}>
            <RelatedVideo
              id={video.id}
              isSearchPage
              src={video.src}
              titolo={video.titolo}
              nomecanale={video.nomecanale}
              view={video.view}
              data={video.data}
              description={video.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default VerticalListPages;
