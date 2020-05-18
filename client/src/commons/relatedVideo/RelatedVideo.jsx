import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

function RelatedVideo({
  src,
  titolo,
  nomecanale,
  view,
  data,
  isSearchPage,
  description,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container
      style={{ padding: "5px" }}
      className={isHovered && "related-video-hover"}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Row>
        <Col md="3" className="align-self-center">
          <img src={src} className="related-video-thumbnail"></img>
        </Col>
        <Col md="6" className="related-video-container">
          <Row className="flex-column">
            {isSearchPage ? (
              <React.Fragment>
                <Col className="related-video-title">
                  <h5 style={{ marginBottom: "0px" }}>{titolo}</h5>
                </Col>
                <Row className="pb-3">
                  <Col className="related-video-detail">
                    <span className="mr-3">{nomecanale}</span>
                    <span className="mr-3">{view} visualizzazioni</span>
                    <span className="mr-3">{data}</span>
                  </Col>
                </Row>
                <Col className="related-video-detail">
                  <span>{description}</span>
                </Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col className="related-video-small-title">
                  <span>{titolo}</span>
                </Col>
                <Col className="related-video-small-detail">
                  <span>{nomecanale}</span>
                </Col>
                <Col className="related-video-small-detail">
                  <span>{view} visualizzazioni</span>
                </Col>
                <Col className="related-video-small-detail">
                  <span>{data}</span>
                </Col>
              </React.Fragment>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default RelatedVideo;
