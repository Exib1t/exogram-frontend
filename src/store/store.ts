import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user/user.slice.ts";
import friendsSlice from "./reducers/friends/friendsSlice.ts";

export const store = configureStore({
  reducer: { user: userSlice, friends: friendsSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
