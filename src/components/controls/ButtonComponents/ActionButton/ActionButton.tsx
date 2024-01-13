import React, { useMemo } from "react";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";
import cn from "classnames";

import "./ActionButtonStyles.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface ActionButtonProps {
  type:
    | "hotlisted"
    | "not-hotlisted"
    | "in-my-court"
    | "not-in-my-court"
    | "privat"
    | "not-privat"
    | "notification-on"
    | "notification-off"
    | "notification-all"
    | "in-watchlist"
    | "not-in-watchlist"
    | "sync"
    | "not-sync"
    | "sync-2"
    | "not-sync-2";
  clickHandler?: (e: Event) => void;
  tooltip?: string;
  disabled?: boolean;
  isMobile?: boolean;
}

const iconSizeInterpreter = {
  default: 16,
  mobile: 24,
};

const ActionButton: React.FC<ActionButtonProps> = ({
  type,
  clickHandler,
  tooltip,
  disabled,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-actionButton");

  const handleClick = (e) => {
    clickHandler && clickHandler(e);
  };

  const buttonIcon = useMemo(() => {
    let iconSizeName = "default";

    if (isMobile) {
      iconSizeName = "mobile";
    }

    if (type === "hotlisted" || type === "not-hotlisted") {
      return (
        <TokenIcon
          iconName={"flame"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "in-my-court" || type === "not-in-my-court") {
      return (
        <TokenIcon iconName={"bic"} size={iconSizeInterpreter[iconSizeName]} />
      );
    }

    if (type === "privat" || type === "not-privat") {
      return (
        <TokenIcon
          iconName={"privat"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "in-watchlist" || type === "not-in-watchlist") {
      return (
        <TokenIcon
          iconName={"watchlist"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "sync" || type === "not-sync") {
      return (
        <TokenIcon
          iconName={"3rd-part-sync-2"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "sync-2" || type === "not-sync-2") {
      return (
        <TokenIcon
          iconName={"3rd-part-sync"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "notification-on") {
      return (
        <TokenIcon
          iconName={"notification-on"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "notification-off") {
      return (
        <TokenIcon
          iconName={"notification-off"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "notification-all") {
      return (
        <TokenIcon
          iconName={"notification-all"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "notification-on") {
      return <TokenIcon iconName={"notification-on"} size={16} />;
    }

    if (type === "notification-off") {
      return <TokenIcon iconName={"notification-off"} size={16} />;
    }

    if (type === "notification-all") {
      return <TokenIcon iconName={"notification-all"} size={16} />;
    }

    if (type === "valid") {
      return (
        <TokenIcon
          iconName={"valid"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "not_valid") {
      return (
        <TokenIcon
          iconName={"not-valid"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "not_verified") {
      return (
        <TokenIcon
          iconName={"not-verified-triangle"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    return "";
  }, [type, isMobile]);

  const typeTooltip = useMemo(() => {
    if (type === "hotlisted") {
      return "Hotlisted";
    }

    if (type === "not-hotlisted") {
      return "Not hotlisted";
    }

    if (type === "in-my-court") {
      return "In my court";
    }

    if (type === "not-in-my-court") {
      return "Not in my court";
    }

    if (type === "privat") {
      return "Private";
    }

    if (type === "not-privat") {
      return "Not private";
    }

    if (type === "in-watchlist") {
      return "In watchlist";
    }

    if (type === "not-in-watchlist") {
      return "Not in watchlist";
    }

    if (type === "sync" || type === "sync-2") {
      return "Synchronized with 3rd party app";
    }

    if (type === "not-sync" || type === "not-sync-2") {
      return "Not synchronized with 3rd party app";
    }

    return "";
  }, [type]);

  return (
    <>
      <CustomTooltip title={tooltip || typeTooltip || ""} placement={"bottom"}>
        <div
          className={cn(`${themeClass}`, {
            [`-disabled`]: disabled,
          })}
          onClick={handleClick}
        >
          <div className={`${themeClass}_icon ${themeClass}_${type}`}>
            {buttonIcon}
          </div>
        </div>
      </CustomTooltip>
    </>
  );
};

export default ActionButton;
