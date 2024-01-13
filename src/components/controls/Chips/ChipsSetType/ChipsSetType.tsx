import React, { FC } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

import "./ChipsSetTypeStyles.module.scss";

const ChipsSetType: FC<{
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
  isBox?: boolean;
}> = ({ color, value, isBox }) => {
  const themeClass = useGetThemeClass("b-chipsSetType");
  return (
    <>
      <div className={`${themeClass} ${color}`}>
        {isBox ? <div className={"box_set_type"}></div> : null}
        <div className={"label_text"}>{value}</div>
      </div>
    </>
  );
};

export default React.memo(ChipsSetType);
