
import React from 'react';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
// import CustomBackdrop from '../CustomBackdrop/CustomBackdrop';

const ModalWrapper = ({ open, handleClose, children }) => {
  return (
    <Modal
      className="add-new-model"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition  
      // slots={{ backdrop: CustomBackdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className="parent">{children}</Box>
      </Fade>
    </Modal>
  );
};

export default ModalWrapper;