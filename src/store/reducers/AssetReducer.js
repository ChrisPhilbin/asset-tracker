import * as actions from "../actions/AssetActions";

export const initialSessionState = {
  assets: [],
  nameFilter: "",
  loading: false,
  hasErrors: false,
};

export default function AssetReducer(state = initialSessionState, action) {
  switch (action.type) {
    case actions.CREATE_NEW_ASSET:
      return { ...state, loading: true };
    case actions.CREATE_NEW_ASSET_SUCCESS:
      return {
        ...state,
        loading: false,
        assets: [...state.assets, action.payload],
      };
    case actions.CREATE_NEW_ASSET_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    case actions.GET_USER_ASSETS:
      return { ...state, loading: true, hasErrors: false };
    case actions.GET_USER_ASSETS_SUCCESS:
      return {
        ...state,
        assets: action.payload,
        loading: false,
        hasErrors: false,
      };
    case actions.GET_USER_ASSETS_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
}
