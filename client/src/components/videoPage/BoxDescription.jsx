import React, { useState } from "react";
import { Container, Row, Col, Collapse } from "reactstrap";

function BoxDescription({
  channelName,
  numberView,
  videoTitle,
  numberSubscribers,
  publishedAt,
  description,
  likeCount,
  dislikeCount,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container
      className="themed-container white-text boxDescription-container"
      fluid={true}
    >
      <Row>
        <Col>
          <h6>
            <b>{videoTitle}</b>
          </h6>
        </Col>
      </Row>

      <Row>
        <Col xs="9" className="grey-text">
          <p>
            {numberView} visualizzazioni - {publishedAt}
          </p>
        </Col>
        <Col xs="3" className="grey-text">
          <div>
            <i class="material-icons boxDescription-icon">thumb_up</i>
            {likeCount}
            <i class="material-icons boxDescription-icon">thumb_down</i>
            {dislikeCount}
          </div>
        </Col>
      </Row>
      <Row className="boxDescription-border-bt">
        <Col></Col>
      </Row>
      <Row className="boxDescription-border-bt">
        <Col>
          <Container id="boxDescription-channel">
            <Row>
              <Col xs="1">icona</Col>
              <Col>
                <b>{channelName}</b>
              </Col>
            </Row>
            <Row>
              <Col className="grey-text">{numberSubscribers} di iscritti</Col>
            </Row>
            <button
              id="boxDescription-btn"
              className="grey-text"
              onClick={toggle}
            >
              <b>Mostra altro</b>
            </button>
            <Collapse isOpen={isOpen}>
              <Row>
                <Col>
                  <p>{description}</p>
                </Col>
              </Row>
            </Collapse>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxDescription;
