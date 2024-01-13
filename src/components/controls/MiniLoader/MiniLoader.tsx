import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import cn from "classnames";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

import "./MiniLoader.module.scss";

interface IMiniLoaderProps {
  containerClasses?: string;
  rootClasses?: string;
  circleClasses: string;
  size: "xs" | "sm" | "md" | "lg";
}

const MiniLoader: React.FC<IMiniLoaderProps> = ({
  containerClasses,
  rootClasses,
  circleClasses,
  size,
}) => {
  const themeClass = useGetThemeClass("b-miniLoader");

  return (
    <div
      className={cn(`${themeClass}`, {
        [`${containerClasses}`]: containerClasses,
      })}
    >
      <CircularProgress
        classes={{
          root: cn(`${themeClass}_root -${size}`, {
            [`${rootClasses}`]: rootClasses,
          }),
          circle: cn(`${themeClass}_circle`, {
            [`${circleClasses}`]: circleClasses,
          }),
        }}
      />
    </div>
  );
};

export default MiniLoader;
