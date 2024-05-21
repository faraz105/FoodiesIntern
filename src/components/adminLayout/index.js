import React , {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import classes from "./adminLayout.module.scss";

const AdminLayout = () => {
  const [count , setCount]= useState(true)
  const handleArrow = () =>{
    setCount(!count)
  }
  return (
    <>
      <div className={classes.mainLayoutSection}>
          <div className={classes.mainHeader}>  
            <Header />
          </div>
        <div className={classes.mainSidebarContent}>
            <div className={classes.mainSidebar} >
              {/* <div className={classes.arrow" onClick={handleArrow}>→</div> */}
              <Sidebar count={count} />
            </div>
            <div className={classes.mainContent}>
              <Outlet />
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
