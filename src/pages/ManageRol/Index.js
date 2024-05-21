import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IconButton, Popover, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import classes from "./rol.module.scss";
import Add from "../../assets/images/Add.png";
import vector from "../../assets/images/vector.png";
import Addrole from '../../components/Addrole/Addrole';
import ModelFoodie from '../../components/Modal/Model';
import { IoSearchSharp } from "react-icons/io5";
const Rol = () => {
  const [CustomizeModal, setCustomizeModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([
    { name: "General Manager", age: 19, gender: "Male", id: "01" },
    { name: "Order Taker", age: 19, gender: "Female", id: "02" },
    { name: "Order Taker", age: 25, gender: "Male", id: "03" },
    { name: "Order Taker", age: 25, gender: "Male", id: "04" },
    { name: "Order Taker", age: 25, gender: "Male", id: "05" },
    { name: "Order Taker", age: 25, gender: "Male", id: "06" },
    { name: "Order Taker", age: 25, gender: "Male", id: "07" },
    { name: "Order Taker", age: 25, gender: "Male", id: "08" },
    { name: "Chef", age: 25, gender: "Male", id: "09" },
    { name: "Chef", age: 25, gender: "Male", id: "10" },
    { name: "Chef", age: 25, gender: "Male", id: "11" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [editedItem, setEditedItem] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenSecond = () => {
    console.log("sds");
    setCustomizeModal(true);
    setOpen(false);
  };

  const customize = () => {
    setCustomizeModal(true);
    setOpen(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditedItem({ ...item });
  };

  const handleDelete = (id) => {
    const newData = data.filter(item => item.id !== id);
    setData(newData);
  };

  const handleSave = (id) => {
    const newData = data.map(item =>
      item.id === id ? editedItem : item
    );
    setData(newData);
    setEditingId(null);
    setEditedItem(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditedItem(null);
  };

  const handleChange = (e, key) => {
    const value = e.target.value;
    setEditedItem(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const openCalendar = Boolean(anchorEl);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <div className={classes.mainmanagrol}>
        <div className={classes.mainrole}>
          <div className={classes.mainrolecontainer}>
            <div className={classes.role}>
              <h3>Role</h3>
              <p>Total 101</p>
            </div>
            <div className={classes.rolesearch}>
              <input
                type="text"
                placeholder="Search permission"
                className={classes.input}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <IoSearchSharp className={classes.icon} />
            </div>
          </div>
          <div className={classes.rolebuttons}>
            <button className={classes.rolebtn} onClick={handleOpen}>
              <img src={Add} alt='ADD' />Add New Role
            </button>
            <IconButton className={classes.datebtn} onClick={handleCalendarOpen}>
              <img src={vector} alt='vector' />11-01-2023
            </IconButton>
            <div className={classes.to}>
              <p>To</p>
            </div>
            <IconButton className={classes.datebtn} onClick={handleCalendarOpen}>
              <img src={vector} alt='vector' />11-01-2023
            </IconButton>
            <Popover
              open={openCalendar}
              anchorEl={anchorEl}
              onClose={handleCalendarClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                    handleCalendarClose();
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Popover>
          </div>
        </div>
        <div className={classes.wrapper}>
          <table>
            <thead>
              <tr>
                <th>hash</th>
                <th>Created at</th>
                <th>Type</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>06-11-2023</td>
                  <td>
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editedItem.name}
                        onChange={(e) => handleChange(e, 'name')}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>Lorem Ipsum is simply dummy text of the printing and...</td>
                  <td style={{ display: "flex", gap: "8px" }}>
                    {editingId === item.id ? (
                      <>
                        <button className={classes.save} onClick={() => handleSave(item.id)}>Save</button>
                        <button className={classes.cancel} onClick={handleCancel}>Cancel</button>
                      </>
                    ) : (
                      <div className={classes.icon} onClick={() => handleEdit(item)}>
                        <FaRegEdit className={classes.edit} />
                      </div>
                    )}
                    <div className={classes.icon} onClick={() => handleDelete(item.id)}>
                      <MdDelete className={classes.del} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <ModelFoodie isOpen={open} closeModal={handleClose}>
          <Addrole click={handleOpenSecond} closeModal={handleClose} />
        </ModelFoodie>
      </div>
    </>
  );
}

export default Rol;

