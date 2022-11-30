import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditStation from "./EditStation";

function EditStationButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <i
        class="fas fa-edit edit-station-button"
        onClick={() => {
          setShowModal(true);
        }}
      ></i>

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <EditStation setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
export default EditStationButton;
