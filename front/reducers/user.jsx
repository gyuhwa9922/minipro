// 유저
export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
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

export const SIGN_UP_REQUEST = "SIGN_OUT_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_OUT_FAILED";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILED = "CHANGE_NICKNAME_FAILED";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILED = "FOLLOW_FAILED";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILED = "UNFOLLOW_FAILED";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const
// export const
const dummyUser = (data) => ({
  ...data,
  nickname: "lgh",
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [],
  Followers: [],
});

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
export const loginSuccessAction = (data) => {
  console.log("로그인요청");
  return {
    type: LOG_IN_SUCCESS,
    data,
  };
};
export const loginFailedAction = (data) => {
  console.log("로그인요청");
  return {
    type: LOG_IN_FAILED,
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
  console.log("로그아웃 성공");
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
      return {
        ...state,
        logInLoading: true,
        logInDone: false,
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
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        user: null,
      };
    case LOG_OUT_FAILED:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      };
    case SIGN_UP_FAILED:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      };
    case CHANGE_NICKNAME_REQUEST:
      return {
        ...state,
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null,
      };
    case CHANGE_NICKNAME_SUCCESS:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameDone: true,
      };
    case CHANGE_NICKNAME_FAILED:
      return {
        ...state,
        changeNicknameLoading: false,
        changeNicknameError: action.error,
      };
    case ADD_POST_TO_ME:
      return {
        ...state,
        user: {
          ...state.user,
          Posts: [{ id: action.data }, ...state.user.Posts],
        },
      };
    default:
      return state;
  }
};

export default reducer;
