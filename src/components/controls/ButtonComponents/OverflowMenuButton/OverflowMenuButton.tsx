import React, { MouseEvent, useMemo } from "react";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";
import cn from "classnames";

import "./OverflowMenuButtonStyles.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface OverflowMenuButtonProps {
  size: "xs" | "sm" | "md" | "lg";
  clickHandler?: (e: MouseEvent) => void;
  tooltip?: string;
  disabled?: boolean;
}

const OverflowMenuButton: React.FC<OverflowMenuButtonProps> = ({
  size,
  clickHandler,
  tooltip,
  disabled,
}) => {
  const themeClass = useGetThemeClass("b-overflowMenuButton");

  const handleClick = (e: MouseEvent) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler(e);
    }
  };

  const buttonIcon = useMemo(() => {
    const sizesInterpreter = {
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
    };

    return (
      <TokenIcon iconName={"overflow-menu"} size={sizesInterpreter[size]} />
    );
  }, [size]);

  return (
    <>
      <CustomTooltip title={tooltip || ""} placement={"bottom"}>
        <div
          className={cn(`${themeClass} -${size}`, {
            [`-disabled`]: disabled,
          })}
          onClick={handleClick}
        >
          <div className={`${themeClass}_icon`}>{buttonIcon}</div>
        </div>
      </CustomTooltip>
    </>
  );
};

export default OverflowMenuButton;
