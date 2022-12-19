import { all, call, fork, put, take } from "redux-saga/effects";
import axios from "axios";
//generator  yield는 중단점 (대충 이해한 느낌) 함수를 생성하고
//실행시키고 싶은 코드 밑에 yield을 적는다 뒤에 값을 적게 되면 value로 뒤의 값이 나오게 되는데
//이와 같은 성질을 이용하여
// let i = 0;
// const generator = function* () {
//   while (true) {
//     yield i++;
//   }
// };
// 이런식으로 만들게 되면 함수를 호출할때마다 i의 value값이 나오게 된다.
// 개인적인 생각)) 이해를 100%하지 못했지만 조회수같은 것을 뽑거나 할때 쓰이면 좋을 것 같다는 생각이 든다.
function logInAPI(data) {
  return axios.post("/api/login", data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILED",
      data: err.response.data,
    });
  }
}
// logout
function logOutAPI() {
  return axios.post("/api/logout");
}
function* logOut() {
  try {
    const result = yield call(logOutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILED",
      data: err.response.data,
    });
  }
}
// addpost
function addPostAPI(data) {
  return axios.post("/api/post", data);
}
function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: "POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "POST_FAILED",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield take("LOG_IN_REQUEST", logIn);
}
function* watchLogOut() {
  yield take("LOG_OUT_REQUEST", logOut);
}
function* watchAddPost() {
  yield take("ADD_POST_REQUEST", addPost);
}
export default function* rootSage() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
