import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";

// redux middle
const configureStore = () => {
  const middlewares = [thunkMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  // store.dispatch({
  //   type: `CHAGE_NICKNAME`,
  //   data: "goodman",
  // });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
