import React from 'react';
import profile from "../../assets/images/icon.svg";
import classes from "./liveorders.module.scss";

const Orders = () => {

  const ordersData = [
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
    { name: "James Decor", status: "New" },
   
  ];

  return (
    <div className={classes.tablecontainer}>
      <ul className={classes.ordersList}>
        {ordersData.map((order, index) => (
          <li key={index} className={classes.orderItem}>
            <img src={profile} className={classes.profile} alt="profile" />
            <div className={classes.x}>
              <h6>{order.name}</h6>
              <div className={classes.a}>
                <span className={classes.dot}></span>
                <h6>{order.status}</h6>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
