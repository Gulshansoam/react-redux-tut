const intialState = 0;
const changeTheNumber = (state = intialState, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;

      break;
    case "Decrement":
      return state - 1;

      break;

    default:
      return state;
      break;
  }
};
export default changeTheNumber;
