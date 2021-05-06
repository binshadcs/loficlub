import YouTube from "@u-wave/react-youtube";
import React from "react";

const YTwrapper = ({ videoId, paused, volume }) => {
  return <YouTube video={videoId} autoplay paused={paused} volume={volume} />;
};

export default YTwrapper;
