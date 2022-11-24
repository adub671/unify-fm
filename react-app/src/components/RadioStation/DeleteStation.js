import React from "react";
import { useDispatch } from "react-redux";
import { deleteStation } from "../../store/radioStations";

const DeleteStation = ({ station }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await dispatch(deleteStation(station));
  };
  return (
    <>
      <button onClick={handleDelete}>Delete Station</button>
    </>
  );
};

export default DeleteStation;
