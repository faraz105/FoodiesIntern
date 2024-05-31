import React , {useState}from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
import  "./headerBuiltin.scss";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import logo from "../../assets/images/logo.svg";
import bell from "../../assets/images/bell.svg";
import fork from "../../assets/images/fork.svg";

const Header = () => {
  const names = [
    'Foodie Gulberg',
    'Foodie Johar Town',
    'Foodie Askari 11',
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch({
      type: LOGOUT,
    });
    navigate("/signin");
    localStorage.removeItem("userData");
  };

  const [restaurantName, setRestaurantName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setRestaurantName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <nav className={classes.headerNav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.navLinks}>
        <div className={classes.notification}>
          <span>3</span> <img src={bell} alt="logo" />
        </div>
        <div className={`${classes.selectDropdown} mainBuiltinStyle`}>
          <FormControl sx={{ m: 1, minWidth: 50 }}>
          {/* <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel> */}
            <Select 
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              displayEmpty
              multiple
              value={restaurantName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select Option</em>;
                }
                if (selected.length === 1) {
                  return selected[0];
                }
                return `${selected[0]}, ...`;
              }}
              startAdornment={<InputAdornment position="start">
              <img
                  src={fork}
                  alt="fork"
                  style={{
                    marginRight: "8px",
                    width: "20px",
                    height: "20px",
                  }}
                />
            </InputAdornment>}
            >
               
                  <MenuItem disabled value="">
                    <em>Select Option</em>
                  </MenuItem>
               {names.map((name) => (
                  <MenuItem key={name} value={name} className="selectBuiltinStyle">
                    <Checkbox checked={restaurantName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                <div className={classes.dropLink}>
                  <Link to="#">None</Link>
                  <Link to="#">All</Link>
                  </div>
            </Select>
          </FormControl>
        </div>
      </div>

      {/* <Box sx={{cursor:"pointer"}} onClick={handlelogout}>Logout</Box> */}
    </nav>
  );
};

export default Header;
