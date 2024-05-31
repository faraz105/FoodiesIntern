import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { userLogin } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN } from "../../../constants";
import Grid from '@mui/material/Grid';
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import signupBanner from "../../../assets/images/signup1.png";
import logo from "../../../assets/images/logo.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email"
    ),
    fname: Yup.string().required("Please enter your first name"),
    lname: Yup.string().required("Please enter your last name"),
    phone: Yup.string().required("Please enter your phone number"),
});
const ProfileInfo = ({setSignupData, setSignupFlow, signupFlow, signupData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={classes.mainSignup}>
        <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ fname: "", lname: "", email: "", phone: "" }}
          // validationSchema={signUpSchema}
          onSubmit={async (values) => {
            setSignupFlow({...signupFlow , profileInfo: false, businessInfo : true });
            setSignupData(values)

            console.log("values:", values);
            // try {
            //   const res = await userLogin(values);
            //   if (res?.status == 200) {
            //     dispatch({
            //       type: LOGIN,
            //       payload: res.data,
            //     });
            //     localStorage.setItem("userData", JSON.stringify(res.data));
            //     setTimeout(() => {
            //       setLoading(false);
            //       navigate("/");
            //     }, 2000);
            //   }
            // } catch (error) {
            //   setErrorMsg(error.response.data.error.message);
            // }
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className={classes.formHeader}>
                <img src={logo} alt="logo" />
                <h3>Are you prepared to expand your Business?</h3>
              </div>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>First Name</label>
                    <Field
                      type="text"
                      name="fname"
                      value={values.fname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.fname && touched.fname ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="fname" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>Last Name</label>
                    <Field
                      type="text"
                      name="lname"
                      value={values.lname}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.lname && touched.lname ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="lname" />
                    </div>
                  </div>
                </Grid>
              </Grid>
              
              <div className={classes.inputMain}>
                <label>Email Address</label>
                <Field
                  type="text"
                  name="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.email && touched.email ? "errorMsgLine" : null
                  }`}
                  placeholder="enter email"
                />
                <div className={classes.errorMsg}>
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className={classes.inputMain}>
                <label>Phone Number</label>
                <Field
                  type="text"
                  name="phone"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.phone && touched.phone ? "errorMsgLine" : null
                  }`}
                  placeholder="enter Phone Number"
                />
                <div className={classes.errorMsg}>
                  <ErrorMessage name="phone" />
                </div>
              </div>
              <button type="submit">
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress color="inherit" />
                  </Box>
                ) : (
                  "Get Started"
                )}
              </button>
              <div className={classes.signupLink}>
                <div className={classes.signupRow}>
                  <span>Already have an account? </span>
                  <Link to="/signin" className={classes.linkSignup}>
                  Sign In 
                  </Link>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className={classes.rightBanner}>
        <div className={classes.bannerHeading}>
          Increase sales <br /> with Foodie!
        </div>
        <img src={signupBanner} alt="login banner" height="100%" />
      </div>
    </div>
  );
};

export default ProfileInfo;
