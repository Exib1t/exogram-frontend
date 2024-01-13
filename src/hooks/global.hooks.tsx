import { useAppSelector } from "./store.hooks.ts";
import { useMemo } from "react";

export const useGetThemeClass = (styleClass: string) => {
  const theme =
    useAppSelector((state) => state.user.theme) ||
    localStorage.getItem("theme");

  return useMemo(() => {
    if (theme === "dark") {
      return styleClass + "-dark";
    } else {
      return styleClass + "-light";
    }
  }, [theme, styleClass]);
};
