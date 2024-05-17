import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN } from "../../constants";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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
  // const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={classes.mainContainer}>
      <ToastContainer />
      {/* <div className={classes.left__banner}>
        <img src={login} alt="sideLogo" height="100%" />
      </div> */}
      <div className={classes.right__side}>
        <Formik
          initialValues={{ username: "", password: "" }}
          // validationSchema={loginSchema}
          onSubmit={async (values) => {
            setLoading(true);
            try {
              const res = await userLogin(values);
              if (res?.status == 200) {
                dispatch({
                  type: LOGIN,
                  payload: res.data,
                });
                localStorage.setItem("userData", JSON.stringify(res.data));
                setTimeout(() => {
                  setLoading(false);
                  navigate("/");
                }, 2000);
              }
              
            } catch (error) {
              setErrorMsg(error.response.data.error.message);
            }
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
              <div className={classes.form__header}>Login</div>

              <div className={classes.input__main}>
                <label>
                  User Name <span>*</span>
                </label>
                <Field
                  type="text"
                  name="username"
                  value={values.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className={`${classes.input__field} ${
                    errors.username && touched.username ? "errorMsgLine" : null
                  }`}
                  placeholder="Enter Your User Name"
                />
                {/* <div className="errorMsg">
                  <ErrorMessage name="email" />
                </div> */}
              </div>
              <div className={classes.input__main}>
                <label>
                  Password <span>*</span>
                </label>
                <Field
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${classes.input__field} ${
                    errors.password && touched.password ? "errorMsgLine" : null
                  }`}
                  placeholder="Enter Your Password"
                />
                {/* <button
                  type="button"
                  className="password-toggle-button logineye"
                  onClick={handlePasswordToggle}
                >
                  {passwordVisible ? (
                    <RemoveRedEyeIcon />
                  ) : (
                    <RemoveRedEyeIcon />
                  )}
                </button> */}

                {/* <Link to="/ForgotPage">
                  <span className={classes.forgot__style}>Forgot Password</span>
                </Link> */}
              </div>

              <button type="submit">
                {loading ? (
                  <Box sx={{ display: "flex", alignItem:"center", justifyContent:"center" }}>
                    <CircularProgress color="inherit"/>
                  </Box>
                ) : (
                  "Login"
                )}
              </button>
            </Form>
          )}
        </Formik>

        <div className={classes.footer__main}>
          <div>
            <span>Don't have account? </span>
            <Link to="/signup" className={classes.link__signup}>
              Sign Up{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
