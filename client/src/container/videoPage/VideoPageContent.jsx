import React from "react";
import { Container, Row, Col } from "reactstrap";
import Video from "../../components/videoPage/Video";
import OtherVideo from "../../components/videoPage/OtherVideo";
import video from "./videoPageContent.json";
import BoxDescription from "../../components/videoPage/BoxDescription";

const VideoPageContent = (props) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="8" style={{ padding: "10px" }}>
          <Video src="https://www.youtube.com/embed/qqSH-nUm2aU" />
          <Row>
            <Col>
              <BoxDescription />
            </Col>
          </Row>
          <Row>
            <Col>commenti vari</Col>
          </Row>
        </Col>
        <Col xs="4" style={{ padding: "5px" }}>
          <h4>Prossimi video</h4>
          {video.othervideo.map((video) => (
            <OtherVideo
              key={video.id}
              src={video.src}
              titolo={video.titolo}
              nomecanale={video.nomecanale}
              view={video.view}
              data={video.data}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default VideoPageContent;
