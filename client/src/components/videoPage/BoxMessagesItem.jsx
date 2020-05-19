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
    <Container className="boxMessagesItem-container white-text">
      <Row>
        <Col xs="1" className="boxMessagesItem-pd-zero">
          <a href={channelLink}>
            <img id="boxMessagesItem-img" src={imgLogo} alt="logo" />
          </a>
        </Col>
        <Col xs="7">
          <Row>
            <Col className="boxMessagesItem-pd-zero">
              <p>
                <b>
                  {nickName} {"-"} {publishedAt}
                </b>
              </p>
            </Col>
          </Row>
          <Row>
            <p>{textDisplay}</p>
          </Row>
          <Row>
            <p className="grey-text">
              <i class="material-icons grey-text">thumb_up</i>
              {" " + likeCount}
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxMessagesItem;
