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
      document.body.style.backgroundColor = "black";
      document.documentElement.classList.add("dark");
      localStorage.setItem("newTheme", "dark");
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      localStorage.setItem("newTheme", "light");
    }
  };
  return (
    <themeContext.Provider value={{ theme, toggletheme }}>
      {children}
    </themeContext.Provider>
  );
}
