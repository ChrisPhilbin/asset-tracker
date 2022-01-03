export const GET_TOKEN = "GET_TOKEN";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILURE = "GET_TOKEN_FAILURE";

export const getToken = () => ({
  type: GET_TOKEN,
});

export const getTokenSuccess = (token) => ({
  type: GET_TOKEN_SUCCESS,
  payload: token,
});

export const getTokenFailure = () => ({
  type: GET_TOKEN_FAILURE,
});

export const fetchNewTokenAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(getPosts());
  };
};
