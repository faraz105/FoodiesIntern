import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import classes from "./Modal.module.scss";


const ModelFoodie = ({isOpen, closeModal, children}) => {

  return (
   
   
    <Modal
       open={isOpen}
       onClose={closeModal} 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={classes.modalbox}>
        {/* <button onClick={closeModal} className={classes.closeButtonStyle}>
          <TiDelete size={24} />
        </button> */}
        {children}
      </Box>
    </Modal>
  
  )
}

export default ModelFoodie;
