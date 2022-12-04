import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditStation from "./EditStation";

function EditStationButton({ station }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="station-page-link"
      >
        <span className="station-page-link-label">Edit </span>
        <i className="fas fa-edit edit-station-button station-page-link-icon"></i>
      </div>

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <EditStation station={station} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
export default EditStationButton;
