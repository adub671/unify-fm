import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import AllStationsCard from "./AllStationsCard";
import CreateStationButton from "../RadioStation/CreateStationButton";

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
      <div className="all-stations-positioning-container">
        <div className="all-stations-title">All Radio Stations</div>
        <CreateStationButton />

        <div className="all-stations-container">
          {stations &&
            Object.values(stations)?.map((station) => (
              <>
                <AllStationsCard station={station} />
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllStations;
