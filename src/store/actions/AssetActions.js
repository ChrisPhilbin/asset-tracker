export const CREATE_NEW_ASSET = "CREATE_NEW_ASSET";
export const CREATE_NEW_ASSET_SUCCESS = "CREATE_NEW_ASSET_SUCCESS";
export const CREATE_NEW_ASSET_FAILURE = "CREATE_NEW_ASSET_FAILURE";

export const createNewAsset = () => ({
  type: CREATE_NEW_ASSET,
});

export const createNewAssetSuccess = (newAsset) => ({
  type: CREATE_NEW_ASSET_SUCCESS,
  payload: newAsset,
});

export const createNewAssetFailure = (error) => ({
  type: CREATE_NEW_ASSET_FAILURE,
  payload: error,
});

export const fetchCreateNewAssetAsync = (assetData) => {
  return async (dispatch) => {
    dispatch(createNewAsset());
    try {
    } catch (error) {
      dispatch(createNewAssetFailure(error));
    }
  };
};
