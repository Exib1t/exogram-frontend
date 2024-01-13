import React, { useMemo } from "react";
import "./IdentificatoryButtonStyles.scss";
import CustomTooltip from "../../Tooltip/Tooltip";
import TokenIcon from "../../TokenIcon/TokenIcon";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface IdentificatoryButtonProps {
  type:
    | "linked-predecessors"
    | "attachments"
    | "comments"
    | "linked-nfs"
    | "unlink"
    | "related-deliverables"
    | "outstanding-nfs";
  clickHandler?: (e: Event) => void;
  tooltip?: string;
  isMobile?: boolean;
}

const IdentificatoryButton: React.FC<IdentificatoryButtonProps> = ({
  type,
  clickHandler,
  tooltip,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-identificatoryButton");

  const handleClick = (e) => {
    clickHandler && clickHandler(e);
  };

  const iconSizeInterpreter = {
    default: 16,
    mobile: 20,
  };

  const buttonIcon = useMemo(() => {
    let iconSizeName = "default";

    if (isMobile) {
      iconSizeName = "mobile";
    }

    if (type === "linked-predecessors") {
      return (
        <TokenIcon iconName={"pull"} size={iconSizeInterpreter[iconSizeName]} />
      );
    }

    if (type === "attachments") {
      return (
        <TokenIcon
          iconName={"attachment"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "comments") {
      return (
        <TokenIcon
          iconName={"comment"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "linked-nfs") {
      return (
        <TokenIcon iconName={"link"} size={iconSizeInterpreter[iconSizeName]} />
      );
    }

    if (type === "unlink") {
      return (
        <TokenIcon
          iconName={"link-broken"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "related-deliverables") {
      return (
        <TokenIcon
          iconName={"deliverables"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    if (type === "outstanding-nfs") {
      return (
        <TokenIcon
          iconName={"alert"}
          size={iconSizeInterpreter[iconSizeName]}
        />
      );
    }

    return "";
  }, [type]);

  const typeTooltip = useMemo(() => {
    if (type === "linked-predecessors") {
      return "Linked predecessors";
    }

    if (type === "attachments") {
      return "Attachments";
    }

    if (type === "comments") {
      return "Comments";
    }

    if (type === "linked-nfs") {
      return "Linked NFs";
    }

    if (type === "unlink") {
      return "Unlink";
    }

    if (type === "related-deliverables") {
      return "Related deliverables";
    }

    if (type === "outstanding-nfs") {
      return "Outstanding NFs";
    }

    return "";
  }, [type]);

  return (
    <>
      <CustomTooltip title={tooltip || typeTooltip || ""} placement={"bottom"}>
        <div className={`${themeClass}`} onClick={handleClick}>
          <div className={`${themeClass}_icon`}>{buttonIcon}</div>
        </div>
      </CustomTooltip>
    </>
  );
};

export default IdentificatoryButton;
