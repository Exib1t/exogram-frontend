import React, { FC } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import TokenIcon from "../../../controls/TokenIcon/TokenIcon";
import cn from "classnames";

import "./ChipsHistoryStyles.module.scss";

const ChipsHistory: FC<{
  type:
    | "building-lod"
    | "user-check"
    | "user-right"
    | "company"
    | "discipline"
    | "for-record"
    | "watchlist"
    | "comment-2"
    | "pull"
    | "check-broken"
    | "trash"
    | "deactivate"
    | "activate"
    | "privat"
    | "public"
    | "attachment"
    | "calendar"
    | "link"
    | "link-broken"
    | "bic"
    | "uf-mf"
    | "deliverables";
  color:
    | "sys-warning"
    | "sys-success"
    | "sys-danger"
    | "sys-informative"
    | "primary"
    | "on-bgd-srf-2";
  value: string;
}> = ({ type, color, value }) => {
  const themeClass = useGetThemeClass("b-chipsHistory");

  return (
    <>
      <div className={`${themeClass}`}>
        <div
          className={cn("svg_icon", {
            ["on-bgd-srf-2"]: color === "on-bgd-srf-2" && type !== "bic",
            ["sys-warning"]: color === "sys-warning",
            ["sys-success"]: color === "sys-success",
            ["sys-danger"]: color === "sys-danger",
            ["sys-informative"]: color === "sys-informative",
            ["primary-bic"]: color === "primary" && type === "bic",
            ["on-bgd-srf-2-bic"]: color === "on-bgd-srf-2" && type === "bic",
            ["primary-uf-mf"]: color === "primary" && type === "uf-mf",
            ["primary-deliverables"]:
              color === "primary" && type === "deliverables",
          })}
        >
          <TokenIcon iconName={type} size={16} />
        </div>
        <div className={"label_text"}>{value}</div>
      </div>
    </>
  );
};

export default React.memo(ChipsHistory);
