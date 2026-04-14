import { takeEvery, put, call } from "redux-saga/effects";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_CUSTOMER, setCustomers } from "./actions";

const KEY = "CUSTOMERS";

function* saveCustomerSaga(action) {
  try {
    const existing = yield call(AsyncStorage.getItem, KEY);
    const customers = existing ? JSON.parse(existing) : [];

    const updated = [...customers, action.payload];

    yield call(AsyncStorage.setItem, KEY, JSON.stringify(updated));
    yield put(setCustomers(updated));
  } catch (e) {
    console.log(e);
  }
}

function* loadCustomersSaga() {
  try {
    const data = yield call(AsyncStorage.getItem, KEY);
    if (data) {
      yield put(setCustomers(JSON.parse(data)));
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield loadCustomersSaga();
  yield takeEvery(ADD_CUSTOMER, saveCustomerSaga);
}