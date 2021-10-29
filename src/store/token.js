import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const initialToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

export const initialState = {
  token: initialToken,
};

const checkToken = createSlice({
  name: "token",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      console.log("action-payload: ", action.payload);
      state.token = action.payload;
      localStorage.setItem("token", action.payload.token);
    },
    logoutSuccess: (state, action) => {
      console.log("action-payload: ", action.payload);
      state.token = "";
      localStorage.removeItem("token");
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
