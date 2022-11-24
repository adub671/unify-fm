import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";

const AllStations = () => {
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
    })();
  }, [dispatch]);

  console.log(stations);

  return (
    <>
      <div>Stations</div>
      <div>
        {stations &&
          Object.values(stations)?.map((station) => (
            <StationCard station={station} />
          ))}
      </div>
    </>
  );
};

export default AllStations;
