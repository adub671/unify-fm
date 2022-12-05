import React, { useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";
import { AudioContext } from "../../context/Audio";
import { nowPlayingParser } from "../../utils/nowPlayingParser";
import "./AudioPlayer.css";

export default function AppAudioPlayer() {
  const {
    currentStation,
    setStation,
    stationQueue,
    setQueuePosition,
    queuePosition,
    setPlaying,
    isPlaying,
    player,
  } = useContext(AudioContext);
  const stations = useSelector((state) => state.stations);
  const [nowPlaying, setNowPlaying] = useState("");

  const clickNext = () => {
    let newQueuePosition;
    if (stationQueue.length - 1 === queuePosition) {
      newQueuePosition = 0;
    } else {
      newQueuePosition = queuePosition + 1;
    }
    setQueuePosition(newQueuePosition);
    const nextStation = stations[stationQueue[newQueuePosition]];
    setStation(nextStation);
  };

  const clickPrev = () => {
    let newQueuePosition;

    if (queuePosition === 0) {
      newQueuePosition = stationQueue.length - 1;
    } else {
      newQueuePosition = queuePosition - 1;
    }
    setQueuePosition(newQueuePosition);
    const nextStation = stations[stationQueue[newQueuePosition]];
    setStation(nextStation);
  };

  useEffect(() => {
    (async () => {
      const playing = await nowPlayingParser(currentStation?.now_playing_url);
      setNowPlaying(playing);
    })();
  }, [currentStation]);

  if (currentStation?.name && "mediaSession" in navigator)
    navigator.mediaSession.setActionHandler("play", function () {
      player.current.audio.current.play();
    });
  navigator.mediaSession.setActionHandler("pause", function () {
    player.current.audio.current.pause();
  });

  navigator.mediaSession.setActionHandler("previoustrack", clickPrev);
  navigator.mediaSession.setActionHandler("nexttrack", clickNext);

  return (
    <div className="fixed-audio-container">
      <div className="player-logo">UNIFY FM</div>
      <div className="app-audio-player-container">
        <div className="now-playing-container">
          {Object.keys(currentStation).length > 0 ? (
            <>
              <div className="now-playing-image-container"></div>
              <div className="now-playing-title">
                <span>Station: {currentStation?.name}</span>
                <div>Now Playing: {nowPlaying}</div>
              </div>
            </>
          ) : (
            <div className="now-playing-placeholder">
              <span>Select A Station To Play</span>
            </div>
          )}
        </div>
        <div className="audio-player">
          <AudioPlayer
            autoPlay
            src={currentStation?.stream_url}
            customAdditionalControls={[]}
            onPlay={() => {
              setPlaying(true);
              console.log(
                "You Are Listening To ",
                currentStation?.name,
                "Enjoy <3 -ADUB"
              );
            }}
            onPause={() => {
              setPlaying(false);
            }}
            ref={player}
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={clickNext}
            onClickPrevious={clickPrev}
          />
        </div>
      </div>
    </div>
  );
}
