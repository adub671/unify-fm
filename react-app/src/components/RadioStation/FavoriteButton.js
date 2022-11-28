import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorite, newFavorite } from "../../store/favoriteStations";

const FavoriteButton = ({ station }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const [favorited, setFavorited] = useState(favorites.includes(station.id));

  useEffect(() => {
    console.log(favorites, favorites.includes(station.id));
    setFavorited(favorites.includes(station.id));
  }, [station, favorites]);

  const handleFavorite = async () => {
    if (favorited) {
      await dispatch(deleteFavorite(station));
    } else {
      await dispatch(newFavorite(station));
    }
  };

  return (
    <>
      <i
        className={
          favorited
            ? "favorited-icon fa-solid fa-heart"
            : "not-favorited-icon fa-solid fa-heart"
        }
        onClick={handleFavorite}
      ></i>
    </>
  );
};

export default FavoriteButton;
