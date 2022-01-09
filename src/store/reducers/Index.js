import { combineReducers } from "redux";
import SessionReducer from "./SessionReducer";
import AssetReducer from "./AssetReducer";
import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  session: SessionReducer,
  assets: AssetReducer,
  filter: FilterReducer,
});

export default rootReducer;
