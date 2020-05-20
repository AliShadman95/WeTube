import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideosByCategory } from "../actions/videoActions";
import HomepageVideoContainer from "../../components/homepage/homepageVideoContainer/HomepageVideoContainer.jsx";

function Main({
  getVideosByCategory,
  videoSportList,
  videoMusicList,
  videoAnimalsList,
}) {
  useEffect(() => {
    getVideosByCategory("17");
    getVideosByCategory("10");
    getVideosByCategory("20");
  }, []);

  return (
    <div>
      <HomepageVideoContainer title="Sport" />
      <HomepageVideoContainer title="Music" />
      <HomepageVideoContainer title="News" />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    videoSportList: state.itemsByCategory,
    videoMusicList: state.itemsByCategory,
    videoAnimalsList: state.itemsByCategory,
  };
};

export default connect(mapStateToProps, { getVideosByCategory })(Main);
