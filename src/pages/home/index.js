import React, { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';
import classes from "./dashboard.module.scss"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.mainDashboard}>
    <div className={classes.heading}>
      <h1>Dashboard</h1>
      <p>Hi, Hassan. Welcome back  to Foodie!</p>
      </div>
      <Grid container spacing={1}>
          <Grid item lg={6}></Grid>
      </Grid>

     
    </div>
  );
};

export default Home;
