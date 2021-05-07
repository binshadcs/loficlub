import { YTwrapper } from "../components";
import React, { useEffect, useState } from "react";
import Base from "../Base";
import { LofiPlayer } from ".";
import useLocalStorage from "../util/useLocalStorage";

const Home = () => {
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useLocalStorage("volume", 1);
  const [video, setVideo] = useState([]);

  const fetchVideo = () => {
    if (typeof window !== undefined) {
      const videoId = localStorage.getItem("videoId");
      const name = localStorage.getItem("name");

      setVideo({
        id: videoId,
        name: name,
      });
    }
  };

  const { id, name } = video;

  useEffect(() => {
    fetchVideo();
  }, [localStorage]);

  return (
    <Base>
      <div className="flex items-end pb-[10%] justify-between items-between flex-col h-full">
        <div className="w-full flex-1">
          <div className="invisible">
            <YTwrapper videoId={id} paused={paused} volume={volume / 100} />
          </div>
        </div>
        <LofiPlayer
          setPaused={setPaused}
          paused={paused}
          volume={volume}
          setVolume={setVolume}
          name={name}
        />
      </div>
    </Base>
  );
};

export default Home;
