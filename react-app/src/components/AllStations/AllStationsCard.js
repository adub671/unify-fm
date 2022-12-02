import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import { nowPlayingParser } from "../../utils/nowPlayingParser";
import EditStationButton from "../RadioStation/EditStationButton";
import FavoriteButton from "../RadioStation/FavoriteButton";
import User from "../User";
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
  const user = useSelector((state) => state.session.user);
  const [imageError, setImageError] = useState(false);
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
          {!imageError ? (
            <img
              className="all-stations-card-image"
              src={station?.image_url}
              alt="station cards"
              onError={() => setImageError(true)}
              onClick={playStation}
            />
          ) : (
            <div className="all-stations-card-image-default">
              <span>{station?.name}</span>
            </div>
          )}
        </div>
        <div className="all-stations-text-container">
          <NavLink to={`/station/${station?.id}`} exact={true}>
            <div className="all-stations-card-name">{station?.name}</div>
          </NavLink>
          <div className="all-stations-now-playing-container">{nowPlaying}</div>
        </div>
        <div className="all-stations-button-container">
          <FavoriteButton station={station} />
          {station?.admin_id === user?.id && (
            <EditStationButton station={station} />
          )}
          <div className="all-stations-button">
            <a href={station?.website_url}>
              <i className="fa-solid fa-globe all-stations-icon"></i>
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
              <i className="fas fa-comments all-stations-icon"></i>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllStationsCard;
