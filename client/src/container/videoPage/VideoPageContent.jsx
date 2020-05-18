import React from "react";
import { Container, Row, Col } from "reactstrap";
import Video from "../../components/videoPage/Video.jsx";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo.jsx";
import BoxDescription from "../../components/videoPage/BoxDescription.jsx";
import BoxMessagesItem from "../../components/videoPage/BoxMessagesItem.jsx";
import MessageReplay from "../../components/videoPage/MessageReplay.jsx";
import video from "./videoPageContent.json";
import mess from "./messaggi.json";

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
            <Col>
              {mess.items.map((item) => {
                const {
                  authorChannelUrl,
                  authorProfileImageUrl,
                  authorDisplayName,
                  publishedAt,
                  textDisplay,
                  likeCount,
                } = item.snippet.topLevelComment.snippet;
                return (
                  <div key={item.id}>
                    <BoxMessagesItem
                      channelLink={authorChannelUrl}
                      imgLogo={authorProfileImageUrl}
                      nickName={authorDisplayName}
                      publishedAt={publishedAt}
                      textDisplay={textDisplay}
                      likeCount={likeCount}
                    />
                    {item.replies && (
                      <MessageReplay>
                        {item.replies.comments.reverse().map((rep) => {
                          return (
                            <BoxMessagesItem
                              channelLink={rep.snippet.authorChannelUrl}
                              imgLogo={rep.snippet.authorProfileImageUrl}
                              nickName={rep.snippet.authorDisplayName}
                              publishedAt={rep.snippet.publishedAt}
                              textDisplay={rep.snippet.textDisplay}
                              likeCount={rep.snippet.likeCount}
                            />
                          );
                        })}
                      </MessageReplay>
                    )}
                  </div>
                );
              })}
            </Col>
          </Row>
        </Col>
        <Col xs="4" style={{ padding: "5px" }}>
          <h4>Prossimi video</h4>
          {video.othervideo.map((video) => (
            <RelatedVideo
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
