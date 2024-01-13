import { useGetThemeClass } from "../hooks/global.hooks.tsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar/Sidebar.tsx";
import { useAppSelector } from "../hooks/store.hooks.ts";

import "./Layout.styles.scss";

const Layout = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);

  const themeClass = useGetThemeClass("b-layout");

  return (
    <div className={themeClass}>
      {isAuthenticated && <Sidebar />}
      <div className={`${themeClass}_content`}>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
