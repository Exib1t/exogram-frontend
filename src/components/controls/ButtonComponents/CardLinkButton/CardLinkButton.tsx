import React, { MouseEvent, ReactElement, ReactNode } from "react";
import CustomTooltip from "../../Tooltip/Tooltip";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

import "./CardLinkButtonStyles.scss";

interface CardLinkButtonProps {
  type: "nf" | "deliverable" | "submittal";
  size: "sm" | "md" | "mobile";
  title: string | ReactElement;
  clickHandler?: (e: MouseEvent) => void;
  tooltip?: string;
  icon?: () => ReactNode;
}

const CardLinkButton: React.FC<CardLinkButtonProps> = ({
  type,
  size,
  title,
  clickHandler,
  tooltip,
  icon,
}) => {
  const themeClass = useGetThemeClass("b-cardLinkButton");

  const handleClick = (e: MouseEvent) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler(e);
    }
  };

  return (
    <>
      <CustomTooltip title={tooltip || ""} placement={"bottom"}>
        <div
          onClick={handleClick}
          className={`${themeClass} ${themeClass}_${type} -${size}`}
        >
          {icon && icon()}
          <span className={`buttonTitle -${size} ${themeClass}_${type}_title`}>
            {title}
          </span>
        </div>
      </CustomTooltip>
    </>
  );
};

export default CardLinkButton;
