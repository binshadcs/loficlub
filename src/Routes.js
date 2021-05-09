import React, { useEffect, useState } from "react";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// base
import Base from "./Base";

// components & core
import { YTwrapper } from "./components";
import { Home, Pomodoro, TodoList, Tracks } from "./core";

// utils
import useLocalStorage from "./util/useLocalStorage";

const Routes = () => {
  // lofi video player properties
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useLocalStorage("volume", 50);
  const [video, setVideo] = useState([]);

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

  // all the events
  useEffect(() => {
    fetchVideo();
  }, []);

  // routing for all routes
  return (
    <Router>
      <Base>
        <div className="absolute top-0 left-0 invisible -z-10">
          {id && (
            <YTwrapper videoId={id} paused={paused} volume={volume / 100} />
          )}
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
        </Switch>
      </Base>
    </Router>
  );
};

export default Routes;
