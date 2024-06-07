import React, { useState, useEffect } from "react";
import ReusableTable from "../../components/shared/resuabletable";
import Delete from "../../components/shared/deleteModal";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import classes from "./managecustomer.module.scss";
import "./managecustomerBuiltin.scss"
import SearchIcon from '@mui/icons-material/Search';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [customersDeep, setCustomersDeep] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDelete, setOpenDelete] = useState(false);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      try {
      const rest = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await rest.json();
      // console.log(data,"data")
      setCustomers(data);
      setCustomersDeep(data);
    } catch (error){
      setError("Failed to fetch data. Please try again later.");
    }
    
  };
  handleData();
 }, []);

  // useEffect(() => {
  //   const handleData = async () => {
  //     try {
  //       const rest = await fetch("https://jsonplaceholder.typicode.com/users");
  //       const data = await rest.json();
  //       console.log(data, "data");
  //       setCustomers(data);
  //       setCustomersDeep(data);
        
  //     } catch (error) {
  //       setError("Failed to fetch data. Please try again later.");
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   handleData();
  // }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.trim().toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue.length > 0) {
      const filteredCustomers = customersDeep.filter((customer) =>
        customer.name.toLowerCase().startsWith(searchValue)
      );
      setCustomers(filteredCustomers);
    } else {
      setCustomers(customersDeep);
    }
  };

  const columns = [
    { label: "#", field: "index" },
    { label: "Customer Name", field: "name" },
    { label: "Email", field: "email" },
    { label: "Phone Number", field: "body" },
  ];
  


    const handleClose = ()=>{
      setOpenDelete(false)
      setOpenConfirmDelete(false)
    }

    const handleDelete = (id) => {
      console.log("row-id:", id)
      setOpenDelete(true)
      setDeleteId(id); 
    };
    const handleConfirmDelete = () => {
      console.log("delete success" , deleteId)
      setOpenConfirmDelete(true);
    };

  return (
    <div className={classes.table_section}>
      <div className={classes.headerContainer}>
        <div className={classes.content}>
          <div className={classes.inner}>
            <h2 className={classes.manageCustomer}>Manage Customers</h2>
            <h5 className={classes.total}>Total {customers.length}</h5>
          </div>
          <div className="customDemoContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker renderInput={(params) => <TextField {...params} />} />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker renderInput={(params) => <TextField {...params} />} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className={classes.searchInputContainer}>
          <SearchIcon className={classes.searchIcon} />
          <input
            type="text"
            placeholder="Search in Customer"
            value={searchTerm}
            onChange={handleSearch}
            className={classes.searchInput}
          />
        </div>
      </div>
      <div >
        <ReusableTable 
          columns={columns}
          data={customers}
          dataDeep={customersDeep}
          handleDelete={handleDelete}
          searchTerm={searchTerm}
          pagination
          rowPerPage={10}
          // handleEdit
          // handlePassword

        />
      </div>
      {deleteId && 
          <Delete 
          isOpen={openDelete}
          onClose={handleClose}
          handleConfirmDelete={handleConfirmDelete} 
          openConfirmDelete={openConfirmDelete} 

          />}
      
    </div>
  );
};

export default CustomerManagement;
