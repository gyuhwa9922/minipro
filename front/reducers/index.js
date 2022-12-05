import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

// (이전상태 , 액션 ) = > 다음상태
// 리덕스 리듀서를 작성할 때 가장 일반적인 용례를 단순화 하는 유틸리티 함수입니다.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
