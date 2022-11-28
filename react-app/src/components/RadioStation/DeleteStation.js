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
      <i className="fa-trash-can fa-regular" onClick={handleDelete}></i>
    </>
  );
};

export default DeleteStation;
