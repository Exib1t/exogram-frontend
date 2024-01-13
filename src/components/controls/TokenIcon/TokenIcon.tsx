import React, { MouseEvent } from "react";
import SVG from "react-inlinesvg";
import cn from "classnames";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

import "./TokenIconStyles.scss";

export interface TokenIconProps {
  iconName:
    | "3rd-part-sync"
    | "3rd-part-sync-2"
    | "activate"
    | "activity"
    | "apps-menu"
    | "alert"
    | "align-center"
    | "align-left"
    | "align-right"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "at"
    | "attachment"
    | "bic"
    | "bold"
    | "building-lod"
    | "calendar"
    | "cancel"
    | "check"
    | "check-broken"
    | "chevron-double-left"
    | "chevron-double-right"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "cl-rfi"
    | "close"
    | "close-square"
    | "column-hide-show"
    | "column-relaxed"
    | "column-tight"
    | "collapse-mobile"
    | "comment"
    | "comment-2"
    | "commit"
    | "compass"
    | "company"
    | "coin-hand"
    | "configuration"
    | "copy"
    | "color-swatch"
    | "created"
    | "dash"
    | "dash-square"
    | "dd-log"
    | "dot-horizontal"
    | "deactivate"
    | "deliverables"
    | "design-constraint"
    | "discipline"
    | "dot"
    | "download"
    | "duplicate"
    | "edit"
    | "edit-ribbon"
    | "edit-text"
    | "expand-mobile"
    | "file"
    | "file-shield"
    | "file-csv"
    | "file-eye"
    | "file-doc"
    | "file-img"
    | "file-jpeg"
    | "file-pdf"
    | "file-png"
    | "file-txt"
    | "file-xls"
    | "file-zip"
    | "fill-color"
    | "filter"
    | "flame"
    | "flex-columns"
    | "for-record"
    | "folder-open"
    | "grid"
    | "group"
    | "incorporate"
    | "information"
    | "input-check"
    | "italics"
    | "kpi-logo-dark"
    | "kpi-logo-light"
    | "link"
    | "link-broken"
    | "list-bullet"
    | "list-number"
    | "loading"
    | "logomark"
    | "line-chart-up"
    | "logout"
    | "needs-list"
    | "not-verified"
    | "no-type"
    | "notification-all"
    | "notification-off"
    | "notification-on"
    | "outdated"
    | "overflow-menu"
    | "peek-center"
    | "peek-right"
    | "phase-plan"
    | "plus"
    | "plus-square"
    | "privat"
    | "projects"
    | "public"
    | "pull"
    | "pen-tool"
    | "big-chart-square"
    | "quality-control"
    | "relink-file"
    | "receipt-lines"
    | "remind-later"
    | "reply"
    | "reporting"
    | "rfi"
    | "rotate-image-left"
    | "rotate-image-right"
    | "sandbox"
    | "sign-off"
    | "shop-drawings"
    | "save"
    | "scheduler-logo-dark"
    | "scheduler-logo-dark-beta"
    | "scheduler-logo-dark-full"
    | "scheduler-logo-dark-full-beta"
    | "scheduler-logo-light"
    | "scheduler-logo-light-beta"
    | "scheduler-logo-light-full"
    | "scheduler-logo-light-full-beta"
    | "search"
    | "settings"
    | "sort"
    | "standard-request"
    | "status"
    | "stopwatch"
    | "stopwatch-crash"
    | "support"
    | "team"
    | "trash"
    | "underline"
    | "upload"
    | "user-add"
    | "user-check"
    | "user-right"
    | "uf-mf"
    | "valid"
    | "void"
    | "not-verified-triangle"
    | "not-valid"
    | "watchlist"
    | "whiteboard"
    | "qc";
  size: 104 | 88 | 40 | 32 | 24 | 20 | 16 | 12 | 4;
  isClickable?: boolean;
  clickHandler?: (e: MouseEvent) => void;
  customClass?: string;
}

const TokenIcon: React.FC<TokenIconProps> = ({
  iconName,
  size,
  isClickable,
  customClass,
  clickHandler,
}) => {
  const themeClass = useGetThemeClass("b-tokenIcon");

  const handleClick = (e: MouseEvent) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler(e);
    }
  };

  const iconPath = `../../../src/assets/tokenIcons/${iconName}/${iconName}-${
    size || ""
  }.svg`;

  return (
    <>
      <SVG
        onClick={handleClick}
        className={cn(themeClass, {
          ["-clickable"]: isClickable || clickHandler,
          [`${customClass}`]: customClass,
        })}
        src={iconPath}
      />
    </>
  );
};

export default TokenIcon;
