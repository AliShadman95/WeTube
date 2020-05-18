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
    <Container className="themed-container" fluid={true}>
      <Row>
        <Col xs="12">
          <h6>
            <b>{videoTitle}</b>
          </h6>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            {numberView} visualizzazioni - {publishedAt}
          </p>
        </Col>
        <Col>
          <div>
            <span>
              <i class="material-icons">thumb_up</i>
            </span>
            <span>{likeCount}</span>
            <span>
              <i class="material-icons">thumb_down</i>
            </span>
            <span>{dislikeCount}</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr></hr>
          <div>
            <Container>
              <Row>
                <Col>icona</Col>
                <Col>
                  {channelName} {numberSubscribers} di iscritti
                </Col>
              </Row>
              <button
                onClick={toggle}
                style={{ marginBottom: "1rem", border: "none" }}
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
          </div>
          <hr></hr>
        </Col>
      </Row>
    </Container>
  );
}

export default BoxDescription;
