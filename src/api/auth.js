import axios from "../utilities/index";

export const userLogin = (data) => {
  return axios.post("/login", data);
};
export const userSignUp = (data) => {
  return axios.post("/createadmin", data);
};
export const forgotPass = (data) => {
  return axios.post("/users/forgot-password", data);
};
export const resendEmail = (data) => {
  return axios.post("/users/email-verification/resend-email", data);
};
