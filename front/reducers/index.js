import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";

const initialState = {
  user: {},
  post: {},
};
export const loginAction = (data) => {
  return {
    type: "LOG_IN",
    data,
  };
};
export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};
const ChangeNickname = (data) => {
  return {
    type: "CHAGE_NICKNAME",
    data,
  };
};
// (이전상태 , 액션 ) = > 다음상태
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    case "CHAGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      };

    default:
      return state;
  }
};

export default rootReducer;
