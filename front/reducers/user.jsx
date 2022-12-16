// 유저
export const initialState = {
  inLoggedIn: false,
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
        loginSuccessAction(res.data);
      })
      .catch((err) => {
        loginFailedAction(err);
      });
  };
};

export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};
export const loginSuccessAction = (data) => {
  return {
    type: "LOG_IN_SUCCESS",
    data,
  };
};
export const loginFailedAction = (data) => {
  return {
    type: "LOG_IN_FAILED",
    data,
  };
};
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
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
