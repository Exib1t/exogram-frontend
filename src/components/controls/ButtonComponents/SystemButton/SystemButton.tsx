import React, { useMemo } from "react";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";
import cn from "classnames";
import { MiniLoader } from "../../MiniLoader";
import Badges from "../../Badges/Badges";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

import "./SystemButtonStyles.scss";

interface SystemButtonProps {
  type:
    | "arrow-left"
    | "chevron-left"
    | "chevron-right"
    | "chevron-down"
    | "chevron-up"
    | "chevron-double-left"
    | "chevron-double-right"
    | "close"
    | "group"
    | "expand-mobile"
    | "collapse-mobile"
    | "search"
    | "filter"
    | "zoom"
    | "delete"
    | "settings"
    | "link"
    | "unlink"
    | "deactivate"
    | "activate"
    | "download"
    | "duplicate"
    | "attachment"
    | "reply"
    | "edit"
    | "information"
    | "dash-square"
    | "plus-square"
    | "check"
    | "edit-ribbon"
    | "plus"
    | "dash"
    | "user-check"
    | "user-add"
    | "stopwatch"
    | "logout"
    | "configuration"
    | "save"
    | "rotate-image-left"
    | "rotate-image-right"
    | "3rd-part-sync";
  size: "sm" | "md" | "lg";
  variant: "transparent" | "filled";
  clickHandler?: (e: Event) => void;
  tooltip?: string;
  customClass?: string;
  disabled?: boolean;
  loading?: boolean;
  count?: number;
  isMobile?: boolean;
}

const SystemButton: React.FC<SystemButtonProps> = ({
  type,
  size,
  variant,
  clickHandler,
  tooltip,
  customClass,
  loading,
  disabled,
  count,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-systemButton");

  const handleClick = (e) => {
    if (clickHandler) {
      e.stopPropagation();
      clickHandler(e);
    }
  };

  const buttonIcon = useMemo(() => {
    let sizeName: string = size;
    const sizesInterpreter = {
      sm: 12,
      md: 16,
      lg: 20,
      mobile: 24,
    };

    if (isMobile) {
      sizeName = "mobile";
    }

    if (type === "arrow-left") {
      return (
        <TokenIcon iconName={"arrow-left"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "chevron-left") {
      return (
        <TokenIcon
          iconName={"chevron-left"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "chevron-right") {
      return (
        <TokenIcon
          iconName={"chevron-right"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "chevron-down") {
      return (
        <TokenIcon
          iconName={"chevron-down"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "chevron-up") {
      return (
        <TokenIcon iconName={"chevron-up"} size={sizesInterpreter[size]} />
      );
    }

    if (type === "chevron-double-left") {
      return (
        <TokenIcon
          iconName={"chevron-double-left"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "chevron-double-right") {
      return (
        <TokenIcon
          iconName={"chevron-double-right"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "close") {
      return <TokenIcon iconName={"close"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "group") {
      return <TokenIcon iconName={"group"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "search" || type === "zoom") {
      return (
        <TokenIcon iconName={"search"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "filter") {
      return (
        <TokenIcon iconName={"filter"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "delete") {
      return <TokenIcon iconName={"trash"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "settings") {
      return (
        <TokenIcon iconName={"settings"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "link") {
      return <TokenIcon iconName={"link"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "unlink") {
      return (
        <TokenIcon iconName={"link-broken"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "deactivate") {
      return (
        <TokenIcon iconName={"deactivate"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "activate") {
      return (
        <TokenIcon iconName={"activate"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "download") {
      return (
        <TokenIcon iconName={"download"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "duplicate") {
      return (
        <TokenIcon iconName={"duplicate"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "attachment") {
      return (
        <TokenIcon iconName={"attachment"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "reply") {
      return <TokenIcon iconName={"reply"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "edit") {
      return (
        <TokenIcon iconName={"edit-text"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "information") {
      return (
        <TokenIcon iconName={"information"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "dash-square") {
      return (
        <TokenIcon iconName={"dash-square"} size={sizesInterpreter[size]} />
      );
    }

    if (type === "plus-square") {
      return (
        <TokenIcon iconName={"plus-square"} size={sizesInterpreter[size]} />
      );
    }

    if (type === "check") {
      return <TokenIcon iconName={"check"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "edit-ribbon") {
      return (
        <TokenIcon iconName={"edit-ribbon"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "plus") {
      return <TokenIcon iconName={"plus"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "dash") {
      return <TokenIcon iconName={"dash"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "user-check") {
      return (
        <TokenIcon iconName={"user-check"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "user-add") {
      return (
        <TokenIcon iconName={"user-add"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "stopwatch") {
      return (
        <TokenIcon iconName={"stopwatch"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "logout") {
      return (
        <TokenIcon iconName={"logout"} size={sizesInterpreter[sizeName]} />
      );
    }

    if (type === "configuration") {
      return (
        <TokenIcon
          iconName={"configuration"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "save") {
      return <TokenIcon iconName={"save"} size={sizesInterpreter[sizeName]} />;
    }

    if (type === "rotate-image-left") {
      return (
        <TokenIcon
          iconName={"rotate-image-left"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "rotate-image-right") {
      return (
        <TokenIcon
          iconName={"rotate-image-right"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "3rd-part-sync") {
      return (
        <TokenIcon
          iconName={"3rd-part-sync"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "expand-mobile") {
      return (
        <TokenIcon
          iconName={"expand-mobile"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    if (type === "collapse-mobile") {
      return (
        <TokenIcon
          iconName={"collapse-mobile"}
          size={sizesInterpreter[sizeName]}
        />
      );
    }

    return "";
  }, [type, isMobile]);

  const typeTooltip = useMemo(() => {
    if (type === "close") {
      return "Close";
    }

    if (type === "group") {
      return "Group";
    }

    if (type === "search") {
      return "Search";
    }

    if (type === "filter") {
      return "Filter";
    }

    if (type === "zoom") {
      return "Zoom";
    }

    if (type === "delete") {
      return "Delete";
    }

    if (type === "settings") {
      return "Settings";
    }

    if (type === "link") {
      return "Link";
    }

    if (type === "unlink") {
      return "Unlink";
    }

    if (type === "deactivate") {
      return "Deactivate";
    }

    if (type === "activate") {
      return "Activate";
    }

    if (type === "download") {
      return "Download";
    }

    if (type === "attachment") {
      return "Attachment";
    }

    if (type === "reply") {
      return "Reply";
    }

    if (type === "edit") {
      return "Edit";
    }

    if (type === "information") {
      return "Information";
    }

    if (type === "edit-ribbon") {
      return "Edit ribbon";
    }

    if (type === "user-check") {
      return "User Check";
    }

    if (type === "stopwatch") {
      return "Stopwatch";
    }

    if (type === "plus") {
      return "Add";
    }

    if (type === "check") {
      return "Done";
    }

    if (type === "save") {
      return "Save";
    }

    if (type === "rotate-image-left") {
      return "Rotate image left";
    }

    if (type === "rotate-image-right") {
      return "Rotate image right";
    }

    return "";
  }, [type]);

  const loaderSize = useMemo(() => {
    let sizeName: string = size;
    const sizesInterpreter = {
      sm: "xs",
      md: "sm",
      lg: "md",
      mobile: "md",
    };

    if (isMobile) {
      sizeName = "mobile";
    }

    return sizesInterpreter[sizeName] || "md";
  }, [size]);

  return (
    <>
      <CustomTooltip title={tooltip || typeTooltip || ""} placement={"bottom"}>
        <div
          className={cn(`${themeClass} ${themeClass}_${variant} -${size}`, {
            [`${customClass}`]: customClass,
            [`-disabled`]: disabled,
            [`-loading`]: loading,
            [`-mobile`]: isMobile,
          })}
          onClick={handleClick}
        >
          <div className={`${themeClass}_icon ${themeClass}_${variant}_icon`}>
            {buttonIcon}
          </div>
          {loading ? (
            <MiniLoader
              size={loaderSize}
              circleClasses={`${themeClass}_loaderCircle`}
            />
          ) : null}
          {count && typeof count === "number" ? (
            <div className={`${themeClass}_counter`}>
              <Badges value={count} size="lg" type={"notification"} />
            </div>
          ) : null}
        </div>
      </CustomTooltip>
    </>
  );
};

export default SystemButton;
