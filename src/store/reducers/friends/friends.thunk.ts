import { createAsyncThunk } from "@reduxjs/toolkit";
import FriendService from "../../../service/friend/FriendService.ts";
import { AxiosError, AxiosResponse } from "axios";
import { IErrorResponse } from "../../../models/error/error.model.ts";
import { IFriendsResponse } from "./friends.model.ts";

export const getAllFriends = createAsyncThunk<IFriendsResponse, number>(
  "friends/getAllFriends",
  async (userId, thunkAPI) => {
    try {
      const response: AxiosResponse<IFriendsResponse> =
        await FriendService.getAllFriends(userId);

      return response.data;
    } catch (_err) {
      const err = _err as AxiosError<IErrorResponse>;
      return thunkAPI.rejectWithValue(err?.response?.data as IErrorResponse);
    }
  },
);
