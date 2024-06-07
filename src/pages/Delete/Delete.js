import React, { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CustomBackdrop from "../CustomBackdrop/CustomBackdrop";
import UseFetch from "../UseFetch";
import { useParams } from "react-router-dom";
import Deleteimg from "../../assets/images/DeleteImage.gif";
import Successimg from "../../assets/images/DeleteSuccessfullyImage.gif";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 579,
  height: 444,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: "50px",
  textAlign: "center",
};
const Delete = ({
  openDeleteModal,
  openDelModal,
  handleDeleteClose,
  handleDeleteConfirm,
  openSuccessModal,
}) => {
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
        <Box className="parent" sx={style}>
          <div
            className="header"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "28px",
              border: "none",
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
          {openDelModal && (
            <>
              <img src={Deleteimg} alt="" width="150px" />
              <Typography
                variant="h4"
                style={{
                  fontSize: "28px",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Are You sure you want to Delete this Customer ?
              </Typography>
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
                  Yes, Delete
                </Button>
              </div>
            </>
          )}

          {openSuccessModal && (
            <>
              <img src={Successimg} alt="" width="150px" />
              <Typography
                variant="h4"
                style={{
                  fontSize: "28px",
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Menu deleted Successfully
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default Delete;
