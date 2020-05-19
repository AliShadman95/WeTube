import React from "react";
import { Container, Row, Col } from "reactstrap";
import Video from "../../components/videoPage/Video.jsx";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo.jsx";
import BoxDescription from "../../components/videoPage/BoxDescription.jsx";
import BoxMessagesItem from "../../components/videoPage/BoxMessagesItem.jsx";
import MessageReplay from "../../components/videoPage/MessageReplay.jsx";
import video from "./videoPageContent.json";
import mess from "./messaggi.json";
import videoInfo from "./videoInfo.json";

const VideoPageContent = (props) => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs="8" style={{ padding: "10px" }}>
          <Video src="https://www.youtube.com/embed/qqSH-nUm2aU" />
          <Row>
            <Col>
              <BoxDescription
                channelName={videoInfo.items[0].snippet.channelTitle}
                numberView={videoInfo.items[0].statistics.viewCount}
                videoTitle={videoInfo.items[0].snippet.title}
                numberSubscribers="2000000 hardcode"
                publishedAt={videoInfo.items[0].snippet.publishedAt}
                description={videoInfo.items[0].snippet.description}
                likeCount={videoInfo.items[0].statistics.likeCount}
                dislikeCount={videoInfo.items[0].statistics.dislikeCount}
              />
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
                  id,
                } = item.snippet.topLevelComment.snippet;
                return (
                  <React.Fragment>
                    <BoxMessagesItem
                      key={id}
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
                          const {
                            authorChannelUrl,
                            authorProfileImageUrl,
                            authorDisplayName,
                            publishedAt,
                            textDisplay,
                            likeCount,
                            id,
                          } = rep.snippet;
                          return (
                            <BoxMessagesItem
                              key={id}
                              channelLink={authorChannelUrl}
                              imgLogo={authorProfileImageUrl}
                              nickName={authorDisplayName}
                              publishedAt={publishedAt}
                              textDisplay={textDisplay}
                              likeCount={likeCount}
                            />
                          );
                        })}
                      </MessageReplay>
                    )}
                  </React.Fragment>
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
              src={video.srcSmall}
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
