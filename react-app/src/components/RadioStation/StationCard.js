import React from "react";

const StationCard = ({ station }) => {
  return (
    <>
      <div className="station-card-container">
        <div>
          <img src={station?.image_url} alt="station cards" />
        </div>
        <div>{station?.name}</div>
      </div>
    </>
  );
};

export default StationCard;
