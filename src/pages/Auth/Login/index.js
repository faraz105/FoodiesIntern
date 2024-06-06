import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import { userLogin } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN } from "../../../constants";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import loginBanner from "../../../assets/images/loginBanner.png";
import logo from "../../../assets/images/logo.svg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email")
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email"
    ),
  password: Yup.string().required("Please enter your password"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className={classes.mainLogin}>
      <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            setLoading(true);
            navigate("/dashboard");
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
                <h1>
                  Welcome Back,<span>Sign In!</span>
                </h1>
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
                <div className="errorMsg">
                  <ErrorMessage name="email" />
                </div>
              </div>
              <div className={classes.inputMain}>
                <label>Password</label>
                <Field
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${classes.inputField} ${
                    errors.password && touched.password ? "errorMsgLine" : null
                  }`}
                  placeholder="enter password"
                />
                <div className="errorMsg">
                  <ErrorMessage name="password" />
                </div>
                {/* <button
                  type="button"
                  className="password-toggle-button logineye"
                  onClick={handlePasswordToggle}
                >
                  {passwordVisible ? (
                    <RemoveRedEyeIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </button>  */}
                <div className={classes.rememberForgot}>
                  <div className={classes.remCheckbox}>
                    <Field type="checkbox" name="remember" value="remember" />
                    Remember me
                  </div>

                  <Link to="/resetPassword">
                    <span className={classes.forgotStyle}>
                      Forgot Password?
                    </span>
                  </Link>
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
                  "Sign In"
                )}
              </button>
              <div className={classes.signupLink}>
                <div className={classes.signupRow}>
                  <span>Don't have account? </span>
                  <Link to="/signup" className={classes.linkSignup}>
                    Sign Up{" "}
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
        <img src={loginBanner} alt="login banner" height="100%" />
      </div>
    </div>
  );
};

export default Login;
