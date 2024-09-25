"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";
export const ThemeContext = createContext<any>({ theme: "light", undefined });
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const storeTheme = localStorage.getItem("theme");
    if (storeTheme) {
      setTheme(storeTheme);
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
// Correct type for the ThemeProvider props
interface ThemeProviderProps {
  children: ReactNode;
}
