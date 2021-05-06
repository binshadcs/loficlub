import YouTube from "@u-wave/react-youtube";
import React from "react";

const YTwrapper = ({ videoId, paused }) => {
  return <YouTube video={videoId} autoplay paused={paused} />;
};

export default YTwrapper;
