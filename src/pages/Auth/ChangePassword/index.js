import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./Change.module.scss";
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

const changePasswordSchema = Yup.object().shape({
  password: Yup.string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters long'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm Password is required'),

});
const ChangePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={classes.mainChangePassword}>
      <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={changePasswordSchema}
          onSubmit={async (values) => {
            setLoading(true);
            console.log("values:", values)
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
                <h1>Change Password</h1>
                <p>Please enter a new password!</p>
              </div>

              <div className={classes.inputMain}>
                <label>Enter New Password</label>
                <Field
                  type="password"
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.password && touched.password ? "errorMsgLine" : null
                  }`}
                  placeholder="enter password"
                />
                <div className={classes.errorMsg}>
                  <ErrorMessage name="password" />
                </div>
              </div>
              
              <div className={classes.inputMain}>
                <label>Confirm New Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.inputField} ${
                    errors.confirmPassword && touched.confirmPassword ? "errorMsgLine" : null
                  }`}
                  placeholder="enter confirmPassword"
                />
                 <div className={classes.errorMsg}>
                  <ErrorMessage name="confirmPassword" />
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
                  "Save Password"
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

export default ChangePassword;
