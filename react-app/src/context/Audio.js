import React, { createContext, useState, useRef } from "react";
import { nowPlayingParser } from "../utils/nowPlayingParser";

export const AudioContext = createContext();

export default function AudioProvider({ children }) {
  const [currentStation, setStation] = useState({});
  const [stationQueue, setStationQueue] = useState([]);
  const [queuePosition, setQueuePosition] = useState();
  const [isPlaying, setPlaying] = useState(false);
  const player = useRef();

  (async () => {
    const nowPlaying = await nowPlayingParser(currentStation);

    if (currentStation?.name && "mediaSession" in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: nowPlaying,
        artist: currentStation?.name,
        album: "unify.fm",
        artwork: [
          {
            src: currentStation?.image_url,
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: currentStation?.image_url,
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: currentStation?.image_url,
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: currentStation?.image_url,
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: currentStation?.image_url,
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: currentStation?.image_url,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });
    }
  })();

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
