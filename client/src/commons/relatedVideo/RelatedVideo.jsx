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
      className={isHovered ? "related-video-hover clickable" : ""}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Row>
        <Col md={isSearchPage ? "3" : "5"} className="align-self-center">
          {isSearchPage ? (
            <img src={src} className="related-video-thumbnail"></img>
          ) : (
            <div className="related-video-img-container">
              <img src={src} className="related-video-thumbnail"></img>
            </div>
          )}
        </Col>
        <Col
          md="6"
          className={`related-video-container ${!isSearchPage ? "ml-1" : ""}`}
        >
          <Row className="flex-column">
            {isSearchPage ? (
              <React.Fragment>
                <Col className="related-video-title white-text">
                  <h5 style={{ marginBottom: "0px" }}>{titolo}</h5>
                </Col>
                <Row className="pb-3">
                  <Col className="related-video-detail grey-text">
                    <span className="mr-3">{nomecanale}</span>
                    {view !== "" && (
                      <span className="mr-3">{view} visualizzazioni</span>
                    )}

                    <span className="mr-3">{data}</span>
                  </Col>
                </Row>
                <Col className="related-video-detail grey-text">
                  <span>{description}</span>
                </Col>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Col className="related-video-small-title white-text">
                  <span>{titolo}</span>
                </Col>
                <Col className="related-video-small-detail grey-text">
                  <span>{nomecanale}</span>
                </Col>
                <Col className="related-video-small-detail grey-text">
                  <span>{view} visualizzazioni</span>
                </Col>
                <Col className="related-video-small-detail grey-text">
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
