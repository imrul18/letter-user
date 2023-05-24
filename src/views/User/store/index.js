// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "users/getAllData",
  async (_, { getState }) => {
    const data = getState()?.users?.params;
    const response = await Api.get("user", { params: data });
    return response.data;
  }
);

export const addData = createAsyncThunk(
  "users/addData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.users?.uploadData;
    const response = await Api.post("user", data);
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      return true;
    }
    dispatch(setParamsData({ loading: false }));
  }
);

export const getData = createAsyncThunk("users/getData", async (id) => {
  const response = await Api.get(`post-office/${id}`);
  return response.data;
});

export const updateData = createAsyncThunk(
  "users/updateData",
  async (id, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.users?.uploadData;
    const response = await Api.post(`user-update/${id}`, data);
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      return true;
    }
    dispatch(setParamsData({ loading: false }));
  }
);

export const updateStatus = createAsyncThunk(
  "users/updateStatus",
  async (id, { dispatch }) => {
    const response = await Api.post(`user-change-status/${id}`);
    dispatch(getAllData());
    return response.data;
  }
);

export const deleteData = createAsyncThunk(
  "users/deleteData",
  async (id, { dispatch }) => {
    const response = await Api.post(`user-delete/${id}`);
    dispatch(getAllData());
    return response.data;
  }
);

export const getPostOfficeOption = createAsyncThunk(
  "users/getPostOfficeOption",
  async () => {
    const response = await Api.get(`option-post-office`);
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    params: {
      perPage: 10,
      page: 1,
    },
    paramsData: {
      total: 1,
      loading: false
    },

    uploadData: {},
    options:{
      postOffice: [
        { value: "1", label: "Post Office 1" },
      ],
      role: [
        { value: "user", label: "User" },
        { value: "delivery", label: "Post Man"}
      ],
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        console.log(action.payload?.total);
        state.paramsData = {
          ...state.paramsData,
          total: action.payload?.total,
        };
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.uploadData = action.payload;
      })
      .addCase(getPostOfficeOption.fulfilled, (state, action) => {
        state.options = {...state.options, postOffice: action.payload}
      });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setParamsData: (state, action) => {
      state.paramsData = { ...state.paramsData, ...action.payload };
    },
    setUploadData: (state, action) => {
      state.uploadData = { ...state.uploadData, ...action.payload };
    },
  },
});

export const { setParams, setParamsData, setUploadData } =
  usersSlice.actions;

export default usersSlice.reducer;
