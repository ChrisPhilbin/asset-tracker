import * as actions from "../actions/AssetActions";

export const initialSessionState = {
  assets: [],
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
    default:
      return state;
  }
}
