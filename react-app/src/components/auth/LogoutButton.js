import React from "react";
import { useDispatch } from "react-redux";
import { getFavoriteStations } from "../../store/favoriteStations";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    await dispatch(getFavoriteStations());
  };

  return (
    <div nav-link onClick={onLogout}>
      Logout
    </div>
  );
};

export default LogoutButton;
