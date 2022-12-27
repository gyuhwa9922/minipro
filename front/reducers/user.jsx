// 유저
export const initialState = {
  inLoggedIn: false, //로그인이 되어있나?
  isLoggingIn: false, // 로그인 시도
  isLoggingOut: false, // 로그아웃 시도
  user: null,
  signUpData: {},
  loginData: {},
};

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
    type: "LOG_IN_REQUEST",
    data,
  };
};

// export const loginSuccessAction = (data) => {
//   return {
//     type: "LOG_IN_SUCCESS",
//     data,
//   };
// };
// export const loginFailedAction = (data) => {
//   return {
//     type: "LOG_IN_FAILED",
//     data,
//   };
// };
export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

export const logoutSuccessAction = () => {
  return {
    type: "LOG_OUT_SUCCESS",
  };
};
export const logoutFailedAction = () => {
  return {
    type: "LOG_OUT_FAILED",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      console.log("flag1");
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: { ...action.data, nickname: "lgh" },
      };
    case "LOG_IN_FAILED":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };
    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
      };
    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        user: null,
      };
    case "LOG_OUT_FAILED":
      return {
        ...state,
        isLoggingOut: false,
      };
    default:
      return state;
  }
};

export default reducer;
