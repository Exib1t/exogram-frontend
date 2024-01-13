import React, { FC, MouseEvent } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

import "./ChipsRevisionTagStyles.module.scss";

const ChipsRevisionTag: FC<{
  processStatus: "issued" | "superseded" | "not_issued_yet";
  value: string;
  clickHandler?: (e: MouseEvent) => void;
  isInvalid?: boolean;
}> = ({ processStatus, value, clickHandler, isInvalid }) => {
  const themeClass = useGetThemeClass("b-chipsRevisionTag");

  const handleClick = (e: MouseEvent) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler(e);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${themeClass} ${processStatus} ${
          isInvalid ? "-invalid" : ""
        }`}
      >
        <div className={"label_text"}>{value}</div>
      </div>
    </>
  );
};

export default React.memo(ChipsRevisionTag);
