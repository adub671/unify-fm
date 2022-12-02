import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import "./StationCard.css";

const StationCard = ({ station, favorite }) => {
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
  return (
    <>
      <div className="station-card-container" onClick={playStation}>
        <div className="station-card-image-container">
          <div className="station-card-image-play-container">
            {play === true ? (
              <i className="fa-solid fa-pause station-card-image-play-pause">
                {" "}
              </i>
            ) : (
              <i className="fa-solid fa-play station-card-image-play-pause"></i>
            )}
          </div>
          <img
            className="station-card-image"
            src={station?.image_url}
            alt="station cards"
          />
        </div>
        <NavLink to={`/station/${station?.id}`} exact={true}>
          <div className="card-station-name">{station?.name}</div>
        </NavLink>
      </div>
    </>
  );
};

export default StationCard;
