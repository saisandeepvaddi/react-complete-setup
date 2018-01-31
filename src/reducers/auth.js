const INITIAL_STATE = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEMO":
      return state;

    default:
      return state;
  }
};

export default authReducer;
