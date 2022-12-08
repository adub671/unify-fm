import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFavorite,
  getFavoriteStations,
  newFavorite,
} from "../../store/favoriteStations";

const FavoriteButton = ({ station, isButton }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const [favorited, setFavorited] = useState(favorites.includes(station?.id));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    setFavorited(favorites.includes(station?.id));
  }, [station, favorites]);
  useEffect(() => {
    if (!user) {
      setFavorited(false);
    }
  }, [user]);

  useEffect(() => {
    (async () => {
      await dispatch(getFavoriteStations());
    })();
  }, [dispatch]);

  const handleFavorite = async () => {
    if (!station.name) {
      return alert("Error Favoriting Station, No Station Selected");
    }
    if (user) {
      if (favorited) {
        await dispatch(deleteFavorite(station));
        await dispatch(getFavoriteStations());
      } else {
        await dispatch(newFavorite(station));
        await dispatch(getFavoriteStations());
      }
    } else {
      alert("Must Be Logged In To Favorite");
    }
  };

  return (
    <>
      {isButton ? (
        <div onClick={handleFavorite} className="station-page-link">
          <span>Favorite </span>
          <i
            className={
              favorited
                ? "favorited-icon fa-solid fa-heart favorite-icon"
                : "not-favorited-icon fa-solid fa-heart favorite-icon"
            }
          ></i>
        </div>
      ) : (
        <div onClick={handleFavorite} className="favorite-icon-only">
          <i
            alt="Click To Favorite"
            className={
              favorited
                ? "favorited-icon fa-solid fa-heart favorite-icon"
                : "not-favorited-icon fa-solid fa-heart favorite-icon"
            }
          ></i>
        </div>
      )}
    </>
  );
};

export default FavoriteButton;
