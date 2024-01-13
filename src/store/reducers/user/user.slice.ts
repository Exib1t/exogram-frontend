import { createSlice } from "@reduxjs/toolkit";
import { IUserSliceState } from "./user.model.ts";
import {
  changeUserTheme,
  getUserData,
  logoutUser,
  updateUser,
  uploadUserAvatar,
  userCreate,
  userLogin,
  userRefresh,
} from "./user.thunk.ts";
import { IErrorResponse } from "../../../models/error/error.model.ts";

const initialState: IUserSliceState = {
  userData: null,
  tokenData: null,
  isUserDataLoading: false,
  accessToken: null,
  isAccessTokenLoaded: false,
  isAccessTokenLoading: false,
  isAuthenticated: false,
  theme: "dark",
  errors: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setAccessTokenLoaded(state, action) {
      state.isAccessTokenLoaded = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Creating user
    builder.addCase(userCreate.pending, (state) => {
      state.isAccessTokenLoading = true;
    });
    builder.addCase(userCreate.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
      state.errors = null;
    });
    builder.addCase(userCreate.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
    });
    // Login user
    builder.addCase(userLogin.pending, (state) => {
      state.isAccessTokenLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.token;
      state.isAuthenticated = true;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
      state.errors = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
    });
    // Refresh user data
    builder.addCase(userRefresh.pending, (state) => {
      state.isAccessTokenLoading = true;
    });
    builder.addCase(userRefresh.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
      state.errors = null;
      state.tokenData = action.payload;
    });
    builder.addCase(userRefresh.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isAccessTokenLoading = false;
      state.isAccessTokenLoaded = true;
    });
    // Get user data
    builder.addCase(getUserData.pending, (state) => {
      state.isUserDataLoading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isUserDataLoading = false;
      state.errors = null;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isUserDataLoading = false;
    });
    // Update user data
    builder.addCase(updateUser.pending, (state) => {
      state.isUserDataLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isUserDataLoading = false;
      state.errors = null;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isUserDataLoading = false;
    });
    // Upload user avatar
    builder.addCase(uploadUserAvatar.pending, (state) => {
      state.isUserDataLoading = true;
    });
    builder.addCase(uploadUserAvatar.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isUserDataLoading = false;
      state.errors = null;
    });
    builder.addCase(uploadUserAvatar.rejected, (state, action) => {
      state.errors = action.payload as IErrorResponse;
      state.isUserDataLoading = false;
    });
    // Logout user
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.userData = null;
      state.tokenData = null;
      state.isAuthenticated = false;
      state.accessToken = null;
      state.isUserDataLoading = false;
      state.isAccessTokenLoaded = true;
      state.isAccessTokenLoading = false;
      state.errors = null;
    });
    // Change user theme
    builder.addCase(changeUserTheme.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export default userSlice.reducer;
