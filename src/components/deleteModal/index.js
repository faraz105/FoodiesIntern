import React, { useState } from 'react';
import BasicModal from "../basicmodal/index.js";
import Button from "../Button/index";
import classes from "./deleteModal.module.scss"; 
import recycle from "../../assets/images/delete_icon.gif";
import success from "../../assets/images/success_icon.gif";

const Delete = ({isOpen , onClose, handleConfirmDelete , openConfirmDelete }) => {

  return (
    <>
      <BasicModal isOpen={isOpen} closeModal={onClose}>
        <div className={classes.modalContent}>
          <img src={recycle} className={classes.recycle} alt="recyclebin" />
          <h1 className={classes.heading}>Are you sure you want to delete this customer?</h1>
          <Button
            onClick={handleConfirmDelete}
            label="Yes, Delete"
          />
        </div>
      </BasicModal>

    
      <BasicModal isOpen={openConfirmDelete} closeModal={onClose}>
        <div className={classes.modalContent}>
          <img src={success} className={classes.success} alt="success" />
          <h2 className={classes.heading}>Customer deleted successfully!</h2>
        </div>
      </BasicModal>
    </>
  );
};

export default Delete;
