import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteStations } from "../../store/favoriteStations";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";

const FavoriteStations = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const stations = useSelector((state) => state.stations);
  const [faveStations, setFaveStations] = useState();

  useEffect(() => {
    const faves = favorites?.map((fave) => {
      return stations[fave];
    });
    setFaveStations(faves);
  }, [stations, favorites]);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
      await dispatch(getFavoriteStations());
    })();
  }, [dispatch]);

  return (
    <>
      <div className="carousel-title">Favorite Stations</div>
      <div>
        {faveStations?.map((faveStation) => (
          <StationCard station={faveStation} />
        ))}
      </div>
    </>
  );
};

export default FavoriteStations;
