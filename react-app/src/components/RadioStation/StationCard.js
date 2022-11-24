import React from "react";
import DeleteStation from "./DeleteStation";

const StationCard = ({ station }) => {
  return (
    <>
      <div className="station-card-container">
        <div>
          <img src={station?.image_url} alt="station cards" />
        </div>
        <div>{station?.name}</div>
      </div>
      <DeleteStation station={station} />
    </>
  );
};

export default StationCard;
