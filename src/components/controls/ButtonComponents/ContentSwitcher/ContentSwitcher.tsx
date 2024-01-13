import React, { useMemo } from "react";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";

import "./ContentSwitcherStyles.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface ContentSwitcherProps {
  type:
    | "column-relaxed"
    | "column-tight"
    | "as-list"
    | "as-grid"
    | "central-peek"
    | "right-peek";
  size: "sm" | "md";
  clickHandler?: (e: Event) => void;
  tooltip?: string;
}

const ContentSwitcher: React.FC<ContentSwitcherProps> = ({
  type,
  size,
  clickHandler,
  tooltip,
}) => {
  const themeClass = useGetThemeClass("b-contentSwitcher");

  const handleClick = (e) => {
    clickHandler && clickHandler(e);
  };

  const buttonIcon = useMemo(() => {
    if (type === "column-relaxed" || type === "as-list") {
      return <TokenIcon iconName={"column-relaxed"} size={20} />;
    }

    if (type === "column-tight") {
      return <TokenIcon iconName={"column-tight"} size={20} />;
    }

    if (type === "as-grid") {
      return <TokenIcon iconName={"grid"} size={20} />;
    }

    if (type === "central-peek") {
      return <TokenIcon iconName={"peek-center"} size={20} />;
    }

    if (type === "right-peek") {
      return <TokenIcon iconName={"peek-right"} size={20} />;
    }

    return "";
  }, [type]);

  const typeTooltip = useMemo(() => {
    if (type === "column-relaxed") {
      return "Default cards";
    }

    if (type === "column-tight") {
      return "Thumbnail cards";
    }

    if (type === "as-list") {
      return "Show as list";
    }

    if (type === "as-grid") {
      return "Show as grid";
    }

    if (type === "central-peek") {
      return "Show in central peek";
    }

    if (type === "right-peek") {
      return "Show in right peek";
    }

    return "";
  }, [type]);

  return (
    <div key={`${type}`}>
      <CustomTooltip
        title={tooltip || typeTooltip || ""}
        placement={"bottom"}
        enterDelay={500}
        leaveDelay={0}
      >
        <div className={`${themeClass} -${size}`} onClick={handleClick}>
          <div className={`${themeClass}_icon`}>{buttonIcon}</div>
        </div>
      </CustomTooltip>
    </div>
  );
};

export default ContentSwitcher;
