import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IUploadAvatar,
  IUser,
  IUserCreate,
  IUserCreateResponse,
  IUserLogin,
  IUserLoginResponse,
  IUserRefreshResponse,
  IUserUpdate,
} from "../../../models/user/user.model.ts";
import UserService from "../../../service/user/UserService.ts";
import { IErrorResponse } from "../../../models/error/error.model.ts";
import { AxiosError, AxiosResponse } from "axios";

export const userCreate = createAsyncThunk<
  IUserCreateResponse,
  IUserCreate,
  {
    rejectValue: IErrorResponse;
  }
>("user/create", async (data, thunkAPI) => {
  try {
    const response: AxiosResponse<IUserCreateResponse> =
      await UserService.createUser(data);

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const userLogin = createAsyncThunk<
  IUserLoginResponse,
  IUserLogin,
  {
    rejectValue: IErrorResponse;
  }
>("user/login", async (data, thunkAPI) => {
  try {
    const response: AxiosResponse<IUserLoginResponse> =
      await UserService.loginUser(data);

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const userRefresh = createAsyncThunk<
  IUserRefreshResponse,
  void,
  {
    rejectValue: IErrorResponse;
  }
>("user/refresh", async (_, thunkAPI) => {
  try {
    const response: AxiosResponse<IUserRefreshResponse> =
      await UserService.refreshUser();

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const getUserData = createAsyncThunk<
  IUser,
  number,
  {
    rejectValue: IErrorResponse;
  }
>("user/getUserData", async (id, thunkAPI) => {
  try {
    const response: AxiosResponse<IUser> = await UserService.getUserData(id);

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const updateUser = createAsyncThunk<
  IUser,
  IUserUpdate,
  {
    rejectValue: IErrorResponse;
  }
>("user/updateUser", async (data, thunkAPI) => {
  try {
    const response: AxiosResponse<IUser> = await UserService.updateUser(data);

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const uploadUserAvatar = createAsyncThunk<
  IUser,
  IUploadAvatar,
  {
    rejectValue: IErrorResponse;
  }
>("user/uploadUserAvatar", async ({ userId, file }, thunkAPI) => {
  try {
    const response: AxiosResponse<IUser> = await UserService.uploadUserAvatar(
      userId,
      file,
    );

    return response.data;
  } catch (_err) {
    const err = _err as AxiosError<IErrorResponse>;
    return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
  }
});

export const logoutUser = createAsyncThunk("user/logoutUser", () => {
  return localStorage.removeItem("token");
});

export const changeUserTheme = createAsyncThunk<
  "dark" | "light",
  "dark" | "light"
>("user/changeUserTheme", (theme) => {
  localStorage.setItem("theme", theme);
  return theme;
});
