export function getInitialTheme() {
  const theme = localStorage.getItem("theme");

  if (!theme) {
    const isDarkMode: boolean = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;

    return isDarkMode ? "dark" : "light";
  }

  return theme;
}
