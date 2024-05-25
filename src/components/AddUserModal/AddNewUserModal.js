// import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
// import { useFormik } from "formik";
// import React from "react";
// const initialValues = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 995,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   borderRadius: "40px",
//   boxShadow: 24,
// };

// const AddNewUserModal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const { values, handleBlur, handleChange, handleSubmit } = useFormik({
//     initialValues: initialValues,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <Fade in={open}>
//             <Box className="parent" sx={style}>
//               <div
//                 className="header"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "18px",
//                   borderBottom: "1px solid #D1D1D1",
//                 }}
//               >
//                 <Typography style={{ fontSize: 20, fontWeight: 400 }}>
//                   Add New User
//                 </Typography>
//                 <Typography
//                   onClick={handleClose}
//                   style={{
//                     color: "white",
//                     background: "rgb(245, 126, 42)",
//                     borderRadius: "50%",
//                     width: 30,
//                     height: 30,
//                     cursor: "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   X
//                 </Typography>
//               </div>
//               <div
//                 style={{
//                   position: "relative",
//                   textAlign: "center",
//                   margin: "20px 0",
//                 }}
//               >
//                 <img
//                   src="Images/person_icon.png"
//                   alt=""
//                   width="160px"
//                   style={{ cursor: "pointer" }}
//                 />
//                 <img
//                   src="Images/Camera_icon.png"
//                   alt=""
//                   style={{
//                     position: "absolute",
//                     background: "rgb(245, 126, 42)",
//                     width: "41.8px",
//                     height: "41.8px",
//                     padding: "5px",
//                     borderRadius: "50%",
//                     top: "135px",
//                     left: "545px",
//                     cursor: "pointer",
//                   }}
//                 />
//               </div>
//               <div
//                 className="body"
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "0px 5px",
//                   flexWrap: "wrap",
//                   gap: "15px",
//                   padding: "0px 38px",
//                 }}
//               >
//                 <div className="innerinput">
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     User Name
//                   </label>
//                   <br />
//                   <br />
//                   <input
//                     type="text"
//                     name="name"
//                     value={values.name}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       height: 54,
//                       borderRadius: 48,
//                       marginBottom: "10px",
//                       border: "1px solid var(--light-gray, #CDCDCD)",
//                       padding: "0px 20px",
//                       outline: "none",
//                       transition: "border-color 0.3s ease",
//                     }}
//                     onFocus={(e) => {
//                       e.target.style.borderColor = "#F57E2A";
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
//                     }}
//                   />
//                 </div>
//                 <div className="innerinput">
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     Email
//                   </label>
//                   <br />
//                   <br />
//                   <input
//                     type="email"
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       height: 54,
//                       borderRadius: 48,
//                       marginBottom: "10px",
//                       border: "1px solid var(--light-gray, #CDCDCD)",
//                       padding: "0px 20px",
//                       outline: "none",
//                       transition: "border-color 0.3s ease",
//                     }}
//                     onFocus={(e) => {
//                       e.target.style.borderColor = "#F57E2A";
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
//                     }}
//                   />
//                 </div>

//                 <div className="innerinput" style={{ position: "relative" }}>
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     Enter Password
//                   </label>
//                   <br />
//                   <br />
//                   <input
//                     type="password"
//                     name="password"
//                     value={values.password}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       height: 54,
//                       borderRadius: 48,
//                       marginBottom: "10px",
//                       border: "1px solid var(--light-gray, #CDCDCD)",
//                       paddingLeft: "20px",
//                       paddingRight: "50px",
//                       outline: "none",
//                     }}
//                     onFocus={(e) => {
//                       e.target.style.borderColor = "#F57E2A";
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
//                     }}
//                   />
//                   <img
//                     src="/Images/passwordHiddenIcon.png"
//                     alt=""
//                     width="25px"
//                     style={{
//                       position: "absolute",
//                       left: "410px",
//                       top: "65px",
//                       cursor: "pointer",
//                     }}
//                   />
//                 </div>

//                 <div className="innerinput" style={{ position: "relative" }}>
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     Confirm Password
//                   </label>
//                   <br />
//                   <br />
//                   <input
//                     type="password"
//                     name="confirmPassword"
//                     value={values.confirmPassword}
//                     onChange={handleChange}
//                     style={{
//                       width: "100%",
//                       height: 54,
//                       borderRadius: 48,
//                       marginBottom: "10px",
//                       border: "1px solid var(--light-gray, #CDCDCD)",
//                       paddingLeft: "20px",
//                       paddingRight: "50px",
//                       outline: "none",
//                     }}
//                     onFocus={(e) => {
//                       e.target.style.borderColor = "#F57E2A";
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
//                     }}
//                   />
//                   <img
//                     src="/Images/passwordHiddenIcon.png"
//                     alt=""
//                     width="25px"
//                     style={{
//                       position: "absolute",
//                       left: "410px",
//                       top: "65px",
//                       cursor: "pointer",
//                     }}
//                   />
//                 </div>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "0px 5px",
//                   flexWrap: "wrap",
//                   gap: "15px",
//                   padding: "0px 38px",
//                 }}
//               >
//                 <div className="innerinput">
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     Role
//                   </label>
//                   <br />
//                   <br />
//                   <div>
//                     <select
//                       style={{
//                         width: "100%",
//                         height: 54,
//                         borderRadius: 48,
//                         marginBottom: "10px",
//                         border: "1px solid var(--light-gray, #CDCDCD)",
//                         padding: "0px 20px",
//                         outline: "none",
//                         zIndex: 1,
//                         backgroundColor: "transparent",
//                         appearance: "none",
//                         cursor: "pointer",
//                         transition: "border-color 0.3s ease",
//                       }}
//                       onFocus={(e) => {
//                         e.target.style.borderColor = "#F57E2A";
//                       }}
//                       onBlur={(e) => {
//                         e.target.style.borderColor =
//                           "var(--light-gray, #CDCDCD)";
//                       }}
//                     >
//                       <option value="1">General Manager</option>
//                       <option value="2">Sales Person</option>
//                       <option value="3">Order Taker</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="innerinput">
//                   <label
//                     htmlFor=""
//                     style={{
//                       fontSize: 20,
//                       fontWeight: 400,
//                       lineHeight: "25.3px",
//                     }}
//                   >
//                     Select Store
//                   </label>
//                   <br />
//                   <br />
//                   <select
//                     style={{
//                       width: "100%",
//                       height: 54,
//                       borderRadius: 48,
//                       marginBottom: "10px",
//                       padding: "0px 10px",
//                       border: "1px solid var(--light-gray, #CDCDCD)",
//                       outline: "none",
//                       zIndex: 1,
//                       backgroundColor: "transparent",
//                       appearance: "none",
//                       cursor: "pointer",
//                       transition: "border-color 0.3s ease",
//                     }}
//                     onFocus={(e) => {
//                       e.target.style.borderColor = "#F57E2A";
//                     }}
//                     onBlur={(e) => {
//                       e.target.style.borderColor = "var(--light-gray, #CDCDCD)";
//                     }}
//                   >
//                     <option value="1">General Manager</option>
//                     <option value="2">Sales Person</option>
//                     <option value="3">Order Taker</option>
//                   </select>
//                 </div>
//               </div>
//               <div style={{ textAlign: "center" }}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   style={{
//                     width: "350px",
//                     height: "45px",
//                     borderRadius: "16px",
//                     color: "white",
//                     background: "rgb(245, 126, 42)",
//                     margin: "40px 0px",
//                   }}
//                 >
//                   Add User
//                 </Button>
//               </div>
//             </Box>
//           </Fade>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default AddNewUserModal;
