import axios from "axios";
import { all, delay, fork, put, takeLatest } from "redux-saga/effects";
import shortid from "shortid";
import {
  ADD_COMMENT_FAILED,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILED,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../reducers/post";
import { ADD_POST_TO_ME } from "../reducers/user";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortid.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILED,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.post("/api/post", data);
}

function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    const id = shortid.generate();
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILED,
      data: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  /* 몇번째(id number) 게시물의 commnet를 axios통신을 통해 가져옴 */
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILED,
      data: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddCommnet() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddCommnet)]);
}
