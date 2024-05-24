import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteSuccessfully from '../DeleteSuccessfully/DeleteSuccessfully';
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
  textAlign: 'center'
//   p: 4,
};
const Delete = ({openDeleteModal, handleDeleteClose, textButton}) => {
 const [openmodal, setOpenModal] = useState(false);
 const openSuccessModal = ()=>{
    setOpenModal(true)
 }
 const handleDeleteClose =()=>{
    setOpenModal(false)
 }
  return (
    <div>
 <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteModal}
        onClose={handleDeleteClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openDeleteModal}>
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
                <Typography onClick={handleDeleteClose} style={{color: 'white', background: 'rgb(245, 126, 42)', borderRadius:'50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</Typography>
           </div>
           <img src="/Images/DeleteImage.gif" alt="" width='150px' />
           <Typography variant='h4' style={{fontSize: '28px', fontWeight: 400, textAlign: 'center'}}>Are You sure you want to Delete this Customer ?</Typography>
           <div style={{ textAlign: "center" }}>
                <Button
                type="submit"
                  variant="contained"
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "48px",
                    color: "white",
                    background: "rgb(245, 126, 42)",
                    margin: "40px 0px",
                    fontSize: '16px',
                    fontWeight: 400
                  }}
                  onClick={openSuccessModal}
                >
                  Yes Delete
                </Button>
              </div>
              <DeleteSuccessfully openSuccessModal={openSuccessModal} handleDeleteClose={handleDeleteClose} />
          </Box>
        </Fade>
      </Modal>
        
    </div>
   
  )
}

export default Delete