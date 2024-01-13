import React, { FC } from "react";
import TokenIcon from "../../controls/TokenIcon/TokenIcon";
import cn from "classnames";

import "./BadgesStyles.module.scss";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

const Badges: FC<{
  type: "notification" | "membership" | "wip";
  size?: "sm" | "lg";
  value?: number;
}> = ({ type, size, value }) => {
  const themeClass = useGetThemeClass("b-badges");

  return (
    <>
      {type === "notification" && size === "lg" && (
        <div
          className={cn(`${themeClass}`, {
            ["less_10_lg"]: value < 10,
            ["less_100_lg"]: value > 9 && value < 100,
            ["more_lg"]: value >= 100,
          })}
        >
          <div
            className={cn({
              ["label_text_lg"]: size === "lg",
            })}
          >
            {value > 99 ? "99+" : value}
          </div>
        </div>
      )}
      {type === "wip" && (
        <div className={`${themeClass} -wip`}>
          <div>WIP</div>
        </div>
      )}
      {type === "notification" && size === "sm" && (
        <div className={`${themeClass} empty_sm`}></div>
      )}
      {type === "membership" && (
        <div className={`${themeClass} less_10_lg svg_icon`}>
          <TokenIcon iconName={"check"} size={16} />
        </div>
      )}
    </>
  );
};

export default React.memo(Badges);
