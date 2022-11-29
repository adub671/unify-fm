import React, { useContext } from "react";
import { AudioContext } from "../../context/Audio";
import DeleteStation from "./DeleteStation";
import FavoriteButton from "./FavoriteButton";
import "./StationCard.css";

const StationCard = ({ station }) => {
  const { setStation } = useContext(AudioContext);
  return (
    <>
      <div
        className="station-card-container"
        onClick={() => {
          setStation(station);
        }}
      >
        <div>
          <img
            className="station-card-image"
            src={station?.image_url}
            alt="station cards"
          />
        </div>
        <div>{station?.name}</div>
      </div>
      <DeleteStation station={station} />
      <FavoriteButton station={station} />
    </>
  );
};

export default StationCard;
