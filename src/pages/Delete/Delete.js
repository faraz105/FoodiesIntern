import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomBackdrop from "../CustomBackdrop/CustomBackdrop";
// import { users } from "../ManageUser/data/db";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 579,
  height: 444,
  bgcolor: "background.paper",
  border: 'none',
  borderRadius: "50px",
  textAlign: "center"
};
const Delete = ({ openDeleteModal, handleDeleteClose, textButton }) => {
  const [image, setImage] = useState("/Images/DeleteImage.gif");
  const [deleteText, setdeleteText] = useState(
    "Are You sure you want to Delete this Customer ?"
  );
  const [isDeleted, setIsDeleted] = useState(false);
  useEffect(() => {
    if (openDeleteModal) {
      setImage("/Images/DeleteImage.gif");
      setdeleteText("Are you sure you want to delete this customer?");
      setIsDeleted(false);
    }
  }, [openDeleteModal]);

  const handleDeleteConfirm = (userId) => {
    setImage("/Images/DeleteSuccessfullyImage.gif");
    setdeleteText("Menu Deleted Successfully!");
    setIsDeleted(true);

  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openDeleteModal}
        onClose={handleDeleteClose}
        closeAfterTransition
        slots={{ backdrop: CustomBackdrop }}
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
                padding: "28px",
                border: 'none'
              }}
            >
              <Typography
                onClick={handleDeleteClose}
                style={{
                  color: "white",
                  background: "rgb(245, 126, 42)",
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                X
              </Typography>
            </div>
            <img src={image} alt="" width="150px" />
            <Typography
              variant="h4"
              style={{ fontSize: "28px", fontWeight: 400, textAlign: "center" }}
            >
              {deleteText}
            </Typography>
            {!isDeleted && (
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
                    fontSize: "16px",
                    fontWeight: 400,
                  }}
                  onClick={handleDeleteConfirm}
                >
                  {textButton}
                </Button>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Delete;
