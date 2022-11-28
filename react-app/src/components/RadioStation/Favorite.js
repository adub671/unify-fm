import React, { useState } from "react";

const FavoriteButton = ({ station }) => {
  const [favorited, setFavorited] = useState(false);

  const handleFavorite = async () => {
    if (favorited) {
      setFavorited(false);
      await fetch(`/api/favorite/${station?.id}`, {
        method: "DELETE",
      });
    } else {
      setFavorited(true);
      await fetch(`/api/favorite/${station?.id}`, {
        method: "POST",
      });
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
