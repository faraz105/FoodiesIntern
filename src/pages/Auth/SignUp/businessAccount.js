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
import signupBanner from "../../../assets/images/signup5.png";
import logo from "../../../assets/images/logo.svg";
import upload from "../../../assets/images/upload.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const accountSchema = Yup.object().shape({
  bankName: Yup.string().required("Please enter your bank name"),
  accountTitle: Yup.string().required("Please enter your bank account title"),
  ibanNum: Yup.string().required("Please enter your IBAN number  "),
});
const BusinessAccount = ({setSignupData, setSignupFlow, signupFlow, signupData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => {
    setSignupFlow({...signupFlow ,  legalInfo: true , accountInfo : false });
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
          initialValues={{ bankName: "", accountTitle: "" , ibanNum: ""}}
          // validationSchema={accountSchema}
          onSubmit={async (values) => {
            setSignupData(values);
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
            setFieldValue
          }) => (
            <Form onSubmit={handleSubmit}>
              <div className={classes.formHeader}>
                <div className={classes.backBtn}>
                  <button onClick={handleBack} >{`> Back`}</button>
                </div>
                <img src={logo} alt="logo" />
                <h1>
                 
                 Link your <span>Bank Account! </span>
                </h1>
                <p>Please link your bank account to receive payments, your details are secure & encrypted with us.</p>
              </div>
            
                  <div className={classes.inputMain}>
                    <label>Bank Name</label>
                    <Field
                      type="text"
                      name="bankName"
                      value={values.bankName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.bankName && touched.bankName ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="bankName" />
                    </div>
                  </div>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                <div className={classes.inputMain}>
                    <label>Bank Account Title</label>
                    <Field
                      type="text"
                      name="accountTitle"
                      value={values.accountTitle}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.accountTitle && touched.accountTitle ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="accountTitle" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>IBAN</label>
                    <Field
                      type="text"
                      name="ibanNum"
                      value={values.ibanNum}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.ibanNum && touched.ibanNum ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="ibanNum" />
                    </div>
                  </div>
                </Grid>
              </Grid>
              
             
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
                  "Go to Dashbaord!"
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

export default BusinessAccount;
