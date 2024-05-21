import React from 'react';
import classes from "./Delete.module.scss";
import { TiDelete } from "react-icons/ti";
const Delete = ({text , img}) => {
  return (
    <div className={classes.maindelete}>
    <div className={classes.container}>
      <div className={classes.icon}>
        <TiDelete className={classes.closeicon}/>
      </div>
      <div className={classes.DELIMG}>
        <img src={img} alt="img"/>
        <p className={classes.deltext}>{text}</p>
        <button className={classes.delbtn}>Yes, Delete</button>
      </div>
    </div>
  </div>
  )
}

export default Delete;