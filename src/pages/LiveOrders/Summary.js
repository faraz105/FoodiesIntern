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
// import Button from "../../components/shared/Button";
import rider from "../../assets/images/rider.svg";
import dateIcon from "../../assets/images/date.svg";
import photo from "../../assets/images/photo.svg";
import cash from "../../assets/images/cash.svg"; 
import search from "../../assets/images/search.svg";
import CloseIcon from '@mui/icons-material/Close';

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
  
  const totalAmount = customers.reduce((acc, customer) => acc + parseFloat(customer.amount.replace('$', '')), 0);
  
  return (
   
    <div className={`${classes.mainTab} customstyle`}>
     
       
        <div className={classes.header}>
          <h4 className={classes.title}>Order Summary</h4>
         
          <div className={classes.iconContainer}>
           <div className={classes.squareButton}>
           <img src={search} alt="Rider" /> 
          </div>
         <div className={classes.circleButton}>
           <CloseIcon fontSize="small" />
         </div>
        </div>


        </div>

        <hr style={{ width: '100%', margin: 0, padding: 0 }} />

        <div className={classes.orderDetails}>
        <div className={classes.orderInfo}>
          <div className={classes.orderHeader}>
            <div className={classes.orderTitleContainer}>
              <h4 className={classes.orderTitle}>Item Order</h4>
              <span className={classes.orderId}>#AB02565</span>
            </div>
        
            <div className={classes.orderActions}>
              <button className={classes.btn1}>
                Cancel
              </button>
              <button className={classes.btn2} >
                Accept
              </button>
            </div>
          </div>

        
          <div className={classes.orderStatus}>
            <button className={classes.btn3} >
            <span className={classes.dot}></span> New
            </button>
            <button className={classes.btn4}>
              <img src={cash} alt="Cash" /> Cash
            </button>
          </div>
       
          <div className={classes.orderMeta}>
            <div className={classes.metaItem}>
              <img src={dateIcon} style={{ height: '30px', width: '30px' }} alt="Date" /> 
              <div className={classes.metaText}>
                <h6>Order Date</h6>
                <p className={classes.metaText}>27, October, 2023</p>
              </div>
            </div>
            <div className={classes.metaItem}>
              <img src={rider} style={{ height: '30px', width: '30px' }} alt="Rider" /> 
              <div className={classes.metaText}>
                <h6>Estimated Delivery Time</h6>
                <p>12:45</p>
              </div>
            </div>

          </div>
          </div>

          <div className={classes.billingInfo}>
          <div className={classes.billingDetails}>
            <p>Billing to</p>
            <img src={photo} alt="Rider" /> 
            <h5>James Decor</h5>
            <p>2756 Mapview Drive South</p>
            <p>Fulton Tennessee - 38257</p>
          </div>
          </div>
          </div>
       

          <div className={`${classes.hd} od`}>
       <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.columnHeader} style={{color:'#F57E2A'}}>Items & Description</TableCell>
            <TableCell className={classes.columnHeader} style={{color:'#F57E2A'}}>Status</TableCell>
            <TableCell className={classes.columnHeader} style={{color:'#F57E2A'}}>Shipped</TableCell>
            <TableCell className={classes.columnHeader} style={{color:'#F57E2A'}}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, index) => (
            <TableRow key={customer.id} className={classes.tableRow}>
              <TableCell sx={style} className={classes.cell}>
                <div className={classes.qw}>
                  <img src={dish} alt="Dish" />
                  <div className={classes.kh}>
                    <div>{customer.Name}</div>
                    <div>{customer.Desc}</div>
                    
                    <div className={classes.From}>{customer.From}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell sx={style} className={classes.cell}>
                <img src={order} alt="Order" />
              </TableCell>
              <TableCell sx={style} className={classes.cell}>
                <img src={order} alt="Order" />
              </TableCell>
              <TableCell sx={style} className={classes.cell}>{customer.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow className="divider">
            <TableCell colSpan={4}>
              <hr />
            </TableCell>
          </TableRow>
          <TableRow className="secondlast">
            <TableCell colSpan={3} className={classes.totalLabel}>Total</TableCell>
            <TableCell className={classes.totalAmount}>${totalAmount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4} align="center">
              <button className={classes.btn5}>
                Mark as Complete
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
      </div>
   
  );
};

export default Summary;