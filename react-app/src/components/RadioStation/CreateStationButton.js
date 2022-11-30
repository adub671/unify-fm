import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateStation from "./CreateStation";

function CreateStationButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <i
        class="fa-solid fa-plus create-station-button"
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
          <CreateStation setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}
export default CreateStationButton;
