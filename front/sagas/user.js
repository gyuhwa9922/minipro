import axios from "axios";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOG_IN_FAILED,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILED,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILED,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/user";

function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILED,
      error: err.response.data,
    });
  }
}

// logout
function logOutAPI() {
  return axios.post("/api/logout");
}
function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILED,
      error: err.response.data,
    });
  }
}
function signUpAPI(data) {
  return axios.post("/api/signUp", data);
}
function* signUp() {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
      // data: action.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILED,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  console.log("로그인요청");
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  console.log("로그아웃 요청");
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  console.log("회원가입 요청");
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
