import axios from "axios";
import React, { useEffect, useState } from "react";
import Base from "../Base";
import { Track } from "../components";

const Tracks = () => {
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
    <Base>
      <div className="flex h-full items-center justify-center flex-wrap overflow-scroll pb-[10%]">
        {data.map((track, index) => (
          <Track videoId={track.id} name={track.name} key={index} />
        ))}
      </div>
    </Base>
  );
};

export default Tracks;
