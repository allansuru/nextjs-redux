import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const UserDetailsModal = ({ userId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const user = {}; // Busque os detalhes do usuário com base no userId

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="text-indigo-600 hover:text-indigo-900"
      >
        View Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="User Details"
        className="modal"
      >
        <h2 className="text-lg font-semibold mb-4">User Details</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Other user details */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default UserDetailsModal;
