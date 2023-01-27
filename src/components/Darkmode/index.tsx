import useTheme from "../../hooks/useTheme";

function DarkMode() {
  const { theme, handleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button onClick={handleTheme}>
      <img
        src={isLight ? "/sun.svg" : "/moon.svg"}
        alt={isLight ? "Light theme icon" : "Dark theme icon"}
      />
    </button>
  );
}

export default DarkMode;
