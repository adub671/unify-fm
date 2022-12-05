import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateStation from "./CreateStation";

function CreateStationButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className="create-station-button"
      onClick={() => {
        setShowModal(true);
      }}
    >
      <span> Create A Station</span>
      <i className="fa-solid fa-plus create-station-icon"></i>

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <CreateStation setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
export default CreateStationButton;
