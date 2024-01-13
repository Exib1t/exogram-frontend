import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import { FC, ReactNode } from "react";

import "./PageHeader.styles.scss";

interface IProps {
  title: string;
  renderLeftContent?: () => ReactNode;
  renderRightContent?: () => ReactNode;
}

const PageHeader: FC<IProps> = ({
  title,
  renderRightContent,
  renderLeftContent,
}) => {
  const themeClass = useGetThemeClass("b-pageHeader");

  return (
    <div className={themeClass}>
      <div className={`${themeClass}_left`}>
        <h2 className={`${themeClass}_title`}>{title}</h2>
        {renderLeftContent && renderLeftContent()}
      </div>
      <div className={`${themeClass}_right`}>
        {renderRightContent && renderRightContent()}
      </div>
    </div>
  );
};
export default PageHeader;
