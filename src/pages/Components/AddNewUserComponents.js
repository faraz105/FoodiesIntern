import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material";
import CustomBackdrop from "../CustomBackdrop/CustomBackdrop";
import module from "./Modal_module.scss";
const Components = ({ open, handleClose }) => {
 function myFunction() {
    var x = document.getElementById("myInput");
    if(x.type === "password"){
      x.type ="text";
    }else{
      x.type = "password";
    }

  }
  function confirmPasswordFunction(){
    var y = document.getElementById("confirmInput");
    if(y.type === "password"){
      y.type ="text";
    }else{
      y.type = "password";
    }
  }
  return (
    <Modal
      className="add-new-model"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: CustomBackdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <form>
        <Fade in={open}>
          <Box className="parent">
            <div className="header">
              <Typography className="modalLeftName">Add New User</Typography>
              <Typography onClick={handleClose} className="closeButton">
                X
              </Typography>
            </div>
            <div className="parentPersonicon">
              <img
                src="Images/person_icon.png"
                alt=""
                width="160px"
                className="personIcon"
              />
              <img
                src="Images/Camera_icon.png"
                alt=""
                className="cameraImageStyling"
              />
            </div>
            <div className="body">
              <div className="innerinput">
                <label htmlFor="" className="labelStyling">
                  User Name
                </label>
                <br />
                <br />
                <input
                  type="text"
                  name="name"
                  className="textFieldStyling"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                />
              </div>
              <div className="innerinput">
                <label htmlFor="" className="labelStyling">
                  Email
                </label>
                <br />
                <br />
                <input
                  type="email"
                  name="email"
                  className="textFieldStyling"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                />
              </div>

              <div className="innerinput" style={{ position: "relative" }}>
                <label htmlFor="" className="labelStyling">
                  Enter Password
                </label>
                <br />
                <br />
                <input
                  type="password"
                  name="password"
                  className="textFieldStyling"
                  id="myInput"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                />
                <img
                  src="/Images/passwordHiddenIcon.png"
                  alt=""
                  width="25px"
                  className="eyeIconStyling"
                  onClick={myFunction}
                />
              </div>

              <div className="innerinput" style={{ position: "relative" }}>
                <label htmlFor="" className="labelStyling">
                  Confirm Password
                </label>
                <br />
                <br />
                <input
                  type="password"
                  name="confirmPassword"
                  className="textFieldStyling"
                  id="confirmInput"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                />
                <img
                  src="/Images/passwordHiddenIcon.png"
                  alt=""
                  width="25px"
                  className="eyeIconStyling"
                  onClick={confirmPasswordFunction}
                />
              </div>
            </div>
            <div className="dropdownSelect">
              <div className="innerinput">
                <label htmlFor="" className="labelStyling">
                  Role
                </label>
                <br />
                <br />
                <div>
                  <select
                    className="textFieldStyling"
                    onFocus={(e) => {
                      e.target.style.borderColor = "#F57E2A";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                    }}
                  >
                    <option value="1">General Manager</option>
                    <option value="2">Sales Person</option>
                    <option value="3">Order Taker</option>
                  </select>
                </div>
              </div>
              <div className="innerinput">
                <label htmlFor="" className="labelStyling">
                  Select Store
                </label>
                <br />
                <br />
                <select
                  className="textFieldStyling"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                >
                  <option value="1">General Manager</option>
                  <option value="2">Sales Person</option>
                  <option value="3">Order Taker</option>
                </select>
              </div>
            </div>
            <div className="btnParent">
              <Button className="btnAddUsers" type="submit" variant="contained">
                Add Users
              </Button>
            </div>
          </Box>
        </Fade>
      </form>
    </Modal>
  );
};
export default Components;
