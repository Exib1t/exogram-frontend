import React from "react";
import cn from "classnames";

import "./CustomRadioButtonStyles.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface CustomRadioButtonProps {
  value: string | number;
  checked: boolean;
  disabled?: boolean;
  clickHandler: (value: string | number) => void;
  customClass?: string;
  isMobile?: boolean;
}

const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  value,
  checked,
  disabled,
  clickHandler,
  customClass,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-customRadioButton");

  const handleChange = (e) => {
    clickHandler && clickHandler(value);
  };

  return (
    <>
      <div
        onClick={(e) => handleChange(e)}
        className={cn(`${themeClass}`, {
          ["-checked"]: checked,
          ["-disabled"]: disabled,
          ["-mobile"]: isMobile,
          [customClass]: customClass,
        })}
      >
        {checked && (
          <div
            className={cn(
              `${themeClass}_checkedIcon ${customClass}_checkedIcon`,
              { ["-mobile"]: isMobile },
            )}
          />
        )}
      </div>
    </>
  );
};

export default CustomRadioButton;
