import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo";
import video from "../videoPage/videoPageContent.json";

function SearchPageContent() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <Row>
            {video.othervideo.map((video) => (
              <Col md="12">
                <RelatedVideo
                  isSearchPage
                  key={video.id}
                  src={video.src}
                  titolo={video.titolo}
                  nomecanale={video.nomecanale}
                  view={video.view}
                  data={video.data}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default SearchPageContent;
