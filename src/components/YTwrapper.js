import React from "react";

// youtube iframe
import YouTube from "@u-wave/react-youtube";

const YTwrapper = ({ videoId, paused, volume }) => {
  return <YouTube video={videoId} autoplay paused={paused} volume={volume} />;
};

export default YTwrapper;
