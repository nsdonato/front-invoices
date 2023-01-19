import useTheme from "../../hooks/useTheme";

function Darkmode() {
  const { theme, handleTheme } = useTheme();

  return (
    <button onClick={handleTheme}>
      {theme === "light" ? (
        <img src="/sun.svg" alt="Light theme icon" />
      ) : (
        <img src="/moon.svg" alt="Dark theme icon" />
      )}
    </button>
  );
}

export default Darkmode;
