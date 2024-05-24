import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./VerifyOTP.module.scss";
import { Link } from "react-router-dom";
import { userResetPassword } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN } from "../../../constants";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import resetBanner from "../../../assets/images/resetBanner.png";
import logo from "../../../assets/images/logo.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const VerifyOTPSchema = Yup.object().shape({
  otp1: Yup.string()
    .length(1, 'Must be exactly 1 digit')
    .required('Required ')
    .matches(/^[0-9]$/, "Must be a digit "),
  otp2: Yup.string()
    .length(1, 'Must be exactly 1 digit')
    .required('Required ')
    .matches(/^[0-9]$/, "Must be a digit "),
  otp3: Yup.string()
    .length(1, 'Must be exactly 1 digit')
    .required('Required ')
    .matches(/^[0-9]$/, "Must be a digit "),
  otp4: Yup.string()
    .length(1, 'Must be exactly 1 digit')
    .required('Required ')
    .matches(/^[0-9]$/, "Must be a digit "),
});

const VerifyOTP = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleKeyUp = (e, nextField, prevField) => {
    if (e.target.value.length === 1 && nextField) {
      document.getElementById(nextField).focus();
    } else if (e.key === 'Backspace' && !e.target.value && prevField) {
      document.getElementById(prevField).focus();
    }
  };

  return (
    <div className={classes.mainVerifyOTP}>
      <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '' }}
          validationSchema={VerifyOTPSchema}
          onSubmit={async (values, { setSubmitting }) => {
            const otp = values.otp1 + values.otp2 + values.otp3 + values.otp4;
          setTimeout(() => {
            console.log(otp);
            setSubmitting(false);
          }, 400);
            // setLoading(true);
            // console.log("values:", values)
            // try {
            //   const res = await userResetPassword(values);
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
                <h1>Reset Password</h1>
                <p>Please Enter your Email address to request <br/> a Password reset!</p>
              </div>

              <div className={classes.inputMain}>
                <Field
                  type="text" 
                  name="otp1" 
                  id="otp1" 
                  maxLength="1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.email && touched.email ? "errorMsgLine" : null
                  }`}
                  placeholder="-"
                  onKeyUp={(e) => handleKeyUp(e, 'otp2', null)}
                />
                 <span>-</span>
                 <Field
                  type="text" 
                  name="otp2" 
                  id="otp2" 
                  maxLength="1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.email && touched.email ? "errorMsgLine" : null
                  }`}
                  placeholder="-"
                  onKeyUp={(e) => handleKeyUp(e, 'otp3', 'otp1')}
                />
                 <span>-</span>
                 <Field
                  type="text" 
                  name="otp3" 
                  id="otp3" 
                  maxLength="1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.email && touched.email ? "errorMsgLine" : null
                  }`}
                  placeholder="-"
                  onKeyUp={(e) => handleKeyUp(e, 'otp4', 'otp2')}
                />
                 <span>-</span>
                 <Field
                  type="text" 
                  name="otp4" 
                  id="otp4" 
                  maxLength="1"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.email && touched.email ? "errorMsgLine" : null
                  }`}
                  placeholder="-"
                  onKeyUp={(e) => handleKeyUp(e, null, 'otp3')}
                />
          
               
              </div>
              <div className={classes.errormsg}>
              <ErrorMessage name="otp1" component="div" />
              <ErrorMessage name="otp2" component="div" />
              <ErrorMessage name="otp3" component="div" />
              <ErrorMessage name="otp4" component="div" />
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
                  "Confirm OTP"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className={classes.rightBanner}>
        <div className={classes.bannerHeading}>
          Increase sales <br /> with Foodie!
        </div>
        <img src={resetBanner} alt="reset banner" height="100%" />
      </div>
    </div>
  );
};

export default VerifyOTP;
