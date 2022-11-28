import React from "react";
import DeleteStation from "./DeleteStation";
import FavoriteButton from "./FavoriteButton";
import "./StationCard.css";

const StationCard = ({ station }) => {
  return (
    <>
      <div className="station-card-container">
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
