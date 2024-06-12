import React, { useState, useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import profileImg from "../../assets/images/icon.svg";
import dropImg from "../../assets/images/drop.svg";
import acceptImg from "../../assets/images/accept.svg";
import rejectImg from "../../assets/images/reject.svg";
import detailImg from "../../assets/images/detail.svg";
import classes from "./liveorders.module.scss";
import "./liveordersBuiltIn.scss";
import dropdown from "../../assets/images/dropdown.svg";
import lines from "../../assets/images/lines.svg";
import searchicon from "../../assets/images/searchicon.svg";
import { Select, Checkbox, ListItemText, FormControl, OutlinedInput } from '@mui/material';

const Orders = () => {
  const [restaurantName, setRestaurantName] = useState([]); // Define restaurantName state
  const handleChange = (event) => { // Define handleChange function
    setRestaurantName(event.target.value);
  };

  const names = [
    'Foodie Gulberg',
    'Foodie Johar Town',
    'Foodie Askari 11',
  ];

  const ordersData = [
    { name: "James Decor", status: "New"},
    { name: "John Smith", status: "New" },
    { name: "Emily Brown", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "John Smith", status: "New" },
    { name: "Emily Brown", status: "New" },
    { name: "James Decor", status: "New"  },
    { name: "John Smith", status: "New"  },
    { name: "Emily Brown", status: "New"  },
    { name: "James Decor", status: "New" },
    { name: "John Smith", status: "New" },
    { name: "Emily Brown", status: "New"  },
  ];

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleOpenDropdown = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleCloseDropdown = () => {
    setOpenDropdownIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdownIndex !== null) {
        const dropdown = document.getElementById(`dropdown-${openDropdownIndex}`);
        if (dropdown && !dropdown.contains(event.target)) {
          setOpenDropdownIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownIndex]);

  return (
    <div className={classes.tablecontainer}>
      <div className={classes.topbar}>
        <div className={classes.drop}>
          <h4>New Order</h4>
          <div className={`${classes.Dropdown} customdrop`}>
            <FormControl sx={{ m: 1, minWidth: 50 }}>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                displayEmpty
                multiple
                value={restaurantName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} className="selectBuiltinStyle">
                    <Checkbox checked={restaurantName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={classes.topimg}>
          <img src={lines} alt="lines" />
          <img src={searchicon} alt="searchicon" />
        </div>
      </div>
      <ul className={classes.ordersList}>
        {ordersData.map((order, index) => (
          <li key={index} className={classes.orderItem}>
            <div className={classes.orderInfo}  >
              <img src={profileImg} className={classes.profileImg} alt="profile" />
              <div className={classes.orderDetails}>
                <h4 className={classes.orderName}>{order.name}</h4>
                <p className={classes.orderStatus}> <span className={classes.dot}></span> {order.status}</p>
              </div>
            </div> 
            <div className={classes.orderPrice}>
              <div className={classes.orderDetails}>
                <h3 className={classes.orderAmount}>$75.65</h3>
                <p className={classes.orderNumber}>#AB02565</p>
              </div>
              <div className={classes.dropdownWrapper} id={`dropdown-${index}`}>
                <img src={dropImg} className={classes.dropImg} style={{ width: '5px' }} alt="drop" onClick={() => handleOpenDropdown(index)} />
                {openDropdownIndex === index && (
                  <div className={classes.customDropContent}>
                    <div className={classes.dropdownItem} onClick={handleCloseDropdown} style={{ color: '#34A853' }}>
                      <img src={acceptImg} alt="accept" />
                      Accept Order
                    </div>
                    <div className={classes.dropdownItem} onClick={handleCloseDropdown} style={{ color: '#E21D25' }}>
                      <img src={rejectImg} alt="reject" />
                      Reject Order
                    </div>
                    <div className={classes.dropdownItem} onClick={handleCloseDropdown} style={{ color: '#777777' }}>
                      <img src={detailImg} alt="detail" />
                      View Details
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
