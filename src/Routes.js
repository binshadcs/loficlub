import React, { useEffect, useState } from "react";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// base
import Base from "./Base";

// animate.css
import "animate.css/animate.css";

// components & core
import { YTwrapper } from "./components";
import { Chat, Home, Pomodoro, TodoList, Tracks } from "./core";

// utils
import useLocalStorage from "./util/useLocalStorage";

// AOS
import Aos from "aos";
import "aos/dist/aos.css";

const Routes = () => {
  // lofi video player properties
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useLocalStorage("volume", 50);
  const [video, setVideo] = useState([]);
  const [muted, setMuted] = useState(true);
  const [buffering, setBuffering] = useState(false);

  // destructing video
  const { id, name } = video;

  // most important part
  const fetchVideo = () => {
    if (typeof window !== undefined) {
      const video = localStorage.getItem("video");
      const parsedVideo = JSON.parse(video);

      setVideo({
        id: parsedVideo ? parsedVideo.videoId : "5qap5aO4i9A",
        name: parsedVideo
          ? parsedVideo.name
          : "lofi hip hop radio - beats to relax/study to",
      });
    }
  };

  // AOS
  Aos.init();

  const toggleMute = () => {
    setMuted(false);
  };

  // all the events
  useEffect(() => {
    fetchVideo();
    Aos.init({ duration: 1000 });
  }, []);

  const onBuffering = () => {
    setBuffering(true);
  };
  const onPlaying = () => {
    setBuffering(false);
  };

  // routing for all routes
  return (
    <Router>
      <div className="custom-cursor">
        <Base>
          <div className="absolute top-0 left-0 invisible -z-10">
            {/* {id && (
              <YTwrapper
                videoId={id}
                paused={paused}
                volume={volume / 100}
                muted={muted}
                onBuffering={onBuffering}
                onPlaying={onPlaying}
              />
            )} */}
          </div>
          <Switch>
            <Route path="/" exact>
              <Home
                id={id}
                name={name}
                volume={volume}
                setVolume={setVolume}
                setPaused={setPaused}
                paused={paused}
                fetchVideo={fetchVideo}
                muted={muted}
                buffering={buffering}
                toggleMute={toggleMute}
              />
            </Route>
            <Route path="/tracks" exact>
              <Tracks fetchVideo={fetchVideo} />
            </Route>
            <Route path="/todo" exact>
              <TodoList fetchVideo={fetchVideo} />
            </Route>
            <Route path="/pomodoro" exact>
              <Pomodoro />
            </Route>
            <Route path="/chat" exact>
              <Chat />
            </Route>
          </Switch>
        </Base>
      </div>
    </Router>
  );
};

export default Routes;
