import React from 'react';
import ModalWrapper from '../../Modal Wrapper/ModalWrapper';
import UserForm from '../UserFormComponent/UserForm';
const ParentModalComponent = ({open, handleClose, onSubmit, initialValues, textButton}) => {

  return (
    <div>
       <ModalWrapper open={open} handleClose={handleClose}>
      <UserForm
        initialValues={initialValues}
        onSubmit={onSubmit}
        textButton={textButton}
        handleClose={handleClose}
      />
    </ModalWrapper>     
  </div>
  )
}

export default ParentModalComponent