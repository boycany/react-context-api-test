import React from "react";
import { ThemeContext } from "./theme-context";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const themeCtx = {
    theme,
    toggleTheme,
  };

  return <ThemeContext value={themeCtx}>{children}</ThemeContext>;
}
