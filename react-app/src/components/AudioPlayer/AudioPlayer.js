import React, { useContext, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";
import { AudioContext } from "../../context/Audio";
import { nowPlayingParser } from "../../utils/nowPlayingParser";
import Marquee from "../Marquee";
import FavoriteButton from "../RadioStation/FavoriteButton";
import "./AudioPlayer.css";

export default function AppAudioPlayer() {
  const {
    currentStation,
    setStation,
    stationQueue,
    setQueuePosition,
    queuePosition,
    setStationQueue,
    setPlaying,
    isPlaying,

    player,
  } = useContext(AudioContext);
  const stations = useSelector((state) => state.stations);
  const user = useSelector((state) => state.session.user);
  const [nowPlaying, setNowPlaying] = useState("");
  const [scan, setScan] = useState(false);

  const clickNext = () => {
    let newQueuePosition;
    if (stationQueue.length - 1 === queuePosition) {
      newQueuePosition = 0;
    } else {
      newQueuePosition = queuePosition + 1;
    }
    setQueuePosition(newQueuePosition);
    const nextStation = stations[stationQueue[newQueuePosition]];
    console.log(queuePosition, newQueuePosition, nextStation, "next station");
    setStation(nextStation);
  };

  const clickPlay = () => {
    if (!currentStation.name) {
      clickRandom();
    }
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

  const clickRandom = () => {
    if (!stationQueue.length) {
      const stationArr = Object.keys(stations);
      const newQueuePosition = Math.floor(Math.random() * stationArr.length);
      setStationQueue(stationArr);
      const nextStation = stations[stationArr[newQueuePosition]];
      setStation(nextStation);
    } else {
      const newQueuePosition = Math.floor(Math.random() * stationQueue.length);
      if (newQueuePosition === queuePosition) {
        clickRandom();
      }
      setQueuePosition(newQueuePosition);
      const nextStation = stations[stationQueue[newQueuePosition]];
      setStation(nextStation);
    }
  };

  const clickScan = () => {
    if (!stationQueue.length) {
      const stationArr = Object.keys(stations);
      setStationQueue(stationArr);
      const firstStation = stations["1"];
      console.log("no length", stationArr, stations, firstStation);
      setQueuePosition(0);
      setStation(firstStation);
    } else {
      if (!scan) {
        clickNext();
      }
    }
    setScan(!scan);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scan) {
        clickNext();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [scan, queuePosition]);

  useEffect(() => {
    (async () => {
      const playing = await nowPlayingParser(currentStation);
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
      <div className="app-audio-player-container">
        <div className="player-logo">UNIFY.FM</div>
        {/* <div className="custom-audio-elements"> */}
        <div className="custom-audio-controls">
          <div className="random-button" onClick={clickRandom}>
            <i className="fa fa-random"></i>
          </div>
          <div
            className={scan ? "scan-audio scan-active" : "scan-audio"}
            onClick={clickScan}
          >
            SCAN
          </div>

          <div className="audio-favorite-container">
            <FavoriteButton station={currentStation} />
          </div>
        </div>
        <div className="volume-spacer"></div>
        <div className="now-playing-container">
          {currentStation && Object.keys(currentStation).length > 0 ? (
            <>
              <div className="now-playing-image-container"></div>

              <div className="now-playing-title">
                <span><i class="fa-solid fa-radio"></i> &#160; {currentStation?.name}</span>
                <div className="now-playing-container-scroll">
                  <span><i class="fa-solid fa-music"></i> &#160;</span>{" "}
                  <Marquee text={nowPlaying} length={24} />
                </div>
              </div>
            </>
          ) : (
            <div className="now-playing-placeholder">
              <span>Select A Station To Play</span>
            </div>
          )}
        </div>
        <div className="volume-spacer"></div>
        {/* </div> */}
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
            ocClickPlay={clickPlay}
          />
        </div>
      </div>
    </div>
  );
}
