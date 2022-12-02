import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import { nowPlayingParser } from "../../utils/nowPlayingParser";
import EditStationButton from "../RadioStation/EditStationButton";
import FavoriteButton from "../RadioStation/FavoriteButton";
import "./AllStationsCard.css";

const AllStationsCard = ({ station, favorite }) => {
  const {
    currentStation,
    setStation,
    setStationQueue,
    setQueuePosition,
    isPlaying,
    player,
  } = useContext(AudioContext);
  const [play, setPlay] = useState(false);
  const favorites = useSelector((state) => state.favorites);
  const stations = useSelector((state) => state.stations);
  const [nowPlaying, setNowPlaying] = useState("");
  useEffect(() => {
    (async () => {
      const playing = await nowPlayingParser(station?.now_playing_url);
      setNowPlaying(playing);
    })();
  }, [station]);

  const playStation = () => {
    if (!play) {
      setStation(station);
      setPlay(true);

      if (favorite) {
        const index = favorites.indexOf(station?.id);
        setStationQueue(favorites);
        setQueuePosition(index);
      } else {
        const stationsArr = Object.keys(stations);
        const index = stationsArr.indexOf(station?.id.toString());
        setStationQueue(stationsArr);
        setQueuePosition(index);
      }
      player.current.audio.current.play();
    } else {
      player.current.audio.current.pause();
    }
  };

  //*Determines Play or Pause Image For the Card
  //Determines Play or Pause Image For the Card
  useEffect(() => {
    if (currentStation === station) {
      if (isPlaying) {
        setPlay(true);
      } else {
        setPlay(false);
      }
    } else {
      setPlay(false);
    }
  }, [currentStation, isPlaying]);

  return (
    <>
      <div className="all-stations-card-container">
        <div className="all-stations-card-image-container">
          <div
            className="all-stations-card-image-play-container"
            onClick={playStation}
          >
            {play === true ? (
              <i className="fa-solid fa-pause all-stations-card-image-play-pause">
                {" "}
              </i>
            ) : (
              <i className="fa-solid fa-play all-stations-card-image-play-pause"></i>
            )}
          </div>
          <img
            className="all-stations-card-image "
            src={station?.image_url}
            alt="station cards"
            onClick={playStation}
          />
        </div>
        <NavLink to={`/station/${station?.id}`} exact={true}>
          <div className="all-stations-card-name">{station?.name}</div>
        </NavLink>
        <div className="all-stations-now-playing-container">{nowPlaying}</div>
        <div className="all-stations-button-container">
          <FavoriteButton station={station} />
          <EditStationButton station={station} />
          <div className="all-stations-button">
            <a href={station?.website_url}>
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
          {station?.chat_url && (
            <div
              onClick={() => {
                window.open(
                  station?.chat_url,
                  "newwindow",
                  "width=600,height=400"
                );
              }}
              className="all-stations-card-button"
            >
              <i className="fas fa-comments"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllStationsCard;
