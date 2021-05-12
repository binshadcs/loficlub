import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import { Track } from "../components";

const Tracks = ({ fetchVideo, staredMusic, setStaredMusic }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("/data/tracks.json", {
        headers: {},
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex h-full items-center justify-center flex-wrap overflow-scroll pb-[30%] lg:pb-[10%]">
      {data.map((track, index) => (
        <Track
          videoId={track.id}
          name={track.name}
          key={index}
          fetchVideo={fetchVideo}
          staredMusic={staredMusic}
          setStaredMusic={setStaredMusic}
        />
      ))}
    </div>
  );
};

export default Tracks;
