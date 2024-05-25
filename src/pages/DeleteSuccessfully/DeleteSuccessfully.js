import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import React from 'react'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 579,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '50px',
    boxShadow: 24,
    textAlign: 'center',
    zIndex: 1
  };
const DeleteSuccessfully = ({deleteText, image} ) => {

  return (
    <div>
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openSuccessModal}
        onClose={handleSuccessClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openSuccessModal}>
        <Box className="parent" sx={style}>
              <div
                className="header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  padding: "28px"               
                }}
              >
                <Typography onClick={handleSuccessClose} style={{color: 'white', background: 'rgb(245, 126, 42)', borderRadius:'50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</Typography>
           </div>
           <img src={image} alt="" width='150px' />
           <Typography variant='h4' style={{fontSize: '28px', fontWeight: 400, textAlign: 'center'}}>{deleteText}</Typography>

          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default DeleteSuccessfully