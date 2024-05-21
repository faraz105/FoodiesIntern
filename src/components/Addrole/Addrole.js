import React, { useState } from 'react';
import classes from "./Addrole.module.scss";
import { TiDelete } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import Customize from '../../components/Customizepermission/Customize';
import Delete from "../../components/Delete/Delete";

const Addrole = ({ closeModal }) => {
  const [formCust1, setFormCust1] = useState(true);
  const [formCust2, setFormCust2] = useState(false);
  const [formCust3, setFormCust3] = useState(false);

  const [roleType, setRoleType] = useState('');
  const [description, setDescription] = useState('');

  const handleForm = () => {
    setFormCust1(false);
    setFormCust2(true);
    setFormCust3(false);
  };

  const handleSave = () => {
    // Handle the save operation (e.g., send data to a server or update state)
    const newRole = {
      roleType,
      description,
    };
    console.log('Saving new role:', newRole);
    // Optionally, close the modal after saving
    closeModal();
  };

  return (
    <>
      <div className={classes.mainAddrole}>
        <div className={classes.Addroleheading}>
          <p>Add New Role</p>
          <button onClick={closeModal} className={classes.icon}>
            <TiDelete size={24} />
          </button>
        </div>
        {formCust1 && (
          <>
            <form className={classes.Addroleform}>
              <div className={classes.Addroletyperole}>
                <label>Enter Role Type</label>
                <input
                  type="text"
                  placeholder="Enter Text"
                  className={classes.Addroleinput}
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value)}
                />
              </div>
              <div className={classes.Addroletyperole}>
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Enter Description"
                  className={classes.Addroleinput}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
            <div className={classes.Addroleconfirm}>
              <button className={classes.Addroleconfirmbtn} onClick={handleForm}>
                Customize Permissions
                <FaArrowRightLong className="arrow" />
              </button>
            </div>
            <div className={classes.Addrolesave}>
              <button className={classes.Addrolesavebtn} onClick={handleSave}>
                Save Changes!
              </button>
            </div>
          </>
        )}
        {formCust2 && <Customize />}
        {formCust3 && <Delete />}
      </div>
      <div></div>
    </>
  );
};

export default Addrole;