import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";
import AssetReducer from "./AssetReducer";

const rootReducer = combineReducers({
  session: SessionReducer,
  assets: AssetReducer,
});

export default rootReducer;
