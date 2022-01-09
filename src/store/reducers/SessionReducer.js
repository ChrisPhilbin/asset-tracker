import * as actions from "../actions/SessionActions";

export const initialSessionState = {
  token: localStorage.getItem("AuthToken") || null,
  loading: false,
  hasErrors: false,
};

export default function SessionReducer(state = initialSessionState, action) {
  switch (action.type) {
    case actions.GET_TOKEN:
      return { ...state, loading: true };
    case actions.GET_TOKEN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case actions.GET_TOKEN_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actions.DELETE_TOKEN_SUCCESS:
      return { ...state, loading: false, token: null, hasErrors: false };
    case actions.DELETE_TOKEN_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
