// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "bags/getAllData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.bags?.params;
    const response = await Api.get("bag", { params: data });
    dispatch(setParamsData({ loading: false }));
    return response.data;
  }
);

export const getAllLetter = createAsyncThunk(
  "bags/getAllLetter",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.bags?.params;
    const response = await Api.get("all-letter", { params: data });
    dispatch(setParamsData({ loading: false }));
    return response.data;
  }
);

export const addData = createAsyncThunk(
  "bags/addData",
  async (_, { getState, dispatch }) => {
    dispatch(setParamsData({ loading: true }));
    const data = getState()?.bags?.uploadData;
    const bag_date = getState()?.bags?.params?.bag_date;
    const response = await Api.post("bag", { bag_date, data: data?.columns });
    if (response?.data?.status === 200 || response?.data?.status === 201) {
      dispatch(setParamsData({ loading: false }));
      return true;
    }
    dispatch(setParamsData({ loading: false }));
  }
);

export const getData = createAsyncThunk("bags/getData", async (id) => {
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
  }
);

export const getTypeOptions = createAsyncThunk(
  "letters/getTypeOptions",
  async () => {
    const response = await Api.get("option-type");
    return response.data;
  }
);

export const bagsSlice = createSlice({
  name: "bags",
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
      message: null,
      loading: false,
    },

    uploadData: null,

    options: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data?.data;
        state.paramsData = {
          ...state.paramsData,
          total: action.payload?.data?.total,
          isBag: action.payload?.isBag,
          message: action.payload?.message,
        };
      })
      .addCase(getAllLetter.fulfilled, (state, action) => {
        const data = action.payload;

        const categorizedData = {};
        data?.forEach((letter) => {
          const category = letter.type.name;
          if (!categorizedData[category]) {
            categorizedData[category] = [];
          }
          categorizedData[category].push({
            ...letter,
            title: letter?.letter_id,
            description: `Type: ${letter?.type?.name}`,
          });
        });
        const finalData = [];
        Object.keys(categorizedData)?.forEach((categoryName, index) => {
          const categoryId = index + 1;
          finalData.push({
            id: categoryId,
            title: `Bag-${index + 1}`,
            cards: categorizedData[categoryName],
          });
        });

        state.uploadData = { columns: finalData };
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
      state.uploadData = action.payload;
    },
  },
});

export const { setParams, setData, setParamsData, setUploadData } =
  bagsSlice.actions;

export default bagsSlice.reducer;
