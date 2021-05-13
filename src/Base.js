import React from "react";

// components
import { Header } from "./components";
import { useHotkeys } from "react-hotkeys-hook";
import { useHistory } from "react-router";
import { getRandomGif } from "./helper/RandomImageCalls";

const Base = ({ children, isFullScreen, setIsFullScreen, bgGif, setBgGif }) => {
  let history = useHistory();

  const twitterLink =
    "https://twitter.com/intent/tweet?text=Check%20out%20loficlub.now.sh%20by%20@SavioMartin7%E2%9A%A1%EF%B8%8F%0D%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20Give%20it%20a%20try!%20You%27ll%20love%20it!%20%F0%9F%94%A5%0D%0A%0A%23lofi%20%23chillbeats";

  useHotkeys("alt+k", () => history.push("/keyboard-shortcuts"));
  useHotkeys("alt+t", () => window.open(twitterLink));
  useHotkeys("alt+p", () => history.push("/pomodoro"));
  useHotkeys("alt+l", () => history.push("/todo"));
  useHotkeys("alt+c", () => history.push("/chat"));
  useHotkeys("alt+k", () => history.push("/keyboard-shortcuts"));
  useHotkeys("alt+h", () => history.push("/"));
  useHotkeys("alt+a", () => history.push("/tracks"));
  useHotkeys("alt+s", () => history.push("/stared"));
  useHotkeys("alt+g", () => setBgGif(getRandomGif()));

  return (
    <div className="h-screen text-[#F0E9E2] bg-cover  w-full">
      <div
        className="relative  flex flex-col items-center justify-center h-screen w-screen
        bg-center random-bg bg-cover"
        style={{
          background: `url("${bgGif}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="vignette"></div>
        <div
          className="relative h-[90%] w-[90%] rounded-xl overflow-hidden shadow-2xl bg-cover bg-center border-2 border-[#4CD2D6] shadow-5xl"
          style={{
            background: `linear-gradient(to bottom, rgba(10,10,10,.7),rgba(0,0,0,1)), url("${bgGif}")`,
            backgroundSize: "cover",
          }}
        >
          <div className="lines-animation"></div>
          <Header
            isFullScreen={isFullScreen}
            setIsFullScreen={setIsFullScreen}
          />
          {children}
        </div>
        <h4 className="text-left w-[90%] text-lg mt-1">
          Built with 💖 by
          <a
            href="https://twitter.com/saviomartin7"
            target="_blank"
            rel="noreferrer"
            className="ml-1 hover:underline hover:text-[#4CD2D6]"
          >
            Savio Martin
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Base;
