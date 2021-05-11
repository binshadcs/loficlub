import React, { useEffect, useState } from "react";

// material design
import { Button, Tooltip } from "@material-ui/core";
import firebase from "firebase";

// icons
import {
  BsArrowsFullscreen,
  BsChatSquareDots,
  BsCheckBox,
  BsClock,
  BsMusicNoteList,
  BsFullscreenExit,
} from "react-icons/bs";

// components
import { Logo } from ".";

import { Link } from "react-router-dom"; // react router

// fullscreen api
import screenfull from "screenfull";
import { FiTwitter } from "react-icons/fi";

const Header = ({ isFullScreen, setIsFullScreen }) => {
  const [listening, setListening] = useState(0);

  // get how many is listening to
  useEffect(() => {
    firebase
      .database()
      .ref("listeningNow")
      .on("value", (data) => {
        setListening(data.val());
      });
  });

  const twitterLink =
    "https://twitter.com/intent/tweet?text=Check%20out%20loficlub.now.sh%20by%20@SavioMartin7%E2%9A%A1%EF%B8%8F%0D%0A%0AThe%20best%20place%20to%20enjoy%20Hip%20hop%20beats%20to%20Relax%20or%20Study!%20%F0%9F%8E%A7%20Give%20it%20a%20try!%20You%27ll%20love%20it!%20%F0%9F%94%A5%0D%0A%0A%23lofi%20%23chillbeats";

  return (
    <div className="flex w-full h-[12%] items-center justify-between">
      <div className="flex flex-col justify-center items-center h-full ml-5 cursor-pointer">
        <Link to="/" className="flex mt-2 cursor-pointer">
          <Logo cursor-pointer />
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-2xl text-[#F0E9E2] poppins ml-1 font-medium">
              Lofi Club
            </h3>
            <h4 className="text-sm text-[#F0E9E2] poppins font-medium -mt-1 ml-1">
              {listening} listening
            </h4>
          </div>
        </Link>
      </div>
      <div className="flex items-center mr-5">
        <Link to="/chat" className="flex items-center">
          <Tooltip title="Chat" arrow>
            <Tooltip title="Chat" arrow>
              <div className="w-11 flex items-center overflow-hidden cursor-pointer">
                <Button
                  className="-mr-5 material-header-btn"
                  style={{ marginLeft: "-20" }}
                >
                  <BsChatSquareDots className=" text-2xl text-[#F0E9E2]" />
                </Button>
              </div>
            </Tooltip>
          </Tooltip>
        </Link>
        <Link to="/pomodoro" className="flex items-center">
          <Tooltip title="Pomodoro Timer" arrow>
            <div className="w-11 flex items-center overflow-hidden cursor-pointer">
              <Button
                className="-mr-5 material-header-btn"
                style={{ marginLeft: "-20" }}
              >
                <BsClock className=" text-2xl text-[#F0E9E2]" />
              </Button>
            </div>
          </Tooltip>
        </Link>
        <Link to="/tracks" className="flex items-center">
          <Tooltip title="Tracks" arrow>
            <div className="w-11 flex items-center overflow-hidden cursor-pointer">
              <Button
                className="-mr-5 material-header-btn"
                style={{ marginLeft: "-20" }}
              >
                <BsMusicNoteList className=" text-2xl text-[#F0E9E2]" />
              </Button>
            </div>
          </Tooltip>
        </Link>
        <Link to="/todo" className="flex items-center">
          <Tooltip title="Todo List" arrow>
            <div className="w-11 flex items-center overflow-hidden cursor-pointer">
              <Button
                className="-mr-5 material-header-btn"
                style={{ marginLeft: "-20" }}
              >
                <BsCheckBox className=" text-2xl text-[#F0E9E2]" />
              </Button>
            </div>
          </Tooltip>
        </Link>
        <Tooltip title="Full Screen" arrow>
          <div
            className="w-11 flex items-center overflow-hidden"
            onClick={() => {
              setIsFullScreen(!isFullScreen);
              screenfull.toggle();
            }}
          >
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              {isFullScreen ? (
                <BsFullscreenExit className=" text-2xl text-[#F0E9E2]" />
              ) : (
                <BsArrowsFullscreen className=" text-2xl text-[#F0E9E2]" />
              )}
            </Button>
          </div>
        </Tooltip>
        <Tooltip title="Share to Twitter" arrow>
          <a
            href={twitterLink}
            target="_blank"
            rel="noreferrer"
            className="ml-1 flex items-center bg-[#1A91DA] hover:bg-[#0F84B4] rounded-md relative cursor-pointer"
          >
            <Button className="track flex twitterBtn">
              <div className="flex items-center justify-center text-lg text-[#F0E9E2] duration-300">
                Share on Twitter
                <FiTwitter className="ml-1" />
              </div>
            </Button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
