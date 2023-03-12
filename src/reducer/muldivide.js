const intialState = 1;
const mulDivNumber = (state = intialState, action) => {
  switch (action.type) {
    case "Multiply":
      return state * 5;

      break;
    case "Divide":
      return state / 5;
      break;

    default:
      return state;
      break;
  }
};
export default mulDivNumber;
