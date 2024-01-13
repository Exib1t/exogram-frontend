import React, { FC, ReactNode } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import cn from "classnames";

import "./ChipsLODStyles.module.scss";

const ChipsLOD: FC<{
  type: "filled" | "text";
  value: string;
  isPressed?: boolean;
  customIcon?: ReactNode;
  customIconClass?: string;
  onClickIcon?: () => void;
  isMobile?: boolean;
}> = ({
  value,
  type,
  isPressed,
  customIcon,
  customIconClass,
  onClickIcon,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-chipsLOD");
  return (
    <>
      <div
        className={cn(`${themeClass}`, {
          ["filled"]: type === "filled",
          ["-gap4"]: type === "filled" && customIcon,
          [`-pressed`]: isPressed,
          ["-cursor"]: customIcon,
        })}
      >
        <div
          className={cn(`${themeClass}_label_text`, {
            [`-secondary`]: value === "Milestone",
            ["-mobile"]: isMobile,
          })}
        >
          {value}
        </div>
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

export default React.memo(ChipsLOD);
