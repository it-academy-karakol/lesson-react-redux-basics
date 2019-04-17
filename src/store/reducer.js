// Step 2. Create reducer
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        counter: state.counter + action.value
      };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
