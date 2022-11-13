import { combineReducers} from "redux";
import test from "./store/test";
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // 로컬 스토리지
// import storageSession from 'redux-persist/lib/storage/session'; // 세션 스토리지
/*const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ['login', 'modal', 'wallet']
};*/
const rootReducer = combineReducers({
  test,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export * from './store/test';