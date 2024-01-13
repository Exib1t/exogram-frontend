import React, { useMemo } from "react";
import "./OvalButtonStyles.scss";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";
import cn from "classnames";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface OvalButtonButtonProps {
  type:
    | "bic-me"
    | "bic-user"
    | "bic-unassigned"
    | "mention-me"
    | "mention-user"
    | "mention-unassigned"
    | "incorporation";
  clickHandler?: (e: Event) => void;
  title: string;
  disabled?: boolean;
  tooltip?: string;
  showTitle?: boolean;
}

const OvalButton: React.FC<OvalButtonButtonProps> = ({
  title,
  type,
  clickHandler,
  tooltip,
  disabled,
  showTitle = true,
}) => {
  const themeClass = useGetThemeClass("b-ovalButton");

  const handleClick = (e) => {
    clickHandler && clickHandler(e);
  };

  const buttonIcon = useMemo(() => {
    if (type === "bic-me" || type === "bic-user" || type === "bic-unassigned") {
      return <TokenIcon iconName={"bic"} size={16} />;
    }

    if (
      type === "mention-me" ||
      type === "mention-user" ||
      type === "mention-unassigned"
    ) {
      return <TokenIcon iconName={"at"} size={16} />;
    }

    if (type === "incorporation") {
      return <TokenIcon iconName={"check-broken"} size={16} />;
    }

    return "";
  }, [type]);

  return (
    <>
      <CustomTooltip title={tooltip || ""} placement={"bottom"}>
        <div
          className={cn(`${themeClass} ${themeClass}_${type}`, {
            ["-disabled"]: disabled,
            ["-noTitle"]: !showTitle,
          })}
          onClick={handleClick}
        >
          <div className={`${themeClass}_icon ${themeClass}_${type}_icon`}>
            {buttonIcon}
          </div>
          {showTitle ? (
            <div className={`${themeClass}_title ${themeClass}_${type}_title`}>
              {title}
            </div>
          ) : null}
        </div>
      </CustomTooltip>
    </>
  );
};

export default OvalButton;
