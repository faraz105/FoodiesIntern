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
import signupBanner from "../../../assets/images/signup2.png";
import logo from "../../../assets/images/logo.svg";
import upload from "../../../assets/images/upload.png";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const infoSchema = Yup.object().shape({
  businessName: Yup.string().required("Please enter business name"),
  businessType: Yup.string().required("Please select business type"),
  businessCategory: Yup.string().required("Please select business category"),
  branches: Yup.string().required("Please enter branches"),
  // phone: Yup.string().required("Please enter your phone"),
  file: Yup.mixed().required("Please select business logo"),
});
const BusinessInfo = ({setSignupData, setSignupFlow, signupFlow, signupData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleBack = () => {
    setSignupFlow({...signupFlow ,  profileInfo: true , businessInfo : false });
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
          initialValues={{ businessName: "", businessType: "" , businessCategory: "", branches: "", 
          // phone: "", isPhoneSame: "" ,
           file: ""}}
          // validationSchema={infoSchema}
          onSubmit={async (values) => {
            // setSignupData(values);
            setSignupFlow({...signupFlow , businessInfo: false, restaurantInfo : true });
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
                Set up your <span>Business!</span>
                </h1>
              </div>
              <Grid container spacing={1}>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>Business Name</label>
                    <Field
                      type="text"
                      name="businessName"
                      value={values.businessName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.businessName && touched.businessName ? "errorMsgLine" : null
                      }`}
                      placeholder="enter first name"
                    />
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="businessName" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6}>
                  <div className={classes.inputMain}>
                    <label>Business Type</label>
                    <div className={classes.inputFieldSelect}>
                    <Field
                      as="select"
                      name="businessType"
                      value={values.businessType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.businessType && touched.businessType ? "errorMsgLine" : null
                      }`}
                      placeholder="Select option"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe">Cafe</option>
                    </Field>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="businessType" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={8}>
                  <div className={classes.inputMain}>
                    <label>Business Category</label>
                   
                    <div className={classes.inputFieldSelect}>
                    <Field
                      as="select"
                      name="businessCategory"
                      value={values.businessCategory}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField}  ${
                        errors.businessCategory && touched.businessCategory ? "errorMsgLine" : null
                      }`}
                      placeholder="Select option"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="cafe">Cafe</option>
                    </Field>
                    </div>
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="businessCategory" />
                    </div>
                  </div>
                </Grid>
                <Grid item lg={4}>
                  <div className={classes.inputMain}>
                    <label>Branches</label>
                    <Field
                      type="text"
                      name="branches"
                      value={values.branches}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={`${classes.inputField} ${
                        errors.branches && touched.branches ? "errorMsgLine" : null
                      }`}
                      placeholder="enter branches"
                    />
                    
                    <div className={classes.errorMsg}>
                      <ErrorMessage name="branches" />
                    </div>
                  </div>
                </Grid>
              </Grid>
              {/* <div className={classes.inputMain}>
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
              <div className={classes.verifyCheckbox}>
                    <Field type="checkbox" name="isPhoneSame" value="remember" />
                    My Business Phone is the same as my Mobile Number.
              </div> */}
              <div className={classes.uploadMain}>
                <label>Upload Logo</label>

                <input
                      id="file"
                      name="file"
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      style={{ display: 'none' }}
                      onChange={(event) => handleImageChange(event, setFieldValue)}
                    />
                    <div onClick={() => fileInputRef.current.click()}  className={classes.uploadField}>
                      {preview && <><img src={preview} alt="Uploaded" style={{ width: '100px' }} /> <br/></>}

                      <img src={upload} alt="Placeholder" style={{ cursor: 'pointer' }} />
                        <p> <span>Upload</span> png, jpg <br/>up to 1mb only</p>
                    </div>
                <div className={classes.errorMsg}>
                  <ErrorMessage name="file" />
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

export default BusinessInfo;
