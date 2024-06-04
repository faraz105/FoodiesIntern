import React, { useState, useEffect, forwardRef } from "react";
import classes from "./SignUp.module.scss";
import { userLogin } from "../../../api/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { LOGIN } from "../../../constants";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import ProfileInfo from "./profileInfo";
import BusinessInfo from "./businessInfo";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(false);
  const [signupData, setSignupData] = useState();
  const [signupFlow, setSignupFlow] = useState(
    {
      profileInfo : true,
      businessInfo : false,
      restaurantInfo : false,
      legalInfo : false,
      accountInfo : false,

    }
  );
console.log("signupFlow",signupFlow)
console.log("signupData",signupData)

  return (
    <div className={classes.containerSignup}>
      {signupFlow?.profileInfo && <ProfileInfo setSignupData={setSignupData} setSignupFlow={setSignupFlow}  signupFlow={signupFlow} signupData={signupData} />}
      {signupFlow?.businessInfo && <BusinessInfo setSignupData={setSignupData} setSignupFlow={setSignupFlow}  signupFlow={signupFlow} signupData={signupData} />}
      {signupFlow?.restaurantInfo && <ProfileInfo />}
      {signupFlow?.legalInfo && <ProfileInfo />}
      {signupFlow?.accountInfo && <ProfileInfo />}
    </div>
  );
};

export default SignUp;
