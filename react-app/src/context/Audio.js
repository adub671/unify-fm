import React, { createContext, useState, useRef } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [currentStation, setStation] = useState({});
  const [stationQueue, setStationQueue] = useState([]);
  const [queuePosition, setQueuePosition] = useState();
  const [isPlaying, setPlaying] = useState(false);
  const player = useRef();

  console.log(isPlaying, "isPlaying in audio context");

  return (
    <>
      <AudioContext.Provider
        value={{
          currentStation,
          setStation,
          player,
          stationQueue,
          setStationQueue,
          queuePosition,
          setQueuePosition,
          isPlaying,
          setPlaying,
        }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
}
