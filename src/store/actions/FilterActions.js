export const FILTER_ASSETS = "FILTER_ASSETS";

export const updateAssets = (searchTerm) => ({
  type: FILTER_ASSETS,
  payload: searchTerm,
});

export const searchAssets = (searchTerm) => {
  return (dispatch) => {
    dispatch(updateAssets(searchTerm));
  };
};
