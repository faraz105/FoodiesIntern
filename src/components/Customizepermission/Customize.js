import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import classes from "./customize.module.scss";
import { styled } from '@mui/material/styles';

import Switch from '@mui/material/Switch';
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from "@mui/material/Checkbox";
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

const Customize = () => {

  const data = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Orders",
      link: "/dashboard",
    },
    {
      name: "Items",
      link: "/dashboard",
    },
    {
      name: "Branches",
      link: "/dashboard",
    },
    {
      name: "Customers",
      link: "/dashboard",
    },
    {
      name: "Settings",
      link: "/dashboard",
    },
    {
      name: "Sign Out",
      link: "/dashboard",
    },
  ];
  return (
    <>
      <div className={classes.main}>
        <div className={classes.maincustomize}>
          <div className={classes.customizenavlinks}>
            {data.map((item, index) => (
              <ul key={index}>
                <li>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              </ul>
            ))}
            ;
          </div>
          <div className={classes.customize}>
            <div className={classes.customizeselect}>
              <h3>Select All Group Permissions</h3><FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
       
      />
            </div>
            <div className={classes.mainPermission}>
              <div className={classes.permisioncontainer}>
                <div className={classes.permisionselect}>
                  <p>Select All</p>
                </div>
                <div className={classes.permisionall}>
                  <input
                    type="text"
                    placeholder="search permission"
                    className={classes.input}
                  />
                  <IoSearchSharp className={classes.Icon} />
                </div>
              </div>
              <div className={classes.permisionDash}>
                <FormControlLabel control={<Checkbox />} />
                <p>Dashboard.nav</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btn}>
          <button className={classes.btns}>button</button>
        </div>
      </div>
    </>
  );
};

export default Customize;
