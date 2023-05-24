// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "postOffices/getAllData",
  async (_, { getState }) => {
    const data = getState()?.postOffices?.params;
    const response = await Api.get("post-office", { params: data });
    return response.data;
  }
);

export const addData = createAsyncThunk(
  "postOffices/addData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.postOffices?.uploadData;
    const response = await Api.post("post-office", data);
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      return true;
    }
    dispatch(setParamsData({ loading: false }));
  }
);

export const getData = createAsyncThunk("postOffices/getData", async (id) => {
  const response = await Api.get(`post-office/${id}`);
  return response.data;
});

export const updateData = createAsyncThunk(
  "postOffices/updateData",
  async (id, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.postOffices?.uploadData;
    const response = await Api.post(`post-office-update/${id}`, data);
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      return true;
    }
    dispatch(setParamsData({ loading: false }));
  }
);

export const updateStatus = createAsyncThunk(
  "postOffices/updateStatus",
  async (id, { dispatch }) => {
    const response = await Api.post(`post-office-change-status/${id}`);
    dispatch(getAllData());
    return response.data;
  }
);

export const deleteData = createAsyncThunk(
  "postOffices/deleteData",
  async (id, { dispatch }) => {
    const response = await Api.post(`post-office-delete/${id}`);
    dispatch(getAllData());
    return response.data;
  }
);

export const postOfficesSlice = createSlice({
  name: "postOffices",
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
  postOfficesSlice.actions;

export default postOfficesSlice.reducer;
