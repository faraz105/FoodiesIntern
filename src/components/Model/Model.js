import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import classes from './Model.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};

const Model = ({ isOpen, closeModal, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.container}>
          <h3>Heading</h3>
          <button onClick={closeModal}>Close</button>
        </div>
        {children}
      </Box>
    </Modal>
  );
};

export default Model;