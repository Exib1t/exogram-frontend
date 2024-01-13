import {
  ChangeEvent,
  forwardRef,
  HTMLProps,
  MouseEvent,
  ReactNode,
  useMemo,
} from "react";
import cn from "classnames";
import TokenIcon from "../TokenIcon/TokenIcon";
import SystemButton from "../ButtonComponents/SystemButton/SystemButton";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

import "./TextInputStyles.scss";

interface TextInputNewProps extends HTMLProps<HTMLInputElement> {
  isSearch?: boolean;
  value: string | number;
  onChange: (value: string | number) => void;
  size?: "sm" | "md";
  type: "on-bgd" | "on-srf";
  label?: string;
  error?: string;
  disabled?: boolean;
  isFocus?: boolean;
  customIcon?: ReactNode;
  customIconClass?: string;
  onClickIcon?: (event: MouseEvent) => void;
  width?: number | string;
  inputType?: "text" | "number" | "password";
  isMobile?: boolean;
  isConfiguration?: boolean;
  isResetBtn?: boolean;
  onConfiguration?: () => void;
  customClassName?: string;
  customFieldInputClassName?: string;
  onReset?: () => void;
}

const TextInput = forwardRef<HTMLInputElement, TextInputNewProps>(
  function TextInput(
    {
      isSearch,
      onChange,
      value,
      size,
      type,
      label,
      error,
      isFocus,
      customIcon,
      customIconClass,
      onClickIcon,
      width,
      disabled,
      inputType,
      isMobile,
      isConfiguration,
      isResetBtn,
      onConfiguration,
      customClassName,
      customFieldInputClassName,
      onReset,
      ...inputProps
    },
    ref,
  ) {
    const themeClass = useGetThemeClass(
      isSearch ? "b-textSearch" : "b-textInput",
    );
    const styleWidth = width ? { width: width } : {};

    const searchIcon = useMemo(() => {
      let sizeName: "sm" | "md" | "mobile" | undefined = size;
      const sizesInterpreter = {
        sm: 12,
        md: 16,
        mobile: 24,
      };

      if (isMobile) {
        sizeName = "mobile";
      }

      return (
        <TokenIcon iconName={"search"} size={sizesInterpreter[sizeName]} />
      );
    }, [isMobile, size]);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      if (inputType === "number") {
        const filteredValue = Number(e.target.value.replace(/d/, ""));
        const newValue = filteredValue >= 0 ? filteredValue : 0;

        onChange(newValue);
        return;
      }

      onChange(e.target.value);
    };

    const handleResetValue = () => {
      onChange("");
      onReset && onReset();
    };

    return (
      <>
        {isSearch ? (
          <div
            className={cn(`${themeClass} ${themeClass}_${type} -${size}`, {
              [`-mobile`]: isMobile,
              [`${customClassName}`]: customClassName,
            })}
            style={styleWidth}
          >
            <div className={`${themeClass}_icon ${themeClass}_${type}_icon`}>
              {searchIcon}
            </div>
            <input
              value={value}
              onChange={handleChangeValue}
              ref={ref}
              className={cn(
                `${themeClass}_input`,
                `${themeClass}_${type}_input`,
              )}
              {...(inputProps || {})}
            />
            {isConfiguration && (
              <SystemButton
                type={"configuration"}
                size={"lg"}
                variant={"transparent"}
                clickHandler={onConfiguration}
                isMobile={isMobile}
              />
            )}
            {isResetBtn && (
              <SystemButton
                type={"close"}
                size={"lg"}
                variant={"transparent"}
                clickHandler={handleResetValue}
                isMobile={isMobile}
              />
            )}
          </div>
        ) : (
          <div
            className={cn(`${themeClass}`, {
              ["-isDisabled"]: disabled,
              [`${customClassName}`]: customClassName,
            })}
            style={styleWidth}
          >
            {!!label && (
              <label className={`${themeClass}_label`}>{label}</label>
            )}
            <div className={`${themeClass}_inputContainer`}>
              <div
                className={cn(`${themeClass}_field_${type}`, {
                  [`-mobile`]: isMobile,
                  ["-isFocus"]: isFocus,
                  ["-isError"]: error,
                  [`${customFieldInputClassName}`]: customFieldInputClassName,
                })}
                style={styleWidth}
              >
                <input
                  value={value}
                  onChange={handleChangeValue}
                  ref={ref}
                  className={cn(`${themeClass}_field_${type}_input`, {
                    [`-mobile`]: isMobile,
                  })}
                  type={inputType}
                  {...(inputProps || {})}
                />
                {onClickIcon ? (
                  <div
                    className={cn(
                      `${themeClass}_field_${type}_icon ${customIconClass}`,
                      { [`-mobile`]: isMobile },
                    )}
                    onClick={onClickIcon}
                  >
                    {customIcon}
                  </div>
                ) : null}
              </div>
              {!!error && (
                <span className={`${themeClass}_error`}>{error}</span>
              )}
            </div>
          </div>
        )}
      </>
    );
  },
);

export default TextInput;
