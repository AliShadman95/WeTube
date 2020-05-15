import React from "react";
import { Container, Row, Col } from "reactstrap";

function OtherVideo({ src, titolo, nomecanale, view, data }) {
  return (
    <Container fluid={true} style={{ padding: "5px" }}>
      <Row>
        <Col xs="6">
          <div>
            <iframe
              width="190px"
              height="130px"
              src={`${src}`}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </Col>
        <Col xs="6" style={{ lineHeight: "1" }}>
          <p>{titolo}</p>
          <p>{nomecanale}</p>
          <p>{view}</p>
          <p>{data}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default OtherVideo;
