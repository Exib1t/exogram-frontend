import Router from "./router/Router.tsx";
import { useAppDispatch, useAppSelector } from "./hooks/store.hooks.ts";
import { useEffect } from "react";
import { userSlice } from "./store/reducers/user/user.slice.ts";
import {
  changeUserTheme,
  getUserData,
  userRefresh,
} from "./store/reducers/user/user.thunk.ts";

const { setAccessToken, setAccessTokenLoaded } = userSlice.actions;

function App() {
  const dispatch = useAppDispatch();
  const { accessToken, tokenData } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
      dispatch(userRefresh());
    }
  }, [accessToken, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const theme = localStorage.getItem("theme");
    if (token) {
      dispatch(setAccessToken(token));
    } else {
      dispatch(setAccessTokenLoaded(true));
    }
    if (theme) {
      dispatch(changeUserTheme(theme as "dark" | "light"));
    }
  }, [dispatch]);

  useEffect(() => {
    if (tokenData) {
      dispatch(getUserData(tokenData.id));
    }
  }, [dispatch, tokenData]);

  return <Router />;
}

export default App;
