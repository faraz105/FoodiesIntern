import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomBackdrop from '../CustomBackdrop/CustomBackdrop';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 995,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  borderRadius: "40px",


};

const PasswordChangeComponent = ({openLockModal, handleLockClose, textButton}) => {
  return (
<Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openLockModal}
          onClose={handleLockClose}
          closeAfterTransition
          slots={{ backdrop: CustomBackdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
        <form>
          <Fade in={openLockModal}>
            <Box className="parent" sx={style}>
              <div
                className="header"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px",
                  borderBottom: '1px solid #D1D1D1'
                }}
              >
                <Typography style={{ fontSize: 20, fontWeight: 400}}>Change Password</Typography>
                <Typography onClick={handleLockClose} style={{color: 'white', background: 'rgb(245, 126, 42)', borderRadius:'50%', width: 30, height: 30, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>X</Typography>
              </div>
              <div style={{ position: "relative", textAlign: "center", margin: '20px 0'}}>
                <img src='Images/person_icon.png' alt="" width="160px" style={{cursor: 'pointer'}}/>
                <img
                  src='Images/Camera_icon.png'
                  alt=""
                  style={{
                    position: "absolute",
                    background: "rgb(245, 126, 42)",
                    width: "41.8px",
                    height: "41.8px",
                    padding: "5px",
                    borderRadius: "50%",
                    top: "135px",
                    left: "545px",
                    cursor: 'pointer'
                  }}
                />
              </div>
              <div
                className="body"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 5px",
                  flexWrap: "wrap",
                  gap: "15px",
                  padding: '0px 38px'
                }} 
              >
                  <div className="innerinput" style={{position: 'relative'}} >
                  <label htmlFor="" style={{fontSize: 20, fontWeight: 400, lineHeight: '25.3px'}}>Enter Password</label>
                  <br /><br />
                  <input
                    type="password"
                    name="password"
                    style={{
                      width: "100%", 
                      height: 54, 
                      borderRadius: 48,  
                      marginBottom: '10px', 
                      border: "1px solid var(--light-gray, #CDCDCD)",  
                      paddingLeft: '20px', 
                      paddingRight: '50px',
                      outline: 'none'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#F57E2A'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--light-gray, #CDCDCD)'; 
                  }}
                  />
                  <img src="/Images/passwordHiddenIcon.png" alt="" width= '25px' style={{position: 'absolute', left: '410px', top: '65px', cursor: 'pointer' }}/>
                </div>

                <div className="innerinput" style={{position: 'relative'}} >
                  <label htmlFor="" style={{fontSize: 20, fontWeight: 400, lineHeight: '25.3px'}}>Confirm Password</label>
                  <br /><br />
                  <input
                    type="password"
                    style={{ width: "100%", height: 54, borderRadius: 48, marginBottom: '10px', border: "1px solid var(--light-gray, #CDCDCD)",  paddingLeft: '20px', paddingRight: '50px', outline: 'none'  }}
                    onFocus={(e) => { e.target.style.borderColor = '#F57E2A'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--light-gray, #CDCDCD)'; 
                  }}
                   />
                  <img src="/Images/passwordHiddenIcon.png" alt="" width= '25px' style={{position: 'absolute', left: '410px', top: '65px', cursor: 'pointer' }}/>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0px 5px",
                    flexWrap: "wrap",
                    gap: "15px",
                    padding: '0px 38px'
        
                }}
              >
                </div>
          
              <div style={{ textAlign: "center" }}>
                <Button
                type="submit"
                  variant="contained"
                  style={{
                    width: "350px",
                    height: "45px",
                    borderRadius: "16px",
                    color: "white",
                    background: "rgb(245, 126, 42)",
                    margin: "40px 0px"
                  }}
                >
                  {textButton}
                </Button>
              </div>
            </Box>
          </Fade>
          </form>
        </Modal>

  )
}

export default PasswordChangeComponent