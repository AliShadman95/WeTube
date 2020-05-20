import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Video from "../../components/videoPage/Video.jsx";
import RelatedVideo from "../../commons/relatedVideo/RelatedVideo.jsx";
import BoxDescription from "../../components/videoPage/BoxDescription.jsx";
import BoxMessagesItem from "../../components/videoPage/BoxMessagesItem.jsx";
import MessageReplay from "../../components/videoPage/MessageReplay.jsx";
import axios from "axios";
import parse from "html-react-parser";

function VideoPageContent({ match }) {
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoComments, setVideoComments] = useState([]);
  const [videoRelated, setVideoRelated] = useState([]);

  useEffect(() => {
    const id = match.params.id;

    async function fetchData() {
      const videoDetailsData = await axios.get(
        `http://localhost:3005/videos/${id}`
      );
      const videoCommentsData = await axios.get(
        `http://localhost:3005/comments/${id}`
      );
      const videoRelatedData = await axios.get(
        `http://localhost:3005/videos/related/${id}`
      );

      setVideoDetails(videoDetailsData.data.items);
      setVideoComments(videoCommentsData.data.items);
      setVideoRelated(videoRelatedData.data.items);
    }

    fetchData();
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col xs="8" style={{ padding: "10px" }}>
          <Video src={`https://www.youtube.com/embed/${match.params.id}`} />
          <Row>
            <Col>
              {typeof videoDetails !== "undefined" &&
                videoDetails.length > 0 && (
                  <BoxDescription
                    channelName={videoDetails[0].snippet.channelTitle}
                    numberView={videoDetails[0].statistics.viewCount}
                    videoTitle={videoDetails[0].snippet.title}
                    numberSubscribers="2000001"
                    publishedAt={videoDetails[0].snippet.publishedAt}
                    description={videoDetails[0].snippet.description}
                    likeCount={videoDetails[0].statistics.likeCount}
                    dislikeCount={videoDetails[0].statistics.dislikeCount}
                  />
                )}
            </Col>
          </Row>
          <Row>
            <Col>
              {typeof videoComments !== "undefined" &&
                videoComments.length > 0 &&
                videoComments.map((item) => {
                  console.log(item);
                  return (
                    <React.Fragment key={item.snippet.topLevelComment.id}>
                      <BoxMessagesItem
                        channelLink={
                          item.snippet.topLevelComment.snippet.authorChannelUrl
                        }
                        imgLogo={
                          item.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                        }
                        nickName={
                          item.snippet.topLevelComment.snippet.authorDisplayName
                        }
                        publishedAt={
                          item.snippet.topLevelComment.snippet.publishedAt
                        }
                        textDisplay={parse(
                          item.snippet.topLevelComment.snippet.textDisplay
                        )}
                        likeCount={
                          item.snippet.topLevelComment.snippet.likeCount
                        }
                      />
                      {item.replies && (
                        <MessageReplay>
                          {item.replies.comments.reverse().map((rep) => {
                            return (
                              <BoxMessagesItem
                                key={rep.id}
                                channelLink={rep.snippet.authorChannelUrl}
                                imgLogo={rep.snippet.authorProfileImageUrl}
                                nickName={rep.snippet.authorDisplayName}
                                publishedAt={rep.snippet.publishedAt}
                                textDisplay={parse(rep.snippet.textDisplay)}
                                likeCount={rep.snippet.likeCount}
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
          {typeof videoRelated !== "undefined" &&
            videoRelated.length > 0 &&
            videoRelated.map((video) => (
              <RelatedVideo
                key={video.id.videoId}
                src={video.snippet.thumbnails.medium.url}
                titolo={video.snippet.title}
                nomecanale={video.snippet.channelTitle}
                view=""
                data={video.snippet.publishedAt}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default VideoPageContent;
