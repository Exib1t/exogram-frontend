import React, { FC } from "react";
import cn from "classnames";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

import "./ChipsCompanyRoleStyles.module.scss";

const ChipsCompanyRole: FC<{
  color:
    | "pink"
    | "peach"
    | "sand"
    | "lime"
    | "blue"
    | "indigo"
    | "purple"
    | "gray";
  value: string;
  width?: number | string;
  isMobile?: boolean;
}> = ({ color, value, width, isMobile }) => {
  const themeClass = useGetThemeClass("b-chipsCompanyRole");
  const styleWidth = width ? { width: width } : {};
  return (
    <>
      <div
        className={cn(`${themeClass} ${color}`, { [`-mobile`]: isMobile })}
        style={styleWidth}
      >
        <div className={cn("label_text", { [`-mobile`]: isMobile })}>
          {value}
        </div>
      </div>
    </>
  );
};

export default React.memo(ChipsCompanyRole);
