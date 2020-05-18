import React from "react";
import { Container, Row, Col } from "reactstrap";

function BoxMessagesItem({
  channelLink,
  imgLogo,
  nickName,
  publishedAt,
  textDisplay,
  likeCount,
}) {
  return (
    <Container>
      <Row>
        <Col xs="1">
          <a href={channelLink}>
            <img style={{ borderRadius: "50%" }} src={imgLogo} alt="logo" />
          </a>
        </Col>
        <Col xs="7">
          <Row>
            <Col xs="6">
              <p>
                <b>{nickName}</b>
              </p>
            </Col>
            <Col xs="6">{publishedAt}</Col>
          </Row>
          <Row>
            <p>{textDisplay}</p>
          </Row>
          <Row>
            <p>{likeCount} Like</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxMessagesItem;
