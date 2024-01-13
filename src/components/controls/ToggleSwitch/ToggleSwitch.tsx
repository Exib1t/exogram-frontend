import React, { ChangeEvent } from "react";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";
import { Switch } from "@mui/material";

interface IProps {
  isSelectedToggle: boolean;
  handleSelect: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => void;
  disabled: boolean;
  type: "toggle" | "switcher";
}

const ToggleSwitch: React.FC<IProps> = ({
  isSelectedToggle,
  handleSelect,
  disabled,
  type,
}) => {
  const themeClass = useGetThemeClass("b-toggleSwitch");

  return (
    <div className={`${themeClass}__${type}`}>
      <Switch
        size={"small"}
        color={"warning"}
        checked={isSelectedToggle}
        onChange={handleSelect}
        classes={{
          root: "root",
          switchBase: "switchBase",
          checked: "colorChecked",
          bar: "colorBar",
          icon: "icon",
          disabled: "disabled",
        }}
        disabled={disabled}
        disableRipple={true}
      />
    </div>
  );
};

export default ToggleSwitch;
