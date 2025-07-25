import React from "react";
import { ThemeContext } from "../store/theme-context";

export default function Header() {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </header>
  );
}
