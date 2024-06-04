import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material";
import CustomBackdrop from "../CustomBackdrop/CustomBackdrop";
import module from "./Modal_module.scss";
import { useNavigate } from "react-router-dom";
const Components = ({ open, handleClose }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPassowrd, setConfPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);
  const navigate = useNavigate();
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files)
    if (file) {
      setUserImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setDisplayFile(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUserImage(null);
      setDisplayFile(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });    const dataa = { username, email, roles, date:currentDate };
    setIsPending(true);
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },  
      body: JSON.stringify(dataa),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      handleClose();
    });
  };

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function confirmPasswordFunction() {
    var y = document.getElementById("confirmInput");
    if (y.type === "password") {
      y.type = "text";
    } else {
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
      <form onSubmit={handleSubmit}>
        <Fade in={open}>
          <Box className="parent">
            <div className="header">
              <Typography className="modalLeftName">Add New User</Typography>
              <Typography onClick={handleClose} className="closeButton">
                X
              </Typography>
            </div>
            <div className="parentPersonicon">
              {displayFile ? (
                <img
                  src={displayFile}
                  alt="Selected"
                  width="170px"
                
                  style={{borderRadius: '50%', maxHeight: "170px"}}
                />
              ) : (
                <img
                  src="Images/person_icon.png"
                  alt=""
                  width="160px"
                  className="personIcon"
                />
              )}
              <div>
                <img
                  src="Images/Camera_icon.png"
                  alt=""
                  className="cameraImageStyling"
                />
                <input
                  type="file"
                  className="cameraImageStyling"
                  style={{ opacity: 0.01 }}
                  onChange={handleImageChange}
                />
              </div>
              <div>
            </div>
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
                  value={username}
                  className="textFieldStyling"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                  onChange={(e) => setUserName(e.target.value)}
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
                  value={email}
                  className="textFieldStyling"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={pass}
                  className="textFieldStyling"
                  id="myInput"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                  onChange={(e) => setPass(e.target.value)}
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
                  value={confPassowrd}
                  className="textFieldStyling"
                  id="confirmInput"
                  onFocus={(e) => {
                    e.target.style.borderColor = "#F57E2A";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                  }}
                  onChange={(e) => setConfPassword(e.target.value)}
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
                    value={roles}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#F57E2A";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
                    }}
                    onChange={(e) => {
                      setRoles(e.target.value);
                    }}
                  >
                    <option value="General Manager">General Manager</option>
                    <option value="Sales Person">Sales Person</option>
                    <option value="Order Taker">Order Taker</option>
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
              {!isPending && (
                <Button
                  className="btnAddUsers"
                  type="submit"
                  variant="contained"
                >
                  Add Users
                </Button>
              )}
              {isPending && (
                <Button
                  disabled
                  className="btnAddUsers"
                  type="submit"
                  variant="contained"
                >
                  Adding Users...
                </Button>
              )}
            </div>
          </Box>
        </Fade>
      </form>
    </Modal>
  );
};
export default Components;
