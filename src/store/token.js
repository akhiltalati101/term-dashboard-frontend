import { createSlice } from "@reduxjs/toolkit";
import { populateDeadline } from "./deadlines";
import TokenService from "../utils/tokenHelper";
const axios = require("axios");

const {
  getLocalRefreshToken,
  getLocalAccessToken,
  setToken,
  setRefreshToken,
  removeToken,
  removeRefreshToken,
} = TokenService;

const initialToken = getLocalAccessToken()
const initialRefreshToken = getLocalRefreshToken()

export const initialState = {
  token: initialToken,
  refreshToken: initialRefreshToken,
};

const checkToken = createSlice({
  name: "token",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("action-payload: ", action.payload);
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken
      setToken(action.payload.token)
      setRefreshToken(action.payload.refreshToken)
    },
    logoutSuccess: (state, action) => {
      console.log("action-payload: ", action.payload);
      state.token = "";
      removeToken();
      removeRefreshToken();
      console.log("logout state", state);
      console.log("logout localstorage", localStorage);
    },
  },
});
export const { loginSuccess, logoutSuccess } = checkToken.actions;
export default checkToken.reducer;

export const login =
  ({ username, password }) =>
  async (dispatch) => {
    var formValues = new FormData();
    formValues.append("username", username);
    formValues.append("password", password);
    axios({
      method: "post",
      url: "/user/login/",
      data: formValues,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log("response: ", response);
        dispatch(
          loginSuccess({
            username: username,
            token: response.data.access_token,
            refreshToken: response.data.refresh_token
          })
        );
      })
      .catch(function (response) {
        //handle error
        console.log("Error ", response);
      });
  };

export const logout = () => async (dispatch) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    console.log("logout action fired");
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
