import { TramRounded } from "@material-ui/icons";
import {
  createAsyncThunk,
  createSlice,
  createSelector,
  PayloadAction,
} from "@reduxjs/toolkit";
const axios = require("axios");

export const getDeadlines = createAsyncThunk(
  "user/deadlines",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
        ? localStorage.getItem("token")
        : null;
      if (token && token !== null) {
        const response = await axios({
          method: "get",
          url: "/user/deadlines/",
          headers: { Authorization: `Bearer ${token}` },
        })
          .then(function (response) {
            //handle success
            console.log("deadline get response: ", response);
            return response.data.deadlines;
          })
          .catch(function (response) {
            //handle error
            console.log("Error ", response);
          });
        return await response;
      }
    } catch (e) {
      return thunkAPI.rejectWithValue({ error: e.message });
    }
  }
);

const updateDeadline = createSlice({
  name: "deadlines",
  initialState: {
    deadlines: [],
    loading: false,
    hasError: false,
  },
  reducers: {
    addDeadlineSuccess: (state) => {
      console.log("add deadline action.");
    },
    deleteDeadlineSuccess: (state) => {
      console.log("delete deadline action");
    },
    populateDeadlineSuccess: (state, action) => {
      console.log("populate deadlines payload:", action.payload);
      state.deadlines = action.payload.deadlines;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDeadlines.pending, (state) => {
      state.deadlines = [];
      state.loading = true;
    });
    builder.addCase(getDeadlines.fulfilled, (state, { payload }) => {
      console.log("builder success ", payload);
      state.deadlines = payload;
      state.loading = false;
      state.hasError = false;
    });
    builder.addCase(getDeadlines.rejected, (state, action) => {
      state.loading = false;
      state.hasError = true;
    });
  },
});

export const {
  addDeadlineSuccess,
  deleteDeadlineSuccess,
} = updateDeadline.actions;
export default updateDeadline.reducer;

export const addDeadline = () => async (dispatch) => {
  dispatch(
    addDeadlineSuccess({
      mockData: "abc",
    })
  );
};

export const deleteDeadline = () => async (dispatch) => {
  try {
    return dispatch(
      deleteDeadlineSuccess({
        mockData: "abc",
      })
    );
  } catch (e) {
    return console.error(e.message);
  }
};


