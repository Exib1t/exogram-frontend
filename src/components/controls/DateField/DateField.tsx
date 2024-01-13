import React, { ReactElement, RefObject } from "react";
import cn from "classnames";
import TokenIcon from "../TokenIcon/TokenIcon";
import CustomTooltip from "../Tooltip/Tooltip";

import "./DateFieldStyles.scss";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

interface Props {
  title?: string;
  isFilter?: boolean;
  selectedDate: string;
  isSentRequestToChange?: boolean;
  isOpenCalendar?: boolean;
  isDiffDueScheduledDate?: boolean;
  info?: boolean;
  disabled?: boolean;
  isBefore?: boolean;
  error?: boolean;
  valueIsDate: boolean;
  clickHandler?: (e: Event) => void;
  isDisableBorder?: boolean;
  isHideDate?: boolean;
  isHideCalendar?: boolean;
  isTextAlignRight?: boolean;
  isDateWithTime?: boolean;
  color?: "gray" | null;
  dateFieldRef?: RefObject<any>;
  tooltip?: string | ReactElement;
  isMobile?: boolean;
  isNoVisibleBorder?: boolean;
}

const DateField: React.FC<Props> = ({
  title,
  isFilter,
  selectedDate,
  isSentRequestToChange,
  isOpenCalendar,
  isDiffDueScheduledDate,
  info,
  disabled,
  isBefore,
  error,
  valueIsDate,
  clickHandler,
  isDisableBorder,
  isHideDate,
  isHideCalendar,
  isTextAlignRight,
  isDateWithTime,
  color,
  dateFieldRef,
  tooltip,
  isMobile,
  isNoVisibleBorder,
}) => {
  const themeClass = useGetThemeClass("b-date-field");

  const handleClick = (e) => {
    clickHandler && clickHandler(e);
  };

  return (
    <CustomTooltip title={tooltip || ""} placement={"bottom"}>
      <div
        className={cn(`${themeClass}_dateContainer`, {
          ["-existRequest"]: isSentRequestToChange,
          ["-active"]: isOpenCalendar || isDiffDueScheduledDate,
          ["-info"]: info,
          ["-disabled"]: disabled,
          ["-passed"]: isBefore,
          ["-error"]: error,
          ["-emptyDate"]: !valueIsDate,
          ["-disableBorder"]: isDisableBorder,
        })}
        ref={dateFieldRef}
      >
        {title && <span className={`${themeClass}_title`}>{title}</span>}
        <div
          className={cn(`${themeClass}_dateBox`, {
            ["isFilter"]: isFilter,
            ["-disableBorder"]: isDisableBorder,
            ["-noVisibleBorder"]: isNoVisibleBorder,
          })}
          onClick={handleClick}
        >
          {!isHideCalendar && (
            <div className={`${themeClass}_calendarIcon`}>
              <TokenIcon iconName={"calendar"} size={isMobile ? 20 : 16} />
            </div>
          )}
          {!isHideDate && (
            <span
              className={cn(`${themeClass}_date`, {
                ["-textAlignRight"]: isTextAlignRight,
                [`-${color}`]: color,
                [`-dateWithTime`]: isDateWithTime,
              })}
            >
              {valueIsDate ? selectedDate : "mm/dd/yyyy"}
            </span>
          )}
        </div>
      </div>
    </CustomTooltip>
  );
};

export default DateField;
