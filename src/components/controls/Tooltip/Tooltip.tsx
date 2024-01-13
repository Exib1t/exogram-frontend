import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import "./TooltipStyles.scss";
import { TooltipProps } from "@mui/material/Tooltip/Tooltip";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

export interface CustomTooltipProps extends TooltipProps {
  type?: "default" | "ddl";
  title: string | React.ReactNode;
  children: React.ReactNode;
  followCursor?: boolean;
  customTooltipClass?: string;
  customBasisClass?: string;
  isInteractive?: boolean;
  showArrow?: boolean;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  isInteractive,
  type,
  title,
  children,
  followCursor,
  customTooltipClass,
  customBasisClass,
  showArrow = true,
  ...otherProps
}) => {
  const themeClass = useGetThemeClass("b-tooltip");

  const [position, setPosition] = useState<{
    x: number | null;
    y: number | null;
  }>({
    x: null,
    y: null,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  const onMouseMoveProperties: {
    onMouseMove?: (e: React.MouseEvent) => void;
    PopperProps?: any;
  } = {};

  if (followCursor) {
    onMouseMoveProperties.onMouseMove = onMouseMove;
    onMouseMoveProperties.PopperProps = {
      anchorEl: {
        clientHeight: 0,
        clientWidth: 0,
        getBoundingClientRect: () => ({
          top: position.y + 32,
          left: position.x,
          right: position.x,
          bottom: position.y,
          width: 0,
          height: 0,
        }),
      },
    };
  }

  const objClass = {
    tooltip: `${themeClass} -${type || "default"} ${customTooltipClass}`,
    arrow: `${themeClass}_arrow`,
  };

  return (
    <Tooltip
      arrow={showArrow}
      classes={objClass}
      disableInteractive={!isInteractive}
      enterDelay={1000}
      enterNextDelay={1000}
      leaveDelay={0}
      {...(onMouseMoveProperties || {})}
      {...(otherProps || {})}
      title={title}
    >
      <span className={`tooltipBasis ${customBasisClass || ""}`}>
        {children}
      </span>
    </Tooltip>
  );
};

export default CustomTooltip;
