import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomBackdrop from '../CustomBackdrop/CustomBackdrop';
import LockModule from './Lock_Module.scss';

const PasswordChangeComponent = ({openLockModal, handleLockClose}) => {
  function showPasswordInfo(){
    let password = document.getElementById("passwordInfo");
    if(password.type === 'password'){
      password.type = 'text'
    }else{
      password.type = 'password'
    }

  } 
  return (
<Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={openLockModal}
          onClose={handleLockClose}
          closeAfterTransitionz
          slots={{ backdrop: CustomBackdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
        <form>
          <Fade in={openLockModal}>
            <Box className="parentLockModal" >
              <div
                className="headerLock"
                
              >
                <Typography className='modalLeftNameLock' >Change Password</Typography>
                <Typography onClick={handleLockClose} className='closeButtonLock' >X</Typography>
              </div>
              <div className='personAndCameraParentLock'>
                <img src='Images/person_icon.png' alt="" width="160px" className='personIconLock'/>
                <img
                  src='Images/Camera_icon.png'
                  alt=""
                  className='cameraIconLock'
                />
              </div>
              <div
                className="bodyLock"
              >
                  <div className="innerinput" style={{position: 'relative'}} >
                  <label htmlFor="" className='labelStylingLock'>Enter Password</label>
                  <br /><br />
                  <input
                    type="password"
                    name="password"
                    className='textFieldStylingLock'
                    id='passwordInfo'
                    onFocus={(e) => { e.target.style.borderColor = '#F57E2A'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--light-gray, #CDCDCD)'; 
                  }}
                  />
                  <img src="/Images/passwordHiddenIcon.png" alt="" width= '25px' className='eyeIconStylingLock' onClick={showPasswordInfo}/>
                </div>

                <div className="innerinput" style={{position: 'relative'}} >
                  <label htmlFor="" className='labelStylingLock'>Confirm Password</label>
                  <br /><br />
                  <input
                    type="password"
                    className='textFieldStylingLock'
                    onFocus={(e) => { e.target.style.borderColor = '#F57E2A'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--light-gray, #CDCDCD)'; 
                  }}
                   />
                  <img src="/Images/passwordHiddenIcon.png" alt="" width= '25px' className='eyeIconStylingLock'/>
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
          
              <div className='btnParentLock'>
                <Button
                type="submit"
                  variant="contained"
                  className='btnPassword'
                >
                  Save Changes
                </Button>
              </div>
            </Box>
          </Fade>
          </form>
        </Modal>

  )
}

export default PasswordChangeComponent