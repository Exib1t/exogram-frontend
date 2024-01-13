import React, { FC } from "react";
import cn from "classnames";
import "./CheckBoxStyle.scss";
import TokenIcon from "../TokenIcon/TokenIcon";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

const CheckBox: FC<{
  checked?: boolean;
  onClick?: (data: any) => void;
  disabled?: boolean;
  btnClassName?: string;
  emptyBtnClassName?: string;
  wrapperClassName?: string;
  iconClassName?: string;
  isTripleState?: boolean;
  important?: number;
  isMobile?: boolean;
}> = ({
  isTripleState,
  important,
  checked,
  disabled,
  btnClassName,
  emptyBtnClassName,
  wrapperClassName,
  iconClassName,
  isMobile,
  onClick,
}) => {
  const themeClass = useGetThemeClass("b-check-box");
  return (
    <>
      {isTripleState ? (
        <div
          className={cn(
            `${themeClass}`,
            wrapperClassName,
            `${disabled ? "-disabled" : ""}`,
          )}
          onClick={!disabled ? onClick : () => {}}
        >
          {important === 2 ? (
            <div
              className={cn(
                `${themeClass}_btn`,
                { [`-mobile`]: isMobile },
                btnClassName,
              )}
            >
              <TokenIcon
                customClass={cn(`${themeClass}_btn_icon`, iconClassName)}
                iconName={"check"}
                size={isMobile ? 20 : 16}
              />
            </div>
          ) : null}
          {important === 1 ? (
            <div
              className={cn(
                `${themeClass}_btn`,
                { [`-mobile`]: isMobile },
                btnClassName,
              )}
            >
              <TokenIcon
                customClass={cn(`${themeClass}_btn_icon`, iconClassName)}
                iconName={"dash"}
                size={isMobile ? 20 : 16}
              />
            </div>
          ) : null}
          {important === 0 ? (
            <div
              className={cn(
                `${themeClass}_btn-empty`,
                { [`-mobile`]: isMobile },
                emptyBtnClassName,
              )}
            ></div>
          ) : null}
        </div>
      ) : (
        <div
          className={cn(
            `${themeClass}`,
            wrapperClassName,
            `${disabled ? "-disabled" : ""}`,
          )}
          onClick={!disabled ? onClick : () => {}}
        >
          {checked ? (
            <div
              className={cn(
                `${themeClass}_btn`,
                { [`-mobile`]: isMobile },
                btnClassName,
              )}
            >
              <TokenIcon
                customClass={cn(`${themeClass}_btn_icon`, iconClassName)}
                iconName={"check"}
                size={isMobile ? 20 : 16}
              />
            </div>
          ) : (
            <div
              className={cn(
                `${themeClass}_btn-empty`,
                { [`-mobile`]: isMobile },
                emptyBtnClassName,
              )}
            ></div>
          )}
        </div>
      )}
    </>
  );
};
export default React.memo(CheckBox);
