import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import RegisterPage from "../components/pages/RegisterPage/RegisterPage.tsx";
import { useAppSelector } from "../hooks/store.hooks.ts";
import Layout from "./Layout.tsx";
import LoginPage from "../components/pages/LoginPage/LoginPage.tsx";
import ProfilePage from "../components/pages/ProfilePage/ProfilePage.tsx";
import { useEffect } from "react";
import FriendsPage from "../components/pages/FriendsPage/FriendsPage.tsx";
import { AppRoutes } from "./routes.ts";

const renderNotAuthenticatedRoutes = () => {
  return (
    <Route path={"/"} element={<Layout />}>
      <Route element={<RegisterPage />} path={"sign-up"} />
      <Route element={<LoginPage />} path={"sign-in"} />
    </Route>
  );
};

const renderAuthenticatedRoutes = () => {
  return (
    <Route path={"/"} element={<Layout />}>
      <Route element={<FriendsPage />} path={"friends"} />
      <Route element={<ProfilePage />} path={"profile"} />
    </Route>
  );
};

const Router = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, isAccessTokenLoaded } = useAppSelector(
    (state) => state.user,
  );

  useEffect(() => {
    if (isAccessTokenLoaded) {
      if (isAuthenticated) {
        const module = location.pathname.split("/")[1];
        if (!AppRoutes.authenticated.includes(module)) {
          navigate("/friends");
        }
      } else {
        const module = location.pathname.split("/")[1];
        if (!AppRoutes.not_authenticated.includes(module)) {
          navigate("/sign-in");
        }
      }
    }
  }, [isAuthenticated, navigate, isAccessTokenLoaded, location.pathname]);

  return (
    <Routes>
      {!isAuthenticated && renderNotAuthenticatedRoutes()}
      {isAuthenticated && renderAuthenticatedRoutes()}
    </Routes>
  );
};
export default Router;
