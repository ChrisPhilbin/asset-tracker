export const CREATE_NEW_ASSET = "CREATE_NEW_ASSET";
export const CREATE_NEW_ASSET_SUCCESS = "CREATE_NEW_ASSET_SUCCESS";
export const CREATE_NEW_ASSET_FAILURE = "CREATE_NEW_ASSET_FAILURE";
export const GET_USER_ASSETS = "GET_USER_ASSETS";
export const GET_USER_ASSETS_SUCCESS = "GET_USER_ASSETS_SUCCESS";
export const GET_USER_ASSETS_FAILURE = "GET_USER_ASSETS_FAILURE";

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

export const fetchCreateNewAssetAsync = (assetData, token) => {
  return async (dispatch) => {
    dispatch(createNewAsset());
    try {
      const response = await fetch(
        `https://immense-headland-94271.herokuapp.com/https://us-central1-asset-tracker-15d95.cloudfunctions.net/api/assets/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(assetData),
        }
      );
      if (response.ok) {
        const newAsset = await response.json();
        dispatch(createNewAssetSuccess(newAsset));
      }
    } catch (error) {
      dispatch(createNewAssetFailure(error));
    }
  };
};

export const getUserAssets = () => ({
  type: GET_USER_ASSETS,
});

export const getUserAssetsSuccess = (userAssetsArray) => ({
  type: GET_USER_ASSETS_SUCCESS,
  payload: userAssetsArray,
});

export const getUserAssetsFailure = (error) => ({
  type: GET_USER_ASSETS_FAILURE,
  payload: error,
});

export const fetchUserAssetsAsync = (authToken) => {
  return async (dispatch) => {
    dispatch(getUserAssets());
    try {
      const response = await fetch(
        `https://immense-headland-94271.herokuapp.com/https://us-central1-asset-tracker-15d95.cloudfunctions.net/api/assets`,
        {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${authToken}`,
          },
        }
      );
      if (response.ok) {
        const userAssets = await response.json();
        dispatch(getUserAssetsSuccess(userAssets));
      }
    } catch (error) {
      dispatch(getUserAssetsFailure(error));
    }
  };
};
