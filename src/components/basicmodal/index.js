import { IoMdClose } from "react-icons/io";
import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "./basicModal.scss";

const BasicModal = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={closeModal} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modalbox">
        <button className="closeButton" onClick={closeModal}>
          <IoMdClose size={24} />
        </button>
        {children}
      </Box>
    </Modal>
  );
};

export default BasicModal;
