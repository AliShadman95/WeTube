import React from "react";
import VideoContainer from "./videoContainer/VideoContainer.jsx";
import Menu from "./menu/Menu.jsx";

function Main() {
  return (
    <div>
      <Menu />
      <VideoContainer />
      <VideoContainer />
      <VideoContainer />
    </div>
  );
}

export default Main;
