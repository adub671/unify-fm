import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStations } from "../../store/radioStations";
import StationCard from "./StationCard";
import "./Carousel.css";
import { getFavoriteStations } from "../../store/favoriteStations";

const FavoriteStationsCarousel = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const stations = useSelector((state) => state.stations);
  const user = useSelector((state) => state.session.user);
  const [faveStations, setFaveStations] = useState();

  useEffect(() => {
    const faves = favorites?.map((fave) => {
      return stations[fave];
    });
    setFaveStations(faves);
  }, [stations, favorites, user]);

  useEffect(() => {
    (async () => {
      await dispatch(getStations());
      await dispatch(getFavoriteStations());
    })();
  }, [dispatch]);

  return (
    <>
      {user && (
        <div>
          <div className="carousel-banner">Favorite Stations</div>
          <div className="carousel-container">
            {stations &&
              faveStations?.map((station) => (
                <StationCard station={station} favorite={true} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FavoriteStationsCarousel;
