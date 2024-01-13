import React, { FC, ReactNode } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import TokenIcon from "../../../controls/TokenIcon/TokenIcon";
import cn from "classnames";

import "./ChipsRequestTypeStyles.module.scss";

const ChipsRequestType: FC<{
  type:
    | "Design constraint"
    | "Input check"
    | "For record"
    | "RFI"
    | "Standard request"
    | "Submittals \\cut\\"
    | "Select request type"
    | "Certificate"
    | "Document"
    | "Drawing"
    | "Instruction"
    | "Manual"
    | "Mockup"
    | "Product Data"
    | "Report"
    | "Sample"
    | "Schedule"
    | "Shop Drawing"
    | "Vendor Information"
    | "Warranty"
    | "Other";
  isPressed?: boolean;
  customIcon?: ReactNode;
  customIconClass?: string;
  onClickIcon?: () => void;
  isMobile?: boolean;
  isNotShowText?: boolean;
}> = ({
  type,
  isPressed,
  customIcon,
  customIconClass,
  onClickIcon,
  isMobile,
  isNotShowText,
}) => {
  const themeClass = useGetThemeClass("b-chipsRequestType");
  const getRequestTypeIcon = (type) => {
    if (type === "Design constraint") {
      return "design-constraint";
    } else if (type === "CL input checklist") {
      return "input-check";
    } else if (type === "For record") {
      return "for-record";
    } else if (type === "RFI") {
      return "rfi";
    } else if (type === "Submittals/cut sheets") {
      return "dash";
    } else if (type === "Standard request") {
      return "standard-request";
    } else if (type === "Certificate") {
      return "receipt-lines";
    } else if (type === "Document") {
      return "folder-open";
    } else if (type === "Drawing") {
      return "edit";
    } else if (type === "Instruction") {
      return "file-eye";
    } else if (type === "Manual") {
      return "compass";
    } else if (type === "Mockup") {
      return "flex-columns";
    } else if (type === "Product Data") {
      return "bar-chart-square";
    } else if (type === "Report") {
      return "line-chart-up";
    } else if (type === "Sample") {
      return "color-swatch";
    } else if (type === "Schedule") {
      return "calendar";
    } else if (type === "Shop Drawing") {
      return "pen-tool";
    } else if (type === "Vendor Information") {
      return "coin-hand";
    } else if (type === "Warranty") {
      return "file-shield";
    } else if (type === "Other") {
      return "dot-horizontal";
    } else if (!type) {
      return "no-type";
    }
  };

  return (
    <>
      <div
        className={cn(`${themeClass}`, {
          [`-pressed`]: isPressed,
          ["-cursor"]: customIcon,
          [`-mobile`]: isMobile,
          [`-isNotShowText`]: isNotShowText,
        })}
      >
        <div className={"svg_icon"}>
          {getRequestTypeIcon(type) && (
            <TokenIcon iconName={getRequestTypeIcon(type)} size={16} />
          )}
        </div>
        {!isNotShowText && (
          <div
            className={cn({
              [`${themeClass}_label_text`]: type !== "Select request type",
              [`${themeClass}_label_text_secondary`]:
                type === "Select request type",
              [`-mobile`]: isMobile,
            })}
          >
            {type || "No request type"}
          </div>
        )}
        {customIcon ? (
          <div
            className={`${themeClass}_field_icon ${customIconClass}`}
            onClick={onClickIcon}
          >
            {customIcon}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default React.memo(ChipsRequestType);
