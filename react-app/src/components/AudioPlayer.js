import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { useDispatch } from "react-redux";
import { AudioContext } from "../context/Audio";
import { nowPlayingParser } from "../utils/nowPlayingParser";

export default function AppAudioPlayer() {
  const dispatch = useDispatch();
  const { currentStation } = useContext(AudioContext);

  //   const onSongEnd = () => {
  //     setSong(songQueue[0]);
  //     const newQueue = [...songQueue];
  //     newQueue.shift();
  //     setSongQueue(newQueue);
  //   };

  //   const deleteFromQueue = (song) => {
  //     const songInPlaylistIndex = songQueue.indexOf(song);
  //     const newQueue = [...songQueue];
  //     newQueue.splice(songInPlaylistIndex, 1);
  //     setSongQueue(newQueue);
  //   };

  //   const clickNext = () => {
  //     const nextSong = songQueue[0];
  //     if (nextSong) {
  //       const newQueue = [...songQueue];
  //       newQueue.shift();
  //       setSong(nextSong);
  //       setSongQueue(newQueue);
  //     } else alert("No More Songs In Queue!");
  //   };

  //   const clickPrev = () => {
  //     console.log("PREVIOUS CLICKED!!!!!!!!!");
  //   };

  return (
    <div className="fixed-audio-container">
      <div className="player-logo">UNIFY FM</div>
      <div className="app-audio-player-container">
        <div className="audio-player">
          <AudioPlayer
            autoPlay
            src={currentStation?.stream_url}
            // onPlay={() => {
            //   setPlaying(true);
            //   console.log(currentSong.name, "is playing");
            // }}
            // onPause={() => {
            //   setPlaying(false);
            // }}
            // onEnded={onSongEnd}
            // ref={player}
            // showSkipControls={true}
            // showJumpControls={false}
            // onClickNext={() => {
            //   clickNext();
            // }}
            // onClickPrevious={() => {
            //   clickPrev();
            // }}
          />
        </div>
        <div className="now-playing-container">
          {Object.keys(currentStation).length > 0 ? (
            <>
              <div className="now-playing-image-container"></div>
              <div className="now-playing-title">
                <span>{currentStation?.name}</span>
                <div>{nowPlayingParser(currentStation?.now_playing_url)}</div>
              </div>
            </>
          ) : (
            <div className="now-playing-placeholder">
              <span>Select A Station To Play</span>
              <br />
              <span className="audio-player-logo">UNIFY.fm</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
