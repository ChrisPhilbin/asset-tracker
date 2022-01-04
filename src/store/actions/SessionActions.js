export const GET_TOKEN = "GET_TOKEN";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";
export const GET_TOKEN_FAILURE = "GET_TOKEN_FAILURE";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS";
export const CREATE_NEW_USER_FAILURE = "CREATE_NEW_USER_FAILURE";

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
        `https://immense-headland-94271.herokuapp.com/https://us-central1-asset-tracker-15d95.cloudfunctions.net/api/login`,
        {
          method: "POST",
          mode: "cors",
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

export const createNewUser = () => ({
  type: CREATE_NEW_USER,
});

export const createNewUserSuccess = (token) => ({
  type: CREATE_NEW_USER_SUCCESS,
  payload: token,
});

export const createNewUserFailure = (error) => ({
  type: CREATE_NEW_USER_FAILURE,
  payload: error,
});

export const fetchCreateAccountAndGetTokenAsync = (userData) => {
  return async (dispatch) => {
    dispatch(createNewUser());
    try {
    } catch (error) {
      dispatch(createNewUserFailure(error));
    }
  };
};
