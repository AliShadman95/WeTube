import React from "react";
import ReactPlayer from "react-player";

function Video({ src }) {
  return (
    <div>
      <iframe
        width="100%"
        height="500px"
        src={src}
        frameborder="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
