import React, { MouseEvent, ReactElement, useMemo } from "react";
import CustomTooltip, { CustomTooltipProps } from "../../Tooltip/Tooltip";
import { MiniLoader } from "../../MiniLoader";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import cn from "classnames";

import "./CustomButtonStyles.scss";

interface CustomButtonProps {
  type:
    | "primary"
    | "secondary"
    | "tertiary"
    | "text-plain"
    | "text-activated"
    | "filter-plain"
    | "filter-activated"
    | "selection-plain"
    | "selection-activated"
    | "accept"
    | "decline";
  size: "xs" | "sm" | "md";
  title: string | ReactElement;
  clickHandler?: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled?: boolean;
  tooltip?: string;
  tooltipProps?: CustomTooltipProps;
  loading?: boolean;
  icon?: ReactElement;
  iconClass?: string;
  isActive?: boolean;
  isMobile?: boolean;
  customClassName?: string;
  customTooltipBasisClassName?: string;
  isHiddenTitle?: boolean;
  fullWidth?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  size,
  title,
  clickHandler,
  disabled,
  tooltip,
  loading,
  icon,
  iconClass,
  tooltipProps,
  isActive,
  isMobile,
  customClassName,
  customTooltipBasisClassName,
  isHiddenTitle,
  fullWidth,
}) => {
  const themeClass = useGetThemeClass("b-button");

  const handleClick = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (disabled || loading) {
      return;
    }

    clickHandler && clickHandler(e);
  };

  const sizeName = useMemo(() => {
    let sizeName: string = size;

    if (isMobile) {
      sizeName = "mobile";
    }

    let name: string = sizeName;
    const isTextButton = type === "text-activated" || type === "text-plain";
    const isFilterButton =
      type === "filter-activated" || type === "filter-plain";

    if (isTextButton) {
      name = `text-${sizeName}`;
    }

    if (isFilterButton) {
      name = `filter-${sizeName}`;
    }

    if (icon) {
      name = `${name}-icon`;
    }

    return name;
  }, [type, size, icon]);

  const loaderSize = useMemo(() => {
    if (size === "xs" || size === "sm") {
      return "xs";
    }

    return "sm";
  }, [size]);

  return (
    <>
      <CustomTooltip
        customBasisClass={customTooltipBasisClassName}
        title={tooltip || ""}
        placement={"bottom"}
        {...(tooltipProps || {})}
      >
        <div
          onClick={handleClick}
          className={cn(`${themeClass} ${themeClass}_${type}`, {
            [`-${size}`]: !isMobile,
            [`-${sizeName}`]: sizeName,
            ["-mobile"]: isMobile,
            ["-disabled"]: disabled,
            ["-loading"]: loading,
            ["-active"]: isActive,
            ["-fullWidth"]: fullWidth,
            ["-isHiddenTitle"]: isHiddenTitle,
            [`${customClassName}`]: customClassName,
          })}
        >
          {icon && (
            <div
              className={cn(`${themeClass}_customIcon buttonIcon`, {
                [`-${size}`]: !isMobile,
                ["-mobile"]: isMobile,
                [`${iconClass}`]: iconClass,
              })}
            >
              {icon}
            </div>
          )}
          {!isHiddenTitle && (
            <span
              className={cn(`buttonTitle ${themeClass}_${type}_title`, {
                [`-${sizeName}`]: sizeName,
                [`-${size}`]: !isMobile,
                ["-mobile"]: isMobile,
              })}
            >
              {title}
            </span>
          )}
          {loading ? (
            <MiniLoader
              size={loaderSize}
              circleClasses={`${themeClass}_${type}_loader_circle`}
            />
          ) : null}
        </div>
      </CustomTooltip>
    </>
  );
};

export default CustomButton;
