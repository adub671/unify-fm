import React, { createContext, useState, useRef } from "react";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [audioUrl, setAudioUrl] = useState("https://radio.intergalactic.fm/2");
  const [currentStation, setStation] = useState({});
  const [songQueue, setSongQueue] = useState([]);
  const [playing, setPlaying] = useState(false);
  const player = useRef();

  return (
    <>
      <AudioContext.Provider
        value={{
          audioUrl,
          setAudioUrl,
          currentStation,
          setStation,
          player,
          songQueue,
          setSongQueue,
          playing,
          setPlaying,
        }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
}
