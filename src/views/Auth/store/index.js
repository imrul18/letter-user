// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const Signin = createAsyncThunk("Auth/Signin", async (data) => {
  const response = await Api.post("login", data);
  if (response?.status == 200) {
    return { status: true, data: response?.data };
  } else {
    return { status: false, data: response?.data };
  }
});

export const PasswordChange = createAsyncThunk(
  "Auth/ChangePassword",
  async (_, { getState, dispatch }) => {
    dispatch(setLoading(true));
    const data = getState()?.Auth?.password;
    const response = await Api.post("change-password", data);
    dispatch(setLoading(false));
    if (response?.status == 201) {
      dispatch(setPassword({}));
      dispatch(setPasswordValidation({}));
      dispatch(setPasswordVisivility({}));
      return true;
    } else {
      return false;
    }
  }
);

export const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    UserData: [],
    accessToken: null,

    password: {},
    passwordValidation: {},
    passwordVisivility: {},
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(Signin.fulfilled, (state, action) => {
      if (action?.payload?.status) {
        localStorage.setItem(
          "userData",
          JSON.stringify(action.payload?.data?.data)
        );
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload?.data?.data?.token)
        );
        state.UserData = action.payload?.user;
        state.accessToken = action.payload?.token;
      }
    });
  },
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordValidation: (state, action) => {
      state.passwordValidation = action.payload;
    },
    setPasswordVisivility: (state, action) => {
      state.passwordVisivility = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setPassword,
  setPasswordValidation,
  setPasswordVisivility,
  setLoading,
} = AuthSlice.actions;

export default AuthSlice.reducer;
