import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CiSearch } from "react-icons/ci";
import Pagination from "@mui/material/Pagination";
import Delete from "../deleteModal/index"; 
import classes from "./table.module.scss";
import "./tableBuiltin.scss";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import profile from "../../assets/images/icon.svg";

const MyTable = () => {
  const [customers, setCustomers] = useState([]);
  const [customersDeep, setCustomersDeep] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const style = {
    borderBottom: "none !important"
  }

  useEffect(() => {
    const handleData = async () => {
      const rest = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await rest.json();
      setCustomers(data);
      setCustomersDeep(data);
    };
    handleData();
  }, []);

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const filteredCustomers = searchTerm.length > 0 ? customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : customers;
  
  
  // Calculate total number of pages based on filtered customers and rows per page
  const currentPage = page + 1;
  const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);
  
  let totalEntriesText;
  if (filteredCustomers.length === 0) {
    totalEntriesText = `Showing 0 to 0 of 0 entries `;
  } else if (searchTerm.length > 0) {
    const searchCount = filteredCustomers.length;
    totalEntriesText = `Showing 1 to ${searchCount} of ${searchCount} entries`;
  } else {
    totalEntriesText = `Showing ${currentPage} to ${totalPages} of ${rowsPerPage} entries`;
  }

  return (
    <div className={classes.table_section}>
      <div className={classes.headerContainer}>
        <div className={classes.content}>
          <div className={classes.inner}>
            <h2 className={classes.manageCustomer}>Manage Customers</h2>
            <h5 className={classes.total}>Total {customers.length}</h5>
          </div>
          <div className='customDemoContainer'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker renderInput={(params) => <TextField {...params} />} />
              </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker renderInput={(params) => <TextField {...params} />} />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className={classes.searchInputContainer}>
          <CiSearch className={classes.searchIcon} />
          <input
            type="text"
            placeholder="Search in Customer"
            value={searchTerm}
            onChange={handleSearch}
            className={classes.searchInput}
          />
        </div>
      </div>
      <div className={classes.wrapperContainer}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.columnHeader}>#</TableCell>
              <TableCell className={classes.columnHeader}>Customer Name</TableCell>
              <TableCell className={classes.columnHeader}>Email</TableCell>
              <TableCell className={classes.columnHeader}>Phone Number</TableCell>
              <TableCell className={classes.columnHeader}>Total Orders</TableCell>
              <TableCell className={classes.columnHeader}>Total bill</TableCell>
              <TableCell className={classes.columnHeader}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(searchTerm.length > 0 ? filteredCustomers : customersDeep.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).length === 0 ? (
              <TableRow>  
                <TableCell sx={style} colSpan={7} className={classes.noRecordsCell}>
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              (searchTerm.length > 0 ? filteredCustomers : customersDeep.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)).map((customer, index) => (
                <TableRow key={index}>
                  <TableCell sx={style} className={classes.cell}>{index + 1}</TableCell>
                  <TableCell sx={style} className={classes.cell}>
                    <div className={classes.imagecontent}>
                      <img src={profile} className={classes.customerImage} alt="Profile" />
                      {customer.name}
                    </div>
                  </TableCell>
                  <TableCell sx={style} className={classes.cell}>{customer.email}</TableCell>
                  <TableCell sx={style} className={classes.cell}>{customer.phone}</TableCell>
                  <TableCell sx={style} className={classes.cell}>{customer.username}</TableCell>
                  <TableCell sx={style} className={classes.cell}>{customer.website}</TableCell>
                 
                  <TableCell sx={style} className={classes.cell}>
                    <Delete customer={customer} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      <div className={classes.paginationcontainer}>
        <div className={classes.totalEntries}>{totalEntriesText}</div>
        <Pagination
          className={`${classes.pagination} customPagination`}
          count={totalPages}
          variant="outlined"
          shape="rounded"
          onChange={(event, newPage) => handleChangePage(event, newPage - 1)}
          page={page + 1}
          showFirstButton={false}
          showLastButton={false}
        />
      </div>
    </div>
  );
};

export default MyTable;