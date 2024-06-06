import React, { useState, useEffect, useRef } from "react";
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
import signupBanner from "../../../assets/images/signup3.png";
import logo from "../../../assets/images/logo.svg";
import upload from "../../../assets/images/upload.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const locationSchema = Yup.object().shape({
  businessAddress: Yup.string().required("Please enter your business address"),
  state: Yup.string().required("Please enter your state"),
  city: Yup.string().required("Please enter your city"),
  postalCode: Yup.string().required("Please enter your postal code"),
  area: Yup.string().required("Please enter your area"),
});
const BusinessLocation = ({setSignupData, setSignupFlow, signupFlow, signupData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => {
    setSignupFlow({...signupFlow ,  businessInfo: true , restaurantInfo : false });
  };
  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      console.log('file', file)
      setPreview(URL.createObjectURL(file));
      setFieldValue('file', file);
    }
  };

  return (
    <div className={classes.mainSignup}>
        <ToastContainer />
      <div className={classes.defaultForm}>
        <Formik
          initialValues={{ businessAddress: "", state: "" , city: "", postalCode: "", area: ""}}
          // validationSchema={locationSchema}
          onSubmit={async (values) => {
            // setSignupData(values);
            setSignupFlow({...signupFlow , restaurantInfo: false, legalInfo : true });
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
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className={classes.formHeader}>
                <div className={classes.backBtn}>
                  <button onClick={handleBack} >{`> Back`}</button>
                </div>
                <img src={logo} alt="logo" />
                <h1>
                 
                Provide <span>Business Location!</span>
                </h1>
                <p>Customers & Riders will use this information to find your store.</p>
              </div>
              <div className={classes.inputMain}>
                    <label>Select Business Address</label>
                    <Field
                      type="text"
                      name="businessAddress"
                      value={values.businessAddress}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.businessAddress && touched.businessAddress ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="businessAddress" />
                    </div>
                  </div>
                  <div className={classes.inputMain}>
                    <label>State</label>
                    <Field
                      type="text"
                      name="state"
                      value={values.state}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.state && touched.state ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="state" />
                    </div>
                  </div>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>City</label>
                    <Field
                      type="text"
                      name="city"
                      value={values.city}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.city && touched.city ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="city" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>Postal Code</label>
                    <Field
                      type="text"
                      name="postalCode"
                      value={values.postalCode}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.postalCode && touched.postalCode ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="postalCode" />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.inputMain}>
                    <label>Area</label>
                    <Field
                      type="text"
                      name="area"
                      value={values.area}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.area && touched.area ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="area" />
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
                  "Next"
                )}
              </button>
              
            </Form>
          )}
        </Formik>
      </div>
      <div className={classes.rightBanner}>
        <div className={classes.bannerHeading}>
        <div className={classes.bannerHeadingeee}>
          Increase sales <br /> with Foodie!
        </div>
        </div>
        <img src={signupBanner} alt="login banner" height="100%" />
      </div>
    </div>
  );
};

export default BusinessLocation;
