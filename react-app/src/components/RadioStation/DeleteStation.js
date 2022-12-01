import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteStation } from "../../store/radioStations";

const DeleteStation = ({ station }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async () => {
    await dispatch(deleteStation(station));
    history.push("/stations");
  };

  return (
    <>
      <i className="fa-trash-can fa-regular" onClick={handleDelete}></i>
    </>
  );
};

export default DeleteStation;
