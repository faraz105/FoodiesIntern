import React , {useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import "./adminLayout.scss";

const AdminLayout = () => {
  const [count , setCount]= useState(true)
  const handleArrow = () =>{
    setCount(!count)
  }
  return (
    <>
      <div className= "mainSection">
          <div className="mainHeader">  
            <Header />
          </div>
        <div className={`mainSidebarContent ${!count ? "remMar" : ""}`}>
            <div className={ count ? "mainSidebar" : "mainSidebar slideOff"} >
              {/* <div className="arrow" onClick={handleArrow}>→</div> */}
              <Sidebar count={count} />
            </div>
            <div className="mainContent">
              <Outlet />
            </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
