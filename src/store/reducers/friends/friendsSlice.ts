import { createSlice } from "@reduxjs/toolkit";
import { IFriendsState } from "./friends.model.ts";
import { getAllFriends } from "./friends.thunk.ts";
import { IErrorResponse } from "../../../models/error/error.model.ts";

const initialState: IFriendsState = {
  friends: {
    added: [],
    not_added: [],
  },
  isFriendsLoading: false,
  errors: null,
};

export const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFriends.pending, (state) => {
      state.isFriendsLoading = true;
    });
    builder.addCase(getAllFriends.fulfilled, (state, action) => {
      state.friends = action.payload;
      state.isFriendsLoading = false;
      state.errors = null;
    });
    builder.addCase(getAllFriends.rejected, (state, action) => {
      state.isFriendsLoading = false;
      state.errors = action.payload as IErrorResponse;
    });
  },
});

export default friendsSlice.reducer;
