import React, { FC, MouseEvent } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import TokenIcon from "../../../controls/TokenIcon/TokenIcon";
import cn from "classnames";

import "./ChipsFilterOptionStyles.scss";

const ChipsFilterOption: FC<{
  isActive: boolean;
  isPressed: boolean;
  title: string;
  count?: number;
  clickHandler?: () => void;
  onClickClose: () => void;
  isMobile?: boolean;
}> = ({
  isPressed,
  title,
  count,
  onClickClose,
  isActive,
  clickHandler,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-chipsFilterOption");

  const handleClick = (e: MouseEvent) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler();
    }
  };

  const close = (e: MouseEvent) => {
    if (onClickClose) {
      e.stopPropagation();
      onClickClose && onClickClose();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={cn(`${themeClass}`, {
          [`-pressed`]: isPressed,
          [`-active`]: isActive,
          [`-mobile`]: isMobile,
        })}
      >
        <TokenIcon
          clickHandler={close}
          customClass={`${themeClass}_closeIcon`}
          iconName={"close"}
          size={isMobile ? 16 : 12}
        />
        <span
          className={cn(`${themeClass}_title`, { [`-mobile`]: isMobile })}
        >{`${title} ${count ? `(${count})` : ""}`}</span>
        <TokenIcon
          customClass={`${themeClass}_selectIcon`}
          iconName={"chevron-down"}
          size={isMobile ? 16 : 12}
        />
      </div>
    </>
  );
};

export default ChipsFilterOption;
