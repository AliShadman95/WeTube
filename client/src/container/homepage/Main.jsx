import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideosByCategory } from "../actions/videoActions";
import HomepageVideoContainer from "../../components/homepage/homepageVideoContainer/HomepageVideoContainer.jsx";

function Main({
  getVideosByCategory,
  videoSportList,
  videoMusicList,
  videoGamingList,
}) {
  useEffect(() => {
    getVideosByCategory("17");
    getVideosByCategory("10");
    getVideosByCategory("20");
  }, [getVideosByCategory]);

  return (
    <div>
      <HomepageVideoContainer title="Sport" videoList={videoSportList} />
      <HomepageVideoContainer title="Music" videoList={videoMusicList} />
      <HomepageVideoContainer title="Gaming" videoList={videoGamingList} />
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state.videos.itemsByCategory);
  return {
    videoSportList: state.videos.itemsByCategory.find((e) => {
      return e.category === "sport";
    }),
    videoMusicList: state.videos.itemsByCategory.find((e) => {
      return e.category === "music";
    }),
    videoGamingList: state.videos.itemsByCategory.find((e) => {
      return e.category === "gaming";
    }),
  };
};

export default connect(mapStateToProps, { getVideosByCategory })(Main);
