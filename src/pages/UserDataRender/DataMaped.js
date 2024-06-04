import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table_module.scss";
import {
  Box,
  Button,
  TextField,
  Typography,
  Pagination,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";  
import AddNewUserComponents from "../Components/AddNewUserComponents";
import EditModal from '../EditModal/EditModal';
import { Password } from "@mui/icons-material";
import PasswordChangeComponent from "../LockChange/PasswordChangeComponent";
import Delete from "../Delete/Delete";
export default function BasicTable({ data , setData }) {
  // const [usersData, setUsersData] = useState(users);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [noRecords, setNoRecords] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const handleEditOpenModal = () => setOpenEditModal(true)
  const handleEditCloseModal = () => setOpenEditModal(false);
  //////////Lock Modal/////////////////////
  const [openLockModal, setOpenLockModal] = React.useState(false);
  const handleLockOpenModal = () => setOpenLockModal(true);
  const handleLockOpen = () => setOpenLockModal(true);
  const handleLockClose = () => setOpenLockModal(false);
  /////////// delete Modal ///////////////////
  const [openDeleteModal, setOpenDeleteModal] = React.useState(false);
  const handleDeleteOpen = (id) =>{
    console.log(id, "asdasdas")
    setDeleteUserId(id);
    setOpenDeleteModal(true);
  } 
  const handleDeleteConfirm = () => {
    setData(data.filter((user) => user.id !== deleteUserId));
    setOpenDeleteModal(false);
  };

const getId =()=> {
  return deleteUserId
}

  const handleDeleteClose = () => setOpenDeleteModal(false);
  const handleSearch = (value) => {
    const delay = 500; 
    setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.username.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredResults.length == 0 && value !== "") {
        setNoRecords(true);
        setData([]);
      } else {
        setNoRecords(false);
        setData(value === "" ? data : filteredResults);
      }
    }, delay);
  };


  return (
    <div className="parentContainer">
      <Box sx={{ p: 2 }} className="tableUpperSection">
        <div className="left_section">
          <Box>
            <Typography className="user">User</Typography>
            <Typography className="totalUsers">Total {data.length}</Typography>
          </Box>
          <div className="searchBox">
            <input
              placeholder="Search in User"
              className="searchBox_styling"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                handleSearch(e.target.value);
              }}
            />
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right_section">
          <Button
            variant="outlined"
            startIcon={<AddBoxIcon />}
            className="btnAddUser"
            onClick={handleOpen}
          >
          Add Users
          </Button>
          <AddNewUserComponents open={open} handleClose={handleClose}  textButton={"Add Users"}/>
        </div>
      </Box>  
      <TableContainer component={Paper} className="tableContainer">
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          id="manage_users_table"
        >
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">Created at</TableCell>
              <TableCell align="left">Username</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Roles</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.slice((currentPage - 1) * 10, currentPage * 10)?.map((user,index) => (
                <TableRow
                  key={user?.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    {(currentPage - 1) * 10 + index + 1}
                  </TableCell>
                  <TableCell align="left">{user?.date}</TableCell>
                  <TableCell align="left" className="usernameAndAvatarStyling">
                    <span>
                       <img src="Images/user1Image.png" width="30px" alt="UserImage" />
                    </span>
                    <span style={{ padding: "" }}>{user?.username}</span>
                  </TableCell>
                  <TableCell align="left">{user?.email}</TableCell>

                  <TableCell align="left">{user?.roles}</TableCell>
                  <TableCell className="tableActionStyling">
                    <span>
                      <img src="Images/edit-image-icon.png" onClick={handleEditOpenModal}/>
                    </span>
                    <span className="updatePasswordIcon">
                      <img src="Images/delicon-img.png" alt="" onClick={handleLockOpenModal}/>
                    </span>
                    <EditModal  openEditModal={openEditModal} handleEditCloseModal={handleEditCloseModal}/>
                    <PasswordChangeComponent openLockModal={openLockModal} handleLockClose={handleLockClose} textButton={"Save Changes"}/>
                   < Delete  openDeleteModal={openDeleteModal} handleDeleteClose={handleDeleteClose} user={getId} handleDeleteConfirm={handleDeleteConfirm} textButton={"Yes Delete"} />
                    <span className="deleteIcon">
                      <img src="Images/delete-img.png" alt="" onClick={()=> handleDeleteOpen(user.id)}/>
                    </span>
                  </TableCell>  
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {noRecords && <p style={{ textAlign: "center" }}>No records found</p>}

      <div className="paginationStyling">
        <Pagination
          count={Math.ceil(data?.length / 10)}
          onChange={(e, page) => setCurrentPage(page)}
          variant="outlined"
          shape="rounded"
          className="paginationStyle"
        />
      </div>
    </div>
  );
}