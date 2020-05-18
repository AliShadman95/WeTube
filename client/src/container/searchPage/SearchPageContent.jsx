import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo";
import video from "../videoPage/videoPageContent.json";

function SearchPageContent() {
  return (
    <div>
      <Container fluid>
        <Row>
          {video.othervideo.map((video) => (
            <Col md="12" className="mb-2">
              <RelatedVideo
                isSearchPage
                key={video.id}
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
    </div>
  );
}

export default SearchPageContent;
