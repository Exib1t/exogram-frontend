import { FC, ReactNode } from "react";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useGetThemeClass } from "../../../hooks/global.hooks.tsx";

import "./Accordion.styles.scss";

interface IProps {
  isExpanded: boolean;
  onExpand: (expanded: boolean) => void;
  title: string | ReactNode;
  renderContent: () => ReactNode;
}

const Accordion: FC<IProps> = ({
  renderContent,
  title,
  isExpanded,
  onExpand,
}) => {
  const themeClass = useGetThemeClass("b-accordion");

  return (
    <MuiAccordion
      expanded={isExpanded}
      onChange={(_, state) => onExpand(state)}
      classes={{
        root: themeClass,
      }}
    >
      <AccordionSummary
        classes={{ root: `${themeClass}_title`, expanded: `-expanded` }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails classes={{ root: `${themeClass}_content` }}>
        {renderContent()}
      </AccordionDetails>
    </MuiAccordion>
  );
};
export default Accordion;
