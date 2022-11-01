import { combineReducers } from "redux";
import testRedux from "@store/test/testRedux";

const rootReducer = combineReducers({
  testRedux
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;