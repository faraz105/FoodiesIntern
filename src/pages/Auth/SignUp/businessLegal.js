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
import signupBanner from "../../../assets/images/signup4.png";
import logo from "../../../assets/images/logo.svg";
import upload from "../../../assets/images/upload.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const legalSchema = Yup.object().shape({
  taxInfo: Yup.string().required("Please select your Tax Info"),
  taxNum: Yup.string().required("Please enter your tax number"),
  IdType: Yup.string().required("Please select your proof type"),
  IdNum: Yup.string().required("Please enter your ID number"),
  isLicense: Yup.string().required("Please choose license status"),
  isStockExchange: Yup.string().required("Please choose stock exchange status"),
});
const BusinessLegal = ({setSignupData, setSignupFlow, signupFlow, signupData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => {
    setSignupFlow({...signupFlow ,  restaurantInfo: true , legalInfo : false });
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
          initialValues={{ taxInfo: "", taxNum: "" , IdType: "", IdNum: "", isLicense: "", isStockExchange: ""}}
          // validationSchema={legalSchema}
          onSubmit={async (values) => {
            // setSignupData(values);
            setSignupFlow({...signupFlow , legalInfo: false, accountInfo : true });
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
                Provide <span>Legal Stuff!</span>
                </h1>
                <p>We need to verify your business.</p>
              </div>
              <div className={classes.inputMain}>
                    <label>Tax Information</label>
                    <div className={classes.inputFieldSelect}>
                    <Field
                      as="select"
                      name="taxInfo"
                      value={values.taxInfo}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.taxInfo && touched.taxInfo ? "errorMsgLine" : null
                      }`}
                      placeholder="Select option"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="restaurant">Tax Included</option>
                      <option value="cafe">Not Included</option>
                    </Field>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="taxInfo" />
                    </div>
                  </div>
                  <div className={classes.inputMain}>
                    <label>Tax Number</label>
                    <Field
                      type="text"
                      name="taxNum"
                      value={values.taxNum}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.taxNum && touched.taxNum ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="taxNum" />
                    </div>
                  </div>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                <div className={classes.inputMain}>
                    <label>ID Proof Type</label>
                    <div className={classes.inputFieldSelect}>
                    <Field
                      as="select"
                      name="IdType"
                      value={values.IdType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.IdType && touched.IdType ? "errorMsgLine" : null
                      }`}
                      placeholder="Select option"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="restaurant">ID</option>
                      <option value="cafe">Other</option>
                    </Field>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="IdType" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>Enter ID Number</label>
                    <Field
                      type="text"
                      name="IdNum"
                      value={values.IdNum}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.IdNum && touched.IdNum ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="IdNum" />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className={classes.inputMain}>
                    <label>Do you have an operating license?</label>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" onBlur={handleBlur}  onChange={handleChange}  name="isLicense" value="yes" />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" onBlur={handleBlur}  onChange={handleChange}  name="isLicense" value="no" />
                        No
                      </label>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="isLicense" />
                    </div>
              </div>
              <div className={classes.inputMain}>
                    <label>Is your business part of listed company in stock exchange?</label>
                    <div role="group" aria-labelledby="my-radio-group">
                      <label>
                        <Field type="radio" onBlur={handleBlur}  onChange={handleChange}  name="isStockExchange" value="yes" />
                        Yes
                      </label>
                      <label>
                        <Field type="radio" onBlur={handleBlur}  onChange={handleChange}  name="isStockExchange" value="no" />
                        No
                      </label>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="isStockExchange" />
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

export default BusinessLegal;
