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

export const getTokenFailure = (error) => ({
  type: GET_TOKEN_FAILURE,
  payload: error,
});

export const fetchNewTokenAsync = (userData) => {
  return async (dispatch) => {
    dispatch(getToken());
    try {
      const response = await fetch(
        `http://localhost:5001/asset-tracker-15d95/us-central1/api/login`,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        const token = await response.json();
        console.log(token, "token from successful auth");
        dispatch(getTokenSuccess(token));
      }
    } catch (error) {
      console.log(error, "error signing in");
      dispatch(getTokenFailure(error));
    }
  };
};
