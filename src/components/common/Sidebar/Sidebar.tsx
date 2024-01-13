import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import TokenIcon from "../../controls/TokenIcon/TokenIcon.tsx";
import { useNavigate } from "react-router-dom";

import "./Sidebar.styles.scss";

const Sidebar = () => {
  const themeClass = useGetThemeClass("b-sidebar");
  const navigate = useNavigate();
  const handleRedirect = (link: string) => {
    navigate(`/${link}`);
  };

  return (
    <div className={themeClass}>
      <div className={`${themeClass}_logo`}>E</div>
      <ul className={`${themeClass}_list`}>
        <li
          className={`${themeClass}_item`}
          onClick={(e) => {
            e.preventDefault();
            handleRedirect("chats");
          }}
        >
          <TokenIcon
            iconName={"comment-2"}
            size={32}
            customClass={`${themeClass}_item_icon`}
          />
        </li>
        <li
          className={`${themeClass}_item`}
          onClick={(e) => {
            e.preventDefault();
            handleRedirect("friends");
          }}
        >
          <TokenIcon
            iconName={"team"}
            size={32}
            customClass={`${themeClass}_item_icon`}
          />
        </li>
      </ul>
      <div
        className={`${themeClass}_item -profile`}
        onClick={(e) => {
          e.preventDefault();
          handleRedirect("profile");
        }}
      >
        <TokenIcon
          iconName={"user-right"}
          size={32}
          customClass={`${themeClass}_item_icon`}
        />
      </div>
    </div>
  );
};
export default Sidebar;
