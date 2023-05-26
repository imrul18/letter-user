// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "letterLists/getAllData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.letterLists?.params;
    const response = await Api.get("letter", { params: data });
    dispatch(setParamsData({ loading: false }));
    return response.data;
  }
);


export const letterListsSlice = createSlice({
  name: "letterLists",
  initialState: {
    data: [],
    params: {
      perPage: 10,
      page: 1,
      date: new Date(),
    },

    paramsData: {
      total: 0,
      isBag: false,
      loading: false,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data?.data;
        state.paramsData = {
          ...state.paramsData,
          total: action.payload?.data?.total,
          isBag: action.payload?.isBag,
        };
      })
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setParamsData: (state, action) => {
      state.paramsData = { ...state.paramsData, ...action.payload };
    },
  },
});

export const { setParams, setParamsData } =
letterListsSlice.actions;

export default letterListsSlice.reducer;
