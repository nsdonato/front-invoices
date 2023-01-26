import { useEffect, useState } from "react";
import { getInitialTheme } from "../../utils/theme-utils";

function useTheme() {
  const [theme, setTheme] = useState<string>(() => getInitialTheme());

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
    handleTheme,
  };
}

export default useTheme;
