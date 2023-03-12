import { combineReducers } from "redux";
import changeTheNumber from "./updown";
import mulDivNumber from "./muldivide";

export const rootReducer = combineReducers({
  changeTheNumber,
  mulDivNumber,
});
