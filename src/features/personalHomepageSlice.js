import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
  name: "personalHomepage",
  initialState: {
    data: null,
    status: "initial",
  },
  reducers: {
    fetchLoading: () => ({
      status: "loading", 
      data: null,
    }),
    fetchSuccess: (_, { payload: data }) => ({
      status: "success",
      data,
    }),
    fetchError: () => ({
      status: "error",
      data: null,
    }),
  },
});

export const { fetchLoading, fetchSuccess, fetchError } =
  personalHomepageSlice.actions;

const selectState = (state) => state.personalHomepage;

export const selectPersonalHomepageData = (state) => selectState(state).data;
export const selectPersonalHomepageStatus = (state) => selectState(state).status

export default personalHomepageSlice.reducer;
