import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";
import "./Carousel.css";
import CreateStationButton from "./CreateStationButton";

const AllStationsCarousel = () => {
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
    })();
  }, [dispatch]);

  return (
    <>
      <div className="carousel-banner">
        All Stations <CreateStationButton />
      </div>
      <div className="carousel-container">
        {stations &&
          Object.values(stations)?.map((station, idx) => (
            <StationCard station={station} key={idx} />
          ))}
      </div>
    </>
  );
};

export default AllStationsCarousel;
