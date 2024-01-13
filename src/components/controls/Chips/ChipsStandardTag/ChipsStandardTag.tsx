import React, { FC, ReactElement, ReactNode } from "react";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";
import cn from "classnames";
import TokenIcon from "../../../controls/TokenIcon/TokenIcon";
import { DropdownItemModel } from "../../../../models/global";
import CustomTooltip from "../../../controls/Tooltip/Tooltip";

import "./ChipsStandardTagStyles.module.scss";

const ChipsStandardTag: FC<{
  indicator?: "red" | "blue";
  value: string;
  isRelinkFileIcon?: boolean;
  customIcon?: ReactNode;
  customIconClass?: string;
  customClassName?: string;
  onClickIcon?: (e: React.SyntheticEvent) => void;
  clickHandler?: (e: React.SyntheticEvent) => void;
  handleClickRelink?: () => void;
  chipsRef?: any;
  leftIcon?: (item: DropdownItemModel) => ReactNode;
  item?: DropdownItemModel;
  blockStopPropagation?: boolean;
  isFullWidth?: boolean;
  isMobile?: boolean;
  isAlignTextLeft?: boolean;
  tooltip?: string | ReactNode | ReactElement;
}> = ({
  indicator,
  value,
  isRelinkFileIcon,
  customIcon,
  customIconClass,
  customClassName,
  onClickIcon,
  clickHandler,
  handleClickRelink,
  chipsRef,
  leftIcon,
  item,
  blockStopPropagation,
  isFullWidth,
  isMobile,
  isAlignTextLeft,
  tooltip,
}) => {
  const themeClass = useGetThemeClass("b-chipsStandardTag");

  const clickIcon = (e) => {
    e.stopPropagation();
    onClickIcon && onClickIcon(e);
  };

  const handleClick = (e) => {
    if (blockStopPropagation) {
      clickHandler && clickHandler();
      return;
    }
    e.stopPropagation();
    clickHandler && clickHandler(e);
  };

  const leftElem = leftIcon ? leftIcon(item) : null;

  return (
    <>
      {tooltip ? (
        <CustomTooltip title={tooltip} placement={"top"}>
          <div
            onClick={handleClick}
            className={cn(`${themeClass}`, {
              [indicator]: indicator,
              [`${customClassName}`]: customClassName,
              ["-plus"]: indicator,
              ["-gap4"]: isRelinkFileIcon || onClickIcon,
              ["-isFullWidth"]: isFullWidth,
              [`-mobile`]: isMobile,
              [`-alignTextLeft`]: isAlignTextLeft,
            })}
            ref={chipsRef}
          >
            {leftElem && leftElem}
            {isRelinkFileIcon && (
              <div onClick={() => handleClickRelink()} className={"svg_icon"}>
                <TokenIcon iconName={"relink-file"} size={16} />
              </div>
            )}
            <div className={cn("label_text", { [`-mobile`]: isMobile })}>
              {value}
            </div>
            {onClickIcon ? (
              <div
                className={`${themeClass}_field_icon ${customIconClass}`}
                onClick={clickIcon}
              >
                {customIcon}
              </div>
            ) : null}
          </div>
        </CustomTooltip>
      ) : (
        <div
          onClick={handleClick}
          className={cn(`${themeClass}`, {
            [indicator]: indicator,
            [`${customClassName}`]: customClassName,
            ["-plus"]: indicator,
            ["-gap4"]: isRelinkFileIcon || onClickIcon,
            ["-isFullWidth"]: isFullWidth,
            [`-mobile`]: isMobile,
            [`-alignTextLeft`]: isAlignTextLeft,
          })}
          ref={chipsRef}
        >
          {leftElem && leftElem}
          {isRelinkFileIcon && (
            <div onClick={() => handleClickRelink()} className={"svg_icon"}>
              <TokenIcon iconName={"relink-file"} size={16} />
            </div>
          )}
          <div className={cn("label_text", { [`-mobile`]: isMobile })}>
            {value}
          </div>
          {onClickIcon ? (
            <div
              className={`${themeClass}_field_icon ${customIconClass}`}
              onClick={clickIcon}
            >
              {customIcon}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default React.memo(ChipsStandardTag);
