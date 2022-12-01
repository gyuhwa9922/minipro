const initialState = {
  name: "lgh",
  age: 24,
  password: "qwer1234",
};
const ChangeNickname = {
  type: "CHAGE_NICKNAME",
  data: "gyuhwa",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHAGE_NICKNAME":
      return {
        ...state,
        name: action.data,
      };
  }
};

export default rootReducer;
