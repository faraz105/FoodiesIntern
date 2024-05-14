import React from 'react'
import { Link } from "react-router-dom";
import "./header.scss"
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelogout = () => {
    dispatch({
      type: LOGOUT,
    });
    navigate("/login");
    localStorage.removeItem("userData");
    
  };
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Box sx={{cursor:"pointer"}} onClick={handlelogout}>Logout</Box>
        </li>
      </ul>
    </nav>
  )
}

export default Header