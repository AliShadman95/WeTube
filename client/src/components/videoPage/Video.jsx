import React from "react";

function Video({ src }) {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={src}
        frameborder="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
