import React, { FC } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import cn from "classnames";

import "./ChipsDisciplineStyles.module.scss";

const ChipsDiscipline: FC<{
  type: "filled" | "text";
  color?:
    | "pink"
    | "peach"
    | "sand"
    | "lime"
    | "blue"
    | "indigo"
    | "purple"
    | "gray"
    | "additional";
  value: string;
  isMobile?: boolean;
}> = ({ type, color, value, isMobile }) => {
  const themeClass = useGetThemeClass("b-chipsDiscipline");
  return (
    <>
      <div
        className={cn(
          type === "filled" ? `${themeClass} -${color}` : `${themeClass}`,
          { [`-mobile`]: isMobile },
        )}
      >
        <div
          className={cn(
            type === "filled"
              ? `${themeClass}__label_text -${
                  color === "additional" ? "additional" : ""
                }`
              : `${themeClass}__label_text -${color}`,
            { [`-mobile`]: isMobile },
          )}
        >
          {value}
        </div>
      </div>
    </>
  );
};

export default React.memo(ChipsDiscipline);
