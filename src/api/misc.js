import axios from "../utilities/index";

export const getAllAccounts = (headers) => {
  return axios.get(`/accounts/get-all-accounts`,headers);
};

export const getAllCards = ( data, headers) => {
  return axios.post(`/cards/get-all-cards-paginate`, data ,headers );
};

export const getCardDetail = (  id , headers) => {
  return axios.get(`/cards/card/${id}` ,headers );
};