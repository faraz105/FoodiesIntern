import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import classes from "./table.module.scss";
import profile from "../../../assets/images/icon.svg";
import deleteIcon from "../../../assets/images/del.svg"; 
import PaginationComponent from "../tablepagination";
import password from "../../../assets/images/pass.svg";
import edit from "../../../assets/images/edit.svg";



const ReusableTable = ({ columns, rowPerPage = "5", pagination, handleDelete, handleEdit,handlePassword,dataDeep ,searchTerm,data,}) => {
  const style = {
    borderBottom: "none !important",
  };
  const [totalEntries,settotalEntries]=useState(``)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowPerPage);

//customers: This state variable holds the currently displayed list of customers
const filteredCustomers = searchTerm !==""
? data.filter((customer) =>
  customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
: data;

const currentPage = page + 1;
const totalPages = Math.ceil(filteredCustomers.length / rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  //dataDeep: This state variable holds the complete original list of customers fetched from the API.
const currentData = searchTerm !==""
? filteredCustomers
: dataDeep.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

useEffect(() => {
  if (filteredCustomers.length === 0) {
    settotalEntries(`Showing 0 to 0 of 0 entries`);
  } else if (searchTerm !== "") {
    const searchCount = filteredCustomers.length;
    
    settotalEntries(`Showing 1 to ${currentPage} of ${searchCount} entries`);
  } else {
    settotalEntries(`Showing ${currentPage} to ${totalPages} of ${rowsPerPage} entries`);
  }
}, [filteredCustomers, searchTerm, currentPage, totalPages, rowsPerPage]);


  const datas = currentData?.map((customer, index) => ({ ...customer, index: index + 1 }))

  return (
    <>
    <div className={classes.wrapperContainer}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns?.map((column, index) => (
              <TableCell key={index} className={classes.columnHeader}>
                {column.label}
              </TableCell>
            ))}
            <TableCell className={classes.columnHeader}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentData.length === 0 ? (
            <TableRow>
              <TableCell sx={style} colSpan={columns.length} className={classes.noRecordsCell}>
                No records found
              </TableCell>
            </TableRow>
          ) : (
            datas?.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns?.map((column, colIndex) => (
                  <TableCell key={colIndex} sx={style} className={classes.cell}>
                    {column.field === 'name' ? (
                      <div className={classes.imagecontent}>
                        <img src={profile} className={classes.customerImage} alt="Profile" />
                        {row[column.field]}
                      </div>
                    ) : (
                      row[column.field]
                    )}
                  </TableCell>
                ))}

          <TableCell sx={style} className={classes.cell}>
            <div className={classes.actionBtn}>
                {handleEdit &&  
                <div className={classes.edit} onClick={() => handleDelete(row?.id)}  >
                      <img src={edit} alt="password"  />
                </div>
                }
                {handlePassword && 
                <div className={classes.password} onClick={() => handleDelete(row?.id)} >
                   <img src={password} alt="password"  />
                </div>
                }
                 {handleDelete &&
                 <div className={classes.deletecontent} onClick={() => handleDelete(row?.id)} >
                 <img src={deleteIcon} alt="Delete"  />
              </div>
              }
              </div>
                 </TableCell>
                
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      </div>
 {pagination && <div className={classes.test}>
        <div className={classes.totalEntries}>{totalEntries}</div>
        <div style={{ margin: '0 auto' }}>
          
        <PaginationComponent
          page={page}
          totalPages={totalPages}
          onPageChange={handleChangePage}
        />
        </div>
      </div>}
      
      
    
    </>
  );
};

export default ReusableTable;
