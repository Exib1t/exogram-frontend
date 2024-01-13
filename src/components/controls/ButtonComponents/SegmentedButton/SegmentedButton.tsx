import React from "react";
import { MiniLoader } from "../../MiniLoader";
import cn from "classnames";

import "./SegmentedButtonStyles.scss";
import { useGetThemeClass } from "../../../../hooks/global.hooks.tsx";

interface SegmentedButtonValueProps {
  id: string;
  title: string;
  count?: number;
  disabled?: boolean;
  loading?: boolean;
}

interface SegmentedButtonProps {
  buttons: SegmentedButtonValueProps[];
  selectedButtonId: string;
  changeHandler: (buttonId: string) => void;
  disabled?: boolean;
  loading?: boolean;
  isMobile?: boolean;
}

const SegmentedButton: React.FC<SegmentedButtonProps> = ({
  buttons,
  selectedButtonId,
  changeHandler,
  disabled,
  loading,
  isMobile,
}) => {
  const themeClass = useGetThemeClass("b-segmentedButton");

  const handleChangeTab = (e: Event, tabId: string, isDisabled: boolean) => {
    e.preventDefault();

    if (isDisabled) {
      return;
    }

    changeHandler && changeHandler(tabId);
  };

  return (
    <>
      <div className={`${themeClass}`}>
        {buttons?.length &&
          buttons.map((tab, index, { length }) => {
            const isLast = index + 1 === length;
            const isSelected = tab.id === selectedButtonId;
            const tabCount = tab.count ? tab.count : "";
            const isLoading = tab.loading || loading;
            const isDisabled = tab.disabled || disabled || isLoading;

            return (
              <>
                <div
                  key={`segmentButton-${tab.id}-${index}`}
                  className={cn(`${themeClass}_tab`, {
                    ["-selected"]: isSelected,
                    ["-loading"]: isLoading,
                    [`-mobile`]: isMobile,
                  })}
                  onClick={(e) => handleChangeTab(e, tab.id, isDisabled)}
                >
                  <span
                    className={cn(`${themeClass}_tab_title`, {
                      [`-mobile`]: isMobile,
                    })}
                  >
                    {tab.title}
                  </span>
                  {tabCount ? (
                    <span
                      className={cn(`${themeClass}_tab_count`, {
                        [`-mobile`]: isMobile,
                      })}
                    >
                      {tabCount}
                    </span>
                  ) : null}
                  {isLoading ? (
                    <MiniLoader
                      size={"sm"}
                      containerClasses={`${themeClass}_tab_loader`}
                      circleClasses={`${themeClass}_tab_loader_circle`}
                    />
                  ) : null}
                </div>
                {!isLast ? (
                  <div key={tab.id} className={`${themeClass}_divider`} />
                ) : null}
              </>
            );
          })}
      </div>
    </>
  );
};

export default SegmentedButton;
