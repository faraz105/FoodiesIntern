import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./Reset.module.scss";
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

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email"
    ),
  password: Yup.string().required("Please enter your password"),
});
const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={classes.mainResetPassword}>
      <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ email: "" }}
          // validationSchema={resetPasswordSchema}
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
                <h1>Reset Password</h1>
                <p>Please Enter your Email address to request <br/> a Password reset!</p>
              </div>

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
                {/* <div className="errorMsg">
                  <ErrorMessage name="email" />
                </div> */}
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
                  "Sent OTP!"
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

export default ResetPassword;
