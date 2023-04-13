import React, { createContext, useState } from "react";
// @ts-ignore
export const themeContext = createContext();
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("newTheme") || "light"
  );
  const toggletheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("newTheme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("newTheme", "light");
    }
  };
  return (
    <themeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </themeContext.Provider>
  );
}
