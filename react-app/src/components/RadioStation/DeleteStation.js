import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { deleteStation } from "../../store/radioStations";

const DeleteStation = ({ station }) => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const handleDelete = async () => {
    await dispatch(deleteStation(station));
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/stations" />;
  }

  return (
    <>
      <i className="fa-trash-can fa-regular" onClick={handleDelete}></i>
    </>
  );
};

export default DeleteStation;
