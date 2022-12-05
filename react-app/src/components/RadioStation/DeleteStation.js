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
      <div className="station-page-link" onClick={handleDelete}>
        <span className="station-page-link-label">Delete </span>
        <i className="fa-trash-can fa-regular"></i>
      </div>
    </>
  );
};

export default DeleteStation;
