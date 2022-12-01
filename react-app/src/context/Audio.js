import React, { createContext, useState, useRef } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [currentStation, setStation] = useState({});
  const [stationQueue, setStationQueue] = useState([]);
  const [queuePosition, setQueuePosition] = useState();
  const [playing, setPlaying] = useState(false);
  const player = useRef();

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
          playing,
          setPlaying,
        }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
}
