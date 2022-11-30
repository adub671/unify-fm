import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../../context/Audio";
import "./StationCard.css";

const StationCard = ({ station }) => {
  const { setStation } = useContext(AudioContext);
  const [play, setPlay] = useState(false);
  return (
    <>
      <div
        className="station-card-container"
        onClick={() => {
          setStation(station);
          setPlay(true);
        }}
      >
        <div className="station-card-image-container">
          <div className="station-card-image-play-container">
            {play === true ? (
              <i class="fa-solid fa-pause station-card-image-play-pause"> </i>
            ) : (
              <i class="fa-solid fa-play station-card-image-play-pause"></i>
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
