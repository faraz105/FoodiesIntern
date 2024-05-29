import React, { useState } from 'react';
import deleteIcon from "../../assets/images/del.svg";
import BasicModal from "../basicmodal/index.js";
import Button from "../Button/index";
import classes from "./deleteModal.module.scss"; 
import recycle from "../../assets/images/delete_icon.gif";
import success from "../../assets/images/success_icon.gif";

const Delete = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDeleteModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  return (
    <>
      <img
        src={deleteIcon}
        onClick={handleDelete}
        alt="delete"
        className={classes.deleteIcon} 
      />

      <BasicModal isOpen={isDeleteModalOpen} closeModal={() => setIsDeleteModalOpen(false)}>
        <div className={classes.modalContent}>
          <img src={recycle} className={classes.recycle} alt="recyclebin" />
          <h1 className={classes.heading}>Are you sure you want to delete this customer?</h1>
          <Button
            onClick={handleConfirmDelete}
            label="Yes, Delete"
          />
        </div>
      </BasicModal>

      <BasicModal isOpen={isConfirmModalOpen} closeModal={() => setIsConfirmModalOpen(false)}>
        <div className={classes.modalContent}>
        <img src={success} className={classes.success} alt="success" />
          <h2 className={classes.heading}>Customer deleted successfully!</h2>
        </div>
      </BasicModal>
    </>
  );
};

export default Delete;
