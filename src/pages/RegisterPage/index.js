import React, { useState, useEffect, forwardRef } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
// import Button from "../../components/Button/Button";
import classes from "./register.module.scss";
// import login from "../../assets/images/login.png";
// import error from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";
import { userSignUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Snackbar from "@mui/material/Snackbar";

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



  return (
    <div className={classes.main__container}>
      <ToastContainer />
      {/* <div className={classes.left__banner}>
        <img src={login} alt="sideLogo" height="100%" />
      </div> */}
      <div className={classes.right__side}>
        <Formik
          initialValues={{ username: "", password: "" }}
          // validationSchema={loginSchema}
          onSubmit={async (values) => {
            console.log("values",values)
            try {
              const res = await userSignUp(values);
         
                setTimeout(() => {
                  navigate("/login");
                }, 2000);
              
            } catch (error) {
              console.log(error)
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
              <div className={classes.form__header}>
                Sign up
              </div>

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
                  className={`${classes.input__field} ${errors.username && touched.username ? "errorMsgLine" : null
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
                  className={`${classes.input__field} ${errors.password && touched.password ? "errorMsgLine" : null
                    }`}
                  placeholder="Enter Your Password"
                />
             
              </div>

              <button
                  type="submit" >Register</button>
            </Form>
          )}
        </Formik>

        <div className={classes.footer__main}>
          <div>
            <span>Already have account? </span>
            <Link to="/login" className={classes.link__signup}>
              Login{" "}
            </Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Login;
