// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "letters/getAllData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.letters?.params;
    const response = await Api.get("find", { params: data });
    dispatch(setParamsData({ loading: false }));
    return response.data;
  }
);

export const getData = createAsyncThunk("letters/getData", async (id) => {
  const response = await Api.get(`show/${id}`);
  return response.data;
});

export const updateData = createAsyncThunk(
  "letters/updateData",
  async (id, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.letters?.uploadData;
    const response = await Api.post(`update/${id}`, data);
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      dispatch(setParamsData({ loading: false }));
      return true;
    }
    dispatch(setParamsData({ loading: false }));
    return false;
  }
);

export const getTypeOptions = createAsyncThunk(
  "letters/getTypeOptions",
  async () => {
    const response = await Api.get("option-type");
    return response.data;
  }
);

export const lettersSlice = createSlice({
  name: "letters",
  initialState: {
    data: [],
    params: {},

    paramsData: {
      loading: false,
    },

    defaultData: {
      letter_type: 1,
      isAd: 1,
      weight: 100,
      cost: 5,
    },
    uploadData: {
    },

    options: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getData.fulfilled, (state, action) => {
        if (action?.payload?.status == 1) {
          state.uploadData = { ...action.payload, ...state.defaultData };
        } else {
          state.uploadData = action.payload;
        }
      })
      .addCase(getTypeOptions.fulfilled, (state, action) => {
        state.options = { ...state.options, typeOptions: action.payload };
      })
      .addCase(updateData.fulfilled, (state, action) => {
        if (action.payload) {
          state.uploadData = {};
          state.params = {};
        }
      });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setParamsData: (state, action) => {
      state.paramsData = { ...state.paramsData, ...action.payload };
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setUploadData: (state, action) => {
      state.uploadData = { ...state.uploadData, ...action.payload };
    },
    setDefaultData: (state, action) => {
      state.defaultData = { ...state.defaultData, ...action.payload };
    },
  },
});

export const { setParams, setData, setParamsData, setUploadData, setDefaultData } =
  lettersSlice.actions;

export default lettersSlice.reducer;
