import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import classes from "./liveorders.module.scss";
import order from "../../assets/images/order.svg"; 
import dish from "../../assets/images/dish.svg";
import "./liveordersBuiltIn.scss";

const Summary = () => {
  const style = {
    borderBottom: "none !important",
  };
  const customers = [
    {
      Name: "Chicken Karchi",
      Desc: "Category: Main Course Chicken Dishes",
      From: "From $8.62",
      amount: "$50",
    },
    {
      Name: "Paratha Roll",
      Desc: "Category: Main Course Chicken Dishes",
      From: "From $8.62",
      amount: "$75",
    },
    {
      Name: "Fresh Naan",
      Desc: "Category: Main Course Chicken Dishes",
      From: "From $8.62",
      amount: "$100",
    },
    {
      Name: "Fresh Naan",
      Desc: "Category: Main Course Chicken Dishes",
      From: "From $8.62",
      amount: "$100",
    },
    {
      Name: "Fresh Naan",
      Desc: "Category: Main Course Chicken Dishes",
      From: "From $8.62",
      amount: "$100",
    },
  ];
  
  return (
    <div className={classes.wrappercontainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.columnHeader}>Items & Description</TableCell>
            <TableCell className={classes.columnHeader}>Status</TableCell>
            <TableCell className={classes.columnHeader}>Shipped</TableCell>
            <TableCell className={classes.columnHeader}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={index}>
              <TableCell className={classes.cell}>
                <div className={classes.qw}>
                  <img src={dish} alt="Dish" />
                  <div className={classes.kh}>
                    <div>{customer.Name}</div>
                    <div>{customer.Desc}</div>
                    <div>{customer.From}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className={classes.cell}>
                <img src={order} alt="Order" />
              </TableCell>
              <TableCell className={classes.cell}>
                <img src={order} alt="Order" />
              </TableCell>
              <TableCell className={classes.cell}>{customer.amount}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Summary;
