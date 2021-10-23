import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  token: 0,
};

const checkToken = createSlice({
  name: "token",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.token = "";
    },
  },
});
export const { loginSuccess, logoutSuccess } = checkToken.actions;
export default checkToken.reducer;

export const login = ({ username, password }) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
}

export const signup = ({ username, password }) => async dispatch => {
  try {
    // const res = await api.post('/api/auth/login/', { username, password })
    dispatch(loginSuccess({username}));
  } catch (e) {
    return console.error(e.message);
  }
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}


