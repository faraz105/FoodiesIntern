// import React, { useState } from "react";
// import { ErrorMessage, Field, Formik } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import classes from "./addModal_Module.scss";

// const loginSchema = Yup.object().shape({
//   email: Yup.string()
//     .email("Invalid email")
//     .required("Please enter your email")
//     .matches(
//       /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
//       "Invalid email"
//     ),
//   password: Yup.string().required("Please enter your password"),
// });

// const Components = ({ open, handleClose }) => {
//   const [username, setUserName] = useState("");
//   const [roles, setRoles] = useState("");
//   const [userImage, setUserImage] = useState(null);
//   const [displayFile, setDisplayFile] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(false);
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     console.log(event.target.files);
//     if (file) {
//       setUserImage(file);
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setDisplayFile(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setUserImage(null);
//       setDisplayFile(null);
//     }
//   };

//   // const [email, setEmail] = useState("");
//   // const [pass, setPass] = useState("");
//   // const [confPassowrd, setConfPassword] = useState("");
//   // const [isPending, setIsPending] = useState(false);

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const currentDate = new Date().toLocaleDateString("en-US", {
//   //     month: "2-digit",
//   //     day: "2-digit",
//   //     year: "numeric",
//   //   });
//   //   const dataa = { username, email, roles, date: currentDate };
//   //   setIsPending(true);
//   //   fetch("http://localhost:8000/users", {
//   //     method: "POST",
//   //     headers: { "Content-Type": "application/json" },
//   //     body: JSON.stringify(dataa),
//   //   }).then(() => {
//   //     console.log("new blog added");
//   //     setIsPending(false);
//   //     handleClose();
//   //   });
//   // };

//   // function myFunction() {
//   //   var x = document.getElementById("myInput");
//   //   if (x.type === "password") {
//   //     x.type = "text";
//   //   } else {
//   //     x.type = "password";
//   //   }
//   // }
//   // function confirmPasswordFunction() {
//   //   var y = document.getElementById("confirmInput");
//   //   if (y.type === "password") {
//   //     y.type = "text";
//   //   } else {
//   //     y.type = "password";
//   //   }
//   // }
//   return (

//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={loginSchema}
//         onSubmit={async (values) => {
//           setLoading(true);
//           console.log("values:", values);
//           // try {
//           //   const res = await userLogin(values);
//           //   if (res?.status == 200) {
//           //     dispatch({
//           //       type: LOGIN,
//           //       payload: res.data,
//           //     });
//           //     localStorage.setItem("userData", JSON.stringify(res.data));
//           //     setTimeout(() => {
//           //       setLoading(false);
//           //       navigate("/");
//           //     }, 2000);
//           //   }
//           // } catch (error) {
//           //   setErrorMsg(error.response.data.error.message);
//           // }
//         }}
//       >
//         {({
//           values,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           errors,
//           touched,
//         }) => (
//           <form onSubmit={handleSubmit}>
//                 <div className="header">
//                   <Typography className="modalLeftName">Add New User</Typography>
//                   <Typography onClick={handleClose} className="closeButton">X</Typography>
//                 </div>
//                 <div className="parentPersonicon">
//                   {displayFile ? (
//                     <img
//                       src={displayFile}
//                       alt="Selected"
//                       width="170px"
//                       style={{ borderRadius: "50%", maxHeight: "170px" }}
//                     />
//                   ) : (
//                     <img
//                       src="Images/person_icon.png"
//                       alt=""
//                       width="160px"
//                       className="personIcon"
//                     />
//                   )}
//                   <div>
//                     <img
//                       src="Images/Camera_icon.png"
//                       alt=""
//                       className="cameraImageStyling"
//                     />
//                     <input
//                       type="file"
//                       className="cameraImageStyling"
//                       style={{ opacity: 0.01 }}
//                       onChange={handleImageChange}
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <div>
//                     <label>User Name</label>
//                     <Field
//                       type="text"
//                       name="username"
//                       value={username}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       // className="textFieldStyling"
//                       // onFocus={(e) => {
//                       //   e.target.style.borderColor = "#F57E2A";
//                       // }}
//                       // onBlur={(e) => {
//                       //   e.target.style.borderColor =
//                       //     "var(--light-gray, #CDCDCD)";
//                       // }}
//                       // onChange={(e) => setUserName(e.target.value)}
//                     />
//                     <div className="errorMsg">
//                       <ErrorMessage name="username" />
//                     </div>
//                     <div className={classes.inputMain}>
//                       <label>Email</label>
//                       <Field
//                         type="text"
//                         name="email"
//                         value={values.email}
//                         onBlur={handleBlur}
//                         onChange={handleChange}
//                         className={`${classes.inputField} ${
//                           errors.email && touched.email ? "errorMsgLine" : null
//                         }`}
//                         placeholder="enter email"
//                       />
//                       <div className="errorMsg">
//                         <ErrorMessage name="email" />
//                       </div>
//                     </div>

//                     <div className={classes.inputMain}>
//                       <label>Password</label>
//                       <Field
//                         type={passwordVisible ? "text" : "password"}
//                         name="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={`${classes.inputField} ${
//                           errors.password && touched.password
//                             ? "errorMsgLine"
//                             : null
//                         }`}
//                         placeholder="enter password"
//                       />
//                       <div className="errorMsg">
//                         <ErrorMessage name="password" />
//                       </div>
//                       {/* <button
//                   type="button"
//                   className="password-toggle-button logineye"
//                   onClick={handlePasswordToggle}
//                 >
//                   {passwordVisible ? (
//                     <RemoveRedEyeIcon />
//                   ) : (
//                     <VisibilityOffIcon />
//                   )}
//                 </button>  */}
//                     </div>
//                   </div>
//                 </div>

//                 <div className={classes.inputMain}>
//                   <label>Confirm Password</label>
//                   <Field
//                     type={passwordVisible ? "text" : "password"}
//                     name="password"
//                     value={values.password}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     className={`${classes.inputField} ${
//                       errors.password && touched.password
//                         ? "errorMsgLine"
//                         : null
//                     }`}
//                     placeholder="enter password"
//                   />
//                   <div className="errorMsg">
//                     <ErrorMessage name="password" />
//                   </div>
//                   {/* <button
//                   type="button"
//                   className="password-toggle-button logineye"
//                   onClick={handlePasswordToggle}
//                 >
//                   {passwordVisible ? (
//                     <RemoveRedEyeIcon />
//                   ) : (
//                     <VisibilityOffIcon />
//                   )}
//                 </button>  */}
//                 </div>
//                 {/* </div> */}
//                 <div className={classes.dropdownSelect}>
//                   <div className="innerinput">
//                     <label htmlFor="" className="labelStyling">
//                       Role
//                     </label>
//                     <div>
//                       <select
//                         className="textFieldStyling"
//                         name="role"
//                         value={values.role}
//                         // onFocus={(e) => {
//                         //   e.target.style.borderColor = "#F57E2A";
//                         // }}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                       >
//                         <option value="General Manager">General Manager</option>
//                         <option value="Sales Person">Sales Person</option>
//                         <option value="Order Taker">Order Taker</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="innerinput">
//                     <label htmlFor="" className="labelStyling">
//                       Select Store
//                     </label>
//                     <br />
//                     <br />
//                     <select
//                       className="textFieldStyling"
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
//                 <div className="btnParent">
//                   <Button
//                     className="btnAddUsers"
//                     type="submit"
//                     variant="contained"
//                   >
//                     Add Users
//                   </Button>
//                 </div>
//           </form>
//         )}
//       </Formik>
//   );
// };
// export default Components;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Button, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import classes from './Modal.module.scss'; // Make sure you have the styles defined here

// const UserForm = ({ handleClose, initialValues, onSubmit, textButton }) => {
//   const validationSchema = Yup.object().shape({
//     username: Yup.string().required('Username is required'),
//     email: Yup.string().email('Invalid email').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Passwords must match')
//       .required('Confirm Password is required'),
//     role: Yup.string().required('Role is required'),
//     category: Yup.string().required('Category is required'),
//   });

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={onSubmit}
//     >
//       {({ values, handleChange, handleBlur }) => (
//         <Form className="form-container">
//           <div className="header">
//             <Typography className="modalLeftName">Add New User</Typography>
//             <Typography onClick={handleClose} className="closeButton">X</Typography>
//           </div>
//           <div className="form-group username-email">
//             <div className="form-control">
//               <InputLabel>Username</InputLabel>
//               <Field as="input" name="username" type="text" className="input-field" />
//               <ErrorMessage name="username" component="div" className="errorMsg" />
//             </div>
//             <div className="form-control">
//               <InputLabel>Email</InputLabel>
//               <Field as="input" name="email" type="email" className="input-field" />
//               <ErrorMessage name="email" component="div" className="errorMsg" />
//             </div>
//           </div>
//           <div className="form-group password-confirm-password">
//             <div className="form-control">
//               <InputLabel>Password</InputLabel>
//               <Field as="input" name="password" type="password" className="input-field" />
//               <ErrorMessage name="password" component="div" className="errorMsg" />
//             </div>
//             <div className="form-control">
//               <InputLabel>Confirm Password</InputLabel>
//               <Field as="input" name="confirmPassword" type="password" className="input-field" />
//               <ErrorMessage name="confirmPassword" component="div" className="errorMsg" />
//             </div>
//           </div>
//           <div className="form-group role-category">
//             <div className="form-control">
//               <FormControl fullWidth>
//                 <InputLabel>Role</InputLabel>
//                 <Field
//                   as={Select}
//                   name="role"
//                   className="input-field"
//                   value={values.role}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <MenuItem value="General Manager">General Manager</MenuItem>
//                   <MenuItem value="Sales Person">Sales Person</MenuItem>
//                   <MenuItem value="Order Taker">Order Taker</MenuItem>
//                 </Field>
//               </FormControl>
//               <ErrorMessage name="role" component="div" className="errorMsg" />
//             </div>
//             <div className="form-control">
//               <FormControl fullWidth>
//                 <InputLabel>Category</InputLabel>
//                 <Field
//                   as={Select}
//                   name="category"
//                   className="input-field"
//                   value={values.category}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 >
//                   <MenuItem value="Admin">Admin</MenuItem>
//                   <MenuItem value="User">User</MenuItem>
//                   <MenuItem value="Guest">Guest</MenuItem>
//                 </Field>
//               </FormControl>
//               <ErrorMessage name="category" component="div" className="errorMsg" />
//             </div>
//           </div>
//           <div className="btnParent">
//             <Button type="submit" variant="contained">
//               {textButton}
//             </Button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default UserForm;

import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import classes from "./Modal.module.scss";

const UserForm = ({ handleClose, initialValues, onSubmit, textButton }) => {
  const [displayFile, setDisplayFile] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(event.target.files);
    if (file) {
      setUserImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setDisplayFile(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setUserImage(null);
      setDisplayFile(null);
    }
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string().required("Role is required"),
    category: Yup.string().required("Category is required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className={classes.parentModal}>
          <div className={classes.modalHeader}>
            <Typography className={classes.modalHeader__title}>
              Add New User
            </Typography>
            <Typography
              onClick={handleClose}
              className={classes.modalHeader__close}
            >
              X
            </Typography>
          </div>
          <div className={classes.parentPersonicon}>
            {displayFile ? (
              <img
                src={displayFile}
                alt="Selected"
                width="170px"
                style={{ borderRadius: "50%", maxHeight: "170px" }}
              />
            ) : (
              <img
                src="Images/person_icon.png"
                alt=""
                width="160px"
                className={classes.personIcon}
              />
            )}
            <div>
              <img
                src="Images/Camera_icon.png"
                alt=""
                className={classes.cameraImageStyling}
              />
              <input
                type="file"
                className={classes.cameraImageStyling}
                style={{ opacity: 0.01 }}
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className={`${classes.formGroup} ${classes.formGroup__row}`}>
            <div className={classes.formGroup__control}>
              <Typography className={classes.labelStyling} variant="body1">
                User Name
              </Typography>
              <Field
                as="input"
                name="username"
                type="text"
                className={classes.inputField}
                
              />
              <ErrorMessage
                name="username"
                component="div"
                className={classes.errorMsg}
              />
            </div>
            <div className={classes.formGroup__control}>
              <Typography className={classes.labelStyling} variant="body1">
                Email
              </Typography>
              <Field
                as="input"
                name="email"
                type="email"
                className={classes.inputField}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={classes.errorMsg}
              />
            </div>
          </div>
          <div className={`${classes.formGroup} ${classes.formGroup__row}`}>
            <div className={classes.formGroup__control}>
              <Typography className={classes.labelStyling} variant="body1">
                Password
              </Typography>
              <Field
                as="input"
                name="password"
                type="password"
                className={classes.inputField}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={classes.errorMsg}
              />
            </div>
            <div className={classes.formGroup__control}>
              <Typography className={classes.labelStyling} variant="body1">
                Confirm Password
              </Typography>
              <Field
                as="input"
                name="confirmPassword"
                type="password"
                className={classes.inputField}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={classes.errorMsg}
              />
            </div>
          </div>
          <div className={`${classes.formGroup} ${classes.formGroup__row}`}>
            <div className={classes.formGroup__control}>
              <FormControl fullWidth className={classes.selectField}>
                <Typography className={classes.labelStyling} variant="body1">
                  Role
                </Typography>
                <Field
                  as={Select}
                  name="role"
                  className={classes.inputField}
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="General Manager">General Manager</MenuItem>
                  <MenuItem value="Sales Person">Sales Person</MenuItem>
                  <MenuItem value="Order Taker">Order Taker</MenuItem>
                </Field>
              </FormControl>
              <ErrorMessage
                name="role"
                component="div"
                className={classes.errorMsg}
              />
            </div>
            <div className={classes.formGroup__control}>
              <FormControl fullWidth>
                <Typography className={classes.labelStyling} variant="body1">
                  Select Store
                </Typography>
                <Field
                  as={Select}
                  name="Select Store"
                  className={classes.inputField}
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <MenuItem value="Gulberg Store Lahore">
                    Gulberg Store Lahore
                  </MenuItem>
                  <MenuItem value="DHA Store Lahore">DHA Store Lahore</MenuItem>
                  <MenuItem value="Johar Town Store Lahore">
                    Johar Town Store Lahore
                  </MenuItem>
                </Field>
              </FormControl>
              <ErrorMessage
                name="Select Store"
                component="div"
                className={classes.errorMsg}
              />
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              type="submit"
              variant="contained"
              className={classes.btnAddUsers}
            >
              {textButton}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
