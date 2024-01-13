import React, { FC, ReactNode } from "react";
import cn from "classnames";

import "./ChipsColorTagStyles.module.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

const ChipsColorTag: FC<{
  color:
    | "default"
    | "pink"
    | "peach"
    | "sand"
    | "lime"
    | "blue"
    | "indigo"
    | "purple"
    | "gray";
  value: string;
  customIcon?: ReactNode;
  customIconClass?: string;
  onClickIcon?: () => void;
}> = ({
  color = "default",
  value,
  customIcon,
  customIconClass,
  onClickIcon,
}) => {
  const themeClass = useGetThemeClass("b-chipsColorTag");
  return (
    <>
      <div className={cn(`${themeClass} ${color}`, { ["-gap4"]: onClickIcon })}>
        <div className={"label_text"}>{value}</div>
        {onClickIcon ? (
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

export default React.memo(ChipsColorTag);
