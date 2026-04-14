import { ADD_CUSTOMER, SET_CUSTOMERS } from "./actions";

const initialState = {
  customers: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };

    case SET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    default:
      return state;
  }
}