import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteStations } from "../../store/favoriteStations";
import { getStations } from "../../store/radioStations";

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
      await dispatch(getFavoriteStations());
      await dispatch(getStations());
    })();
  }, [dispatch]);

  return (
    <>
      <div>Favorite Stations</div>
      <div>
        {faveStations?.map((faveStation) => (
          <div>{faveStation?.name}</div>
        ))}
      </div>
      <div>END FAVE</div>
    </>
  );
};

export default FavoriteStations;
