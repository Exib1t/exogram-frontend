import React, { MouseEvent, useMemo } from "react";
import "./FilterButtonStyles.scss";
import TokenIcon from "../../TokenIcon/TokenIcon";
import CustomButton from "../CustomButton/CustomButton";
import cn from "classnames";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface CustomButtonProps {
  isActive?: boolean;
  isPressed: boolean;
  type: "filter" | "sort" | "group";
  clickHandler?: (e: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  disabled?: boolean;
  loading?: boolean;
  isMobile?: boolean;
  isHiddenTitle?: boolean;
}

const FilterButton: React.FC<CustomButtonProps> = ({
  isPressed,
  isActive,
  type,
  clickHandler,
  disabled,
  loading,
  isMobile,
  isHiddenTitle,
}) => {
  const themeClass = useGetThemeClass("b-filterButton");

  const leftIcon = useMemo(() => {
    const iconClass = cn(`${themeClass}_icon`, { [`-active`]: isActive });
    const size = isMobile ? 20 : 16;

    if (type === "filter") {
      return (
        <TokenIcon customClass={iconClass} iconName={"filter"} size={size} />
      );
    }

    if (type === "sort") {
      return (
        <TokenIcon customClass={iconClass} iconName={"sort"} size={size} />
      );
    }

    if (type === "group") {
      return (
        <TokenIcon customClass={iconClass} iconName={"group"} size={size} />
      );
    }
  }, [themeClass, type, isActive]);

  const typeTitle = useMemo(() => {
    if (type === "filter") {
      return "Filter";
    }

    if (type === "sort") {
      return "Sort";
    }

    if (type === "group") {
      return "Group";
    }
  }, [type]);

  return (
    <>
      <CustomButton
        clickHandler={clickHandler}
        type={isActive ? "filter-activated" : "filter-plain"}
        size={"md"}
        title={isHiddenTitle ? "" : typeTitle}
        icon={leftIcon}
        loading={loading}
        disabled={disabled}
        isActive={isPressed}
        isMobile={isMobile}
        isHiddenTitle={isHiddenTitle}
      />
    </>
  );
};

export default FilterButton;
