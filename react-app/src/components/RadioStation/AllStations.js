import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import EditStation from "./EditStation";
import StationCard from "./StationCard";

const AllStations = () => {
  const dispatch = useDispatch();
  const stations = useSelector((state) => state.stations);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
    })();
  }, [dispatch]);

  return (
    <>
      <div>Stations</div>
      <div>
        {stations &&
          Object.values(stations)?.map((station) => (
            <StationCard station={station} />
          ))}
      </div>
      <EditStation station={stations[1]} />
    </>
  );
};

export default AllStations;
