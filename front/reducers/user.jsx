// 유저
export const initialState = {
  inLoggedIn: false, //로그인이 되어있나?
  isLoggingIn: false, // 로그인 시도
  isLoggingOut: false, // 로그아웃 시도
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutFailed: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpFailed: null,
  user: null,
  signUpData: {},
  loginData: {},
};
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILED = "LOG_IN_FAILED";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILED = "LOG_OUT_FAILED";

export const SIGN_OUT_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILED = "SIGN_OUT_FAILED";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...action.data,
  nickname: "lgh",
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
});

// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(loginRequestAction());
    axios
      .post("@@@/@@@")
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailedAction(err));
      });
  };
};

export const loginRequestAction = (data) => {
  console.log("로그인요청");
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  console.log("로그아웃 요청");
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const logoutSuccessAction = () => {
  console.log("로그인 성공");
  return {
    type: LOG_OUT_SUCCESS,
  };
};
export const logoutFailedAction = () => {
  console.log("로그인 실패");
  return {
    type: LOG_OUT_FAILED,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      console.log("flag1");
      return {
        ...state,
        logInLoading: true,
        logInError: null,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        user: dummyUser(action.data),
      };
    case LOG_IN_FAILED:
      return {
        ...state,
        logInLoading: false,
        isLoggedIn: false,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        user: null,
      };
    case LOG_OUT_FAILED:
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
