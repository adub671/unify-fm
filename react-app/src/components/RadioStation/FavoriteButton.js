import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavorite,
  getFavoriteStations,
  newFavorite,
} from "../../store/favoriteStations";

const FavoriteButton = ({ station }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const [favorited, setFavorited] = useState(favorites.includes(station?.id));

  useEffect(() => {
    setFavorited(favorites.includes(station?.id));
  }, [station, favorites]);

  useEffect(() => {
    (async () => {
      await dispatch(getFavoriteStations());
    })();
  }, [dispatch]);

  const handleFavorite = async () => {
    if (favorited) {
      await dispatch(deleteFavorite(station));
      await dispatch(getFavoriteStations());
    } else {
      await dispatch(newFavorite(station));
      await dispatch(getFavoriteStations());
    }
  };

  return (
    <>
      <i
        className={
          favorited
            ? "favorited-icon fa-solid fa-heart favorite-icon"
            : "not-favorited-icon fa-solid fa-heart favorite-icon"
        }
        onClick={handleFavorite}
      ></i>
    </>
  );
};

export default FavoriteButton;
