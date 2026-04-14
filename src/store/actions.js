export const ADD_CUSTOMER = "ADD_CUSTOMER";
export const SET_CUSTOMERS = "SET_CUSTOMERS";

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer,
});

export const setCustomers = (customers) => ({
  type: SET_CUSTOMERS,
  payload: customers,
});