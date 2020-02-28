import React, { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("dark");
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme");

    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localStorageTheme
      ? setMode("dark")
      : localStorageTheme
      ? setTheme(localStorageTheme)
      : setMode("light");

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
