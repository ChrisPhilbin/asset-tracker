import * as actions from "../actions/FilterActions";

export const initialFilterState = {
  nameFilter: "",
};

export default function FilterReducer(state = initialFilterState, action) {
  switch (action.type) {
    case actions.FILTER_ASSETS:
      return { ...state, nameFilter: action.payload };
    default:
      return state;
  }
}
