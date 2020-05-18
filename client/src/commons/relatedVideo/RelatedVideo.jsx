import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

function RelatedVideo({ src, titolo, nomecanale, view, data, isSearchPage }) {
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
      <Row className="align-items-center">
        <Col xs="4">
          <div>
            <img src={src}></img>
          </div>
        </Col>
        <Col xs="6">
          <Row className="flex-column">
            <Col className={isSearchPage && "pb-3"}>
              <span>{titolo}</span>
            </Col>
            <Col className={isSearchPage && "pb-3"}>
              <span>{nomecanale}</span>
            </Col>
            <Col className={isSearchPage && "pb-3"}>
              <span>{view} visualizzazioni</span>
            </Col>
            <Col className={isSearchPage && "pb-3"}>
              <span>{data}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default RelatedVideo;
