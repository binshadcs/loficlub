import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { YTwrapper } from "./components";
import { Home, Tracks } from "./core";
import useLocalStorage from "./util/useLocalStorage";

const Routes = () => {
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
  });

  return (
    <Router>
      <div className="absolute top-0 left-0 -z-10 invisible">
        <YTwrapper videoId={id} paused={paused} volume={volume / 100} />
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
          />
        </Route>
        <Route path="/tracks" exact>
          <Tracks />
          <h1 className="text-5xl ">ipbdwsdbqwvdihwqbjd.bwsdn</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
